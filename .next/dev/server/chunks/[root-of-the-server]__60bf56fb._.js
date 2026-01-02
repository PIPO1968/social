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
"[project]/src/app/api/friends/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const action = searchParams.get('action');
        if (!nick) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Nick requerido'
            }, {
                status: 400
            });
        }
        if (action === 'friends') {
            // Get user
            const user = await prisma.user.findUnique({
                where: {
                    nick
                }
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Get friends from both directions
            const friendsAsUser = await prisma.amigo.findMany({
                where: {
                    userId: user.id
                },
                include: {
                    amigo: true
                }
            });
            const friendsAsAmigo = await prisma.amigo.findMany({
                where: {
                    amigoId: user.id
                },
                include: {
                    user: true
                }
            });
            const allFriends = [
                ...friendsAsUser.map((f)=>f.amigo),
                ...friendsAsAmigo.map((f)=>f.user)
            ];
            // Remove duplicates
            const uniqueFriends = allFriends.filter((friend, index, self)=>index === self.findIndex((f)=>f.id === friend.id));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                friends: uniqueFriends
            });
        }
        if (action === 'requests') {
            // Get user
            const user = await prisma.user.findUnique({
                where: {
                    nick
                }
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Get pending requests
            const requests = await prisma.solicitudAmistad.findMany({
                where: {
                    solicitadoId: user.id,
                    estado: 'pendiente'
                },
                include: {
                    solicitante: true
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                requests: requests.map((r)=>({
                        id: r.id,
                        solicitante: r.solicitante
                    }))
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Acción no válida'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Error en friends GET:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const { action, userNick, friendNick, requestId } = await request.json();
        let user = null;
        let friend = null;
        if (action === 'add' || action === 'remove') {
            if (!userNick || !friendNick) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Nicks requeridos'
                }, {
                    status: 400
                });
            }
            user = await prisma.user.findUnique({
                where: {
                    nick: userNick
                }
            });
            friend = await prisma.user.findUnique({
                where: {
                    nick: friendNick
                }
            });
            if (!user || !friend) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
        }
        if (action === 'accept' || action === 'reject') {
            if (!userNick || !requestId) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Datos requeridos'
                }, {
                    status: 400
                });
            }
            user = await prisma.user.findUnique({
                where: {
                    nick: userNick
                }
            });
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
        }
        if (action === 'add') {
            // Ensure user and friend are not null
            if (!user || !friend) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Check if already friends
            const existingFriend = await prisma.amigo.findFirst({
                where: {
                    OR: [
                        {
                            userId: user.id,
                            amigoId: friend.id
                        },
                        {
                            userId: friend.id,
                            amigoId: user.id
                        }
                    ]
                }
            });
            if (existingFriend) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Ya son amigos'
                }, {
                    status: 400
                });
            }
            // Check if request already exists (only pending)
            const existingRequest = await prisma.solicitudAmistad.findFirst({
                where: {
                    OR: [
                        {
                            solicitanteId: user.id,
                            solicitadoId: friend.id,
                            estado: 'pendiente'
                        },
                        {
                            solicitanteId: friend.id,
                            solicitadoId: user.id,
                            estado: 'pendiente'
                        }
                    ]
                }
            });
            if (existingRequest) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Solicitud ya existe'
                }, {
                    status: 400
                });
            }
            // Create request
            await prisma.solicitudAmistad.create({
                data: {
                    solicitanteId: user.id,
                    solicitadoId: friend.id
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Solicitud enviada'
            });
        }
        if (action === 'accept') {
            // Ensure user is not null
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Accept request
            const solicitud = await prisma.solicitudAmistad.findUnique({
                where: {
                    id: requestId,
                    solicitadoId: user.id,
                    estado: 'pendiente'
                }
            });
            if (!solicitud) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Solicitud no encontrada'
                }, {
                    status: 404
                });
            }
            // Update request
            await prisma.solicitudAmistad.update({
                where: {
                    id: requestId
                },
                data: {
                    estado: 'aceptada'
                }
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Amistad aceptada'
            });
        }
        if (action === 'reject') {
            // Ensure user is not null
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Reject request
            await prisma.solicitudAmistad.update({
                where: {
                    id: requestId,
                    solicitadoId: user.id
                },
                data: {
                    estado: 'rechazada'
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Solicitud rechazada'
            });
        }
        if (action === 'remove') {
            // Ensure user and friend are not null
            if (!user || !friend) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Usuario no encontrado'
                }, {
                    status: 404
                });
            }
            // Remove friend
            await prisma.amigo.deleteMany({
                where: {
                    OR: [
                        {
                            userId: user.id,
                            amigoId: friend.id
                        },
                        {
                            userId: friend.id,
                            amigoId: user.id
                        }
                    ]
                }
            });
            // Also remove the accepted request
            await prisma.solicitudAmistad.deleteMany({
                where: {
                    OR: [
                        {
                            solicitanteId: user.id,
                            solicitadoId: friend.id,
                            estado: 'aceptada'
                        },
                        {
                            solicitanteId: friend.id,
                            solicitadoId: user.id,
                            estado: 'aceptada'
                        }
                    ]
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Amigo removido'
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Acción no válida'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Error en friends POST:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60bf56fb._.js.map