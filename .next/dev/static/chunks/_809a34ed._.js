(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/torneos-premium/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TorneosPremiumPage = ()=>{
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        victorias: 0,
        participaciones: 0,
        puntuacionTotal: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TorneosPremiumPage.useEffect": ()=>{
            fetch('/api/premium/competiciones').then({
                "TorneosPremiumPage.useEffect": (res)=>res.ok ? res.json() : {
                        victorias: 0,
                        participaciones: 0,
                        puntuacionTotal: 0
                    }
            }["TorneosPremiumPage.useEffect"]).then(setStats);
        }
    }["TorneosPremiumPage.useEffect"], []);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [usuarioActual, setUsuarioActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [torneos, setTorneos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [torneoActivo, setTorneoActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cursoUsuario, setCursoUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TorneosPremiumPage.useEffect": ()=>{
            const loadUser = {
                "TorneosPremiumPage.useEffect.loadUser": async ()=>{
                    try {
                        const response = await fetch('/api/auth/me');
                        if (!response.ok) {
                            router.push('/');
                            return;
                        }
                        const data = await response.json();
                        const userObj = data.user ? data.user : data;
                        setUsuarioActual(userObj);
                        let cursoDetectado = 1;
                        const esDocente = userObj.esProfesor || userObj.tipo === "docente" || userObj.tipo === "Docente";
                        if (esDocente) {
                            cursoDetectado = 6;
                        } else if (userObj.curso) {
                            if (typeof userObj.curso === "string") {
                                const match = userObj.curso.match(/(\d)/);
                                if (match) {
                                    const numero = parseInt(match[1]);
                                    cursoDetectado = numero;
                                }
                            } else if (typeof userObj.curso === "number") {
                                cursoDetectado = userObj.curso;
                            }
                        }
                        if (cursoDetectado < 1) cursoDetectado = 1;
                        if (cursoDetectado > 6) cursoDetectado = 6;
                        setCursoUsuario(cursoDetectado);
                        const premiumResponse = await fetch('/api/premium/data');
                        if (premiumResponse.ok) {
                            const premium = await premiumResponse.json();
                            if (premium.activo && premium.fechaExpiracion && new Date(premium.fechaExpiracion) > new Date()) {
                                setIsPremium(true);
                                await cargarTorneos();
                                if (window && window.location && window.location.search.includes('reloadTorneos=1')) {
                                    await cargarTorneos();
                                }
                            } else {
                                router.push('/premium-nuevo');
                            }
                        } else {
                            router.push('/premium-nuevo');
                        }
                    } catch (error) {
                        console.error('Error loading user:', error);
                        router.push('/');
                    }
                    setLoading(false);
                }
            }["TorneosPremiumPage.useEffect.loadUser"];
            loadUser();
        }
    }["TorneosPremiumPage.useEffect"], []);
    const esTorneoDisponibleParaUsuario = (torneoId)=>{
        const match = torneoId.match(/torneo-mensual-(\d)primaria/);
        if (match) {
            const cursoTorneo = parseInt(match[1]);
            return cursoTorneo === cursoUsuario;
        }
        return false;
    };
    const cargarTorneos = async ()=>{
        try {
            const response = await fetch('/api/premium/torneos');
            if (response.ok) {
                const torneoData = await response.json();
                if (torneoData.torneos) {
                    let torneosParsed = torneoData.torneos;
                    if (typeof torneosParsed === 'string') {
                        try {
                            torneosParsed = JSON.parse(torneosParsed);
                        } catch  {
                            torneosParsed = [];
                        }
                    }
                    // Forzar comparación robusta de nick
                    const normalizar = (str)=>(str || '').toLowerCase().replace(/\s+/g, '');
                    torneosParsed = torneosParsed.map((t)=>{
                        if (t.resultados && t.resultados.some((r)=>normalizar(r.nick) === normalizar(usuarioActual?.nick))) {
                            t._usuarioYaParticipado = true;
                        } else {
                            t._usuarioYaParticipado = false;
                        }
                        return t;
                    });
                    setTorneos(torneosParsed);
                    // ACTUALIZAR COMPETICIONES (Liga Premium) tras cargar torneos
                    await fetch('/api/premium/competiciones', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({})
                    });
                    // Recargar datos de la Liga Premium
                    fetch('/api/premium/competiciones').then((res)=>res.ok ? res.json() : {
                            victorias: 0,
                            participaciones: 0,
                            puntuacionTotal: 0
                        }).then(setStats);
                    return;
                }
            }
        } catch (error) {
            console.error('Error loading torneos:', error);
        }
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const torneosDefault = [
            {
                id: 'torneo-mensual-1primaria',
                nombre: 'Torneo Mensual 1º Primaria',
                descripcion: 'Compite en el torneo mensual de 1º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-2primaria',
                nombre: 'Torneo Mensual 2º Primaria',
                descripcion: 'Compite en el torneo mensual de 2º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-3primaria',
                nombre: 'Torneo Mensual 3º Primaria',
                descripcion: 'Compite en el torneo mensual de 3º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-4primaria',
                nombre: 'Torneo Mensual 4º Primaria',
                descripcion: 'Compite en el torneo mensual de 4º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-5primaria',
                nombre: 'Torneo Mensual 5º Primaria',
                descripcion: 'Compite en el torneo mensual de 5º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-6primaria',
                nombre: 'Torneo Mensual 6º Primaria',
                descripcion: 'Compite en el torneo mensual de 6º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            }
        ];
        setTorneos(torneosDefault);
        await fetch('/api/premium/torneos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                torneos: torneosDefault,
                lastReset: new Date().toISOString()
            })
        });
    };
    const registrarseTorneo = async (torneoId)=>{
        if (!usuarioActual) return;
        const torneosActualizados = torneos.map((torneo)=>{
            if (torneo.id === torneoId) {
                if (torneo.participantes.includes(usuarioActual.nick)) {
                    return torneo;
                }
                if (torneo.participantes.length >= torneo.maxParticipantes) {
                    return torneo;
                }
                return {
                    ...torneo,
                    participantes: [
                        ...torneo.participantes,
                        usuarioActual.nick
                    ]
                };
            }
            return torneo;
        });
        setTorneos(torneosActualizados);
        await fetch('/api/premium/torneos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                torneos: JSON.stringify(torneosActualizados)
            })
        });
    };
    const iniciarTorneo = async (torneo)=>{
        await fetch('/api/premium/torneos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                torneoActivo: {
                    torneoId: torneo.id,
                    curso: torneo.id.split('-')[2],
                    startTime: new Date().toISOString()
                }
            })
        });
        // Esperar a que el usuario termine el torneo y guarde resultado
        // Después de volver de /aprende-con-pipo, recargar torneos
        setTimeout(()=>{
            cargarTorneos();
        }, 2000);
        router.push('/aprende-con-pipo?torneo=1');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Cargando Torneos Premium..."
            }, void 0, false, {
                fileName: "[project]/src/app/torneos-premium/page.tsx",
                lineNumber: 286,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/torneos-premium/page.tsx",
            lineNumber: 285,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isPremium) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-2",
                            children: "🎯 Torneos Premium"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 299,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-100 text-lg",
                            children: "Compite en torneos exclusivos y gana premios especiales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 300,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 298,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                torneoActivo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: torneoActivo.nombre
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 305,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 306,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Torneo en progreso..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 307,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin text-4xl",
                            children: "⏳"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 308,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-4",
                            children: "Calculando resultados..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 309,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 304,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: torneos.map((torneo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-purple-500 to-blue-500 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: torneo.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: torneo.descripcion
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Categoría:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-purple-600",
                                                            children: torneo.categoria
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Participantes:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: [
                                                                torneo.participantes.length,
                                                                "/",
                                                                torneo.maxParticipantes
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Estado:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${torneo.estado === 'registro' ? 'text-green-600' : torneo.estado === 'finalizado' ? 'text-gray-600' : 'text-blue-600'}`,
                                                            children: torneo.estado === 'registro' ? 'Abierto' : torneo.estado === 'finalizado' ? 'Finalizado' : 'Disponible'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-50 p-3 rounded mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-yellow-800",
                                                    children: "🏆 Premio:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-yellow-700",
                                                    children: torneo.premio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        torneo.estado === 'finalizado' && torneo.resultados && torneo.resultados.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 p-3 rounded mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-green-800",
                                                    children: "🏆 Clasificación General:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-xs mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "bg-green-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-2 py-1",
                                                                        children: "#"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-2 py-1",
                                                                        children: "Nick"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-2 py-1",
                                                                        children: "Aciertos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "px-2 py-1",
                                                                        children: "Puntuación"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 57
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 352,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: (()=>{
                                                                const normalizar = (str)=>(str || '').toLowerCase().replace(/\s+/g, '');
                                                                const mejoresPorUsuario = {};
                                                                torneo.resultados.forEach((r)=>{
                                                                    const nickNorm = normalizar(r.nick);
                                                                    if (!mejoresPorUsuario[nickNorm] || r.puntuacion > mejoresPorUsuario[nickNorm].puntuacion) {
                                                                        mejoresPorUsuario[nickNorm] = r;
                                                                    }
                                                                });
                                                                return Object.values(mejoresPorUsuario).sort((a, b)=>b.puntuacion - a.puntuacion).map((resultado, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: normalizar(resultado.nick) === normalizar(usuarioActual?.nick) ? "font-bold text-purple-700 bg-purple-50" : "",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-1",
                                                                                children: idx + 1
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 69
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-1",
                                                                                children: resultado.nick
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                                lineNumber: 376,
                                                                                columnNumber: 69
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-1",
                                                                                children: [
                                                                                    resultado.aciertos,
                                                                                    "/25"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 69
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-1",
                                                                                children: [
                                                                                    resultado.puntuacion,
                                                                                    " pts"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                                lineNumber: 378,
                                                                                columnNumber: 69
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, resultado.nick + '-' + idx, true, {
                                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                        lineNumber: 374,
                                                                        columnNumber: 65
                                                                    }, ("TURBOPACK compile-time value", void 0)));
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: torneo._usuarioYaParticipado || torneo.resultados && torneo.resultados.filter((r)=>r.nick === usuarioActual.nick).length > 0 || torneo.participantes.filter((n)=>n === usuarioActual.nick).length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-center bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold",
                                                children: "Torneo finalizado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)) : torneo.estado === 'registro' ? !torneo.participantes.includes(usuarioActual.nick) ? esTorneoDisponibleParaUsuario(torneo.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>registrarseTorneo(torneo.id),
                                                disabled: torneo.participantes.length >= torneo.maxParticipantes,
                                                className: "flex-1 bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors",
                                                children: "Registrarse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-center bg-gray-100 text-gray-600 px-4 py-2 rounded font-semibold",
                                                children: [
                                                    "Solo para ",
                                                    torneo.nombre.split(' ')[2],
                                                    " ",
                                                    torneo.nombre.split(' ')[3]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 405,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded font-semibold",
                                                        children: "✓ Registrado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>iniciarTorneo(torneo),
                                                        className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors",
                                                        children: "Comenzar Torneo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, torneo.id, true, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 314,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 312,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white mb-4",
                            children: "🏅 Clasificación Premium (Liga)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 432,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-xs mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-green-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1",
                                                children: "Nick"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-1",
                                                children: "Puntos Totales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: usuarioActual ? "font-bold text-purple-700 bg-purple-50" : "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: usuarioActual?.nick
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-2 py-1",
                                                children: [
                                                    stats.puntuacionTotal,
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 433,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 431,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/premium-nuevo'),
                        className: "bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors",
                        children: "← Volver a Premium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                        lineNumber: 450,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 449,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/torneos-premium/page.tsx",
            lineNumber: 297,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/torneos-premium/page.tsx",
        lineNumber: 296,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TorneosPremiumPage, "7LE6UxiaUGMdjLCQkGzHO0nVrBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TorneosPremiumPage;
const __TURBOPACK__default__export__ = TorneosPremiumPage;
var _c;
__turbopack_context__.k.register(_c, "TorneosPremiumPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_809a34ed._.js.map