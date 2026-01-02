(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UserLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserLink",
    ()=>UserLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const UserLink = ({ nick, className })=>{
    _s();
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserLink.useEffect": ()=>{
            const checkPremium = {
                "UserLink.useEffect.checkPremium": async ()=>{
                    if (nick) {
                        try {
                            const response = await fetch(`/api/user/premium-status?nick=${encodeURIComponent(nick)}`);
                            const data = await response.json();
                            setIsPremium(data.isPremium || false);
                        } catch (error) {
                            setIsPremium(false);
                        }
                    }
                }
            }["UserLink.useEffect.checkPremium"];
            // Verificar inicialmente
            checkPremium();
        }
    }["UserLink.useEffect"], [
        nick
    ]);
    const normalized = (nick || "").trim().toLowerCase();
    if (!nick || normalized === "anonimo" || normalized === "anónimo") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className || "text-gray-500",
            children: nick || "(sin nick)"
        }, void 0, false, {
            fileName: "[project]/src/components/UserLink.tsx",
            lineNumber: 30,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `/perfil/${encodeURIComponent(nick)}`,
        className: className || "text-blue-600 underline hover:text-blue-800",
        title: `Ver perfil de ${nick}${isPremium ? ' (Usuario Premium)' : ''}`,
        children: [
            nick,
            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 inline-flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(UserLink, "xNbIwEn/POoRQin4gZAUcB/MOIQ=");
_c = UserLink;
var _c;
__turbopack_context__.k.register(_c, "UserLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/renderNick.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderNick",
    ()=>renderNick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-client] (ecmascript)");
;
;
function renderNick(nick, className) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserLink"], {
        nick: nick,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/utils/renderNick.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Constantes CSS reutilizables para mantener consistencia y eliminar duplicados
__turbopack_context__.s([
    "BUTTON_STYLES",
    ()=>BUTTON_STYLES,
    "CARD_STYLES",
    ()=>CARD_STYLES,
    "INPUT_STYLES",
    ()=>INPUT_STYLES,
    "TEXT_STYLES",
    ()=>TEXT_STYLES
]);
const BUTTON_STYLES = {
    primary: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors",
    primaryBold: "bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition-colors",
    primaryLarge: "bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600 transition-colors",
    secondary: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors",
    secondaryLarge: "bg-gray-500 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600 transition-colors",
    lightGray: "bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold border hover:bg-gray-300 transition-colors",
    success: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors",
    successBold: "bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 transition-colors",
    successLarge: "bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    danger: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors",
    dangerBold: "bg-red-500 text-white px-4 py-2 rounded font-semibold hover:bg-red-600 transition-colors",
    warning: "bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors",
    warningBold: "bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition-colors",
    purple: "bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors",
    orange: "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors",
    pink: "bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors",
    pinkBold: "bg-pink-500 text-white px-4 py-2 rounded font-semibold hover:bg-pink-600 transition-colors"
};
const INPUT_STYLES = {
    default: "border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500",
    small: "border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
};
const CARD_STYLES = {
    default: "bg-white rounded-lg shadow-md p-6",
    bordered: "bg-white rounded-lg shadow-md p-6 border",
    premium: "bg-white rounded-lg shadow-md p-6 border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50"
};
const TEXT_STYLES = {
    label: "block text-sm font-medium text-gray-700 mb-2",
    error: "text-red-600 text-sm mt-1",
    success: "text-green-600 text-sm mt-1"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/noticias/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Noticias
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Noticias() {
    _s();
    const [noticias, setNoticias] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Noticias.useEffect": ()=>{
            fetch('/api/noticias').then({
                "Noticias.useEffect": (response)=>response.json()
            }["Noticias.useEffect"]).then({
                "Noticias.useEffect": (data)=>{
                    console.log("Noticias cargadas desde API:", data);
                    setNoticias(data);
                }
            }["Noticias.useEffect"]).catch({
                "Noticias.useEffect": (error)=>{
                    console.error("Error al cargar noticias desde API:", error);
                }
            }["Noticias.useEffect"]);
        }
    }["Noticias.useEffect"], []);
    const mostrarNoticias = noticias.length > 0 ? noticias.map((noticia, idx)=>{
        console.log(`Procesando noticia ${idx + 1}:`, noticia);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_STYLES"].default,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-lg text-blue-700",
                            children: noticia.titulo || 'Título no disponible'
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                        }, this),
                        noticia.autor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-4",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(noticia.autor)
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 34,
                            columnNumber: 29
                        }, this),
                        noticia.fecha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-4 text-gray-500 text-sm",
                            children: noticia.fecha
                        }, void 0, false, {
                            fileName: "[project]/src/app/noticias/page.tsx",
                            lineNumber: 37,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800",
                    children: noticia.contenido || 'Contenido no disponible'
                }, void 0, false, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                }, this)
            ]
        }, idx, true, {
            fileName: "[project]/src/app/noticias/page.tsx",
            lineNumber: 30,
            columnNumber: 17
        }, this);
    }) : null; // No renderizar nada si no hay noticias
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center",
                    children: "Últimas Noticias"
                }, void 0, false, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/page.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6 max-w-3xl mx-auto",
                        children: mostrarNoticias
                    }, void 0, false, {
                        fileName: "[project]/src/app/noticias/page.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/noticias/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/noticias/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/noticias/page.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
_s(Noticias, "gSo1/0lXJJerkyUgSmD1VPLYbjk=");
_c = Noticias;
var _c;
__turbopack_context__.k.register(_c, "Noticias");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0e8dcb27._.js.map