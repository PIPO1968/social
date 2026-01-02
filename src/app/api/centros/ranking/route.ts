import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Guardar ranking mensual de centros
export async function POST(request: NextRequest) {
    try {
        const { year, month, rankings } = await request.json();

        if (!year || !month || !rankings || !Array.isArray(rankings)) {
            return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
        }

        const season = `m${year}${month.toString().padStart(2, '0')}`;

        // Eliminar rankings anteriores para este mes
        await prisma.championshipResult.deleteMany({
            where: {
                season,
                type: 'centros'
            }
        });

        // Insertar nuevos rankings
        const results = rankings.map((ranking: any, index: number) => ({
            centro: ranking.nombre,
            season,
            type: 'centros',
            ganados: ranking.puntajeTotal || 0,
            preguntasAcertadas: ranking.respuestasCorrectas || 0,
            likes: ranking.interaccionesSociales || 0,
            // Otros campos pueden ser 0 o calculados
        }));

        await prisma.championshipResult.createMany({
            data: results
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error guardando ranking:', error);
        return NextResponse.json({ error: 'Error interno' }, { status: 500 });
    }
}

// GET: Cargar ranking mensual de centros o meses disponibles
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get('action');

        if (action === 'months') {
            // Obtener meses disponibles
            const results = await prisma.championshipResult.findMany({
                where: {
                    type: 'centros'
                },
                select: {
                    season: true
                },
                distinct: ['season']
            });

            const months = results.map(r => r.season).sort();
            return NextResponse.json(months);
        }

        const year = parseInt(searchParams.get('year') || '');
        const month = parseInt(searchParams.get('month') || '');

        if (!year || !month) {
            return NextResponse.json({ error: 'Año y mes requeridos' }, { status: 400 });
        }

        const season = `m${year}${month.toString().padStart(2, '0')}`;

        const results = await prisma.championshipResult.findMany({
            where: {
                season,
                type: 'centros'
            },
            orderBy: {
                ganados: 'desc'
            }
        });

        // Convertir a formato CentroStats
        const rankings = results.map((result, index) => ({
            nombre: result.centro,
            estudiantes: 0, // TODO: calcular
            estudiantesActivos: 0,
            respuestasCorrectas: result.preguntasAcertadas,
            concursosGanados: 0,
            historiasCreadas: 0,
            interaccionesSociales: result.likes,
            diasConsecutivos: 0,
            puntajeTotal: result.ganados,
            ranking: index + 1,
            medalla: index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'
        }));

        return NextResponse.json(rankings);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Error interno' }, { status: 500 });
    }
}