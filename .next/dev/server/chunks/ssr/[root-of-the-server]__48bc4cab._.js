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
"[project]/src/utils/renderNick.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderNick",
    ()=>renderNick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)");
;
;
function renderNick(nick, className) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
        nick: nick,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/utils/renderNick.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/data/trofeos-premium.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":101,"titulo":"Historiador Premium","descripcion":"Al menos 35 historias creadas.","imagen":"/premium1.jpg","criterio":"historiasCreadas >= 35","exclusivoPremium":true,"beneficio":"Badge especial de historiador"},{"id":102,"titulo":"Sabio Premium","descripcion":"1200 respuestas acertadas en Aprende con Pipo.","imagen":"/premium2.jpg","criterio":"respuestasAcertadas >= 1200","exclusivoPremium":true,"beneficio":"Título de Sabio en perfil"},{"id":103,"titulo":"Amigo Premium","descripcion":"Conseguir 60 amigos.","imagen":"/premium3.jpg","criterio":"amigos >= 60","exclusivoPremium":true,"beneficio":"Badge de amistad especial"},{"id":104,"titulo":"Espíritu Navideño Premium","descripcion":"Escribe una historia sobre la navidad en el modo \"My Live\", durante los días 20 de diciembre y 6 de enero.","imagen":"/premium14.jpg","criterio":"tieneHistoriaNavidad","exclusivoPremium":true,"beneficio":"Badge de celebración especial"},{"id":105,"titulo":"Verano Dorado Premium","descripcion":"Crea una historia en modo \"My Live\", durante los días de verano (15 junio a 15 septiembre)","imagen":"/premium5.jpg","criterio":"tieneHistoriaVerano","exclusivoPremium":true,"beneficio":"Efecto de verano en perfil"},{"id":106,"titulo":"Veterano Dorado","descripcion":"6 meses consecutivos como usuario Premium","imagen":"/premium6.jpg","criterio":"mesesPremium >= 6","exclusivoPremium":true,"beneficio":"Crown dorada permanente"},{"id":107,"titulo":"Diseñador del Futuro","descripcion":"Crear el futuro logo de StoryUp con herramientas como Paint, en una historia con el título \"Logo StoryUp\"","imagen":"/premium7.png","criterio":"tieneLogoStoryUp","exclusivoPremium":true,"beneficio":"Reconocimiento como diseñador oficial","otorgadoPorAdmin":true},{"id":108,"titulo":"Escritor Premium","descripcion":"Crear 50+ historias.","imagen":"/premium8.png","criterio":"historiasCreadas >= 50","exclusivoPremium":true,"beneficio":"Badge de escritor prolífico"},{"id":109,"titulo":"Competidor Premium","descripcion":"Consigue al menos 30 trofeos","imagen":"/premium9.jpg","criterio":"totalTrofeos >= 30","exclusivoPremium":true,"beneficio":"Destacado en rankings"},{"id":110,"titulo":"Cerebro de Oro","descripcion":"2500+ respuestas acertadas en Aprende con Pipo.","imagen":"/premium10.jpg","criterio":"respuestasAcertadas >= 2500","exclusivoPremium":true,"beneficio":"Título de genio académico"},{"id":111,"titulo":"Analista Premium","descripcion":"Consigue un nivel 3 en todas las materias en \"Analisis por materias\" de Estadísticas premium Avanzadas.","imagen":"/premium11.jpg","criterio":"todasNivel3","exclusivoPremium":true,"beneficio":"Badge de perfección académica"},{"id":112,"titulo":"Red Social Premium","descripcion":"Conseguir 100+ amigos.","imagen":"/premium12.jpg","criterio":"amigos >= 100","exclusivoPremium":true,"beneficio":"Título de influencer social Premium"}]);}),
"[project]/src/data/trofeosPremiumImport.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Archivo para importar y transformar trofeos premium desde el JSON
__turbopack_context__.s([
    "TROFEOS_PREMIUM",
    ()=>TROFEOS_PREMIUM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/trofeos-premium.json (json)");
;
const TROFEOS_PREMIUM = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__["default"].map((t)=>({
        src: t.imagen,
        texto: t.titulo,
        tipo: 'manual'
    }));
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/app/perfil/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/trofeosPremiumImport.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const PerfilUsuario = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    // Función para asignar trofeos al usuario si su centro ganó premios este mes
    const asignarTrofeosUsuario = async (usuario)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const year = undefined;
        const month = undefined;
    };
    const [bullyingActivo, setBullyingActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usuarioBullying, setUsuarioBullying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [palabraProhibida, setPalabraProhibida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoTitulo, setConcursoTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoTexto, setConcursoTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaInicio, setFechaInicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaFin, setFechaFin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [usuarioGanador, setUsuarioGanador] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoId, setConcursoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [nombreArchivo, setNombreArchivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [usuarios, setUsuarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mensajeRecibido, setMensajeRecibido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tieneMensajesSinLeer, setTieneMensajesSinLeer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noticiaTitulo, setNoticiaTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [noticiaTexto, setNoticiaTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [noticiaImagen, setNoticiaImagen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estado para el trofeo seleccionado por el admin
    const [trofeoSeleccionado, setTrofeoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estados para gestionar concursos finalizados
    const [concursoSeleccionado, setConcursoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ganadorSeleccionado, setGanadorSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedUserData, setSelectedUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estados para datos de base de datos
    const [premiumData, setPremiumData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userTrofeos, setUserTrofeos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        trofeosDesbloqueados: [],
        trofeosBloqueados: []
    });
    const [displayedUserProfile, setDisplayedUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [concursos, setConcursos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Estados para preguntas
    const [cursoSeleccionado, setCursoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("matematicas");
    const [pregunta, setPregunta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [respuesta, setRespuesta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estados para solicitudes de amistad
    const [pendingRequests, setPendingRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    const displayedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedUser ? selectedUserData || {
            ...user,
            trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados,
            trofeosBloqueados: userTrofeos.trofeosBloqueados
        } : {
            ...user,
            trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados,
            trofeosBloqueados: userTrofeos.trofeosBloqueados
        }, [
        selectedUser,
        selectedUserData,
        user,
        userTrofeos
    ]);
    // Inicialización y sincronización de rankings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Obtener concursos
        fetch('/api/concursos').then((response)=>response.json()).then((concursos)=>{
            setConcursos(concursos);
            // Calcular el próximo ID basado en los concursos existentes
            const maxNumero = concursos.length > 0 ? Math.max(...concursos.map((c)=>c.numero)) : 0;
            setConcursoId(maxNumero + 1);
        }).catch((error)=>{
            console.warn('No se pudo cargar la lista de concursos:', error);
        });
        // Obtener todos los usuarios registrados para el selector del chat
        fetch('/api/users').then((response)=>response.json()).then((users)=>{
            if (Array.isArray(users)) {
                // Ordenar alfabéticamente por nick
                users.sort((a, b)=>a.nick.localeCompare(b.nick, 'es', {
                        sensitivity: 'base'
                    }));
                setUsuarios(users);
            }
        }).catch((error)=>{
            console.warn('No se pudo cargar la lista de usuarios:', error);
        });
    }, []);
    // Manejo seguro de datos premium y trofeos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user && user.nick) {
            fetch('/api/premium/data?nick=' + user.nick).then((response)=>response.json()).then((data)=>{
                if (data && !data.error) {
                    setPremiumData(data);
                } else {
                    setPremiumData(null);
                    console.warn('No hay datos premium para este usuario.');
                }
            }).catch((error)=>{
                setPremiumData(null);
                console.warn('No se pudo cargar datos premium:', error);
            });
            // Cargar datos del perfil del usuario para sincronizar trofeos
            fetch('/api/user/profile?nick=' + user.nick).then((response)=>response.json()).then((profileData)=>{
                if (profileData && profileData.user) {
                    // Guardar los datos completos del perfil
                    setDisplayedUserProfile(profileData.user);
                    // Sincronizar trofeos automáticos con los datos completos del perfil
                    fetch('/api/trofeos/user-trofeos?nick=' + user.nick).then((response)=>response.json()).then((trofeosData)=>{
                        if (trofeosData && !trofeosData.error) {
                            setUserTrofeos(trofeosData);
                            // Sincronizar trofeos automáticos
                            syncAutoTrofeos(profileData.user, trofeosData);
                        } else {
                            setUserTrofeos({
                                trofeosDesbloqueados: [],
                                trofeosBloqueados: []
                            });
                            // Sincronizar trofeos automáticos
                            syncAutoTrofeos(profileData.user, {
                                trofeosDesbloqueados: [],
                                trofeosBloqueados: []
                            });
                        }
                    }).catch((error)=>{
                        setUserTrofeos({
                            trofeosDesbloqueados: [],
                            trofeosBloqueados: []
                        });
                        console.warn('No se pudo cargar trofeos:', error);
                        // Sincronizar trofeos automáticos
                        syncAutoTrofeos(profileData.user, {
                            trofeosDesbloqueados: [],
                            trofeosBloqueados: []
                        });
                    });
                }
            }).catch((error)=>{
                console.warn('No se pudo cargar datos del perfil:', error);
            });
            fetch('/api/friends?action=requests&nick=' + user.nick).then((response)=>response.json()).then((data)=>{
                if (data.requests) {
                    setPendingRequests(data.requests);
                } else {
                    setPendingRequests([]);
                }
            }).catch((error)=>{
                setPendingRequests([]);
                console.warn('No se pudo cargar solicitudes:', error);
            });
        }
    }, [
        user
    ]);
    // Cargar mensajes del chat solo cuando cambia el usuario
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user && user.nick) {
            fetch('/api/chat?nick=' + user.nick).then((response)=>response.json()).then((messages)=>{
                setChatMessages(messages);
                // Comprobar si hay mensajes no leídos
                const lastRead = localStorage.getItem('lastReadMsg') || '';
                // Buscar el último mensaje recibido para este usuario
                const lastReceived = messages.filter((msg)=>msg.to === user.nick).map((msg)=>{
                    // Parsear fecha robustamente
                    const d = msg.fecha ? Date.parse(msg.fecha) : NaN;
                    return isNaN(d) ? 0 : d;
                }).reduce((max, curr)=>Math.max(max, curr), 0);
                const unread = lastReceived > Number(lastRead);
                setTieneMensajesSinLeer(unread);
            }).catch((error)=>{
                console.warn('No se pudo cargar los mensajes del chat:', error);
            });
        }
    }, [
        user
    ]);
    const handlePalabraProhibidaSubmit = (e)=>{
        e.preventDefault();
        setPalabraProhibida("");
    };
    const handleSendMessage = ()=>{
        if (!chatInput.trim() || !user || !selectedUser) return;
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: user.nick,
                to: selectedUser,
                text: chatInput.trim()
            })
        }).then(()=>{
            setChatInput('');
            // Refrescar mensajes
            fetch('/api/chat?nick=' + user.nick).then((response)=>response.json()).then((messages)=>{
                setChatMessages(messages);
                // Guardar timestamp del último mensaje recibido como leído
                const lastReceived = messages.filter((msg)=>msg.to === user.nick).map((msg)=>{
                    const d = msg.fecha ? Date.parse(msg.fecha) : NaN;
                    return isNaN(d) ? 0 : d;
                }).reduce((max, curr)=>Math.max(max, curr), 0);
                if (lastReceived > 0) {
                    localStorage.setItem('lastReadMsg', lastReceived.toString());
                } else {
                    localStorage.setItem('lastReadMsg', Date.now().toString());
                }
                setTieneMensajesSinLeer(false);
            }).catch((error)=>console.warn('No se pudo refrescar los mensajes:', error));
        }).catch((error)=>{
            console.error('Error enviando mensaje:', error);
        });
    };
    const handleAcceptRequest = async (requestId)=>{
        if (!user) return;
        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'accept',
                    userNick: user.nick,
                    requestId
                })
            });
            if (response.ok) {
                // Remover de pendingRequests
                setPendingRequests((prev)=>prev.filter((r)=>r.id !== requestId));
                // Recargar para actualizar contadores
                window.location.reload();
            } else {
                alert('Error al aceptar solicitud');
            }
        } catch (error) {
            alert('Error al aceptar solicitud');
        }
    };
    const handleRejectRequest = async (requestId)=>{
        if (!user) return;
        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'reject',
                    userNick: user.nick,
                    requestId
                })
            });
            if (response.ok) {
                // Remover de pendingRequests
                setPendingRequests((prev)=>prev.filter((r)=>r.id !== requestId));
                // Recargar para actualizar contadores
                window.location.reload();
            } else {
                alert('Error al rechazar solicitud');
            }
        } catch (error) {
            alert('Error al rechazar solicitud');
        }
    };
    const handleApagarBullying = ()=>{
        setBullyingActivo(false);
        setUsuarioBullying("");
    };
    const handleConcursoSubmit = (e)=>{
        e.preventDefault();
        if (!concursoTitulo.trim() || !concursoTexto.trim() || !fechaInicio || !fechaFin) {
            alert('Por favor, completa todos los campos: título, descripción, fecha de inicio y fecha de finalización.');
            return;
        }
        if (!user || !user.nick) {
            alert('Debes estar logueado para crear un concurso.');
            return;
        }
        fetch('/api/concursos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numero: concursoId,
                titulo: concursoTitulo,
                texto: concursoTexto,
                inicio: fechaInicio,
                fin: fechaFin,
                autor: user.nick,
                ganador: usuarioGanador,
                fechaFinal: fechaFin
            })
        }).then((response)=>{
            if (!response.ok) {
                return response.json().then((err)=>{
                    throw new Error(err.error || 'Error desconocido');
                });
            }
            return response.json();
        }).then((data)=>{
            setConcursoId(concursoId + 1);
            setConcursoTitulo("");
            setConcursoTexto("");
            setFechaInicio("");
            setFechaFin("");
            setUsuarioGanador("");
            // Refrescar concursos
            fetch('/api/concursos').then((r)=>r.json()).then(setConcursos);
            alert('Concurso creado exitosamente.');
        }).catch((error)=>{
            console.error('Error creando concurso:', error);
            alert('Error creando concurso: ' + error.message);
        });
    };
    // Función general para sumar o restar likes a cualquier usuario
    const updateLikes = (nick, cantidad)=>{
        if (!nick) return;
        const currentLikes = usuarios.find((u)=>u.nick === nick)?.likes || 0;
        fetch('/api/users/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nick,
                likes: currentLikes + cantidad
            })
        }).then((response)=>response.json()).then((updatedUser)=>{
            const updatedUsers = usuarios.map((u)=>u.nick === nick ? updatedUser : u);
            setUsuarios(updatedUsers);
            if (user && user.nick === nick) {
                setUser(updatedUser);
            }
        }).catch((error)=>console.error('Error updating likes:', error));
    };
    const handleSeleccionarGanador = ()=>{
        if (usuarioGanador) {
            fetch('/api/concursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: concursos[0].id,
                    ganador: usuarioGanador
                })
            }).then(()=>{
                updateLikes(usuarioGanador, 1);
            }).catch((error)=>{
                console.error('Error seleccionando ganador:', error);
            });
        }
    };
    const handleAsignarGanador = async ()=>{
        if (!concursoSeleccionado || !ganadorSeleccionado) {
            return;
        }
        try {
            await fetch('/api/concursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: concursoSeleccionado,
                    ganador: ganadorSeleccionado
                })
            });
            updateLikes(ganadorSeleccionado, 10);
            setConcursoSeleccionado("");
            setGanadorSeleccionado("");
            // Refrescar concursos
            fetch('/api/concursos').then((r)=>r.json()).then(setConcursos);
        } catch (error) {
            console.error('Error asignando ganador:', error);
        }
    };
    const handleNoticiaSubmit = (e)=>{
        e.preventDefault();
        fetch('/api/noticias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titulo: noticiaTitulo,
                contenido: noticiaTexto,
                autorNick: user ? user.nick : ""
            })
        }).then((response)=>response.json()).then(()=>{
            setNoticiaTitulo("");
            setNoticiaTexto("");
            setNoticiaImagen("");
        }).catch((error)=>{
            console.error('Error creando noticia:', error);
        });
    };
    // Función para enviar pregunta
    const enviarPregunta = async ()=>{
        if (!pregunta.trim() || !respuesta.trim()) {
            return;
        }
        try {
            const response = await fetch('/api/add-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    curso: cursoSeleccionado,
                    asignatura: asignaturaSeleccionada,
                    pregunta: pregunta.trim(),
                    respuesta: respuesta.trim()
                })
            });
            const data = await response.json();
            if (response.ok) {
                setPregunta("");
                setRespuesta("");
            }
        } catch (error) {
            console.error('Error al enviar pregunta:', error);
        }
        // Función general para sumar o restar likes a cualquier usuario
        const updateLikes = (nick, cantidad)=>{
            if (!nick) return;
            const currentLikes = usuarios.find((u)=>u.nick === nick)?.likes || 0;
            fetch('/api/users/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick,
                    likes: currentLikes + cantidad
                })
            }).then((response)=>response.json()).then((updatedUser)=>{
                const updatedUsers = usuarios.map((u)=>u.nick === nick ? updatedUser : u);
                setUsuarios(updatedUsers);
                if (user && user.nick === nick) {
                    setUser(updatedUser);
                }
            }).catch((error)=>console.error('Error updating likes:', error));
        };
    };
    // Función para bloquear trofeo específico
    const handleLockTrofeo = (trofeoIdx)=>{
        if (!selectedUser) return;
        const updated = {
            trofeosDesbloqueados: Array.isArray(userTrofeos.trofeosDesbloqueados) ? userTrofeos.trofeosDesbloqueados.filter((id)=>id !== trofeoIdx) : [],
            trofeosBloqueados: Array.isArray(userTrofeos.trofeosBloqueados) ? [
                ...userTrofeos.trofeosBloqueados,
                trofeoIdx
            ] : [
                trofeoIdx
            ]
        };
        fetch('/api/trofeos/user-trofeos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nick: selectedUser,
                ...updated
            })
        }).then(()=>{
            setUserTrofeos(updated);
        }).catch((error)=>{
            console.error('Error locking trofeo:', error);
        });
    }; // Lista de trofeos normales (24)
    const TROFEOS = [
        {
            src: "/trofeo25.jpg",
            texto: "Trofeo 1",
            tipo: "auto"
        },
        {
            src: "/trofeo7.jpg",
            texto: "Trofeo 2",
            tipo: "auto"
        },
        {
            src: "/trofeo12.jpg",
            texto: "Trofeo 3",
            tipo: "auto"
        },
        {
            src: "/trofeo5.jpg",
            texto: "Trofeo 4",
            tipo: "auto"
        },
        {
            src: "/trofeo13.png",
            texto: "Trofeo 5",
            tipo: "auto"
        },
        {
            src: "/trofeo17.jpg",
            texto: "Trofeo 6",
            tipo: "auto"
        },
        {
            src: "/trofeo27.jpg",
            texto: "Trofeo 7",
            tipo: "auto"
        },
        {
            src: "/trofeo10.jpg",
            texto: "Trofeo 8",
            tipo: "auto"
        },
        {
            src: "/trofeo23.jpg",
            texto: "Trofeo 9",
            tipo: "auto"
        },
        {
            src: "/trofeo15.jpg",
            texto: "Trofeo 10",
            tipo: "auto"
        },
        {
            src: "/trofeo26.jpg",
            texto: "Trofeo 11",
            tipo: "auto"
        },
        {
            src: "/trofeo1.jpg",
            texto: "Trofeo 12",
            tipo: "auto"
        },
        {
            src: "/trofeo22.jpg",
            texto: "Trofeo 13",
            tipo: "auto"
        },
        {
            src: "/trofeo14.jpg",
            texto: "Trofeo 14",
            tipo: "auto"
        },
        {
            src: "/trofeo20.jpg",
            texto: "Trofeo 15",
            tipo: "auto"
        },
        {
            src: "/trofeo11.jpg",
            texto: "Trofeo 16",
            tipo: "auto"
        },
        {
            src: "/trofeo24.jpg",
            texto: "Trofeo 17",
            tipo: "auto"
        },
        {
            src: "/trofeo18.jpg",
            texto: "Trofeo 18",
            tipo: "auto"
        },
        {
            src: "/trofeo19.jpg",
            texto: "Trofeo 19",
            tipo: "auto"
        },
        {
            src: "/trofeo15.jpg",
            texto: "Trofeo 20",
            tipo: "auto"
        },
        {
            src: "/trofeo9.jpg",
            texto: "Trofeo 21",
            tipo: "auto"
        },
        {
            src: "/trofeo8.jpg",
            texto: "Trofeo 22",
            tipo: "auto"
        },
        {
            src: "/trofeo21.jpg",
            texto: "Trofeo 23",
            tipo: "auto"
        },
        {
            src: "/trofeo16.jpg",
            texto: "Trofeo 24",
            tipo: "auto"
        },
        {
            src: "/trofeo1.jpg",
            texto: "🏆 Campeón Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo2.jpg",
            texto: "🥈 Subcampeón Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo3.jpg",
            texto: "🥉 Tercer Lugar Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo4.jpg",
            texto: "🏅 Top 10 Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo5.jpg",
            texto: "📚 Participante Activo",
            tipo: "asignado"
        }
    ];
    // Lista de trofeos premium (12)
    // TROFEOS_PREMIUM ahora se importa desde trofeosPremiumImport.ts
    // Trofeos automáticos con condición
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
            condicion: (user)=>Array.isArray(user.amigos) && user.amigos.length >= 1
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
            condicion: (user)=>(user.historiasCreadas || 0) >= 1
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
                // Aparecer en rankings
                return (user.respuestasAcertadas || 0) >= 1 || (user.likes || 0) >= 1 || (user.historiasCreadas || 0) >= 1;
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
            condicion: (user)=>Array.isArray(user.amigos) && user.amigos.length >= 10
        },
        {
            src: "/trofeo26.jpg",
            texto: "Trofeo 11",
            tipo: "auto",
            condicion: (user)=>(user.historiasCreadas || 0) >= 3
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
            condicion: (user)=>(user.competicionesSuperadas || 0) >= 1
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
            condicion: (user)=>Array.isArray(user.amigos) && user.amigos.length >= 30
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
            condicion: (user)=>(user.historiasCreadas || 0) >= 15
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
            condicion: (user)=>(user.anosEnStoryUp || 0) >= 1
        },
        {
            src: "/trofeo9.jpg",
            texto: "Trofeo 21",
            tipo: "auto",
            condicion: (user)=>(user.historiasCreadas || 0) >= 30
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
            condicion: (user)=>Array.isArray(user.amigos) && user.amigos.length >= 50
        },
        {
            src: "/trofeo16.jpg",
            texto: "Trofeo 24",
            tipo: "auto",
            condicion: (user)=>{
                // Máster (500 respuestas)
                return (user.likes || 0) >= 500 && Array.isArray(user.amigos) && user.amigos.length >= 10 && (user.historiasCreadas || 0) >= 5 && (user.respuestasAcertadas || 0) >= 100;
            }
        }
    ];
    // Unificar todos los trofeos para el selector
    const TROFEOS_ALL = [
        ...TROFEOS,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"]
    ];
    // Función para obtener trofeos desbloqueados automáticamente
    const getAutoTrofeos = (user)=>{
        // Trofeo Premium 7: Diseñador del Futuro
        // ...existing code...
        // Asegurar que el campo amigos es siempre un array actualizado
        const userSync = {
            ...user,
            amigos: Array.isArray(user.amigos) ? user.amigos : []
        };
        console.log('getAutoTrofeos: Evaluating user data:', userSync);
        let autoTrofeos = TROFEOS_AUTO.map((t, idx)=>{
            const conditionResult = typeof t.condicion === 'function' && t.condicion(userSync);
            console.log(`getAutoTrofeos: Trofeo ${idx} condition result:`, conditionResult, 'for user data:', {
                likes: userSync.likes,
                amigos: userSync.amigos,
                comentariosRecibidos: userSync.comentariosRecibidos,
                historias: userSync.historias,
                respuestasAcertadas: userSync.respuestasAcertadas
            });
            return conditionResult ? idx + 1 : null; // ids empiezan en 1
        }).filter((id)=>id !== null);
        console.log('getAutoTrofeos: Final auto trofeos:', autoTrofeos);
        // Desbloqueo automático de trofeos premium
        const esPremium = userSync.premium === true || userSync.isPremium === true || userSync.tipo === "premium";
        const historiasCreadas = Array.isArray(userSync.historias) ? userSync.historias.length : userSync.historiasCreadas || 0;
        const respuestasAcertadas = userSync.respuestasAcertadas || 0;
        // Trofeo Premium 1: Historiador Premium
        if (esPremium && historiasCreadas >= 35) {
            autoTrofeos.push(101); // id del trofeo premium 1
        }
        // Trofeo Premium 2: Sabio Premium
        if (esPremium && respuestasAcertadas >= 1200) {
            autoTrofeos.push(102); // id del trofeo premium 2
        }
        // Trofeo Premium 3: Amigo Premium
        const amigosCount = Array.isArray(userSync.amigos) ? userSync.amigos.length : 0;
        if (esPremium && amigosCount >= 60) {
            autoTrofeos.push(103); // id del trofeo premium 3
        }
        // Trofeo Premium 4: Espíritu Navideño Premium
        let tieneHistoriaNavidad = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaNavidad = userSync.historias.some((historia)=>{
                if (!historia || !historia.titulo || !historia.fecha || !historia.modo) return false;
                const tituloLower = historia.titulo.toLowerCase();
                const esNavidad = tituloLower.includes("navidad") || tituloLower.includes("navideño") || tituloLower.includes("navideña");
                const fecha = new Date(historia.fecha);
                const year = fecha.getFullYear();
                // Rango: 20 diciembre a 6 enero (del año siguiente)
                const inicio = new Date(year, 11, 20); // 20 diciembre
                const fin = new Date(year + 1, 0, 6, 23, 59, 59); // 6 enero
                return historia.modo === "My Live" && esNavidad && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaNavidad) {
            autoTrofeos.push(104); // id del trofeo premium 4
        }
        // Trofeo Premium 5: Verano Dorado Premium
        let tieneHistoriaVerano = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaVerano = userSync.historias.some((historia)=>{
                if (!historia || !historia.fecha || !historia.modo) return false;
                const fecha = new Date(historia.fecha);
                // Rango: 15 junio a 15 septiembre
                const year = fecha.getFullYear();
                const inicio = new Date(year, 5, 15); // 15 junio
                const fin = new Date(year, 8, 15, 23, 59, 59); // 15 septiembre
                return historia.modo === "My Live" && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaVerano) {
            autoTrofeos.push(105); // id del trofeo premium 5
        }
        // Trofeo Premium 6: Veterano Dorado
        let mesesPremium = 0;
        if (userSync.premiumInicio && userSync.premiumExpiracion) {
            const inicio = new Date(userSync.premiumInicio);
            const fin = new Date(userSync.premiumExpiracion);
            // Calcular meses completos entre inicio y fin
            mesesPremium = (fin.getFullYear() - inicio.getFullYear()) * 12 + (fin.getMonth() - inicio.getMonth());
            // Si el día de expiración es menor que el de inicio, restar un mes
            if (fin.getDate() < inicio.getDate()) {
                mesesPremium--;
            }
        }
        if (esPremium && mesesPremium >= 6) {
            autoTrofeos.push(106); // id del trofeo premium 6
        }
        // Trofeo Premium 7: Diseñador del Futuro
        let tieneLogoStoryUp = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneLogoStoryUp = userSync.historias.some((historia)=>{
                if (!historia || !historia.titulo || !historia.imagen) return false;
                const tituloLower = historia.titulo.toLowerCase();
                return tituloLower.includes("logo storyup") && !!historia.imagen;
            });
        }
        if (esPremium && tieneLogoStoryUp) {
            autoTrofeos.push(107); // id del trofeo premium 7
        }
        // Trofeo Premium 8: Escritor Premium
        if (esPremium && historiasCreadas >= 50) {
            autoTrofeos.push(108); // id del trofeo premium 8
        }
        // Trofeo Premium 9: Competidor Premium
        // Consigue al menos 30 trofeos (normales + premium)
        const totalTrofeosDesbloqueados = Array.isArray(userSync.trofeosDesbloqueados) ? userSync.trofeosDesbloqueados.length : 0;
        // Incluye los automáticos calculados en esta función
        const totalAutoTrofeos = autoTrofeos.length;
        const totalTrofeos = totalTrofeosDesbloqueados + totalAutoTrofeos;
        if (esPremium && totalTrofeos >= 30) {
            autoTrofeos.push(109); // id del trofeo premium 9
        }
        // Trofeo Premium 10: Cerebro de Oro
        // 2500+ respuestas acertadas en Aprende con Pipo
        if (esPremium && respuestasAcertadas >= 2500) {
            autoTrofeos.push(110); // id del trofeo premium 10
        }
        // Trofeo Premium 11: Analista Premium
        // Consigue nivel 3 en todas las materias en "Analisis por materias" de Estadísticas premium Avanzadas
        // Suponemos que user.nivelesMaterias es un objeto tipo { matematicas: 3, lenguaje: 3, ... }
        const materiasRequeridas = [
            "matematicas",
            "lenguaje",
            "ciencias",
            "ingles",
            "historia",
            "geografia",
            "literatura"
        ];
        const nivelesMaterias = userSync.nivelesMaterias || {};
        const todasNivel3 = materiasRequeridas.every((m)=>nivelesMaterias[m] >= 3);
        if (esPremium && todasNivel3) {
            autoTrofeos.push(111); // id del trofeo premium 11
        }
        // Trofeo Premium 12: Red Social Premium
        // Conseguir 100+ amigos
        if (esPremium && amigosCount >= 100) {
            autoTrofeos.push(112); // id del trofeo premium 12
        }
        return autoTrofeos;
    };
    // Función para sincronizar trofeos automáticos
    const syncAutoTrofeos = async (userData, currentTrofeos)=>{
        if (!userData || !userData.nick) {
            console.log('syncAutoTrofeos: No userData or nick', userData);
            return;
        }
        console.log('syncAutoTrofeos: Starting for user', userData.nick, 'with data:', userData);
        console.log('syncAutoTrofeos: Checking conditions manually:');
        console.log('- amigos:', userData.amigos, '>= 1?', userData.amigos >= 1);
        console.log('- likes:', userData.likes, '>= 10?', userData.likes >= 10);
        console.log('- historias:', userData.historias, '>= 1?', userData.historias >= 1);
        console.log('- respuestasAcertadas:', userData.respuestasAcertadas, '>= 20?', userData.respuestasAcertadas >= 20);
        console.log('- comentariosRecibidos:', userData.comentariosRecibidos, '>= 1?', userData.comentariosRecibidos >= 1);
        try {
            // Calcular trofeos automáticos que deberían estar desbloqueados
            const autoTrofeos = getAutoTrofeos(userData);
            console.log('syncAutoTrofeos: Auto trofeos calculated:', autoTrofeos);
            const manual = Array.isArray(currentTrofeos.trofeosDesbloqueados) ? currentTrofeos.trofeosDesbloqueados : [];
            const bloqueados = Array.isArray(currentTrofeos.trofeosBloqueados) ? currentTrofeos.trofeosBloqueados : [];
            console.log('syncAutoTrofeos: Current trofeos - manual:', manual, 'bloqueados:', bloqueados);
            // Filtrar trofeos automáticos que no están ya desbloqueados ni bloqueados
            const nuevosAutoTrofeos = autoTrofeos.filter((idx)=>!manual.includes(idx) && !bloqueados.includes(idx));
            // Trofeos que ya no cumplen la condición (remover)
            const toRemove = manual.filter((id)=>!autoTrofeos.includes(id));
            console.log('syncAutoTrofeos: Trofeos to remove:', toRemove);
            let updatedTrofeosDesbloqueados = manual;
            if (nuevosAutoTrofeos.length > 0 || toRemove.length > 0) {
                // Agregar nuevos y remover los que ya no cumplen
                updatedTrofeosDesbloqueados = [
                    ...manual,
                    ...nuevosAutoTrofeos
                ].filter((id)=>!toRemove.includes(id));
                const updated = {
                    trofeosDesbloqueados: updatedTrofeosDesbloqueados,
                    trofeosBloqueados: bloqueados
                };
                console.log('syncAutoTrofeos: Saving updated trofeos:', updated);
                // Guardar en la base de datos
                await fetch('/api/trofeos/user-trofeos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nick: userData.nick,
                        ...updated
                    })
                });
                // Actualizar el estado local
                setUserTrofeos(updated);
                console.log(`Sincronizados ${nuevosAutoTrofeos.length} trofeos automáticos y removidos ${toRemove.length} trofeos para ${userData.nick}`);
            } else {
                console.log('syncAutoTrofeos: No changes needed');
            }
        } catch (error) {
            console.error('Error sincronizando trofeos automáticos:', error);
        }
    };
    // Función para saber si un trofeo está desbloqueado
    const isTrofeoUnlocked = (user, idx)=>{
        console.log('isTrofeoUnlocked called with user:', user, 'idx:', idx);
        console.log('displayedUser:', displayedUser);
        console.log('userTrofeos:', userTrofeos);
        // Calcular trofeos automáticos basados en los datos del usuario
        const auto = getAutoTrofeos(user);
        console.log('Auto trofeos for this user:', auto);
        // Usar los trofeos guardados en la base de datos
        const manual = Array.isArray(userTrofeos.trofeosDesbloqueados) ? userTrofeos.trofeosDesbloqueados : [];
        const bloqueados = Array.isArray(userTrofeos.trofeosBloqueados) ? userTrofeos.trofeosBloqueados : [];
        console.log('Manual trofeos:', manual, 'Bloqueados:', bloqueados);
        // Mapear idx a trofeoId
        const getTrofeoId = (idx)=>{
            if (idx < TROFEOS.length) {
                return idx + 1;
            } else {
                return 101 + (idx - TROFEOS.length);
            }
        };
        const trofeoId = getTrofeoId(idx);
        const isUnlocked = (auto.includes(trofeoId) || manual.includes(trofeoId)) && !bloqueados.includes(trofeoId);
        console.log('Trofeo', idx, 'id:', trofeoId, 'is unlocked:', isUnlocked);
        return isUnlocked;
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white shadow rounded p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Perfil"
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 834,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No se ha iniciado sesión."
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 835,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 833,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/perfil/page.tsx",
            lineNumber: 832,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const isPremium = displayedUser ? displayedUser.premium === true || displayedUser.isPremium === true || displayedUser.tipo === "premium" : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 flex flex-col pt-4",
        children: [
            pendingRequests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-4xl mx-auto mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-yellow-800 mb-2",
                            children: "Solicitudes de Amistad Pendientes"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 848,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        pendingRequests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-white p-3 rounded mb-2 shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700",
                                        children: [
                                            "Solicitud de ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderNick"])(request.solicitante.nick)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 851,
                                                columnNumber: 78
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 851,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAcceptRequest(request.id),
                                                className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold",
                                                children: "Aceptar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 853,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleRejectRequest(request.id),
                                                className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold",
                                                children: "Rechazar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 859,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, request.id, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 850,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 847,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 846,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl mx-auto mt-4 mb-4 flex items-center justify-center gap-4",
                children: [
                    tieneMensajesSinLeer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-green-500 text-white px-4 py-2 rounded font-semibold animate-bounce",
                        onClick: ()=>{
                            localStorage.setItem('lastReadMsg', Date.now().toString());
                            setTieneMensajesSinLeer(false);
                        },
                        children: "Mensajes sin leer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 873,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-center",
                        children: [
                            "Perfil de: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
                                nick: displayedUser.nick
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 883,
                                columnNumber: 75
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 883,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 871,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl mx-auto mt-8 grid grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative transition-all duration-500 ${isPremium ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse overflow-hidden' : ''}`,
                        children: [
                            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 891,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 right-6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 893,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 890,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-4 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-xl font-bold text-center w-full transition-all duration-300 ${isPremium ? 'text-yellow-600' : ''}`,
                                    children: [
                                        "Información Personal",
                                        isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 animate-spin",
                                            children: "👑"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 898,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 897,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mb-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative ${isPremium ? '' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: displayedUser.avatar || "/avatars/simple1.png",
                                                alt: "Avatar",
                                                className: `w-20 h-20 rounded-full mb-2 transition-all duration-300 ${isPremium ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg shadow-yellow-400/50 hover:scale-110' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs animate-bounce",
                                                children: "✨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 910,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/perfil/avatar",
                                            className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition",
                                            children: "Seleccionar y Cambiar Avatar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 915,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 906,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Nick:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 920,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderNick"])(displayedUser.nick)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 920,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Email:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 921,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    displayedUser.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 921,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Centro Educativo:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 922,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    displayedUser.centro
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 922,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Curso:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 923,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    displayedUser.curso
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 923,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Tipo de Usuario:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 924,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    displayedUser.tipo
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 924,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Fecha de Inscripción:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 925,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    displayedUser.fechaInscripcion ? new Date(displayedUser.fechaInscripcion).toLocaleDateString('es-ES') : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 925,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col mt-2 gap-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-x-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "👍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 930,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Likes:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm",
                                                            children: displayedUser.likes || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 932,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 929,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center ml-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "👥"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Total de Amigos:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 936,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm",
                                                            children: displayedUser.amigos || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 934,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 928,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-x-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "📖"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 942,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Total de Historias:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 943,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm",
                                                            children: displayedUser.historias ? displayedUser.historias.length : 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 944,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "💬"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Total de Comentarios:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm",
                                                            children: displayedUser.comentariosRecibidos || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 949,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 940,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-x-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "🏆"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 954,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Trofeos Desbloqueados:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 955,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (()=>{
                                                            const trofeos = Array.isArray(displayedUser.trofeosDesbloqueados) ? displayedUser.trofeosDesbloqueados : [];
                                                            const total = trofeos.length;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm",
                                                                children: total
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 960,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "✅"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Respuestas acertadas:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 966,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm",
                                                            children: displayedUser.respuestasAcertadas || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 964,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 952,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row gap-x-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "🥇"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Competiciones:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 973,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm",
                                                            children: displayedUser.competicionesSuperadas || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 974,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 text-lg",
                                                            children: "🎉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 977,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Concursos:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 978,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm",
                                                            children: displayedUser.concursosGanados || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 976,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 927,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 926,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 887,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-lg rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-center mb-4",
                                        children: "Trofeos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 990,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 md:grid-cols-8 gap-4",
                                        children: TROFEOS.slice(0, 24).map((trofeo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `relative aspect-square flex flex-col items-center justify-center p-1 rounded-lg overflow-hidden ${isTrofeoUnlocked(displayedUser, idx) ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100 border-2 border-gray-300'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: trofeo.src,
                                                        alt: trofeo.texto,
                                                        className: `w-[50px] h-[50px] ${!isTrofeoUnlocked(displayedUser, idx) ? 'opacity-25' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 994,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !isTrofeoUnlocked(displayedUser, idx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600 text-4xl font-bold",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 997,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 993,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 991,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 989,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-lg rounded-lg p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-center mb-4",
                                        children: "Trofeos Premium"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 md:grid-cols-6 gap-4",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"].map((trofeo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `relative aspect-square flex flex-col items-center justify-center p-1 rounded-lg overflow-hidden ${isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) ? 'bg-purple-100 border-2 border-purple-400' : 'bg-gray-100 border-2 border-gray-300'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: trofeo.src,
                                                        alt: trofeo.texto,
                                                        className: `w-[50px] h-[50px] ${!isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) ? 'opacity-25' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-600 text-4xl font-bold",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1006,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 987,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 885,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-6xl mx-auto mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-lg rounded-lg p-6 flex flex-row gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/4 min-w-[180px] flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "user-selector",
                                    className: "font-semibold mb-2",
                                    children: "Selecciona usuario:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "user-selector",
                                    className: "border rounded px-3 py-2",
                                    value: selectedUser,
                                    onChange: (e)=>setSelectedUser(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- Elige un usuario --"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1036,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        usuarios.filter((u)=>u.nick !== user.nick).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u.nick,
                                                children: u.nick
                                            }, u.nick, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 1028,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center mb-4",
                                    children: "Chat"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-64 overflow-y-auto border rounded p-4 mb-4 bg-gray-50",
                                    children: chatMessages.slice(-5).map((msg, idx)=>{
                                        const esEnviado = msg.from === user.nick;
                                        const tipo = esEnviado ? 'enviado' : 'recibido';
                                        const fecha = msg.fecha ? new Date(msg.fecha) : new Date();
                                        // Mostrar fecha robustamente
                                        let fechaStr = '';
                                        if (msg.fecha) {
                                            const d = Date.parse(msg.fecha);
                                            if (!isNaN(d)) {
                                                const fecha = new Date(d);
                                                fechaStr = `${fecha.toLocaleDateString('es-ES')} - ${fecha.toLocaleTimeString('es-ES', {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}`;
                                            } else {
                                                fechaStr = msg.fecha;
                                            }
                                        } else {
                                            fechaStr = '';
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mb-2 ${esEnviado ? 'text-right' : 'text-left'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: [
                                                        msg.from,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                msg.text,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 ml-2",
                                                    children: [
                                                        "(",
                                                        tipo,
                                                        " - ",
                                                        fechaStr,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: chatInput,
                                            onChange: (e)=>setChatInput(e.target.value),
                                            placeholder: "Escribe un mensaje...",
                                            className: "flex-1 border rounded px-3 py-2",
                                            onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                            disabled: !selectedUser
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSendMessage,
                                            className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold",
                                            disabled: !selectedUser || !chatInput.trim(),
                                            children: "Enviar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 1043,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 1026,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 1025,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            user.tipo && user.tipo.toLowerCase() === "docente" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-6xl mx-auto mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white shadow-lg rounded-lg p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-center mb-2",
                                                children: "Crear noticia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "w-full flex flex-col gap-4",
                                                onSubmit: handleNoticiaSubmit,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "border rounded px-3 py-2 w-full",
                                                        placeholder: "Título de la noticia",
                                                        value: noticiaTitulo,
                                                        onChange: (e)=>setNoticiaTitulo(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                className: "border rounded px-3 py-2 w-full min-h-[80px]",
                                                                placeholder: "Escribe la noticia aquí...",
                                                                value: noticiaTexto,
                                                                onChange: (e)=>setNoticiaTexto(e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1104,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            noticiaImagen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: noticiaImagen,
                                                                alt: "Previsualización",
                                                                className: "absolute left-0 top-0 w-full h-full object-contain rounded shadow pointer-events-none",
                                                                style: {
                                                                    zIndex: 1,
                                                                    opacity: 0.7
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1106,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: "noticia-imagen",
                                                                type: "file",
                                                                accept: "image/*",
                                                                className: "hidden",
                                                                onChange: (e)=>{
                                                                    const file = e.target.files?.[0];
                                                                    if (file) {
                                                                        setNombreArchivo(file.name);
                                                                        const reader = new FileReader();
                                                                        reader.onload = (ev)=>{
                                                                            setNoticiaImagen(ev.target?.result);
                                                                        };
                                                                        reader.readAsDataURL(file);
                                                                    } else {
                                                                        setNombreArchivo("");
                                                                        setNoticiaImagen("");
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1110,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold border",
                                                                onClick: ()=>document.getElementById('noticia-imagen')?.click(),
                                                                children: "Seleccionar imagen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold",
                                                                children: "Publicar noticia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1109,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white shadow-lg rounded-lg p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-center mb-2",
                                                children: "Crear concurso"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                className: "w-full flex flex-col gap-4",
                                                onSubmit: handleConcursoSubmit,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "border rounded px-3 py-2 flex-1",
                                                                placeholder: t('titulo'),
                                                                value: concursoTitulo,
                                                                onChange: (e)=>setConcursoTitulo(e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500",
                                                                children: [
                                                                    "ID: ",
                                                                    concursoId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1132,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        className: "border rounded px-3 py-2 w-full min-h-[80px]",
                                                        placeholder: t('descripcion'),
                                                        value: concursoTexto,
                                                        onChange: (e)=>setConcursoTexto(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm mb-1",
                                                                        children: t('fechaInicio')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1139,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        className: "border rounded px-3 py-2",
                                                                        value: fechaInicio,
                                                                        onChange: (e)=>setFechaInicio(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1140,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1138,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm mb-1",
                                                                        children: t('fechaFin')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1143,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        className: "border rounded px-3 py-2",
                                                                        value: fechaFin,
                                                                        onChange: (e)=>setFechaFin(e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1144,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1142,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold",
                                                                onClick: handleConcursoSubmit,
                                                                children: t('enviar')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1146,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1131,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1098,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-6 pt-4 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-center mb-3 text-gray-700",
                                        children: t('gestionarConcursosFinalizados')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "border rounded px-3 py-2 text-sm",
                                                value: concursoSeleccionado,
                                                onChange: (e)=>setConcursoSeleccionado(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t('seleccionarConcurso')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1156,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    (()=>{
                                                        const hoy = new Date();
                                                        return concursos.filter((c)=>{
                                                            if (!c.fin) return false;
                                                            const fechaFin = new Date(c.fin);
                                                            const ahora = new Date();
                                                            // Solo mostrar concursos del docente actual que hayan finalizado y sin ganador
                                                            return fechaFin < ahora && c.autor === user.nick && !c.ganador;
                                                        }).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.id,
                                                                children: [
                                                                    c.titulo,
                                                                    " (ID: ",
                                                                    c.numero,
                                                                    ") - Sin ganador"
                                                                ]
                                                            }, c.id, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1168,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)));
                                                    })()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1155,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "border rounded px-3 py-2 text-sm",
                                                value: ganadorSeleccionado,
                                                onChange: (e)=>setGanadorSeleccionado(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t('seleccionarGanador')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1175,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    usuarios.sort((a, b)=>a.nick.localeCompare(b.nick)).map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: u.nick,
                                                            children: u.nick
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1174,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm",
                                                onClick: handleAsignarGanador,
                                                disabled: !concursoSeleccionado || !ganadorSeleccionado,
                                                children: t('asignarGanador')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1154,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1152,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-center mb-2",
                                        children: "Agregar Pregunta - Aprende con Pipo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-blue-700 mb-2",
                                                        children: "Curso:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: cursoSeleccionado,
                                                        onChange: (e)=>setCursoSeleccionado(e.target.value),
                                                        className: "w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1primaria",
                                                                children: "1º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "2primaria",
                                                                children: "2º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1192,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "3primaria",
                                                                children: "3º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1193,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "4primaria",
                                                                children: "4º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1194,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "5primaria",
                                                                children: "5º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1195,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "6primaria",
                                                                children: "6º Primaria"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-blue-700 mb-2",
                                                        children: "Asignatura:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1200,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: asignaturaSeleccionada,
                                                        onChange: (e)=>setAsignaturaSeleccionada(e.target.value),
                                                        className: "w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "campeonato",
                                                                children: "Campeonato"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1202,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "general",
                                                                children: "General"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1203,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "matematicas",
                                                                children: "Matemáticas"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1204,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "lenguaje",
                                                                children: "Lenguaje"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "literatura",
                                                                children: "Literatura"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1206,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "historia",
                                                                children: "Historia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1207,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "geografia",
                                                                children: "Geografía"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1208,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ingles",
                                                                children: "Inglés"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "naturaleza",
                                                                children: "Naturaleza"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1210,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1201,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-blue-700 mb-2",
                                                children: "Pregunta:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1215,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: pregunta,
                                                onChange: (e)=>setPregunta(e.target.value),
                                                placeholder: "Escribe la pregunta aquí...",
                                                className: "w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1216,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1214,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-blue-700 mb-2",
                                                children: "Respuesta:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: respuesta,
                                                onChange: (e)=>setRespuesta(e.target.value),
                                                placeholder: "Escribe la respuesta aquí...",
                                                className: "w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1218,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: enviarPregunta,
                                            className: "bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                            children: "✅ Enviar Pregunta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-3 bg-blue-100 border border-blue-300 rounded",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "💡 Información:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1229,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Las preguntas se agregan automáticamente al archivo correspondiente",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-200 px-1 rounded",
                                                    children: [
                                                        asignaturaSeleccionada,
                                                        "-",
                                                        cursoSeleccionado,
                                                        ".json"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1227,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1185,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 1097,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    user.tipo && user.tipo.toLowerCase() === "docente" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-4 text-center",
                                    children: t('panelAdministracion')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1239,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "w-full flex flex-col items-center gap-4",
                                    onSubmit: handlePalabraProhibidaSubmit,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex w-full max-w-xs items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "border rounded px-3 py-2 min-w-[280px] max-w-full",
                                                placeholder: t('palabraProhibida'),
                                                value: palabraProhibida,
                                                onChange: (e)=>setPalabraProhibida(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1242,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "bg-red-500 text-white px-4 py-2 rounded font-semibold whitespace-nowrap",
                                                children: "Seleccionar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1243,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1241,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1240,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold mt-6 text-center",
                                    children: t('sistemaAntibullying')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700 max-w-2xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold mb-2",
                                                        children: t('avisoAntibullying')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1250,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal ml-6 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: t('historiasTerror')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1252,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: t('perdidaLikes')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1253,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: t('mensajesUsuario')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: t('palabrasProhibidasChat')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1255,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: t('actividadConsecutiva')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1256,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1249,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center min-w-[180px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: `relative w-32 h-32 rounded-full font-bold text-white text-lg mb-2 transition-all flex items-center justify-center ${bullyingActivo ? 'bg-red-600 opacity-100 shadow-lg animate-blink' : 'bg-green-600 opacity-40'}`,
                                                        disabled: !bullyingActivo,
                                                        onClick: handleApagarBullying,
                                                        children: [
                                                            bullyingActivo ? 'Aviso Antibullying' : t('sinPeligro'),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    viewBox: "0 0 100 100",
                                                                    className: "opacity-70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "10",
                                                                            y1: "10",
                                                                            x2: "90",
                                                                            y2: "90",
                                                                            stroke: "white",
                                                                            strokeWidth: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 1264,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "90",
                                                                            y1: "10",
                                                                            x2: "10",
                                                                            y2: "90",
                                                                            stroke: "white",
                                                                            strokeWidth: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 1265,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 1263,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1262,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1260,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    usuarioBullying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-red-700 font-semibold text-base",
                                                        children: usuarioBullying
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1270,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1248,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 1238,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 1237,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/perfil/page.tsx",
        lineNumber: 843,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PerfilUsuario;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48bc4cab._.js.map