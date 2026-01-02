module.exports = [
"[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserLink",
    ()=>UserLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const UserLink = ({ nick, className })=>{
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkPremium = async ()=>{
            if (nick) {
                try {
                    const response = await fetch(`/api/user/premium-status?nick=${encodeURIComponent(nick)}`);
                    const data = await response.json();
                    setIsPremium(data.isPremium || false);
                } catch (error) {
                    setIsPremium(false);
                }
            }
        };
        // Verificar inicialmente
        checkPremium();
    }, [
        nick
    ]);
    const normalized = (nick || "").trim().toLowerCase();
    if (!nick || normalized === "anonimo" || normalized === "anónimo") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className || "text-gray-500",
            children: nick || "(sin nick)"
        }, void 0, false, {
            fileName: "[project]/src/components/UserLink.tsx",
            lineNumber: 30,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `/perfil/${encodeURIComponent(nick)}`,
        className: className || "text-blue-600 underline hover:text-blue-800",
        title: `Ver perfil de ${nick}${isPremium ? ' (Usuario Premium)' : ''}`,
        children: [
            nick,
            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 inline-flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-sky-100 to-blue-100 text-amber-900 text-xs px-2 py-1 rounded-full font-bold shadow-md border border-sky-300",
                    title: "Usuario Premium",
                    children: "👑"
                }, void 0, false, {
                    fileName: "[project]/src/components/UserLink.tsx",
                    lineNumber: 42,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/UserLink.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserLink.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/estadisticas/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Estadisticas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Estadisticas() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Estado para detectar si el usuario es Premium
    const [isPremium, setIsPremium] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [currentUser, setCurrentUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [users, setUsers] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [historias, setHistorias] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [concursos, setConcursos] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(true);
    // Función para calcular puntos totales de un usuario
    function calcularPuntosTotales(user) {
        if (!user || !user.nick) return 0;
        let puntosTotales = 0;
        // Puntos por asignaturas (desde la DB ahora)
        const asignaturas = [
            'matematicas',
            'lenguaje',
            'geografia',
            'historia',
            'literatura',
            'ingles',
            'naturaleza'
        ];
        asignaturas.forEach((asignatura)=>{
            // Los puntos ahora vienen de la DB en el campo stats_individual
            const stats = user.stats_individual ? JSON.parse(user.stats_individual) : {};
            const puntosAsignatura = stats[asignatura] || 0;
            puntosTotales += puntosAsignatura;
        });
        // Puntos por likes (cada like cuenta como punto)
        puntosTotales += user.likes || 0;
        // Puntos por competiciones superadas (cada competición superada vale 10 puntos)
        puntosTotales += (user.competicionesSuperadas || 0) * 10;
        // Puntos por preguntas acertadas (cada pregunta acertada vale 2 puntos)
        puntosTotales += (user.respuestasAcertadas || 0) * 2;
        return puntosTotales;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const loadData = async ()=>{
            try {
                setLoading(true);
                // Obtener usuario actual
                const userResponse = await fetch('/api/auth/me');
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    if (userData.user) {
                        setCurrentUser(userData.user);
                        setIsPremium(userData.user.premium || false);
                    }
                }
                // Obtener todos los usuarios
                const usersResponse = await fetch('/api/users');
                if (usersResponse.ok) {
                    const usersData = await usersResponse.json();
                    setUsers(usersData);
                }
                // Obtener historias (si existe la API)
                try {
                    const historiasResponse = await fetch('/api/historias');
                    if (historiasResponse.ok) {
                        const historiasData = await historiasResponse.json();
                        setHistorias(historiasData);
                    }
                } catch (error) {
                    console.warn('API de historias no disponible:', error);
                }
                // Obtener concursos (si existe la API)
                try {
                    const concursosResponse = await fetch('/api/concursos');
                    if (concursosResponse.ok) {
                        const concursosData = await concursosResponse.json();
                        setConcursos(concursosData);
                    }
                } catch (error) {
                    console.warn('API de concursos no disponible:', error);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            } finally{
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/app/estadisticas/page.tsx",
                    lineNumber: 101,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Cargando estadísticas..."
                }, void 0, false, {
                    fileName: "[project]/src/app/estadisticas/page.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/estadisticas/page.tsx",
            lineNumber: 100,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: isPremium ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-600",
                                children: t('estadisticasPremium')
                            }, void 0, false, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 mt-1",
                                children: [
                                    "¡Hola ",
                                    currentUser?.nick,
                                    "! Disfrutas de estadísticas avanzadas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Estadísticas",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-blue-600 mt-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = '/premium-nuevo',
                                    className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs hover:shadow-lg transform hover:scale-105 transition-all",
                                    children: [
                                        "✨ ",
                                        t('haztePremiumParaVer'),
                                        " ✨"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/estadisticas/page.tsx",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/estadisticas/page.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold mb-4 text-center",
                                children: t('estadisticasGlobales')
                            }, void 0, false, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('totalCompeticionesSuperadas'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    total += u.competicionesSuperadas || 0;
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "👥"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('totalUsuarios'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            users.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "📖"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('totalHistoriasCreadas'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            historias.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('totalConcursosCreados'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            concursos.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de comentarios realizados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                historias.forEach((h)=>{
                                                    // Asumiendo que los comentarios están en la relación de historias
                                                    total += h.comentarios ? h.comentarios.length : 0;
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏫"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de centros escolares registrados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const centros = new Set(users.map((u)=>u.centro).filter(Boolean));
                                                return centros.size;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "👨‍🏫"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de docentes registrados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 72
                                            }, this),
                                            " ",
                                            (()=>{
                                                const docentesArr = users.filter((u)=>(u.tipo || "").toLowerCase() === "docente");
                                                return docentesArr.length || 0;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🤝"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de amigos creados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    // Contar amigos desde las relaciones
                                                    const amigosComoUser = u.amigosComoUser?.length || 0;
                                                    total += amigosComoUser;
                                                });
                                                return total > 0 ? total : 0;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏅"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de historias ganadoras:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                return concursos.filter((c)=>c.historiaGanadora).length || 0;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "👨‍👩‍👧‍👦"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de participantes en concursos:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 78
                                            }, this),
                                            " ",
                                            (()=>{
                                                let count = 0;
                                                users.forEach((u)=>{
                                                    if (u.historias && Array.isArray(u.historias) && u.historias.length > 0) {
                                                        count++;
                                                    }
                                                });
                                                return count;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "❤️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de likes:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    total += u.likes || 0;
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "❓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de preguntas respondidas:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 68
                                            }, this),
                                            " ",
                                            (()=>{
                                                let totalRespondidas = 0;
                                                users.forEach((u)=>{
                                                    // Sumar acertadas
                                                    totalRespondidas += u.respuestasAcertadas || 0;
                                                    // Sumar falladas (de campo directo y de stats_individual)
                                                    if (typeof u.preguntasFalladas === 'number') {
                                                        totalRespondidas += u.preguntasFalladas;
                                                    }
                                                    if (u.stats_individual) {
                                                        const stats = JSON.parse(u.stats_individual);
                                                        if (typeof stats.preguntasFalladas === 'number') {
                                                            totalRespondidas += stats.preguntasFalladas;
                                                        }
                                                    }
                                                });
                                                return totalRespondidas;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "❓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('totalPreguntasAcertadas'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 68
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    total += u.respuestasAcertadas || 0;
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "❓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de preguntas falladas:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 68
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    if (typeof u.preguntasFalladas === 'number') {
                                                        total += u.preguntasFalladas;
                                                    }
                                                    if (u.stats_individual) {
                                                        const stats = JSON.parse(u.stats_individual);
                                                        if (typeof stats.preguntasFalladas === 'number') {
                                                            total += stats.preguntasFalladas;
                                                        }
                                                    }
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Total de concursos ganados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                let total = 0;
                                                users.forEach((u)=>{
                                                    total += u.concursosGanados || 0;
                                                });
                                                return total;
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/estadisticas/page.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold mb-4 text-center",
                                children: "Rankings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 244,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "❤️"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('usuariosMasLikes'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const ranking = users.map((u)=>{
                                                    return {
                                                        nick: u.nick,
                                                        nombre: u.nombre,
                                                        totalLikes: u.likes || 0
                                                    };
                                                }).filter((u)=>u.nick && u.totalLikes > 0) // Solo usuarios con al menos 1 like
                                                .sort((a, b)=>b.totalLikes - a.totalLikes).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con likes."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.totalLikes,
                                                            " likes)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    t('usuariosMasComentarios'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const comentariosPorAutor = {};
                                                historias.forEach((h)=>{
                                                    if (h.autor) {
                                                        comentariosPorAutor[h.autor] = (comentariosPorAutor[h.autor] || 0) + (h.comentarios ? h.comentarios.length : 0);
                                                    }
                                                });
                                                const ranking = Object.entries(comentariosPorAutor).map(([nick, totalComentarios])=>({
                                                        nick,
                                                        totalComentarios
                                                    })).filter((u)=>u.nick && u.totalComentarios > 0).sort((a, b)=>b.totalComentarios - a.totalComentarios).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con comentarios aún."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.totalComentarios,
                                                            " comentarios)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🤝"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Usuarios con más amigos:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const ranking = users.map((u)=>{
                                                    const numAmigos = u.amigosComoUser?.length || 0;
                                                    return {
                                                        nick: u.nick,
                                                        numAmigos
                                                    };
                                                }).filter((u)=>u.nick && u.numAmigos > 0).sort((a, b)=>b.numAmigos - a.numAmigos).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con amigos aún."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.numAmigos,
                                                            " amigos)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "📖"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Usuarios con más historias:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const historiasPorAutor = {};
                                                historias.forEach((h)=>{
                                                    if (h.autor) {
                                                        historiasPorAutor[h.autor] = (historiasPorAutor[h.autor] || 0) + 1;
                                                    }
                                                });
                                                const ranking = Object.entries(historiasPorAutor).map(([nick, totalHistorias])=>({
                                                        nick,
                                                        totalHistorias
                                                    })).filter((u)=>u.nick && u.totalHistorias > 0).sort((a, b)=>b.totalHistorias - a.totalHistorias).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con historias aún."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.totalHistorias,
                                                            " historias)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Usuarios con más concursos ganados:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const ranking = users.map((u)=>({
                                                        nick: u.nick,
                                                        nombre: u.nombre,
                                                        totalConcursos: u.concursosGanados || 0
                                                    })).filter((u)=>u.totalConcursos > 0).sort((a, b)=>b.totalConcursos - a.totalConcursos).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con concursos ganados aún."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.totalConcursos,
                                                            " concursos)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2 text-xl",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Usuarios con más competiciones superadas:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 69
                                            }, this),
                                            " ",
                                            (()=>{
                                                const ranking = users.map((u)=>({
                                                        nick: u.nick,
                                                        nombre: u.nombre,
                                                        totalCompeticiones: u.competicionesSuperadas || 0
                                                    })).filter((u)=>u.totalCompeticiones > 0).sort((a, b)=>b.totalCompeticiones - a.totalCompeticiones).slice(0, 5);
                                                if (ranking.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "No hay usuarios con competiciones superadas aún."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 62
                                                }, this);
                                                return ranking.map((u, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: [
                                                            i + 1,
                                                            ". ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                                    nick: u.nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 82
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 79
                                                            }, this),
                                                            " (",
                                                            u.totalCompeticiones,
                                                            " competiciones)"
                                                        ]
                                                    }, u.nick, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 33
                                                    }, this));
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 245,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/estadisticas/page.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/estadisticas/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-1 shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600",
                                children: "👑 Estadísticas Premium Avanzadas 👑"
                            }, void 0, false, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 351,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-blue-800 mb-3 text-center",
                                                children: "📈 Tu Análisis Personal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🎯 Precisión promedio:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-blue-600",
                                                                children: (()=>{
                                                                    if (currentUser) {
                                                                        const acertadas = currentUser.respuestasAcertadas || 0;
                                                                        const falladas = 0; // No hay campo en DB
                                                                        const total = acertadas + falladas;
                                                                        return total > 0 ? (acertadas / total * 100).toFixed(1) + '%' : '0%';
                                                                    }
                                                                    return '0%';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "⚡ Racha actual:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 373,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-blue-600",
                                                                children: [
                                                                    currentUser?.racha || 0,
                                                                    " días"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "📅 Días activo:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-blue-600",
                                                                children: (()=>{
                                                                    if (currentUser?.fechaRegistro) {
                                                                        const fechaReg = new Date(currentUser.fechaRegistro);
                                                                        const ahora = new Date();
                                                                        const diffTime = Math.abs(ahora.getTime() - fechaReg.getTime());
                                                                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                                                        return diffDays;
                                                                    }
                                                                    return 0;
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🏆 Tu ranking:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 390,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-blue-600",
                                                                children: (()=>{
                                                                    // Ranking basado en respuestasAcertadas
                                                                    if (users.length > 0 && currentUser) {
                                                                        const usersWithPoints = users.map((u)=>({
                                                                                ...u,
                                                                                puntosTotales: u.respuestasAcertadas || 0
                                                                            }));
                                                                        const sorted = usersWithPoints.sort((a, b)=>b.puntosTotales - a.puntosTotales);
                                                                        const position = sorted.findIndex((u)=>u.nick === currentUser.nick) + 1;
                                                                        return position > 0 ? `#${position}` : '-';
                                                                    }
                                                                    return '-';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-green-800 mb-3 text-center",
                                                children: "📚 Análisis por Materias"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🔬 Matemáticas:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "Datos no disponibles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "📖 Lenguaje:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "Datos no disponibles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🌍 Geografía:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "Datos no disponibles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "📚 Historia:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "Datos no disponibles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🎨 Tu fuerte:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 429,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-green-600",
                                                                children: "Datos no disponibles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-purple-800 mb-3 text-center",
                                                children: "🎯 Logros y Proyección"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "📈 Crecimiento:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-purple-600",
                                                                children: (()=>{
                                                                    if (currentUser) {
                                                                        const acertadas = currentUser.respuestasAcertadas || 0;
                                                                        const falladas = 0;
                                                                        const total = acertadas + falladas;
                                                                        if (total > 0) {
                                                                            const precision = acertadas / total * 100;
                                                                            const crecimiento = Math.max(0, Math.floor(precision - 50));
                                                                            return `+${crecimiento}% sem.`;
                                                                        }
                                                                    }
                                                                    return '+0% sem.';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "🎯 Meta semanal:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-purple-600",
                                                                children: (()=>{
                                                                    if (currentUser) {
                                                                        const acertadas = currentUser.respuestasAcertadas || 0;
                                                                        const falladas = 0;
                                                                        const total = acertadas + falladas;
                                                                        if (total > 0) {
                                                                            const precision = acertadas / total * 100;
                                                                            return precision >= 75 ? '75% ✅' : `${precision.toFixed(1)}% ❌`;
                                                                        }
                                                                    }
                                                                    return '0% ❌';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "⭐ Próximo nivel:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-purple-600",
                                                                children: (()=>{
                                                                    if (currentUser) {
                                                                        const puntosActuales = calcularPuntosTotales(currentUser);
                                                                        const nivelActual = Math.floor(puntosActuales / 100);
                                                                        const puntosParaSiguiente = (nivelActual + 1) * 100 - puntosActuales;
                                                                        return `${puntosParaSiguiente} pts`;
                                                                    }
                                                                    return '100 pts';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 355,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-indigo-800 mb-3 text-center",
                                        children: "📊 Gráfico de Progreso Semanal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between h-32 gap-2",
                                        children: [
                                            ...Array(7)
                                        ].map((_, i)=>{
                                            const dayActivities = (()=>{
                                                if (currentUser) {
                                                    const acertadas = currentUser.respuestasAcertadas || 0;
                                                    const total = acertadas;
                                                    // Simular actividad distribuida a lo largo de la semana
                                                    const baseActivity = Math.floor(total / 7);
                                                    const variation = Math.floor(Math.random() * 5) - 2; // -2 a +2
                                                    return Math.max(0, baseActivity + variation);
                                                }
                                                return Math.floor(Math.random() * 5) + 1;
                                            })();
                                            const maxHeight = 25; // altura máxima esperada
                                            const height = Math.max(20, Math.min(100, dayActivities / maxHeight * 80 + 20));
                                            const day = [
                                                'L',
                                                'M',
                                                'X',
                                                'J',
                                                'V',
                                                'S',
                                                'D'
                                            ][i];
                                            const isToday = i === new Date().getDay() - 1 || new Date().getDay() === 0 && i === 6;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-8 rounded-t-md ${isToday ? 'bg-gradient-to-t from-orange-500 to-red-500' : 'bg-gradient-to-t from-blue-500 to-purple-500'}`,
                                                        style: {
                                                            height: `${height}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs mt-1 font-semibold ${isToday ? 'text-orange-600' : 'text-indigo-600'}`,
                                                        children: day
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: dayActivities
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 45
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mt-3 text-sm text-indigo-600",
                                        children: [
                                            "📈 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Tendencia:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 40
                                            }, this),
                                            " ",
                                            (()=>{
                                                if (currentUser) {
                                                    const acertadas = currentUser.respuestasAcertadas || 0;
                                                    const falladas = 0;
                                                    const precision = falladas + acertadas > 0 ? acertadas / (falladas + acertadas) * 100 : 0;
                                                    if (precision >= 80) return '¡Excelente! Mantén este nivel de precisión.';
                                                    if (precision >= 60) return '¡Vas muy bien! Mantén el ritmo esta semana.';
                                                    if (precision >= 40) return 'Buen progreso. ¡Sigue practicando!';
                                                    return 'Empezando bien. ¡Cada respuesta cuenta!';
                                                }
                                                return '¡Empieza tu aventura de aprendizaje!';
                                            })()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 525,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 487,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-orange-800 mb-3 text-center",
                                        children: "⚔️ Tu Posición vs. Mejores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 544,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl",
                                                        children: "🥇"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-600",
                                                        children: "1º Lugar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-yellow-600",
                                                        children: (()=>{
                                                            const usersWithPoints = users.map((u)=>({
                                                                    ...u,
                                                                    puntosTotales: u.respuestasAcertadas || 0
                                                                }));
                                                            const sorted = usersWithPoints.sort((a, b)=>b.puntosTotales - a.puntosTotales);
                                                            return sorted[0]?.puntosTotales || 0;
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: (()=>{
                                                            const usersWithPoints = users.map((u)=>({
                                                                    ...u,
                                                                    puntosTotales: u.respuestasAcertadas || 0
                                                                }));
                                                            const sorted = usersWithPoints.sort((a, b)=>b.puntosTotales - a.puntosTotales);
                                                            return sorted[0]?.nick || 'Nadie';
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 546,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-3 border-2 border-blue-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl",
                                                        children: "👑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-blue-600 font-bold",
                                                        children: "TÚ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-blue-600",
                                                        children: currentUser ? currentUser.respuestasAcertadas || 0 : 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-blue-500",
                                                        children: (()=>{
                                                            if (currentUser) {
                                                                const usersWithPoints = users.map((u)=>({
                                                                        ...u,
                                                                        puntosTotales: u.respuestasAcertadas || 0
                                                                    }));
                                                                const sorted = usersWithPoints.sort((a, b)=>b.puntosTotales - a.puntosTotales);
                                                                const position = sorted.findIndex((u)=>u.nick === currentUser.nick) + 1;
                                                                return position > 0 ? `Posición #${position}` : 'Sin clasificar';
                                                            }
                                                            return 'Sin clasificar';
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl",
                                                        children: "🎯"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Promedio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-gray-600",
                                                        children: (()=>{
                                                            const total = users.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0);
                                                            return Math.floor(total / users.length);
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: (()=>{
                                                            return `${users.length} usuarios`;
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center text-sm",
                                        children: (()=>{
                                            if (currentUser) {
                                                const total = users.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0);
                                                const promedio = Math.floor(total / users.length);
                                                const tusPuntos = currentUser.respuestasAcertadas || 0;
                                                const diferencia = tusPuntos - promedio;
                                                if (diferencia > 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-600",
                                                        children: [
                                                            "📈 +",
                                                            diferencia,
                                                            " puntos sobre el promedio"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 56
                                                    }, this);
                                                } else if (diferencia < 0) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600",
                                                        children: [
                                                            "📉 ",
                                                            Math.abs(diferencia),
                                                            " puntos bajo el promedio"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 56
                                                    }, this);
                                                } else {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-600",
                                                        children: "🎯 Exactamente en el promedio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 56
                                                    }, this);
                                                }
                                            }
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500",
                                                children: "Sin datos para comparar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                                lineNumber: 612,
                                                columnNumber: 48
                                            }, this);
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 543,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/estadisticas/page.tsx",
                        lineNumber: 350,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/estadisticas/page.tsx",
                    lineNumber: 349,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/estadisticas/page.tsx",
                lineNumber: 348,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold mb-4 text-center",
                        children: "Mejores estadísticas"
                    }, void 0, false, {
                        fileName: "[project]/src/app/estadisticas/page.tsx",
                        lineNumber: 623,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xl",
                                        children: "📖"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Historia con más likes:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 625,
                                        columnNumber: 65
                                    }, this),
                                    " ",
                                    (()=>{
                                        if (historias.length === 0) return "-";
                                        const top = historias.reduce((max, h)=>{
                                            if ((h.likes || 0) > (max.likes || 0)) return h;
                                            return max;
                                        }, historias[0]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: top.titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 33
                                                }, this),
                                                " por ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                        nick: top.autor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 60
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 57
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-pink-600",
                                                    children: [
                                                        "❤️ ",
                                                        top.likes || 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 94
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/estadisticas/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 29
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 625,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xl",
                                        children: "💬"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Historia más comentada:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 65
                                    }, this),
                                    " ",
                                    (()=>{
                                        if (historias.length === 0) return "-";
                                        const top = historias.reduce((max, h)=>{
                                            const comentarios = h.comentarios ? h.comentarios.length : 0;
                                            const maxComentarios = max.comentarios ? max.comentarios.length : 0;
                                            if (comentarios > maxComentarios) return h;
                                            return max;
                                        }, historias[0]);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: top.titulo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 33
                                                }, this),
                                                " por ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                                        nick: top.autor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 60
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 57
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600",
                                                    children: [
                                                        "💬 ",
                                                        top.comentarios ? top.comentarios.length : 0
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 94
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/estadisticas/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 29
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 637,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xl",
                                        children: "🏫"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Centro con más historias creadas:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 65
                                    }, this),
                                    " ",
                                    (()=>{
                                        if (historias.length === 0 || users.length === 0) return "-";
                                        const nickToCentro = {};
                                        users.forEach((u)=>{
                                            if (u.nick && u.centro) {
                                                nickToCentro[u.nick] = u.centro;
                                            }
                                        });
                                        const historiasPorCentro = {};
                                        historias.forEach((h)=>{
                                            const centro = h.centro || nickToCentro[h.autor] || null;
                                            if (centro) {
                                                historiasPorCentro[centro] = (historiasPorCentro[centro] || 0) + 1;
                                            }
                                        });
                                        const top = Object.entries(historiasPorCentro).sort((a, b)=>b[1] - a[1])[0];
                                        if (!top) return "-";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: top[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 33
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-purple-600",
                                                    children: [
                                                        "🏫 ",
                                                        top[1]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/estadisticas/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 29
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 651,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xl",
                                        children: "🏫"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 674,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Centro Escolar con más usuarios activos:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/estadisticas/page.tsx",
                                        lineNumber: 674,
                                        columnNumber: 65
                                    }, this),
                                    " ",
                                    (()=>{
                                        if (users.length === 0) return "-";
                                        const usuariosPorCentro = {};
                                        users.forEach((u)=>{
                                            if (u.centro) {
                                                usuariosPorCentro[u.centro] = (usuariosPorCentro[u.centro] || 0) + 1;
                                            }
                                        });
                                        const top = Object.entries(usuariosPorCentro).sort((a, b)=>b[1] - a[1])[0];
                                        if (!top) return "-";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: top[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 33
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-600",
                                                    children: [
                                                        "🏫 ",
                                                        top[1]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/estadisticas/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/estadisticas/page.tsx",
                                            lineNumber: 685,
                                            columnNumber: 29
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/estadisticas/page.tsx",
                                lineNumber: 674,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/estadisticas/page.tsx",
                        lineNumber: 624,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/estadisticas/page.tsx",
                lineNumber: 622,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/estadisticas/page.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_1bab7150._.js.map