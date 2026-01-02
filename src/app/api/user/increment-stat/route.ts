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

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!user) {
            return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
        }

        const { stat, amount } = await request.json();

        if (!stat || typeof amount !== 'number') {
            return NextResponse.json({ error: 'Faltan parámetros stat o amount' }, { status: 400 });
        }

        // Validar que stat sea un campo válido
        const validStats = ['respuestasAcertadas', 'concursosGanados', 'historiasCreadas', 'likes', 'preguntasFalladas'];
        if (!validStats.includes(stat)) {
            return NextResponse.json({ error: 'Stat no válido' }, { status: 400 });
        }

        // Actualizar el usuario
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                [stat]: {
                    increment: amount
                }
            }
        });

        console.log(`Updated user ${user.nick} stat ${stat} by ${amount}, new value:`, (updatedUser as any)[stat]);

        return NextResponse.json({ success: true, user: updatedUser });

        return NextResponse.json({ success: true, user: updatedUser });
    } catch (error) {
        console.error('Error al actualizar estadísticas:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}