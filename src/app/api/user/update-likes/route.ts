import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/utils/jwt';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('auth-token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
        }

        const { likesDelta } = await request.json();

        if (typeof likesDelta !== 'number') {
            return NextResponse.json({ error: 'likesDelta requerido y debe ser número' }, { status: 400 });
        }

        // Actualizar likes del usuario autenticado
        const updatedUser = await prisma.user.update({
            where: { id: decoded.userId },
            data: { likes: { increment: likesDelta } }
        });

        console.log(`Updated user ${updatedUser.nick} likes by ${likesDelta}, new likes:`, updatedUser.likes);

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error('Error actualizando likes:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}