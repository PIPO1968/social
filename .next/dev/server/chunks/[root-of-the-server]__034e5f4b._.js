module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/app/api/user/profile/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
// Definición de trofeos automáticos (copiada del cliente)
const TROFEOS_AUTO = [
    {
        src: "/trofeo25.jpg",
        texto: "Trofeo 1",
        tipo: "auto",
        condicion: (user)=>(user.likes || 0) >= 10
    },
    {
        src: "/trofeo7.jpg",
        texto: "Trofeo 2",
        tipo: "auto",
        condicion: (user)=>(user.amigos || 0) >= 1
    },
    {
        src: "/trofeo12.jpg",
        texto: "Trofeo 3",
        tipo: "auto",
        condicion: (user)=>(user.comentariosRecibidos || 0) >= 1
    },
    {
        src: "/trofeo5.jpg",
        texto: "Trofeo 4",
        tipo: "auto",
        condicion: (user)=>(user.historias || 0) >= 1
    },
    {
        src: "/trofeo13.png",
        texto: "Trofeo 5",
        tipo: "auto",
        condicion: (user)=>(user.respuestasAcertadas || 0) >= 20
    },
    {
        src: "/trofeo17.jpg",
        texto: "Trofeo 6",
        tipo: "auto",
        condicion: (user)=>(user.competicionesSuperadas || 0) >= 1
    },
    {
        src: "/trofeo27.jpg",
        texto: "Trofeo 7",
        tipo: "auto",
        condicion: (user)=>{
            return (user.likes || 0) > 0 || (user.amigos || 0) > 0 || (user.historias || 0) > 0 || (user.comentariosRecibidos || 0) > 0 || (user.concursosGanados || 0) > 0 || (user.competicionesSuperadas || 0) > 0;
        }
    },
    {
        src: "/trofeo10.jpg",
        texto: "Trofeo 8",
        tipo: "auto",
        condicion: (user)=>(user.concursosGanados || 0) >= 1
    },
    {
        src: "/trofeo23.jpg",
        texto: "Trofeo 9",
        tipo: "auto",
        condicion: (user)=>(user.likes || 0) >= 100
    },
    {
        src: "/trofeo15.jpg",
        texto: "Trofeo 10",
        tipo: "auto",
        condicion: (user)=>(user.amigos || 0) >= 10
    },
    {
        src: "/trofeo26.jpg",
        texto: "Trofeo 11",
        tipo: "auto",
        condicion: (user)=>(user.historias || 0) >= 3
    },
    {
        src: "/trofeo1.jpg",
        texto: "Trofeo 12",
        tipo: "auto",
        condicion: (user)=>(user.comentariosRecibidos || 0) >= 3
    },
    {
        src: "/trofeo22.jpg",
        texto: "Trofeo 13",
        tipo: "auto",
        condicion: (user)=>user.enTablasCompeticion === true
    },
    {
        src: "/trofeo14.jpg",
        texto: "Trofeo 14",
        tipo: "auto",
        condicion: (user)=>(user.likes || 0) >= 500
    },
    {
        src: "/trofeo20.jpg",
        texto: "Trofeo 15",
        tipo: "auto",
        condicion: (user)=>(user.amigos || 0) >= 30
    },
    {
        src: "/trofeo11.jpg",
        texto: "Trofeo 16",
        tipo: "auto",
        condicion: (user)=>(user.comentariosRecibidos || 0) >= 10
    },
    {
        src: "/trofeo24.jpg",
        texto: "Trofeo 17",
        tipo: "auto",
        condicion: (user)=>(user.historias || 0) >= 15
    },
    {
        src: "/trofeo18.jpg",
        texto: "Trofeo 18",
        tipo: "auto",
        condicion: (user)=>(user.concursosGanados || 0) >= 3
    },
    {
        src: "/trofeo19.jpg",
        texto: "Trofeo 19",
        tipo: "auto",
        condicion: (user)=>(user.respuestasAcertadas || 0) >= 1000
    },
    {
        src: "/trofeo15.jpg",
        texto: "Trofeo 20",
        tipo: "auto",
        condicion: (user)=>{
            if (!user.fechaInscripcion) return false;
            const fecha = new Date(user.fechaInscripcion);
            const ahora = new Date();
            const diff = ahora.getTime() - fecha.getTime();
            return diff >= 365 * 24 * 60 * 60 * 1000;
        }
    },
    {
        src: "/trofeo9.jpg",
        texto: "Trofeo 21",
        tipo: "auto",
        condicion: (user)=>(user.historias || 0) >= 30
    },
    {
        src: "/trofeo8.jpg",
        texto: "Trofeo 22",
        tipo: "auto",
        condicion: (user)=>(user.likes || 0) >= 1000
    },
    {
        src: "/trofeo21.jpg",
        texto: "Trofeo 23",
        tipo: "auto",
        condicion: (user)=>(user.amigos || 0) >= 50
    },
    {
        src: "/trofeo16.jpg",
        texto: "Trofeo 24",
        tipo: "auto",
        condicion: (user)=>{
            return (user.likes || 0) >= 500 && (user.amigos || 0) >= 10 && (user.historias || 0) >= 5 && (user.respuestasAcertadas || 0) >= 100;
        }
    }
];
// Función para obtener trofeos automáticos
const getAutoTrofeos = (user)=>{
    const userSync = {
        ...user,
        amigos: Array.isArray(user.amigos) ? user.amigos.length : user.amigos || 0
    };
    let autoTrofeos = TROFEOS_AUTO.map((t, idx)=>{
        const conditionResult = typeof t.condicion === 'function' && t.condicion(userSync);
        return conditionResult ? idx : null;
    }).filter((idx)=>idx !== null);
    return autoTrofeos;
};
// Función para sincronizar trofeos
const syncAutoTrofeos = async (userData)=>{
    try {
        const autoTrofeos = getAutoTrofeos(userData);
        // Obtener trofeos actuales del usuario
        const existingTrofeos = await prisma.userTrofeo.findMany({
            where: {
                userId: userData.id
            }
        });
        const desbloqueados = existingTrofeos.filter((t)=>t.desbloqueado).map((t)=>t.trofeoId);
        // Filtrar trofeos automáticos que no están ya desbloqueados
        const nuevosAutoTrofeos = autoTrofeos.filter((idx)=>!desbloqueados.includes(idx));
        if (nuevosAutoTrofeos.length > 0) {
            // Agregar los nuevos trofeos automáticos (uno por uno para manejar duplicados)
            for (const idx of nuevosAutoTrofeos){
                try {
                    await prisma.userTrofeo.create({
                        data: {
                            userId: userData.id,
                            trofeoId: idx,
                            desbloqueado: true
                        }
                    });
                } catch (error) {
                // Ignorar si ya existe (duplicado)
                }
            }
        }
    } catch (error) {
        console.error('Server: Error syncing auto trofeos:', error);
    }
};
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        if (!nick) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Nick parameter is required'
            }, {
                status: 400
            });
        }
        // Buscar el usuario por nick
        const user = await prisma.user.findUnique({
            where: {
                nick: nick
            },
            include: {
                historias: {
                    select: {
                        id: true,
                        titulo: true,
                        likes: true
                    }
                },
                amigosComoUser: {
                    select: {
                        id: true,
                        amigo: {
                            select: {
                                nick: true,
                                nombre: true
                            }
                        }
                    }
                },
                amigosComoAmigo: {
                    select: {
                        id: true,
                        user: {
                            select: {
                                nick: true,
                                nombre: true
                            }
                        }
                    }
                },
                stats: true
            }
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User not found'
            }, {
                status: 404
            });
        }
        // Calcular estadísticas adicionales
        const totalLikesHistorias = user.historias.reduce((sum, historia)=>sum + (historia.likes || 0), 0);
        const totalAmigos = (user.amigosComoUser.length + user.amigosComoAmigo.length) / 2;
        // Obtener likes de championship por separado
        let totalLikesChampionship = 0;
        try {
            const championshipResults = await prisma.championshipResult.findMany({
                where: {
                    userId: user.id
                },
                select: {
                    likes: true
                }
            });
            totalLikesChampionship = championshipResults.reduce((sum, result)=>sum + (result.likes || 0), 0);
        } catch (error) {
            console.error('Error obteniendo likes de championship:', error);
        // Si falla, usar 0
        }
        const likesConcursos = (user.concursosGanados || 0) * 10;
        const likesManuales = user.likes || 0;
        const totalLikes = totalLikesHistorias + totalLikesChampionship + likesConcursos + likesManuales;
        // Calcular años en StoryUp
        const anosEnStoryUp = user.fechaInscripcion ? Math.floor((new Date().getTime() - new Date(user.fechaInscripcion).getTime()) / (1000 * 60 * 60 * 24 * 365)) : 0;
        // Verificar si el usuario aparece en las tablas de competición (en cualquier temporada)
        let enTablasCompeticion = false;
        try {
            // Verificar en competición individual (en cualquier temporada)
            const individualResult = await prisma.championshipResult.findFirst({
                where: {
                    userId: user.id,
                    type: 'individual'
                }
            });
            // Verificar en competición docentes (en cualquier temporada)
            const docenteResult = await prisma.championshipResult.findFirst({
                where: {
                    userId: user.id,
                    type: 'docentes'
                }
            });
            enTablasCompeticion = !!(individualResult || docenteResult);
        } catch (error) {
            console.error('Error verificando tablas de competición:', error);
            enTablasCompeticion = false;
        }
        // Formatear respuesta
        const userProfile = {
            id: user.id,
            nick: user.nick,
            nombre: user.nombre,
            email: user.email,
            centro: user.centro,
            curso: user.curso,
            tipo: user.tipo,
            avatar: user.avatar,
            premium: user.premium,
            fechaInscripcion: user.fechaInscripcion,
            likes: totalLikes,
            respuestasAcertadas: user.respuestasAcertadas || 0,
            preguntasFalladas: user.stats?.preguntasFalladas || 0,
            competicionesSuperadas: user.competicionesSuperadas || 0,
            concursosGanados: user.concursosGanados || 0,
            amigos: totalAmigos,
            historias: user.historias.length,
            comentariosRecibidos: user.comentariosRecibidos || 0,
            anosEnStoryUp: anosEnStoryUp,
            enTablasCompeticion: enTablasCompeticion,
            trofeos: [],
            regalosEnviados: 0,
            regalosRecibidos: 0,
            compras: 0,
            torneosGanados: 0 // No implementado aún
        };
        // Sincronizar trofeos automáticos
        await syncAutoTrofeos(userProfile);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            user: userProfile
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__034e5f4b._.js.map