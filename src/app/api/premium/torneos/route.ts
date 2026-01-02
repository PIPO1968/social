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

        const torneoData = await prisma.torneoPremium.findUnique({
            where: { userId: decoded.userId }
        });
        // Forzar que el campo torneos sea string
        if (torneoData && torneoData.torneos && typeof torneoData.torneos !== 'string') {
            torneoData.torneos = JSON.stringify(torneoData.torneos);
        }
        return NextResponse.json(torneoData || {});
    } catch (error) {
        console.error('Error obteniendo torneos premium:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

export async function POST(request: NextRequest) {
    try {
        const { torneos, lastReset, torneoActivo } = await request.json();
        const token = request.cookies.get('auth-token')?.value;
        if (!token) {
            return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        if (!decoded) {
            return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
        }

        let torneosSanitizados = torneos;
        if (typeof torneosSanitizados === 'string') {
            try {
                torneosSanitizados = JSON.parse(torneosSanitizados);
            } catch {
                torneosSanitizados = [];
            }
        }
        // Para cada torneo, filtrar resultados duplicados por nick normalizado
        const normalizar = (str: string) => (str || '').toLowerCase().replace(/\s+/g, '');
        torneosSanitizados = torneosSanitizados.map((torneo: any) => {
            if (torneo.resultados && Array.isArray(torneo.resultados)) {
                const mejoresPorUsuario: { [nick: string]: any } = {};
                torneo.resultados.forEach((r: any) => {
                    const nickNorm = normalizar(r.nick);
                    if (!mejoresPorUsuario[nickNorm] || r.puntuacion > mejoresPorUsuario[nickNorm].puntuacion) {
                        mejoresPorUsuario[nickNorm] = r;
                    }
                });
                torneo.resultados = Object.values(mejoresPorUsuario);
            }
            return torneo;
        });
        let torneosString = JSON.stringify(torneosSanitizados);

        const torneoData = await prisma.torneoPremium?.upsert({
            where: { userId: decoded.userId },
            update: {
                torneos: torneosString ?? undefined,
                lastReset: lastReset ? new Date(lastReset) : undefined,
                torneoActivo: torneoActivo ?? undefined
            },
            create: {
                userId: decoded.userId,
                torneos: torneosString ?? '[]',
                lastReset: lastReset ? new Date(lastReset) : undefined,
                torneoActivo: torneoActivo ?? null
            }
        });

        return NextResponse.json(torneoData);
    } catch (error) {
        console.error('Error guardando torneos premium:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}