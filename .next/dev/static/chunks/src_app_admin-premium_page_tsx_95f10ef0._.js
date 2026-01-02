(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin-premium/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPremium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AdminPremium() {
    _s();
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [solicitudesPendientes, setSolicitudesPendientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mostrarSolicitudes, setMostrarSolicitudes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usuarioLogueado, setUsuarioLogueado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accesoDenegado, setAccesoDenegado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nick, setNick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Lista de administradores autorizados - Solo PIPO68
    const ADMINS_AUTORIZADOS = [
        'PIPO68'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPremium.useEffect": ()=>{
            // Verificar si hay usuario logueado via API
            const checkUser = {
                "AdminPremium.useEffect.checkUser": async ()=>{
                    try {
                        const response = await fetch('/api/auth/me');
                        if (response.ok) {
                            const data = await response.json();
                            if (data.user) {
                                setUsuarioLogueado(data.user);
                            } else {
                                setAccesoDenegado(true);
                            }
                        } else {
                            setAccesoDenegado(true);
                        }
                    } catch (error) {
                        console.error('Error checking user:', error);
                        setAccesoDenegado(true);
                    }
                }
            }["AdminPremium.useEffect.checkUser"];
            checkUser();
        }
    }["AdminPremium.useEffect"], []);
    // Si no tiene acceso, mostrar página de error
    if (accesoDenegado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🚫"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-red-600 mb-4",
                        children: "Acceso Denegado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Acceso restringido a esta página de administración."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.href = '/',
                        className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all",
                        children: "Volver al Inicio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-gray-100 rounded-lg text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Acceso autorizado para usuarios registrados:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 90
                                }, this),
                                "• Administrador: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "PIPO68"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 69
                                }, this),
                                '• Docentes: Usuarios con tipo "docente"',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 68
                                }, this),
                                "URL: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "bg-gray-200 px-1 rounded",
                                    children: "tudominio.com/admin-premium"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-premium/page.tsx",
                lineNumber: 64,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin-premium/page.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this);
    }
    // Cargar solicitudes pendientes
    const cargarSolicitudes = async ()=>{
        try {
            const response = await fetch('/api/premium/solicitudes');
            const solicitudes = await response.json();
            setSolicitudesPendientes(solicitudes.filter((s)=>s.estado === 'pendiente'));
            setMostrarSolicitudes(true);
        } catch (error) {
            console.error('Error al cargar solicitudes:', error);
            setMensaje("❌ Error al cargar solicitudes de pago");
        }
    };
    // Aprobar solicitud de pago (activar Premium)
    const aprobarSolicitud = async (solicitud)=>{
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'approve',
                    solicitudId: solicitud.id
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`🎉 ${data.message}`);
                cargarSolicitudes(); // Recargar lista
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error('Error al aprobar solicitud:', error);
            setMensaje("❌ Error al aprobar la solicitud");
        }
    };
    // Rechazar solicitud
    const rechazarSolicitud = async (solicitud, motivo = 'Pago no verificado')=>{
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'reject',
                    solicitudId: solicitud.id,
                    motivo
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`❌ ${data.message}`);
                cargarSolicitudes(); // Recargar lista
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error('Error al rechazar solicitud:', error);
            setMensaje("❌ Error al rechazar la solicitud");
        }
    };
    // Hacer Premium
    const hacerPremium = async ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'activate',
                    nick
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`🎉 ${data.message}`);
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error('Error al activar premium:', error);
            setMensaje("❌ Error al activar Premium");
        }
    };
    // Anular Premium
    const anularPremium = async ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'deactivate',
                    nick
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`🗑️ ${data.message}`);
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error('Error al anular premium:', error);
            setMensaje("❌ Error al anular Premium");
        }
    };
    const activarPremium = async ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'activate',
                    nick
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`🎉 ¡Premium activado exitosamente para ${nick}!`);
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            console.error('Error al activar Premium:', error);
            setMensaje("❌ Error al activar Premium. Inténtalo de nuevo.");
        }
    };
    const verificarPremium = async ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'check',
                    nick
                })
            });
            const data = await response.json();
            if (response.ok) {
                if (data.premium) {
                    setMensaje(`✅ ${nick} tiene Premium ACTIVO`);
                } else {
                    setMensaje(`❌ ${nick} NO tiene Premium activado`);
                }
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            setMensaje("❌ Error al verificar Premium");
        }
    };
    const desactivarPremium = async ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const response = await fetch('/api/premium', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'deactivate',
                    nick
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMensaje(`🗑️ ${data.message}`);
            } else {
                setMensaje(`❌ ${data.error}`);
            }
        } catch (error) {
            setMensaje("❌ Error al desactivar Premium");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-center mb-8 text-gray-800",
                        children: "🔧 Admin Premium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 282,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-bold text-gray-700 mb-2",
                                children: "Nick del usuario:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 287,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nick,
                                onChange: (e)=>setNick(e.target.value),
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                placeholder: "Ej: PIPO68"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 290,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 286,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: activarPremium,
                                className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "✅ Activar Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 300,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: anularPremium,
                                className: "bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "🗑️ Anular Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 307,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: verificarPremium,
                                className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "🔍 Verificar Estado"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 314,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cargarSolicitudes,
                                className: "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "📋 Ver Solicitudes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 299,
                        columnNumber: 21
                    }, this),
                    mensaje && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-lg ${mensaje.includes('✅') || mensaje.includes('🎉') ? 'bg-green-100 border border-green-300 text-green-800' : mensaje.includes('❌') ? 'bg-red-100 border border-red-300 text-red-800' : 'bg-blue-100 border border-blue-300 text-blue-800'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap font-semibold",
                            children: mensaje
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 336,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 330,
                        columnNumber: 25
                    }, this),
                    mostrarSolicitudes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-gray-800 mb-4 flex items-center gap-2",
                                children: [
                                    "📋 Solicitudes de Pago Pendientes",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full",
                                        children: solicitudesPendientes.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 343,
                                columnNumber: 29
                            }, this),
                            solicitudesPendientes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-center py-8",
                                children: "✅ No hay solicitudes pendientes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 351,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: solicitudesPendientes.map((solicitud)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-200 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-lg text-gray-800",
                                                                children: solicitud.nick
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: solicitud.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: [
                                                                    "📅 ",
                                                                    new Date(solicitud.fechaSolicitud).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 359,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full",
                                                            children: "Pendiente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>aprobarSolicitud(solicitud),
                                                        className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all",
                                                        children: "✅ Aprobar y Activar Premium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>rechazarSolicitud(solicitud),
                                                        className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all",
                                                        children: "❌ Rechazar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, solicitud.id, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 355,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 342,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-yellow-800 mb-2",
                                children: "📋 Instrucciones:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 395,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-yellow-700 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Activar Premium:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 33
                                            }, this),
                                            " Activa Premium por 1 año para cualquier usuario"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Anular Premium:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 33
                                            }, this),
                                            " Remueve el estado Premium de un usuario"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Verificar Estado:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 33
                                            }, this),
                                            " Comprueba si un usuario ya tiene Premium activo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Ver Solicitudes:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 33
                                            }, this),
                                            " Muestra pagos pendientes de verificación"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Aprobar/Rechazar:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 401,
                                                columnNumber: 33
                                            }, this),
                                            " Gestiona las solicitudes tras verificar Bizum"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 396,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-orange-100 border border-orange-300 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-orange-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "🔒 Proceso de seguridad:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 33
                                        }, this),
                                        " Ahora los usuarios NO pueden hacerse Premium automáticamente. Deben solicitar y esperar verificación manual del pago."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 404,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-blue-100 border border-blue-300 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "🌐 Acceso en servidor:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 72
                                        }, this),
                                        "• URL: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-blue-200 px-1 rounded",
                                            children: "tudominio.com/admin-premium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 117
                                        }, this),
                                        "• Protegido por nick de administrador",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 70
                                        }, this),
                                        "• Solo usuario autorizado: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "PIPO68"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 411,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 394,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/estadisticas',
                            className: "bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                            children: "📊 Ver Estadísticas"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 422,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 421,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-premium/page.tsx",
                lineNumber: 281,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin-premium/page.tsx",
            lineNumber: 280,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin-premium/page.tsx",
        lineNumber: 279,
        columnNumber: 9
    }, this);
}
_s(AdminPremium, "Gjmgb918veZfVEM0tSJGog9jL0M=");
_c = AdminPremium;
var _c;
__turbopack_context__.k.register(_c, "AdminPremium");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin-premium_page_tsx_95f10ef0._.js.map