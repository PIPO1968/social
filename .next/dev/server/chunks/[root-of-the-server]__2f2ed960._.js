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
"[project]/src/app/api/liga-premium/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
async function GET() {
    try {
        // Obtener usuarios premium activos
        const premiumUsers = await prisma.premiumData.findMany({
            where: {
                activo: true,
                fechaExpiracion: {
                    gt: new Date()
                }
            },
            include: {
                user: {
                    include: {
                        historias: true,
                        amigosComoUser: true,
                        amigosComoAmigo: true,
                        userTrofeos: true,
                        competicionPremium: true
                    }
                }
            }
        });
        const usuariosPremium = premiumUsers.map((pu)=>{
            const user = pu.user;
            const puntos = calcularPuntosUsuario(user);
            return {
                nick: user.nick,
                avatar: user.avatar,
                puntos: puntos,
                historiasCreadas: user.historias.length,
                preguntasAcertadas: user.respuestasAcertadas || 0,
                amigos: user.amigosComoUser.length + user.amigosComoAmigo.length,
                medallas: user.userTrofeos.length
            };
        });
        // Ordenar por puntos descendente
        usuariosPremium.sort((a, b)=>b.puntos - a.puntos);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(usuariosPremium);
    } catch (error) {
        console.error('Error fetching liga premium:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error fetching liga premium'
        }, {
            status: 500
        });
    }
}
function calcularPuntosUsuario(user) {
    let puntos = 0;
    // Puntos por historias creadas (10 puntos cada una)
    puntos += user.historias.length * 10;
    // Puntos por preguntas acertadas (5 puntos cada una)
    puntos += (user.respuestasAcertadas || 0) * 5;
    // Puntos por amigos (20 puntos cada amigo)
    const amigosCount = user.amigosComoUser.length + user.amigosComoAmigo.length;
    puntos += amigosCount * 20;
    // Puntos por medallas (50 puntos cada medalla)
    puntos += user.userTrofeos.length * 50;
    // Puntos por participación en competiciones premium
    if (user.competicionPremium) {
        puntos += user.competicionPremium.puntuacionTotal || 0;
    }
    return puntos;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f2ed960._.js.map