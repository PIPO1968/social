import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/utils/jwt';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
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
            where: { id: decoded.userId },
            include: {
                historias: {
                    select: {
                        id: true,
                        likes: true
                    }
                },
                amigosComoUser: {
                    select: {
                        id: true
                    }
                },
                amigosComoAmigo: {
                    select: {
                        id: true
                    }
                }
            }
        });

        if (!user) {
            return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
        }

        // Calcular estadísticas adicionales
        const totalLikesHistorias = user.historias.reduce((sum: number, historia: any) => sum + (historia.likes || 0), 0);
        const totalAmigos = (user.amigosComoUser.length + user.amigosComoAmigo.length) / 2;

        // Obtener likes de championship por separado
        let totalLikesChampionship = 0;
        try {
            const championshipResults = await prisma.championshipResult.findMany({
                where: { userId: decoded.userId },
                select: { likes: true }
            });
            totalLikesChampionship = championshipResults.reduce((sum, result) => sum + (result.likes || 0), 0);
        } catch (error) {
            console.error('Error obteniendo likes de championship:', error);
            // Si falla, usar 0
        }

        const likesConcursos = (user.concursosGanados || 0) * 10;
        const likesManuales = user.likes || 0;
        const totalLikes = totalLikesHistorias + totalLikesChampionship + likesConcursos + likesManuales;

        // Devolver usuario sin contraseña, con estadísticas calculadas
        const { password, historias, amigosComoUser, amigosComoAmigo, ...userWithoutPassword } = user;
        const userWithStats = {
            ...userWithoutPassword,
            likes: totalLikes,
            amigos: totalAmigos,
            historias: user.historias.length
        };

        console.log(`User ${user.nick} respuestasAcertadas:`, user.respuestasAcertadas);

        return NextResponse.json({ user: userWithStats });
    } catch (error) {
        console.error('Error obteniendo usuario actual:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}