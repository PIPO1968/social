import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const action = searchParams.get('action');

        if (!nick) {
            return NextResponse.json({ error: 'Nick requerido' }, { status: 400 });
        }

        if (action === 'friends') {
            // Get user
            const user = await prisma.user.findUnique({ where: { nick } });
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Get friends from both directions
            const friendsAsUser = await prisma.amigo.findMany({
                where: { userId: user.id },
                include: { amigo: true }
            });
            const friendsAsAmigo = await prisma.amigo.findMany({
                where: { amigoId: user.id },
                include: { user: true }
            });

            const allFriends = [
                ...friendsAsUser.map(f => f.amigo),
                ...friendsAsAmigo.map(f => f.user)
            ];

            // Remove duplicates
            const uniqueFriends = allFriends.filter((friend, index, self) =>
                index === self.findIndex(f => f.id === friend.id)
            );

            return NextResponse.json({ friends: uniqueFriends });
        }

        if (action === 'requests') {
            // Get user
            const user = await prisma.user.findUnique({ where: { nick } });
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Get pending requests
            const requests = await prisma.solicitudAmistad.findMany({
                where: { solicitadoId: user.id, estado: 'pendiente' },
                include: { solicitante: true }
            });
            return NextResponse.json({ requests: requests.map(r => ({ id: r.id, solicitante: r.solicitante })) });
        }

        return NextResponse.json({ error: 'Acción no válida' }, { status: 400 });
    } catch (error) {
        console.error('Error en friends GET:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { action, userNick, friendNick, requestId } = await request.json();

        let user = null;
        let friend = null;

        if (action === 'add' || action === 'remove') {
            if (!userNick || !friendNick) {
                return NextResponse.json({ error: 'Nicks requeridos' }, { status: 400 });
            }

            user = await prisma.user.findUnique({ where: { nick: userNick } });
            friend = await prisma.user.findUnique({ where: { nick: friendNick } });

            if (!user || !friend) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }
        }

        if (action === 'accept' || action === 'reject') {
            if (!userNick || !requestId) {
                return NextResponse.json({ error: 'Datos requeridos' }, { status: 400 });
            }

            user = await prisma.user.findUnique({ where: { nick: userNick } });
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }
        }

        if (action === 'add') {
            // Ensure user and friend are not null
            if (!user || !friend) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Check if already friends
            const existingFriend = await prisma.amigo.findFirst({
                where: {
                    OR: [
                        { userId: user.id, amigoId: friend.id },
                        { userId: friend.id, amigoId: user.id }
                    ]
                }
            });
            if (existingFriend) {
                return NextResponse.json({ error: 'Ya son amigos' }, { status: 400 });
            }

            // Check if request already exists (only pending)
            const existingRequest = await prisma.solicitudAmistad.findFirst({
                where: {
                    OR: [
                        { solicitanteId: user.id, solicitadoId: friend.id, estado: 'pendiente' },
                        { solicitanteId: friend.id, solicitadoId: user.id, estado: 'pendiente' }
                    ]
                }
            });
            if (existingRequest) {
                return NextResponse.json({ error: 'Solicitud ya existe' }, { status: 400 });
            }

            // Create request
            await prisma.solicitudAmistad.create({
                data: {
                    solicitanteId: user.id,
                    solicitadoId: friend.id
                }
            });
            return NextResponse.json({ message: 'Solicitud enviada' });
        }

        if (action === 'accept') {
            // Ensure user is not null
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Accept request
            const solicitud = await prisma.solicitudAmistad.findUnique({
                where: { id: requestId, solicitadoId: user.id, estado: 'pendiente' }
            });
            if (!solicitud) {
                return NextResponse.json({ error: 'Solicitud no encontrada' }, { status: 404 });
            }

            // Update request
            await prisma.solicitudAmistad.update({
                where: { id: requestId },
                data: { estado: 'aceptada' }
            });

            // Add friendship
            await prisma.amigo.create({
                data: {
                    userId: user.id,
                    amigoId: solicitud.solicitanteId
                }
            });
            await prisma.amigo.create({
                data: {
                    userId: solicitud.solicitanteId,
                    amigoId: user.id
                }
            });
            return NextResponse.json({ message: 'Amistad aceptada' });
        }

        if (action === 'reject') {
            // Ensure user is not null
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Reject request
            await prisma.solicitudAmistad.update({
                where: { id: requestId, solicitadoId: user.id },
                data: { estado: 'rechazada' }
            });
            return NextResponse.json({ message: 'Solicitud rechazada' });
        }

        if (action === 'remove') {
            // Ensure user and friend are not null
            if (!user || !friend) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }

            // Remove friend
            await prisma.amigo.deleteMany({
                where: {
                    OR: [
                        { userId: user.id, amigoId: friend.id },
                        { userId: friend.id, amigoId: user.id }
                    ]
                }
            });

            // Also remove the accepted request
            await prisma.solicitudAmistad.deleteMany({
                where: {
                    OR: [
                        { solicitanteId: user.id, solicitadoId: friend.id, estado: 'aceptada' },
                        { solicitanteId: friend.id, solicitadoId: user.id, estado: 'aceptada' }
                    ]
                }
            });

            return NextResponse.json({ message: 'Amigo removido' });
        }

        return NextResponse.json({ error: 'Acción no válida' }, { status: 400 });
    } catch (error) {
        console.error('Error en friends POST:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}