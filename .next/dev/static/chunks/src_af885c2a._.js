(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useQuizLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuizLogic",
    ()=>useQuizLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useQuizLogic(options = {}) {
    _s();
    const { timeLimit = 300, onTimeUp, onCorrectAnswer, onWrongAnswer } = options;
    // Estados comunes
    const [preguntaActual, setPreguntaActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [objetoPreguntaActual, setObjetoPreguntaActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [respuestaUsuario, setRespuestaUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [preguntasUsadas, setPreguntasUsadas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(timeLimit);
    const [bloqueado, setBloqueado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aciertos, setAciertos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [puntuacionTotal, setPuntuacionTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [preguntaNumero, setPreguntaNumero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Temporizador
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQuizLogic.useEffect": ()=>{
            if (!preguntaActual || bloqueado) return;
            if (timeLeft === 0) {
                setBloqueado(true);
                setPuntuacionTotal(puntuacionTotal - 15);
                setFeedback("⏰ Tiempo agotado. -15 puntos");
                onTimeUp?.();
                return;
            }
            const timer = setTimeout({
                "useQuizLogic.useEffect.timer": ()=>setTimeLeft(timeLeft - 1)
            }["useQuizLogic.useEffect.timer"], 1000);
            return ({
                "useQuizLogic.useEffect": ()=>clearTimeout(timer)
            })["useQuizLogic.useEffect"];
        }
    }["useQuizLogic.useEffect"], [
        timeLeft,
        preguntaActual,
        bloqueado,
        puntuacionTotal,
        onTimeUp
    ]);
    // Función para normalizar respuestas
    function normalizar(str) {
        return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\s+/g, "").trim();
    }
    // Función para comprobar respuesta
    const comprobarRespuesta = (customLogic)=>{
        if (bloqueado) return;
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        setBloqueado(true);
        if (esCorrecta) {
            let points = 1;
            if (timeLeft > 120) {
                points = 1;
            } else {
                points = 0.5;
            }
            setFeedback(`¡Correcto! 🎉 +${points} punto${points !== 1 ? 's' : ''}`);
            setAciertos(aciertos + 1);
            setPuntuacionTotal(puntuacionTotal + points);
            onCorrectAnswer?.(points);
        } else {
            let penalty = -0.5;
            if (timeLeft <= 120) {
                penalty = -1;
            }
            setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta} ${penalty} punto${Math.abs(penalty) !== 1 ? 's' : ''}`);
            setPuntuacionTotal(puntuacionTotal + penalty);
            onWrongAnswer?.(penalty);
        }
        customLogic?.(esCorrecta);
    };
    // Función para generar pregunta
    const generarPregunta = (preguntas, maxPreguntas = 25, onComplete)=>{
        if (preguntasUsadas.length >= maxPreguntas) {
            onComplete?.();
            return;
        }
        if (preguntas.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("No hay preguntas disponibles.");
            setBloqueado(false);
            setTimeLeft(timeLimit);
            setPreguntasUsadas([]);
            return;
        }
        // Filtrar preguntas no usadas
        const restantes = preguntas.filter((p)=>!preguntasUsadas.includes(p.pregunta));
        if (restantes.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("¡Has respondido todas las preguntas disponibles!");
            setBloqueado(true);
            setTimeLeft(timeLimit);
            setPreguntasUsadas([]);
            return;
        }
        const random = Math.floor(Math.random() * restantes.length);
        const preguntaSeleccionada = restantes[random];
        setPreguntaActual(preguntaSeleccionada.pregunta);
        setObjetoPreguntaActual(preguntaSeleccionada);
        setRespuestaCorrecta(preguntaSeleccionada.respuesta);
        setRespuestaUsuario("");
        setFeedback("");
        setBloqueado(false);
        setTimeLeft(timeLimit);
        setPreguntasUsadas([
            ...preguntasUsadas,
            preguntaSeleccionada.pregunta
        ]);
        setPreguntaNumero(preguntaNumero + 1);
    };
    // Función para resetear el quiz
    const resetQuiz = ()=>{
        setPreguntaActual("");
        setObjetoPreguntaActual(null);
        setRespuestaCorrecta("");
        setRespuestaUsuario("");
        setFeedback("");
        setPreguntasUsadas([]);
        setTimeLeft(timeLimit);
        setBloqueado(false);
        setAciertos(0);
        setPuntuacionTotal(0);
        setPreguntaNumero(1);
    };
    return {
        preguntaActual,
        setPreguntaActual,
        objetoPreguntaActual,
        setObjetoPreguntaActual,
        respuestaCorrecta,
        setRespuestaCorrecta,
        respuestaUsuario,
        setRespuestaUsuario,
        feedback,
        setFeedback,
        preguntasUsadas,
        setPreguntasUsadas,
        timeLeft,
        setTimeLeft,
        bloqueado,
        setBloqueado,
        aciertos,
        setAciertos,
        puntuacionTotal,
        setPuntuacionTotal,
        preguntaNumero,
        setPreguntaNumero,
        comprobarRespuesta,
        generarPregunta,
        resetQuiz
    };
}
_s(useQuizLogic, "PQQMOGlb4dHzi3OocDToELa60y4=");
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
"[project]/src/questions/campeonato-1primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuánto es 10-4?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿Cuánto es 5x2?","respuesta":"10","categoria":"campeonato"},{"pregunta":"¿Cuánto es 9-7?","respuesta":"2","categoria":"campeonato"},{"pregunta":"¿Cuánto es 6+1?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿Sinónimo de 'feliz'?","respuesta":"contento","categoria":"campeonato"},{"pregunta":"¿Antónimo de 'alto'?","respuesta":"bajo","categoria":"campeonato"},{"pregunta":"¿Quién es el protagonista de 'Caperucita Roja'?","respuesta":"Caperucita","categoria":"campeonato"},{"pregunta":"¿Qué signo se usa para preguntar?","respuesta":"?","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'rojo' en inglés?","respuesta":"Red","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'escuela' en inglés?","respuesta":"School","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'comer' en inglés?","respuesta":"Eat","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'madre' en inglés?","respuesta":"Mother","categoria":"campeonato"},{"pregunta":"¿Qué planta da manzanas?","respuesta":"Manzano","categoria":"campeonato"},{"pregunta":"¿Qué astro da luz durante el día?","respuesta":"Sol","categoria":"campeonato"},{"pregunta":"¿Qué animal vive en el agua?","respuesta":"Pez","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta está bajo tierra?","respuesta":"Raíz","categoria":"campeonato"},{"pregunta":"¿Quién fue faraón de Egipto?","respuesta":"Tutankamón","categoria":"campeonato"},{"pregunta":"¿Quién fue reina de Egipto?","respuesta":"Cleopatra","categoria":"campeonato"},{"pregunta":"¿Quién fue libertador de América?","respuesta":"Bolívar","categoria":"campeonato"},{"pregunta":"¿Quién fue emperador francés?","respuesta":"Napoleón","categoria":"campeonato"},{"pregunta":"¿En qué continente está Brasil?","respuesta":"América","categoria":"campeonato"},{"pregunta":"¿Qué río pasa por Sevilla?","respuesta":"Guadalquivir","categoria":"campeonato"},{"pregunta":"¿En qué país está París?","respuesta":"Francia","categoria":"campeonato"},{"pregunta":"¿Qué océano baña las costas de Galicia?","respuesta":"Atlántico","categoria":"campeonato"},{"pregunta":"¿Quién pierde un zapato en el baile?","respuesta":"Cenicienta","categoria":"campeonato"},{"pregunta":"¿Quién es el amigo de Pinocho?","respuesta":"Grillo","categoria":"campeonato"},{"pregunta":"¿Quién es el villano de Peter Pan?","respuesta":"Garfio","categoria":"campeonato"},{"pregunta":"¿Quién duerme cien años?","respuesta":"Aurora","categoria":"campeonato"},{"pregunta":"¿Qué sigue: enero, febrero, ...?","respuesta":"marzo","categoria":"campeonato"},{"pregunta":"¿Qué sigue: 2, 4, 6, ...?","respuesta":"8","categoria":"campeonato"},{"pregunta":"¿Qué sigue: A, B, ...?","respuesta":"C","categoria":"campeonato"},{"pregunta":"¿Qué sigue: primavera, verano, ...?","respuesta":"otoño","categoria":"campeonato"},{"pregunta":"¿Qué deporte se juega en Wimbledon?","respuesta":"Tenis","categoria":"campeonato"},{"pregunta":"¿Qué animal es símbolo de Australia?","respuesta":"Canguro","categoria":"campeonato"},{"pregunta":"¿Qué fruta es típica de Canarias?","respuesta":"Plátano","categoria":"campeonato"},{"pregunta":"¿Qué idioma se habla en Brasil?","respuesta":"Portugués","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene una semana?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"12","categoria":"campeonato"},{"pregunta":"¿Qué día es el primero de la semana?","respuesta":"lunes","categoria":"campeonato"},{"pregunta":"¿Qué mes viene después de mayo?","respuesta":"junio","categoria":"campeonato"},{"pregunta":"¿Qué día viene antes de viernes?","respuesta":"jueves","categoria":"campeonato"},{"pregunta":"¿De qué color es una manzana?","respuesta":"rojo","categoria":"campeonato"},{"pregunta":"¿Qué forma tiene una pelota?","respuesta":"redonda","categoria":"campeonato"},{"pregunta":"¿Qué forma tiene una caja?","respuesta":"cuadrada","categoria":"campeonato"},{"pregunta":"¿De qué color es el sol?","respuesta":"amarillo","categoria":"campeonato"},{"pregunta":"¿Quién es el hijo de tus padres?","respuesta":"hermano","categoria":"campeonato"},{"pregunta":"¿Quién es la hija de tus abuelos?","respuesta":"madre","categoria":"campeonato"},{"pregunta":"¿Quién es el padre de tu madre?","respuesta":"abuelo","categoria":"campeonato"},{"pregunta":"¿Quién es la hermana de tu madre?","respuesta":"tía","categoria":"campeonato"},{"pregunta":"¿Qué animal hace 'guau'?","respuesta":"perro","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene trompa?","respuesta":"elefante","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene rayas?","respuesta":"cebra","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene alas y canta?","respuesta":"pájaro","categoria":"campeonato"},{"pregunta":"¿Qué usas para leer?","respuesta":"libro","categoria":"campeonato"},{"pregunta":"¿Qué usas para cortar papel?","respuesta":"tijeras","categoria":"campeonato"},{"pregunta":"¿Qué usas para borrar?","respuesta":"goma","categoria":"campeonato"},{"pregunta":"¿Qué usas para pintar?","respuesta":"pincel","categoria":"campeonato"},{"pregunta":"¿Qué fruta es roja y pequeña?","respuesta":"fresa","categoria":"campeonato"},{"pregunta":"¿Qué fruta es verde y redonda?","respuesta":"manzana","categoria":"campeonato"},{"pregunta":"¿Qué alimento se hace con leche?","respuesta":"queso","categoria":"campeonato"},{"pregunta":"¿Qué estación sigue al verano?","respuesta":"otoño","categoria":"campeonato"},{"pregunta":"¿Qué estación hace más frío?","respuesta":"invierno","categoria":"campeonato"},{"pregunta":"¿Qué estación hace más calor?","respuesta":"verano","categoria":"campeonato"},{"pregunta":"¿Qué estación caen las hojas?","respuesta":"otoño","categoria":"campeonato"}]);}),
"[project]/src/questions/campeonato-2primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuál es el resultado de 12 x 4?","respuesta":"48","categoria":"campeonato"},{"pregunta":"What is the capital of France?","respuesta":"Paris","categoria":"campeonato"},{"pregunta":"¿Quién es el autor de 'Platero y yo'?","respuesta":"Juan Ramón","categoria":"campeonato"},{"pregunta":"¿Cuántos lados tiene un hexágono?","respuesta":"6","categoria":"campeonato"},{"pregunta":"How do you say 'estrella' in English?","respuesta":"star","categoria":"campeonato"},{"pregunta":"¿En qué continente está Egipto?","respuesta":"África","categoria":"campeonato"},{"pregunta":"¿Qué invento permitió la comunicación a distancia por voz?","respuesta":"Teléfono","categoria":"campeonato"},{"pregunta":"¿Cuál es el adjetivo en la frase 'El coche rápido ganó'?","respuesta":"rápido","categoria":"campeonato"},{"pregunta":"What is the past of 'see'?","respuesta":"saw","categoria":"campeonato"},{"pregunta":"¿Quién pintó 'Las Meninas'?","respuesta":"Velázquez","categoria":"campeonato"},{"pregunta":"¿Cuánto es 45 dividido entre 5?","respuesta":"9","categoria":"campeonato"},{"pregunta":"How do you say 'montaña' in English?","respuesta":"mountain","categoria":"campeonato"},{"pregunta":"¿Qué animal es mamífero y pone huevos?","respuesta":"Ornitorrinco","categoria":"campeonato"},{"pregunta":"¿Cuál es el río más largo de Europa?","respuesta":"Volga","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer hombre en pisar la Luna?","respuesta":"Armstrong","categoria":"campeonato"},{"pregunta":"What is the plural of 'mouse'?","respuesta":"mice","categoria":"campeonato"},{"pregunta":"¿Cuántos minutos tiene una hora?","respuesta":"60","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Viena?","respuesta":"Austria","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta produce semillas?","respuesta":"Flor","categoria":"campeonato"},{"pregunta":"How do you say 'hermana' in English?","respuesta":"sister","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'Caperucita Roja'?","respuesta":"Perrault","categoria":"campeonato"},{"pregunta":"¿Cuánto es 100 menos 27?","respuesta":"73","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano más grande del mundo?","respuesta":"Pacífico","categoria":"campeonato"},{"pregunta":"What is the opposite of 'short'?","respuesta":"tall","categoria":"campeonato"},{"pregunta":"¿En qué año llegó Colón a América?","respuesta":"1492","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene rayas y vive en África?","respuesta":"Cebra","categoria":"campeonato"},{"pregunta":"How do you say 'ventana' in English?","respuesta":"window","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer presidente de Estados Unidos?","respuesta":"Washington","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene el mes de febrero en un año normal?","respuesta":"28","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 8 x 7?","respuesta":"56","categoria":"campeonato"},{"pregunta":"What is the capital of Italy?","respuesta":"Rome","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Principito'?","respuesta":"Saint-Exupéry","categoria":"campeonato"},{"pregunta":"¿Cuántos planetas hay en el sistema solar?","respuesta":"8","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Praga?","respuesta":"Chequia","categoria":"campeonato"},{"pregunta":"How do you say 'flor' in English?","respuesta":"flower","categoria":"campeonato"},{"pregunta":"¿Qué animal es el más grande del mundo?","respuesta":"Ballena","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 36 dividido entre 6?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿Quién fue el faraón niño de Egipto?","respuesta":"Tutankamón","categoria":"campeonato"},{"pregunta":"What is the past of 'write'?","respuesta":"wrote","categoria":"campeonato"},{"pregunta":"¿Cuántos continentes hay en la Tierra?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Lima?","respuesta":"Perú","categoria":"campeonato"},{"pregunta":"¿Qué parte del cuerpo usamos para pensar?","respuesta":"Cerebro","categoria":"campeonato"},{"pregunta":"How do you say 'zapato' in English?","respuesta":"shoe","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'Don Quijote'?","respuesta":"Cervantes","categoria":"campeonato"},{"pregunta":"¿Cuánto es 15 + 27?","respuesta":"42","categoria":"campeonato"},{"pregunta":"¿Cuál es el animal más rápido del mundo?","respuesta":"Guepardo","categoria":"campeonato"},{"pregunta":"What is the plural of 'foot'?","respuesta":"feet","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Oslo?","respuesta":"Noruega","categoria":"campeonato"},{"pregunta":"¿Qué invento permitió volar?","respuesta":"Avión","categoria":"campeonato"},{"pregunta":"¿Cuál es el adjetivo en la frase 'La casa blanca es bonita'?","respuesta":"blanca","categoria":"campeonato"},{"pregunta":"How do you say 'madre' in English?","respuesta":"mother","categoria":"campeonato"},{"pregunta":"¿Quién pintó 'La Gioconda'?","respuesta":"Leonardo","categoria":"campeonato"},{"pregunta":"¿Cuánto es 9 x 9?","respuesta":"81","categoria":"campeonato"},{"pregunta":"¿Cuál es el mar que baña las costas de España?","respuesta":"Mediterráneo","categoria":"campeonato"},{"pregunta":"What is the opposite of 'cold'?","respuesta":"hot","categoria":"campeonato"},{"pregunta":"¿En qué año nació Miguel de Cervantes?","respuesta":"1547","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene trompa y vive en África?","respuesta":"Elefante","categoria":"campeonato"},{"pregunta":"How do you say 'amigo' in English?","respuesta":"friend","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer emperador romano?","respuesta":"Augusto","categoria":"campeonato"},{"pregunta":"¿Cuántos segundos tiene un minuto?","respuesta":"60","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 50 menos 23?","respuesta":"27","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Berlín?","respuesta":"Alemania","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta absorbe agua?","respuesta":"Raíz","categoria":"campeonato"},{"pregunta":"How do you say 'perro' in English?","respuesta":"dog","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'La Cenicienta'?","respuesta":"Perrault","categoria":"campeonato"},{"pregunta":"¿Cuánto es 6 x 8?","respuesta":"48","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano que baña Australia?","respuesta":"Pacífico","categoria":"campeonato"},{"pregunta":"What is the capital of Spain?","respuesta":"Madrid","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Lisboa?","respuesta":"Portugal","categoria":"campeonato"},{"pregunta":"¿Qué animal es conocido por su melena?","respuesta":"León","categoria":"campeonato"},{"pregunta":"How do you say 'mesa' in English?","respuesta":"table","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer hombre en viajar al espacio?","respuesta":"Gagarin","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene un año bisiesto?","respuesta":"366","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 14 + 29?","respuesta":"43","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de París?","respuesta":"Francia","categoria":"campeonato"},{"pregunta":"¿Qué parte del cuerpo usamos para correr?","respuesta":"Piernas","categoria":"campeonato"},{"pregunta":"How do you say 'niña' in English?","respuesta":"girl","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Lazarillo de Tormes'?","respuesta":"Anónimo","categoria":"campeonato"},{"pregunta":"¿Cuánto es 8 x 5?","respuesta":"40","categoria":"campeonato"},{"pregunta":"¿Cuál es el mar que baña las costas de Italia?","respuesta":"Mediterráneo","categoria":"campeonato"},{"pregunta":"What is the past of 'make'?","respuesta":"made","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Moscú?","respuesta":"Rusia","categoria":"campeonato"},{"pregunta":"¿Qué animal es conocido por su caparazón?","respuesta":"Tortuga","categoria":"campeonato"},{"pregunta":"How do you say 'coche' in English?","respuesta":"car","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer rey de España?","respuesta":"Carlos I","categoria":"campeonato"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"12","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 21 dividido entre 3?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Nueva York?","respuesta":"Estados Unidos","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta capta la luz?","respuesta":"Hoja","categoria":"campeonato"},{"pregunta":"How do you say 'agua' in English?","respuesta":"water","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Barco de Vapor'?","respuesta":"Sierra i Fabra","categoria":"campeonato"},{"pregunta":"¿Cuánto es 11 x 3?","respuesta":"33","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano que baña América del Sur?","respuesta":"Atlántico","categoria":"campeonato"},{"pregunta":"¿Qué color resulta de mezclar rojo y blanco?","respuesta":"Rosa","categoria":"campeonato"}]);}),
"[project]/src/questions/campeonato-3primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuántos continentes hay en el mundo?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el río más largo del mundo?\",\"respuesta\":\"Amazonas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un año?\",\"respuesta\":\"Trescientos sesenta y cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el océano más grande del mundo?\",\"respuesta\":\"Pacífico\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un hexágono?\",\"respuesta\":\"Seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el planeta más cercano al Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos huesos tiene el cuerpo humano?\",\"respuesta\":\"Doscientos seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal terrestre más grande?\",\"respuesta\":\"Elefante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es la capital de España?\",\"respuesta\":\"Madrid\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene la bandera de Francia?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal más rápido del mundo?\",\"respuesta\":\"Guepardo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos planetas hay en el sistema solar?\",\"respuesta\":\"Ocho\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más utilizado en la construcción?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual las plantas producen su alimento?\",\"respuesta\":\"Fotosíntesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más grande del mundo?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene febrero en un año bisiesto?\",\"respuesta\":\"Veintinueve\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el inventor del teléfono?\",\"respuesta\":\"Bell\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el idioma más hablado en el mundo?\",\"respuesta\":\"Chino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un octágono?\",\"respuesta\":\"Ocho\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más pequeño?\",\"respuesta\":\"Oceanía\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una joroba?\",\"respuesta\":\"Camello\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es la capital de Francia?\",\"respuesta\":\"París\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos dientes tiene un adulto promedio?\",\"respuesta\":\"Treinta y dos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta conocido como el planeta rojo?\",\"respuesta\":\"Marte\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el océano más pequeño del mundo?\",\"respuesta\":\"Ártico\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos anillos tiene el logo de los Juegos Olímpicos?\",\"respuesta\":\"Cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que pone huevos y tiene plumas?\",\"respuesta\":\"Gallina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país con más habitantes del mundo?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un pentágono?\",\"respuesta\":\"Cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual el agua se convierte en vapor?\",\"respuesta\":\"Evaporación\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal más grande del mundo?\",\"respuesta\":\"Ballena azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene el arcoíris?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el continente donde está Egipto?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el deporte más popular del mundo?\",\"respuesta\":\"Fútbol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene una semana?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene rayas negras y blancas?\",\"respuesta\":\"Cebra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más pequeño del mundo?\",\"respuesta\":\"Vaticano\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un cuadrado?\",\"respuesta\":\"Cuatro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta donde vivimos?\",\"respuesta\":\"Tierra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el río más caudaloso del mundo?\",\"respuesta\":\"Amazonas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos minutos tiene una hora?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el agua y tiene aletas?\",\"respuesta\":\"Pez\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más ligero?\",\"respuesta\":\"Litio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un año bisiesto?\",\"respuesta\":\"Trescientos sesenta y seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una trompa larga?\",\"respuesta\":\"Elefante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el planeta más grande del sistema solar?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos segundos tiene un minuto?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vuela y pone huevos?\",\"respuesta\":\"Pájaro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más largo del mundo?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un triángulo?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el objeto que usamos para medir el tiempo?\",\"respuesta\":\"Reloj\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más poblado?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un mes?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el mar y tiene tentáculos?\",\"respuesta\":\"Pulpo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país con más islas en el mundo?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un decágono?\",\"respuesta\":\"Diez\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta más cercano al Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal que tiene colmillos y vive en la selva?\",\"respuesta\":\"Tigre\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene abril?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un cuello largo?\",\"respuesta\":\"Jirafa\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más montañoso del mundo?\",\"respuesta\":\"Nepal\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene la bandera de Italia?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta que tiene anillos?\",\"respuesta\":\"Saturno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal que vive en el hielo y nada?\",\"respuesta\":\"Pingüino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene junio?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una melena y ruge?\",\"respuesta\":\"León\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más lluvioso del mundo?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un heptágono?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que produce miel?\",\"respuesta\":\"Abeja\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más frío del mundo?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un siglo?\",\"respuesta\":\"Treinta y seis mil quinientos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene manchas y corre rápido?\",\"respuesta\":\"Guepardo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más caluroso del mundo?\",\"respuesta\":\"Kuwait\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un eneágono?\",\"respuesta\":\"Nueve\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el agua y tiene caparazón?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más rico del mundo?\",\"respuesta\":\"Luxemburgo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un milenio?\",\"respuesta\":\"Trescientos sesenta y cinco mil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene alas y produce seda?\",\"respuesta\":\"Gusano de seda\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más seco del mundo?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un dodecágono?\",\"respuesta\":\"Doce\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en la playa?\",\"respuesta\":\"Cangrejo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más alto del mundo?\",\"respuesta\":\"Bután\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un lustro?\",\"respuesta\":\"Mil ochocientos veinticinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un pico y nada?\",\"respuesta\":\"Pato\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más antiguo del mundo?\",\"respuesta\":\"Irán\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un icoságono?\",\"respuesta\":\"Veinte\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua dulce?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más joven del mundo?\",\"respuesta\":\"Sudán del Sur\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un bimestre?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua salada?\",\"respuesta\":\"Cangrejo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más pequeño de América?\",\"respuesta\":\"San Cristóbal y Nieves\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un trimestre?\",\"respuesta\":\"Noventa\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una fábula?\",\"respuesta\":\"cuento\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el personaje principal de 'El Quijote'?\",\"respuesta\":\"Quijote\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una metáfora?\",\"respuesta\":\"comparación\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién es el autor de 'Platero y yo'?\",\"respuesta\":\"Juan Ramón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una rima?\",\"respuesta\":\"sonido\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el lugar donde ocurre una historia?\",\"respuesta\":\"escenario\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un poema?\",\"respuesta\":\"verso\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Principito'?\",\"respuesta\":\"Saint-Exupéry\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un personaje secundario?\",\"respuesta\":\"apoyo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Caperucita Roja'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una moraleja?\",\"respuesta\":\"enseñanza\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'La Cenicienta'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una novela?\",\"respuesta\":\"relato\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El Barco de Vapor'?\",\"respuesta\":\"Sierra i Fabra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un cuento?\",\"respuesta\":\"historia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Lazarillo de Tormes'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Don Juan Tenorio'?\",\"respuesta\":\"Zorrilla\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Mafalda'?\",\"respuesta\":\"Quino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El Hobbit'?\",\"respuesta\":\"Tolkien\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una obra de teatro?\",\"respuesta\":\"drama\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El diario de Ana Frank'?\",\"respuesta\":\"Ana\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Harry Potter'?\",\"respuesta\":\"Rowling\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Matilda'?\",\"respuesta\":\"Dahl\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El pequeño Nicolás'?\",\"respuesta\":\"Goscinny\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Charlie y la fábrica de chocolate'?\",\"respuesta\":\"Dahl\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El libro de la selva'?\",\"respuesta\":\"Kipling\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Pinocho'?\",\"respuesta\":\"Collodi\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Alicia en el país de las maravillas'?\",\"respuesta\":\"Carroll\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Peter Pan'?\",\"respuesta\":\"Barrie\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El patito feo'?\",\"respuesta\":\"Andersen\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El gato con botas'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Robinson Crusoe'?\",\"respuesta\":\"Defoe\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'La isla del tesoro'?\",\"respuesta\":\"Stevenson\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El flautista de Hamelín'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El mago de Oz'?\",\"respuesta\":\"Baum\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-4primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Qué planeta del sistema solar tiene el día más largo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal puede vivir tanto en el agua como en la tierra?\",\"respuesta\":\"Anfibio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué instrumento mide la intensidad de los terremotos?\",\"respuesta\":\"Sismógrafo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el principal componente del aire?\",\"respuesta\":\"Nitrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene el mayor número de países?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano es el más grande?\",\"respuesta\":\"Piel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día de la semana se considera el primero en muchos calendarios?\",\"respuesta\":\"Domingo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene la sangre cuando está dentro del cuerpo?\",\"respuesta\":\"Rojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por construir diques?\",\"respuesta\":\"Castor\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más cercano a la Tierra?\",\"respuesta\":\"Luna\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal es líquido a temperatura ambiente?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de volcanes activos?\",\"respuesta\":\"Indonesia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados y ángulos iguales?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce glóbulos rojos?\",\"respuesta\":\"Médula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene el mayor desierto del mundo?\",\"respuesta\":\"Antártida\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Internacional de la Tierra?\",\"respuesta\":\"22\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante un eclipse total de sol?\",\"respuesta\":\"Negro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de regenerar extremidades?\",\"respuesta\":\"Estrella\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más brillante en el cielo nocturno?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza principalmente en la fabricación de cables eléctricos?\",\"respuesta\":\"Cobre\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor extensión de selva tropical?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene un solo lado?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano controla el equilibrio?\",\"respuesta\":\"Cerebelo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de glaciares?\",\"respuesta\":\"Antártida\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Agua?\",\"respuesta\":\"22\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el agua en grandes cantidades?\",\"respuesta\":\"Azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de volar hacia atrás?\",\"respuesta\":\"Colibrí\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más grande del sistema solar?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de baterías recargables?\",\"respuesta\":\"Litio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de islas?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene más de cuatro lados?\",\"respuesta\":\"Pentágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano regula la temperatura?\",\"respuesta\":\"Piel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de especies animales?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Medio Ambiente?\",\"respuesta\":\"5\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el oro puro?\",\"respuesta\":\"Amarillo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de camuflaje?\",\"respuesta\":\"Camaleón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más cercano al sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de joyas?\",\"respuesta\":\"Oro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de petróleo?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus ángulos rectos?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano filtra las toxinas?\",\"respuesta\":\"Hígado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de montañas?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Salud?\",\"respuesta\":\"7\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cobre oxidado?\",\"respuesta\":\"Verde\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de construir telarañas?\",\"respuesta\":\"Araña\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el día?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de utensilios de cocina?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de lagos?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados iguales?\",\"respuesta\":\"Cuadrado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce lágrimas?\",\"respuesta\":\"Ojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de ríos?\",\"respuesta\":\"América\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de los Océanos?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante el amanecer?\",\"respuesta\":\"Naranja\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de nadar largas distancias?\",\"respuesta\":\"Ballena\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante la noche?\",\"respuesta\":\"Luna\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de monedas?\",\"respuesta\":\"Níquel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de agua dulce?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados diferentes?\",\"respuesta\":\"Triángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce saliva?\",\"respuesta\":\"Glándula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de desiertos?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Alimentación?\",\"respuesta\":\"16\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el hierro oxidado?\",\"respuesta\":\"Rojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de volar largas distancias?\",\"respuesta\":\"Águila\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el atardecer?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de aviones?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de gas natural?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus ángulos iguales?\",\"respuesta\":\"Hexágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce hormonas?\",\"respuesta\":\"Tiroides\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de volcanes?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Clima?\",\"respuesta\":\"23\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante una tormenta?\",\"respuesta\":\"Gris\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de correr largas distancias?\",\"respuesta\":\"Caballo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el crepúsculo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de herramientas?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de carbón?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados paralelos?\",\"respuesta\":\"Paralelogramo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce glóbulos blancos?\",\"respuesta\":\"Médula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de especies vegetales?\",\"respuesta\":\"América\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Educación?\",\"respuesta\":\"24\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante el mediodía?\",\"respuesta\":\"Azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de saltar largas distancias?\",\"respuesta\":\"Canguro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el solsticio de verano?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de cables de alta tensión?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de litio?\",\"respuesta\":\"Bolivia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados curvos?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce enzimas digestivas?\",\"respuesta\":\"Páncreas\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-5primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el río más largo del mundo?\",\"respuesta\":\"Nilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico descubrió la gravedad?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is 15 multiplied by 3?\",\"respuesta\":\"45\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización antigua construyó Machu Picchu?\",\"respuesta\":\"Incas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más grande?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿En qué año terminó la Segunda Guerra Mundial?\",\"respuesta\":\"1945\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the capital of Australia?\",\"respuesta\":\"Canberra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es esencial para la respiración humana?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué batalla marcó el inicio de la Revolución Francesa?\",\"respuesta\":\"Bastilla\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the synonym of 'beautiful'?\",\"respuesta\":\"Pretty\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tratado puso fin a la Guerra de Independencia de Estados Unidos?\",\"respuesta\":\"París\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta es el más cercano al sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un hexágono?\",\"respuesta\":\"Seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué instrumento musical tiene teclas blancas y negras?\",\"respuesta\":\"Piano\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the cube root of 27?\",\"respuesta\":\"3\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué archipiélago español es conocido por sus playas?\",\"respuesta\":\"Canarias\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué archipiélago español es famoso por su fiesta?\",\"respuesta\":\"Baleares\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización antigua inventó el papel?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué líder sudafricano fue presidente tras el apartheid?\",\"respuesta\":\"Mandela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the past tense of 'read'?\",\"respuesta\":\"Read\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué rey español fue conocido como 'el Católico'?\",\"respuesta\":\"Fernando\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué río atraviesa la ciudad de Roma?\",\"respuesta\":\"Tíber\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué navegante portugués llegó a Brasil?\",\"respuesta\":\"Cabral\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the plural of 'foot'?\",\"respuesta\":\"Feet\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué cordillera atraviesa Sudamérica?\",\"respuesta\":\"Andes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Bolívar en su independencia?\",\"respuesta\":\"Colombia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla balear es conocida por su tranquilidad?\",\"respuesta\":\"Menorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the opposite of 'dark'?\",\"respuesta\":\"Light\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tratado puso fin a la Primera Guerra Mundial?\",\"respuesta\":\"Versalles\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria tiene el Teide?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué río atraviesa Egipto?\",\"respuesta\":\"Nilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Gandhi en su independencia?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the synonym of 'quick'?\",\"respuesta\":\"Fast\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida como 'la isla bonita'?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Mandela en su presidencia?\",\"respuesta\":\"Sudáfrica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización construyó Chichén Itzá?\",\"respuesta\":\"Mayas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the present continuous of 'run'?\",\"respuesta\":\"Running\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Hidalgo en su independencia?\",\"respuesta\":\"México\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de idiomas oficiales?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué escritor escribió 'Don Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the antonym of 'strong'?\",\"respuesta\":\"Weak\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de premios Nobel?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por sus vinos?\",\"respuesta\":\"Lanzarote\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Franco en su dictadura?\",\"respuesta\":\"España\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria tiene dunas famosas?\",\"respuesta\":\"Fuerteventura\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Bolívar en su independencia?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla balear es conocida por su catedral?\",\"respuesta\":\"Mallorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por San Martín en su independencia?\",\"respuesta\":\"Argentina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su tranquilidad?\",\"respuesta\":\"La Gomera\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Castro en su revolución?\",\"respuesta\":\"Cuba\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Lenin en su revolución?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Mao en su revolución?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Pinochet en su dictadura?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Chávez en su presidencia?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Correa en su presidencia?\",\"respuesta\":\"Ecuador\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Allende en su presidencia?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Perón en su presidencia?\",\"respuesta\":\"Argentina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Vargas en su presidencia?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Cárdenas en su presidencia?\",\"respuesta\":\"México\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Roosevelt en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Kennedy en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Obama en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Merkel en su cancillería?\",\"respuesta\":\"Alemania\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Thatcher en su primer ministerio?\",\"respuesta\":\"Reino Unido\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Trudeau en su primer ministerio?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Macron en su presidencia?\",\"respuesta\":\"Francia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Sánchez en su presidencia?\",\"respuesta\":\"España\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 25 x 4?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el número primo más pequeño?\",\"respuesta\":\"2\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 81 divided by 9?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un octágono?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué unidad se utiliza para medir la masa?\",\"respuesta\":\"Kilogramo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 12 al cuadrado?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 64?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos segundos tiene un minuto?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados iguales?\",\"respuesta\":\"Cuadrado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 7 x 8?\",\"respuesta\":\"56\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is 100 minus 37?\",\"respuesta\":\"63\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos grados tiene un triángulo equilátero?\",\"respuesta\":\"180\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 50?\",\"respuesta\":\"L\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 15 + 27?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 45 divided by 5?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número sigue después del 99?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un pentágono?\",\"respuesta\":\"5\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el doble de 25?\",\"respuesta\":\"50\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 12 and 23?\",\"respuesta\":\"35\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 9 x 9?\",\"respuesta\":\"81\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es la mitad de 50?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos minutos tiene una hora?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the product of 6 and 7?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 100 dividido entre 4?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el triple de 15?\",\"respuesta\":\"45\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 8 times 12?\",\"respuesta\":\"96\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 11 al cuadrado?\",\"respuesta\":\"121\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 100?\",\"respuesta\":\"C\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 14 + 28?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 49?\",\"respuesta\":\"7\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un triángulo?\",\"respuesta\":\"3\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el sucesor de 199?\",\"respuesta\":\"200\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 18 dividido entre 3?\",\"respuesta\":\"6\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 45 and 55?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 20 x 5?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el cuadrado de 10?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 72 divided by 8?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 13 x 7?\",\"respuesta\":\"91\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el doble de 12?\",\"respuesta\":\"24\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the product of 9 and 11?\",\"respuesta\":\"99\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 8 x 8?\",\"respuesta\":\"64\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es la mitad de 64?\",\"respuesta\":\"32\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 33 and 44?\",\"respuesta\":\"77\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 7 x 6?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el triple de 10?\",\"respuesta\":\"30\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 15 times 4?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 12 x 12?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 500?\",\"respuesta\":\"D\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 16 + 24?\",\"respuesta\":\"40\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 36?\",\"respuesta\":\"6\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 125 dividido entre 5?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 256 dividido entre 8?\",\"respuesta\":\"32\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-6primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el valor de π (pi) con dos decimales?\",\"respuesta\":\"3.14\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual las plantas producen su alimento?\",\"respuesta\":\"Fotosíntesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La Ilíada'?\",\"respuesta\":\"Homero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 2³?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de husos horarios?\",\"respuesta\":\"Francia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus lados diferentes?\",\"respuesta\":\"Escaleno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano filtra la sangre?\",\"respuesta\":\"Riñón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico propuso la teoría de la relatividad?\",\"respuesta\":\"Einstein\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de división celular en organismos eucariotas?\",\"respuesta\":\"Mitosis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma tiene más hablantes nativos en el mundo?\",\"respuesta\":\"Chino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más abundante en la corteza terrestre?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Conde de Montecristo'?\",\"respuesta\":\"Dumas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el día más largo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene dos lados iguales?\",\"respuesta\":\"Isósceles\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es necesario para la respiración celular?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La República'?\",\"respuesta\":\"Platón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 5²?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de volcanes activos?\",\"respuesta\":\"Indonesia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de ocho lados?\",\"respuesta\":\"Octágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce insulina?\",\"respuesta\":\"Páncreas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico descubrió la penicilina?\",\"respuesta\":\"Fleming\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de formación de montañas?\",\"respuesta\":\"Orogénesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Brasil?\",\"respuesta\":\"Portugués\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Au'?\",\"respuesta\":\"Oro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Principito'?\",\"respuesta\":\"Saint-Exupéry\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el año más largo?\",\"respuesta\":\"Neptuno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus ángulos agudos?\",\"respuesta\":\"Acutángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más abundante en la atmósfera terrestre?\",\"respuesta\":\"Nitrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Capital'?\",\"respuesta\":\"Marx\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 10³?\",\"respuesta\":\"1000\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de Patrimonios de la Humanidad?\",\"respuesta\":\"Italia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de diez lados?\",\"respuesta\":\"Decágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano bombea sangre?\",\"respuesta\":\"Corazón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló las leyes del movimiento?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por agua?\",\"respuesta\":\"Hidráulica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Egipto?\",\"respuesta\":\"Árabe\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Fe'?\",\"respuesta\":\"Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La Divina Comedia'?\",\"respuesta\":\"Dante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor número de lunas?\",\"respuesta\":\"Saturno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo recto?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más ligero?\",\"respuesta\":\"Hidrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 3³?\",\"respuesta\":\"27\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de islas?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de doce lados?\",\"respuesta\":\"Dodecágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano almacena bilis?\",\"respuesta\":\"Vesícula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la tabla periódica?\",\"respuesta\":\"Mendeleev\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por viento?\",\"respuesta\":\"Eólica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Japón?\",\"respuesta\":\"Japonés\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Hg'?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'Crimen y castigo'?\",\"respuesta\":\"Dostoyevski\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el menor tamaño?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo obtuso?\",\"respuesta\":\"Obtusángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es necesario para la combustión?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió '1984'?\",\"respuesta\":\"Orwell\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 4³?\",\"respuesta\":\"64\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de lagos?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de veinte lados?\",\"respuesta\":\"Icoságono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce bilis?\",\"respuesta\":\"Hígado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la teoría de la evolución?\",\"respuesta\":\"Darwin\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por hielo?\",\"respuesta\":\"Glacial\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Rusia?\",\"respuesta\":\"Ruso\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Na'?\",\"respuesta\":\"Sodio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La casa de Bernarda Alba'?\",\"respuesta\":\"Lorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor tamaño?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus lados iguales?\",\"respuesta\":\"Equilátero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más pesado?\",\"respuesta\":\"Radón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La metamorfosis'?\",\"respuesta\":\"Kafka\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 6³?\",\"respuesta\":\"216\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de desiertos?\",\"respuesta\":\"Australia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de quince lados?\",\"respuesta\":\"Pentadecágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano regula el metabolismo?\",\"respuesta\":\"Tiroides\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la ley de la gravitación universal?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por gravedad?\",\"respuesta\":\"Gravitacional\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en México?\",\"respuesta\":\"Español\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'C'?\",\"respuesta\":\"Carbono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El retrato de Dorian Gray'?\",\"respuesta\":\"Wilde\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor campo magnético?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo de 90 grados?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más abundante en el universo?\",\"respuesta\":\"Hidrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Lazarillo de Tormes'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 7³?\",\"respuesta\":\"343\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de glaciares?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de cien lados?\",\"respuesta\":\"Hectágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano controla el sistema nervioso?\",\"respuesta\":\"Cerebro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la teoría del Big Bang?\",\"respuesta\":\"Lemaître\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por agua subterránea?\",\"respuesta\":\"Kárstica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Alemania?\",\"respuesta\":\"Alemán\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'O'?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tipo de roca se forma a partir de lava enfriada?\",\"respuesta\":\"Ígnea\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 256 ÷ 16?\",\"respuesta\":\"16\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'montaña' al inglés?\",\"respuesta\":\"Mountain\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal tiene la mordida más fuerte del reino animal?\",\"respuesta\":\"Cocodrilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 15 x 15?\",\"respuesta\":\"225\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'río' al inglés?\",\"respuesta\":\"River\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planta es conocida por producir oxígeno durante el día?\",\"respuesta\":\"Árbol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 144 ÷ 12?\",\"respuesta\":\"12\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'bosque' al inglés?\",\"respuesta\":\"Forest\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal puede cambiar de color para camuflarse?\",\"respuesta\":\"Camaleón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 12²?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con mayor electronegatividad?\",\"respuesta\":\"Flúor\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Suiza además del alemán y el francés?\",\"respuesta\":\"Italiano\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/components/ChampionshipQuiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useQuizLogic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ChampionshipQuiz = ({ userGrade, userSchool })=>{
    _s();
    const { preguntaActual, setPreguntaActual, objetoPreguntaActual, setObjetoPreguntaActual, respuestaCorrecta, setRespuestaCorrecta, respuestaUsuario, setRespuestaUsuario, feedback, setFeedback, preguntasUsadas, setPreguntasUsadas, timeLeft, setTimeLeft, bloqueado, setBloqueado, aciertos, setAciertos, puntuacionTotal, setPuntuacionTotal, preguntaNumero, setPreguntaNumero, comprobarRespuesta, generarPregunta, resetQuiz } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuizLogic"])({
        timeLimit: 300,
        onTimeUp: {
            "ChampionshipQuiz.useQuizLogic": ()=>{
            // Lógica específica para campeonatos
            }
        }["ChampionshipQuiz.useQuizLogic"]
    });
    const [currentUser, setCurrentUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [sessionResponses, setSessionResponses] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    // Cargar usuario actual al montar el componente
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ChampionshipQuiz.useEffect": ()=>{
            const loadUser = {
                "ChampionshipQuiz.useEffect.loadUser": async ()=>{
                    try {
                        const response = await fetch('/api/auth/me');
                        if (response.ok) {
                            const user = await response.json();
                            setCurrentUser(user);
                        }
                    } catch (error) {
                        console.error('Error loading user:', error);
                    }
                }
            }["ChampionshipQuiz.useEffect.loadUser"];
            loadUser();
        }
    }["ChampionshipQuiz.useEffect"], []);
    // Función para actualizar likes del usuario
    const updateUserLikes = async (likesDelta)=>{
        if (!currentUser) return;
        try {
            const response = await fetch('/api/user/update-likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likesDelta
                })
            });
            if (response.ok) {
                const updatedUser = await response.json();
                setCurrentUser(updatedUser);
                // Emitir evento para refrescar perfil
                window.dispatchEvent(new Event('profileUpdate'));
            }
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };
    // Función para actualizar estadísticas de campeonato
    const updateChampionshipStats = async (stats)=>{
        try {
            const response = await fetch('/api/stats/championship', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(stats)
            });
            if (!response.ok) {
                console.error('Error updating championship stats');
            }
        } catch (error) {
            console.error('Error updating championship stats:', error);
        }
    };
    // Cargar preguntas de campeonato según el curso
    let preguntas = [];
    try {
        preguntas = __turbopack_context__.f({
            "../questions/campeonato-1primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-1primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-1primaria.json (json)")
            },
            "../questions/campeonato-2primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-2primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-2primaria.json (json)")
            },
            "../questions/campeonato-3primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-3primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-3primaria.json (json)")
            },
            "../questions/campeonato-4primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-4primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-4primaria.json (json)")
            },
            "../questions/campeonato-5primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-5primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-5primaria.json (json)")
            },
            "../questions/campeonato-6primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-6primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-6primaria.json (json)")
            }
        })(`../questions/campeonato-${userGrade}primaria.json`);
    } catch  {
        preguntas = [];
    }
    const handleGenerarPregunta = ()=>{
        if (preguntasUsadas.length >= 25) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡Has completado las 25 preguntas del campeonato!");
            setBloqueado(true);
            // Calcular estadísticas de la sesión y enviar a API
            if (currentUser) {
                const now = new Date();
                let temporada = now.getFullYear();
                if (now.getMonth() + 1 >= 10) temporada += 1;
                const temporadaKey = `t${temporada}`;
                // Calcular de las respuestas de la sesión
                const acertadasSesion = sessionResponses.filter((r)=>r.correcta).length;
                const falladasSesion = sessionResponses.filter((r)=>!r.correcta).length;
                const likesSesion = sessionResponses.reduce((sum, r)=>sum + (r.likes || 0), 0);
                const ganadoSesion = acertadasSesion > 12 ? 1 : 0;
                const perdidoSesion = acertadasSesion <= 12 ? 1 : 0;
                const stats = {
                    nick: currentUser.nick,
                    centro: currentUser.centro,
                    curso: currentUser.curso,
                    temporada: temporadaKey,
                    acertadas: acertadasSesion,
                    falladas: falladasSesion,
                    likes: likesSesion,
                    ganado: ganadoSesion,
                    perdido: perdidoSesion,
                    tipo: currentUser.tipo
                };
                updateChampionshipStats(stats);
                setSessionResponses([]);
            }
            return;
        }
        generarPregunta(preguntas, 25);
    };
    const handleComprobarRespuesta = ()=>{
        if (bloqueado) return;
        const esCorrecta = respuestaUsuario.toLowerCase().trim() === respuestaCorrecta.toLowerCase().trim();
        setBloqueado(true);
        let likesDelta = 0;
        if (esCorrecta) {
            setFeedback("¡Correcto! 🎉");
            likesDelta = timeLeft > 120 ? 2 : 1;
        } else {
            setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta}`);
            likesDelta = timeLeft > 120 ? -1 : -2;
        }
        updateUserLikes(likesDelta);
        const respuesta = {
            pregunta: preguntaActual,
            respuestaUsuario,
            respuestaCorrecta,
            correcta: esCorrecta,
            tiempo: timeLeft,
            likes: likesDelta
        };
        setSessionResponses((prev)=>[
                ...prev,
                respuesta
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-yellow-100 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-2",
                children: "Modo Campeonato"
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Curso seleccionado: ",
                    userGrade,
                    "º Primaria"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Centro escolar: ",
                    userSchool || "No especificado"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].primary + " mt-2",
                onClick: handleGenerarPregunta,
                children: "Generar pregunta de campeonato"
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 183,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold mb-2",
                        children: preguntaActual
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 188,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold text-lg mb-2",
                        children: [
                            "⏰ Tiempo: ",
                            Math.floor(timeLeft / 60),
                            ":",
                            (timeLeft % 60).toString().padStart(2, '0'),
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 189,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border rounded px-2 py-1 w-full mb-2",
                        value: respuestaUsuario,
                        onChange: (e)=>setRespuestaUsuario(e.target.value),
                        placeholder: "Escribe tu respuesta aquí",
                        disabled: bloqueado
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 190,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].success,
                        onClick: handleComprobarRespuesta,
                        disabled: bloqueado,
                        children: "Enviar respuesta"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 198,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 font-bold",
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 201,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 187,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            feedback && !preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 font-bold text-red-600",
                children: feedback
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 204,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
        lineNumber: 179,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChampionshipQuiz, "Nrpt5H7GtPtQS9g9KIoN8c/6GaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuizLogic"]
    ];
});
_c = ChampionshipQuiz;
const __TURBOPACK__default__export__ = ChampionshipQuiz;
var _c;
__turbopack_context__.k.register(_c, "ChampionshipQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/questions/general-1primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuánto es 2 + 3?","respuesta":"5","categoria":"General"},{"pregunta":"¿Cuál es la capital de España?","respuesta":"Madrid","categoria":"General"},{"pregunta":"¿Cómo se dice 'gato' en inglés?","respuesta":"cat","categoria":"General"},{"pregunta":"¿Qué planeta es el tercero desde el Sol?","respuesta":"Tierra","categoria":"General"},{"pregunta":"¿Quién escribió 'El Quijote'?","respuesta":"Cervantes","categoria":"General"},{"pregunta":"¿Cuántos días tiene una semana?","respuesta":"Siete","categoria":"General"},{"pregunta":"¿Qué animal dice miau?","respuesta":"Gato","categoria":"General"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"Doce","categoria":"General"},{"pregunta":"¿Qué planeta es el tercero desde el Sol?","respuesta":"Tierra","categoria":"General"},{"pregunta":"¿Cómo se dice 'gato' en inglés?","respuesta":"Cat","categoria":"General"},{"pregunta":"¿Qué letra viene después de la A?","respuesta":"B","categoria":"General"},{"pregunta":"¿Cuánto es 2 + 3?","respuesta":"Cinco","categoria":"General"},{"pregunta":"¿Qué animal dice miau?","respuesta":"Gato","categoria":"General"},{"pregunta":"¿Cuántos colores tiene el arcoíris?","respuesta":"Siete","categoria":"General"},{"pregunta":"¿Qué gas respiramos para vivir?","respuesta":"Oxígeno","categoria":"General"},{"pregunta":"¿Cómo se llama el continente donde vivimos?","respuesta":"Europa","categoria":"General"},{"pregunta":"¿Como se llama el pais donde vivimos?","respuesta":"España","categoria":"General"}]);}),
"[project]/src/questions/general-2primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el planeta más grande del sistema solar?\",\"respuesta\":\"Júpiter\",\"categoria\":\"General\"},{\"pregunta\":\"What is the plural of 'child'?\",\"respuesta\":\"children\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién escribió 'El Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 7 + 8?\",\"respuesta\":\"15\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal pone huevos y vuela?\",\"respuesta\":\"Pájaro\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'gato' in English?\",\"respuesta\":\"cat\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué continente está Brasil?\",\"respuesta\":\"América\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el inventor de la bombilla?\",\"respuesta\":\"Edison\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se usa para medir la temperatura?\",\"respuesta\":\"Termómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el color que resulta de mezclar azul y amarillo?\",\"respuesta\":\"Verde\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué parte del cuerpo usamos para escuchar?\",\"respuesta\":\"Oído\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el proceso por el que las plantas fabrican su alimento?\",\"respuesta\":\"Fotosíntesis\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién descubrió América?\",\"respuesta\":\"Colón\",\"categoria\":\"General\"},{\"pregunta\":\"What is the past of 'go'?\",\"respuesta\":\"went\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es la capital de España?\",\"respuesta\":\"Madrid\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido como el rey de la selva?\",\"respuesta\":\"León\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 9 x 6?\",\"respuesta\":\"54\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el continente más grande?\",\"respuesta\":\"Asia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana es el primero?\",\"respuesta\":\"Lunes\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el satélite natural de la Tierra?\",\"respuesta\":\"Luna\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué fruta es amarilla y se pela para comer?\",\"respuesta\":\"Plátano\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el animal más rápido del mundo?\",\"respuesta\":\"Guepardo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién fue el primer presidente de Estados Unidos?\",\"respuesta\":\"Washington\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'libro' in English?\",\"respuesta\":\"book\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué aparato sirve para ver objetos lejanos?\",\"respuesta\":\"Telescopio\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el proceso de cambiar de sólido a líquido?\",\"respuesta\":\"Fusión\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal vive en el agua y tiene aletas?\",\"respuesta\":\"Pez\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el órgano principal de la respiración?\",\"respuesta\":\"Pulmón\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta está más cerca del Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién pintó la Mona Lisa?\",\"respuesta\":\"Leonardo\",\"categoria\":\"General\"},{\"pregunta\":\"What is the opposite of 'big'?\",\"respuesta\":\"small\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la Torre Eiffel?\",\"respuesta\":\"Francia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el inventor del teléfono?\",\"respuesta\":\"Bell\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal tiene trompa y grandes orejas?\",\"respuesta\":\"Elefante\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el metal más usado en monedas?\",\"respuesta\":\"Cobre\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 100 - 37?\",\"respuesta\":\"63\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué parte de la planta absorbe agua?\",\"respuesta\":\"Raíz\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el proceso de pasar de líquido a gas?\",\"respuesta\":\"Evaporación\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal tiene caparazón y camina lento?\",\"respuesta\":\"Tortuga\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el hueso más largo del cuerpo humano?\",\"respuesta\":\"Fémur\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es conocido como el planeta rojo?\",\"respuesta\":\"Marte\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el dios principal de los griegos?\",\"respuesta\":\"Zeus\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'escuela' in English?\",\"respuesta\":\"school\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la Gran Muralla?\",\"respuesta\":\"China\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el barco de Colón?\",\"respuesta\":\"Santa María\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los egipcios para medir el tiempo?\",\"respuesta\":\"Reloj de sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el rey de Macedonia?\",\"respuesta\":\"Alejandro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 12 dividido entre 3?\",\"respuesta\":\"4\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué ciudad vivían los romanos?\",\"respuesta\":\"Roma\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal tiene rayas negras y blancas?\",\"respuesta\":\"Cebra\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuál es el líquido vital para los seres vivos?\",\"respuesta\":\"Agua\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué parte del cuerpo usamos para ver?\",\"respuesta\":\"Ojo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el proceso de cambiar de gas a líquido?\",\"respuesta\":\"Condensación\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el dios de la guerra romano?\",\"respuesta\":\"Marte\",\"categoria\":\"General\"},{\"pregunta\":\"What is the past of 'eat'?\",\"respuesta\":\"ate\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está Machu Picchu?\",\"respuesta\":\"Perú\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama la civilización de las pirámides de México?\",\"respuesta\":\"Maya\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué invento permitió volar?\",\"respuesta\":\"Avión\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el rey de España cuando Colón viajó?\",\"respuesta\":\"Fernando\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué ciudad está la Estatua de la Libertad?\",\"respuesta\":\"Nueva York\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios del trueno nórdico?\",\"respuesta\":\"Thor\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 25 x 2?\",\"respuesta\":\"50\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en Roma?\",\"respuesta\":\"Romana\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador francés famoso?\",\"respuesta\":\"Napoleón\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está el Taj Mahal?\",\"respuesta\":\"India\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el primer libro impreso?\",\"respuesta\":\"Biblia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los fenicios para navegar?\",\"respuesta\":\"Barco\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el dios del mar griego?\",\"respuesta\":\"Poseidón\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'madre' in English?\",\"respuesta\":\"mother\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Petra?\",\"respuesta\":\"Jordania\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el emperador romano que construyó el muro en Inglaterra?\",\"respuesta\":\"Adriano\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los egipcios para escribir?\",\"respuesta\":\"Papiro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el dios de la sabiduría egipcio?\",\"respuesta\":\"Thot\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 30 + 17?\",\"respuesta\":\"47\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Atenas?\",\"respuesta\":\"Grecia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el monumento más famoso de París?\",\"respuesta\":\"Eiffel\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los griegos para competir?\",\"respuesta\":\"Olimpiadas\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el faraón niño?\",\"respuesta\":\"Tutankamón\",\"categoria\":\"General\"},{\"pregunta\":\"What is the opposite of 'cold'?\",\"respuesta\":\"hot\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Berlín?\",\"respuesta\":\"Alemania\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la guerra griego?\",\"respuesta\":\"Ares\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en Egipto?\",\"respuesta\":\"Egipcia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador romano que persiguió a los cristianos?\",\"respuesta\":\"Nerón\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Moscú?\",\"respuesta\":\"Rusia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la medicina griego?\",\"respuesta\":\"Asclepio\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los chinos para viajar?\",\"respuesta\":\"Brújula\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el rey de Inglaterra famoso por sus esposas?\",\"respuesta\":\"Enrique\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'hermano' in English?\",\"respuesta\":\"brother\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Lisboa?\",\"respuesta\":\"Portugal\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la muerte egipcio?\",\"respuesta\":\"Osiris\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en México?\",\"respuesta\":\"Azteca\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador romano que dividió el imperio?\",\"respuesta\":\"Diocleciano\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cuánto es 18 - 9?\",\"respuesta\":\"9\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Viena?\",\"respuesta\":\"Austria\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la belleza griego?\",\"respuesta\":\"Afrodita\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los egipcios para construir?\",\"respuesta\":\"Ladrillo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el faraón que construyó la Gran Pirámide?\",\"respuesta\":\"Keops\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Praga?\",\"respuesta\":\"Chequia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la música griego?\",\"respuesta\":\"Apolo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en Perú?\",\"respuesta\":\"Inca\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador romano que construyó el Coliseo?\",\"respuesta\":\"Vespasiano\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Estambul?\",\"respuesta\":\"Turquía\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la luna egipcio?\",\"respuesta\":\"Jonsu\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los griegos para contar historias?\",\"respuesta\":\"Teatro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el rey de Francia durante la Revolución?\",\"respuesta\":\"Luis\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'ventana' in English?\",\"respuesta\":\"window\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Bruselas?\",\"respuesta\":\"Bélgica\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la agricultura griego?\",\"respuesta\":\"Deméter\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en India?\",\"respuesta\":\"India\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador romano que legalizó el cristianismo?\",\"respuesta\":\"Constantino\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Oslo?\",\"respuesta\":\"Noruega\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios del vino griego?\",\"respuesta\":\"Dionisio\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los egipcios para navegar?\",\"respuesta\":\"Barco\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el faraón que tenía una máscara dorada?\",\"respuesta\":\"Tutankamón\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Varsovia?\",\"respuesta\":\"Polonia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la caza griego?\",\"respuesta\":\"Artemisa\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en Jordania?\",\"respuesta\":\"Nabatea\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el emperador romano que construyó el Panteón?\",\"respuesta\":\"Adriano\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Budapest?\",\"respuesta\":\"Hungría\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios del fuego griego?\",\"respuesta\":\"Hefesto\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué inventaron los chinos para iluminar?\",\"respuesta\":\"Faro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Quién era el rey de Macedonia que conquistó Persia?\",\"respuesta\":\"Alejandro\",\"categoria\":\"General\"},{\"pregunta\":\"How do you say 'flor' in English?\",\"respuesta\":\"flower\",\"categoria\":\"General\"},{\"pregunta\":\"¿En qué país está la ciudad de Atenas?\",\"respuesta\":\"Grecia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se llama el dios de la tierra egipcio?\",\"respuesta\":\"Geb\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué civilización vivía en Turquía?\",\"respuesta\":\"Hitita\",\"categoria\":\"General\"},{\"pregunta\":\"¿Cómo se dice 'perro' en inglés?\",\"respuesta\":\"dog\",\"categoria\":\"General\"}]"));}),
"[project]/src/questions/general-3primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuántos días tiene una semana?","respuesta":"Siete","categoria":"General"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"Doce","categoria":"General"},{"pregunta":"¿Qué planeta es conocido como el planeta rojo?","respuesta":"Marte","categoria":"General"},{"pregunta":"¿Cuántos colores tiene el arcoíris?","respuesta":"Siete","categoria":"General"},{"pregunta":"¿Cómo se llama el animal más rápido del mundo?","respuesta":"Guepardo","categoria":"General"},{"pregunta":"¿Cuál es el océano más grande del mundo?","respuesta":"Pacífico","categoria":"General"},{"pregunta":"¿Cuántos lados tiene un triángulo?","respuesta":"Tres","categoria":"General"},{"pregunta":"¿Cómo se llama el inventor de la bombilla?","respuesta":"Edison","categoria":"General"},{"pregunta":"¿Qué gas respiramos para vivir?","respuesta":"Oxígeno","categoria":"General"},{"pregunta":"¿Cómo se llama el continente donde vivimos?","respuesta":"Europa","categoria":"General"},{"pregunta":"¿Cuántos minutos tiene una hora?","respuesta":"Sesenta","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que pone huevos y tiene plumas?","respuesta":"Gallina","categoria":"General"},{"pregunta":"¿Qué número viene después del 9?","respuesta":"Diez","categoria":"General"},{"pregunta":"¿Cómo se llama el líquido que bebemos para vivir?","respuesta":"Agua","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'L'?","respuesta":"Lunes","categoria":"General"},{"pregunta":"¿Cómo se llama el astro que nos da luz y calor?","respuesta":"Sol","categoria":"General"},{"pregunta":"¿Cuántas patas tiene una araña?","respuesta":"Ocho","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que vive en el agua y tiene aletas?","respuesta":"Pez","categoria":"General"},{"pregunta":"¿Qué número viene antes del 100?","respuesta":"Noventa y nueve","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para escribir?","respuesta":"Lápiz","categoria":"General"},{"pregunta":"¿Cuántos días tiene un año bisiesto?","respuesta":"Trescientos sesenta y seis","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene una trompa larga?","respuesta":"Elefante","categoria":"General"},{"pregunta":"¿Qué número viene después del 99?","respuesta":"Cien","categoria":"General"},{"pregunta":"¿Cómo se llama el planeta más grande del sistema solar?","respuesta":"Júpiter","categoria":"General"},{"pregunta":"¿Cuántos segundos tiene un minuto?","respuesta":"Sesenta","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que vuela y pone huevos?","respuesta":"Pájaro","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'M'?","respuesta":"Martes","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para medir el tiempo?","respuesta":"Reloj","categoria":"General"},{"pregunta":"¿Qué número viene antes del 1.000?","respuesta":"Novecientos noventa y nueve","categoria":"General"},{"pregunta":"¿Cómo se llama el líquido que usamos para limpiar?","respuesta":"Agua","categoria":"General"},{"pregunta":"¿Cuántos lados tiene un cuadrado?","respuesta":"Cuatro","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene rayas negras y blancas?","respuesta":"Cebra","categoria":"General"},{"pregunta":"¿Qué número viene después del 1.000?","respuesta":"Mil uno","categoria":"General"},{"pregunta":"¿Cómo se llama el planeta donde vivimos?","respuesta":"Tierra","categoria":"General"},{"pregunta":"¿Cuántos días tiene un mes?","respuesta":"Treinta","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que vive en el mar y tiene tentáculos?","respuesta":"Pulpo","categoria":"General"},{"pregunta":"¿Qué número viene antes del 10?","respuesta":"Nueve","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para cortar papel?","respuesta":"Tijeras","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'D'?","respuesta":"Domingo","categoria":"General"},{"pregunta":"¿Cómo se llama el astro que vemos por la noche?","respuesta":"Luna","categoria":"General"},{"pregunta":"¿Cuántos colores tiene la bandera de España?","respuesta":"Dos","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene una joroba?","respuesta":"Camello","categoria":"General"},{"pregunta":"¿Qué número viene después del 50?","respuesta":"Cincuenta y uno","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para leer?","respuesta":"Libro","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'S'?","respuesta":"Sábado","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que vive en el agua y tiene caparazón?","respuesta":"Tortuga","categoria":"General"},{"pregunta":"¿Qué número viene antes del 20?","respuesta":"Diecinueve","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para escribir en la pizarra?","respuesta":"Tiza","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'J'?","respuesta":"Jueves","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene manchas y corre rápido?","respuesta":"Guepardo","categoria":"General"},{"pregunta":"¿Qué número viene después del 30?","respuesta":"Treinta y uno","categoria":"General"},{"pregunta":"¿Cómo se llama el planeta más cercano al Sol?","respuesta":"Mercurio","categoria":"General"},{"pregunta":"¿Cuántos días tiene febrero en un año normal?","respuesta":"Veintiocho","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene colmillos y vive en la selva?","respuesta":"Tigre","categoria":"General"},{"pregunta":"¿Qué número viene antes del 40?","respuesta":"Treinta y nueve","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para medir centímetros?","respuesta":"Regla","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'M'?","respuesta":"Miércoles","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene alas y produce miel?","respuesta":"Abeja","categoria":"General"},{"pregunta":"¿Qué número viene después del 70?","respuesta":"Setenta y uno","categoria":"General"},{"pregunta":"¿Cómo se llama el planeta que tiene anillos?","respuesta":"Saturno","categoria":"General"},{"pregunta":"¿Cuántos días tiene abril?","respuesta":"Treinta","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene un cuello largo?","respuesta":"Jirafa","categoria":"General"},{"pregunta":"¿Qué número viene antes del 60?","respuesta":"Cincuenta y nueve","categoria":"General"},{"pregunta":"¿Cómo se llama el objeto que usamos para iluminar?","respuesta":"Linterna","categoria":"General"},{"pregunta":"¿Qué día de la semana empieza con 'V'?","respuesta":"Viernes","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que vive en el hielo y nada?","respuesta":"Pingüino","categoria":"General"},{"pregunta":"¿Qué número viene después del 80?","respuesta":"Ochenta y uno","categoria":"General"},{"pregunta":"¿Cómo se llama el planeta azul?","respuesta":"Tierra","categoria":"General"},{"pregunta":"¿Cuántos días tiene junio?","respuesta":"Treinta","categoria":"General"},{"pregunta":"¿Cómo se llama el animal que tiene una melena y ruge?","respuesta":"León","categoria":"General"},{"pregunta":"¿Qué número viene antes del 90?","respuesta":"Ochenta y nueve","categoria":"General"},{"pregunta":"¿Quien descubrio America?","respuesta":"Colon","categoria":"General"}]);}),
"[project]/src/questions/general-4primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el planeta más cercano al Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido como el rey de la selva?\",\"respuesta\":\"León\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la temperatura?\",\"respuesta\":\"Termómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas respiramos para vivir?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente es conocido como el más frío?\",\"respuesta\":\"Antártida\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano bombea sangre?\",\"respuesta\":\"Corazón\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene después del lunes?\",\"respuesta\":\"Martes\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar azul y amarillo?\",\"respuesta\":\"Verde\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal pone huevos y tiene plumas?\",\"respuesta\":\"Ave\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es el centro del sistema solar?\",\"respuesta\":\"Sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene después del 99?\",\"respuesta\":\"100\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene la Torre Eiffel?\",\"respuesta\":\"Francia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por Egipto?\",\"respuesta\":\"Nilo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene tres lados?\",\"respuesta\":\"Triángulo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para escuchar?\",\"respuesta\":\"Oído\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es conocido como el planeta rojo?\",\"respuesta\":\"Marte\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es el más rápido del mundo?\",\"respuesta\":\"Guepardo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir el tiempo?\",\"respuesta\":\"Reloj\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es necesario para que haya fuego?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene la selva amazónica?\",\"respuesta\":\"América\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano filtra la sangre?\",\"respuesta\":\"Riñón\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene antes del viernes?\",\"respuesta\":\"Jueves\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar rojo y azul?\",\"respuesta\":\"Morado\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal vive en el agua y tiene branquias?\",\"respuesta\":\"Pez\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro ilumina la noche?\",\"respuesta\":\"Luna\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene antes del 1?\",\"respuesta\":\"0\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene la Gran Muralla?\",\"respuesta\":\"China\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río es el más largo del mundo?\",\"respuesta\":\"Amazonas\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene cuatro lados iguales?\",\"respuesta\":\"Cuadrado\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para ver?\",\"respuesta\":\"Ojo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es el más grande del sistema solar?\",\"respuesta\":\"Júpiter\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su trompa larga?\",\"respuesta\":\"Elefante\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la presión?\",\"respuesta\":\"Barómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es el más abundante en el aire?\",\"respuesta\":\"Nitrógeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene el desierto del Sahara?\",\"respuesta\":\"África\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce insulina?\",\"respuesta\":\"Páncreas\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene después del viernes?\",\"respuesta\":\"Sábado\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal tiene caparazón y camina lento?\",\"respuesta\":\"Tortuga\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es una estrella?\",\"respuesta\":\"Sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene después del 10?\",\"respuesta\":\"11\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene el Big Ben?\",\"respuesta\":\"Inglaterra\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por Londres?\",\"respuesta\":\"Támesis\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene cinco lados?\",\"respuesta\":\"Pentágono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para oler?\",\"respuesta\":\"Nariz\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta tiene anillos?\",\"respuesta\":\"Saturno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su cuello largo?\",\"respuesta\":\"Jirafa\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la velocidad del viento?\",\"respuesta\":\"Anemómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es necesario para la fotosíntesis?\",\"respuesta\":\"Dióxido\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene el monte Everest?\",\"respuesta\":\"Asia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano controla el sistema nervioso?\",\"respuesta\":\"Cerebro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene antes del lunes?\",\"respuesta\":\"Domingo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar blanco y negro?\",\"respuesta\":\"Gris\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para volar?\",\"respuesta\":\"Pájaro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es visible durante el día?\",\"respuesta\":\"Sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene antes del 100?\",\"respuesta\":\"99\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene las pirámides de Giza?\",\"respuesta\":\"Egipto\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por París?\",\"respuesta\":\"Sena\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene seis lados?\",\"respuesta\":\"Hexágono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para hablar?\",\"respuesta\":\"Boca\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es el más alejado del Sol?\",\"respuesta\":\"Neptuno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para nadar?\",\"respuesta\":\"Delfín\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la humedad?\",\"respuesta\":\"Higrómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es necesario para respirar?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene el río Amazonas?\",\"respuesta\":\"América\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano almacena la bilis?\",\"respuesta\":\"Vesícula\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene después del sábado?\",\"respuesta\":\"Domingo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar blanco y rojo?\",\"respuesta\":\"Rosa\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para trepar árboles?\",\"respuesta\":\"Mono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es visible durante la noche?\",\"respuesta\":\"Luna\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene después del 50?\",\"respuesta\":\"51\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene el Coliseo?\",\"respuesta\":\"Italia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por Roma?\",\"respuesta\":\"Tíber\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene ocho lados?\",\"respuesta\":\"Octágono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para digerir alimentos?\",\"respuesta\":\"Estómago\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es conocido por su color azul?\",\"respuesta\":\"Urano\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para construir presas?\",\"respuesta\":\"Castor\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la intensidad de la luz?\",\"respuesta\":\"Fotómetro\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es necesario para la combustión?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene el río Nilo?\",\"respuesta\":\"África\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce bilis?\",\"respuesta\":\"Hígado\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene antes del miércoles?\",\"respuesta\":\"Martes\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar azul y blanco?\",\"respuesta\":\"Celeste\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para cazar de noche?\",\"respuesta\":\"Búho\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es visible durante el amanecer?\",\"respuesta\":\"Sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene antes del 20?\",\"respuesta\":\"19\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene el Taj Mahal?\",\"respuesta\":\"India\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por Nueva York?\",\"respuesta\":\"Hudson\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene siete lados?\",\"respuesta\":\"Heptágono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para sentir?\",\"respuesta\":\"Piel\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué planeta es conocido por su color amarillo?\",\"respuesta\":\"Saturno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para cambiar de color?\",\"respuesta\":\"Camaleón\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué instrumento se utiliza para medir la distancia?\",\"respuesta\":\"Cinta\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué gas es necesario para la vida?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué continente tiene el río Yangtsé?\",\"respuesta\":\"Asia\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano regula el azúcar en la sangre?\",\"respuesta\":\"Páncreas\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué día de la semana viene después del martes?\",\"respuesta\":\"Miércoles\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué color se forma al mezclar amarillo y negro?\",\"respuesta\":\"Verde\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué animal es conocido por su habilidad para correr rápido?\",\"respuesta\":\"Guepardo\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué astro es visible durante el atardecer?\",\"respuesta\":\"Sol\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué número viene después del 30?\",\"respuesta\":\"31\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué país tiene el Machu Picchu?\",\"respuesta\":\"Perú\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué río pasa por Berlín?\",\"respuesta\":\"Spree\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué figura geométrica tiene nueve lados?\",\"respuesta\":\"Eneágono\",\"categoria\":\"General\"},{\"pregunta\":\"¿Qué órgano usamos para masticar?\",\"respuesta\":\"Dientes\",\"categoria\":\"General\"}]"));}),
"[project]/src/questions/general-5primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuál es el río más largo de España?","respuesta":"Ebro","categoria":"General"},{"pregunta":"¿Quién fue el primer presidente de los Estados Unidos?","respuesta":"Washington","categoria":"General"},{"pregunta":"What is the past tense of 'run'?","respuesta":"Ran","categoria":"General"},{"pregunta":"¿Qué civilización construyó las pirámides de Egipto?","respuesta":"Egipcios","categoria":"General"},{"pregunta":"¿Cuál es la montaña más alta de España?","respuesta":"Teide","categoria":"General"},{"pregunta":"¿En qué año Cristóbal Colón llegó a América?","respuesta":"1492","categoria":"General"},{"pregunta":"What is the plural of 'child'?","respuesta":"Children","categoria":"General"},{"pregunta":"¿Qué océano baña las costas del norte de España?","respuesta":"Atlántico","categoria":"General"},{"pregunta":"¿Qué batalla marcó el inicio de la Reconquista?","respuesta":"Covadonga","categoria":"General"},{"pregunta":"What is the synonym of 'happy'?","respuesta":"Glad","categoria":"General"},{"pregunta":"¿Qué tratado dividió América entre España y Portugal?","respuesta":"Tordesillas","categoria":"General"},{"pregunta":"¿Qué mar baña las costas del este de España?","respuesta":"Mediterráneo","categoria":"General"},{"pregunta":"¿Qué país limita al norte con España?","respuesta":"Francia","categoria":"General"},{"pregunta":"¿Qué país limita al oeste con España?","respuesta":"Portugal","categoria":"General"},{"pregunta":"What is the present continuous form of 'eat'?","respuesta":"Eating","categoria":"General"},{"pregunta":"¿Qué archipiélago español se encuentra en el océano Atlántico?","respuesta":"Canarias","categoria":"General"},{"pregunta":"¿Qué archipiélago español se encuentra en el mar Mediterráneo?","respuesta":"Baleares","categoria":"General"},{"pregunta":"¿Qué civilización antigua inventó la escritura cuneiforme?","respuesta":"Sumerios","categoria":"General"},{"pregunta":"¿Qué líder sudafricano luchó contra el apartheid?","respuesta":"Mandela","categoria":"General"},{"pregunta":"What is the past tense of 'go'?","respuesta":"Went","categoria":"General"},{"pregunta":"¿Qué rey español ordenó la construcción del Monasterio de El Escorial?","respuesta":"Felipe","categoria":"General"},{"pregunta":"¿Qué río atraviesa la ciudad de Sevilla?","respuesta":"Guadalquivir","categoria":"General"},{"pregunta":"¿Qué navegante completó la primera vuelta al mundo?","respuesta":"Elcano","categoria":"General"},{"pregunta":"What is the plural of 'mouse'?","respuesta":"Mice","categoria":"General"},{"pregunta":"¿Qué cordillera separa España de Francia?","respuesta":"Pirineos","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Simón Bolívar en su independencia?","respuesta":"Venezuela","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago balear es conocida por su fiesta?","respuesta":"Ibiza","categoria":"General"},{"pregunta":"What is the opposite of 'big'?","respuesta":"Small","categoria":"General"},{"pregunta":"¿Qué tratado puso fin a la Primera Guerra Mundial?","respuesta":"Versalles","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su volcán?","respuesta":"Lanzarote","categoria":"General"},{"pregunta":"¿Qué río atraviesa la ciudad de Zaragoza?","respuesta":"Ebro","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Mahatma Gandhi en su independencia?","respuesta":"India","categoria":"General"},{"pregunta":"What is the synonym of 'fast'?","respuesta":"Quick","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida como la isla bonita?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Nelson Mandela en su lucha contra el apartheid?","respuesta":"Sudáfrica","categoria":"General"},{"pregunta":"¿Qué civilización construyó Machu Picchu?","respuesta":"Incas","categoria":"General"},{"pregunta":"What is the present continuous form of 'write'?","respuesta":"Writing","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Miguel Hidalgo en su independencia?","respuesta":"México","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Toussaint Louverture en su independencia?","respuesta":"Haití","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su vino?","respuesta":"El Hierro","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Francisco Franco en su dictadura?","respuesta":"España","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por sus dunas?","respuesta":"Gran Canaria","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Simón Bolívar en su independencia?","respuesta":"Venezuela","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago balear es conocida por su tranquilidad?","respuesta":"Menorca","categoria":"General"},{"pregunta":"¿Qué país fue liderado por José de San Martín en su independencia?","respuesta":"Argentina","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su tranquilidad?","respuesta":"La Gomera","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Fidel Castro en su revolución?","respuesta":"Cuba","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Vladimir Lenin en su revolución?","respuesta":"Rusia","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Mao Zedong en su revolución?","respuesta":"China","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Augusto Pinochet en su dictadura?","respuesta":"Chile","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Hugo Chávez en su presidencia?","respuesta":"Venezuela","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Rafael Correa en su presidencia?","respuesta":"Ecuador","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Salvador Allende en su presidencia?","respuesta":"Chile","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Juan Domingo Perón en su presidencia?","respuesta":"Argentina","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Getúlio Vargas en su presidencia?","respuesta":"Brasil","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Lázaro Cárdenas en su presidencia?","respuesta":"México","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Franklin D. Roosevelt en su presidencia?","respuesta":"Estados Unidos","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por John F. Kennedy en su presidencia?","respuesta":"Estados Unidos","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Barack Obama en su presidencia?","respuesta":"Estados Unidos","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Angela Merkel en su cancillería?","respuesta":"Alemania","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Margaret Thatcher en su primer ministerio?","respuesta":"Reino Unido","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Justin Trudeau en su primer ministerio?","respuesta":"Canadá","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Emmanuel Macron en su presidencia?","respuesta":"Francia","categoria":"General"},{"pregunta":"¿Qué isla del archipiélago canario es conocida por su biodiversidad?","respuesta":"La Palma","categoria":"General"},{"pregunta":"¿Qué país fue liderado por Pedro Sánchez en su presidencia?","respuesta":"España","categoria":"General"}]);}),
"[project]/src/questions/general-6primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Quién escribió 'El Quijote'?","respuesta":"Cervantes","categoria":"General"},{"pregunta":"¿Cuál es el río más largo del mundo?","respuesta":"Amazonas","categoria":"General"},{"pregunta":"¿Cuánto es 12 x 12?","respuesta":"144","categoria":"General"},{"pregunta":"¿En qué año comenzó la Primera Guerra Mundial?","respuesta":"1914","categoria":"General"},{"pregunta":"¿Qué es un sustantivo?","respuesta":"Nombre","categoria":"General"},{"pregunta":"¿Cuál es la montaña más alta del mundo?","respuesta":"Everest","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La casa de Bernarda Alba'?","respuesta":"Lorca","categoria":"General"},{"pregunta":"¿Qué es un verbo?","respuesta":"Acción","categoria":"General"},{"pregunta":"¿Qué océano es el más grande del mundo?","respuesta":"Pacífico","categoria":"General"},{"pregunta":"¿Qué es un adjetivo?","respuesta":"Calificativo","categoria":"General"},{"pregunta":"¿Qué tratado puso fin a la Primera Guerra Mundial?","respuesta":"Versalles","categoria":"General"},{"pregunta":"¿Qué es un bioma?","respuesta":"Ecosistema","categoria":"General"},{"pregunta":"¿Qué es un pronombre?","respuesta":"Sustituto","categoria":"General"},{"pregunta":"¿Qué figura literaria consiste en la repetición de sonidos?","respuesta":"Aliteración","categoria":"General"},{"pregunta":"¿Qué es un ecosistema?","respuesta":"Naturaleza","categoria":"General"},{"pregunta":"¿Qué autor escribió 'Cien años de soledad'?","respuesta":"García Márquez","categoria":"General"},{"pregunta":"¿Qué es un complemento directo?","respuesta":"Objeto","categoria":"General"},{"pregunta":"¿Qué país tiene la mayor cantidad de islas?","respuesta":"Suecia","categoria":"General"},{"pregunta":"¿Qué es un delta?","respuesta":"Desembocadura","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La Odisea'?","respuesta":"Homero","categoria":"General"},{"pregunta":"¿Qué es un verbo irregular?","respuesta":"Cambio","categoria":"General"},{"pregunta":"¿Qué es un recurso renovable?","respuesta":"Inagotable","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El Principito'?","respuesta":"Saint-Exupéry","categoria":"General"},{"pregunta":"¿Qué es un mapa topográfico?","respuesta":"Relieve","categoria":"General"},{"pregunta":"¿Qué autor escribió 'Platero y yo'?","respuesta":"Jiménez","categoria":"General"},{"pregunta":"¿Qué es un sustantivo propio?","respuesta":"Nombre","categoria":"General"},{"pregunta":"¿Qué es un clima polar?","respuesta":"Frío","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La Divina Comedia'?","respuesta":"Dante","categoria":"General"},{"pregunta":"¿Qué es un verbo transitivo?","respuesta":"Objeto","categoria":"General"},{"pregunta":"¿Qué es un recurso no renovable?","respuesta":"Limitado","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El Lazarillo de Tormes'?","respuesta":"Anónimo","categoria":"General"},{"pregunta":"¿Qué autor escribió 'Crimen y castigo'?","respuesta":"Dostoyevski","categoria":"General"},{"pregunta":"¿Qué es un verbo reflexivo?","respuesta":"Acción propia","categoria":"General"},{"pregunta":"¿Qué es un impacto ambiental?","respuesta":"Efecto","categoria":"General"},{"pregunta":"¿Qué autor escribió '1984'?","respuesta":"Orwell","categoria":"General"},{"pregunta":"¿Qué es un verbo auxiliar?","respuesta":"Apoyo","categoria":"General"},{"pregunta":"¿Qué es un desarrollo sostenible?","respuesta":"Equilibrio","categoria":"General"},{"pregunta":"¿Qué autor escribió 'Matar a un ruiseñor'?","respuesta":"Lee","categoria":"General"},{"pregunta":"¿Qué es un verbo copulativo?","respuesta":"Enlace","categoria":"General"},{"pregunta":"¿Qué es un hábitat?","respuesta":"Entorno","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El viejo y el mar'?","respuesta":"Hemingway","categoria":"General"},{"pregunta":"¿Qué es un verbo modal?","respuesta":"Posibilidad","categoria":"General"},{"pregunta":"¿Qué es una biodiversidad?","respuesta":"Variedad","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La metamorfosis'?","respuesta":"Kafka","categoria":"General"},{"pregunta":"¿Qué es un verbo compuesto?","respuesta":"Dos","categoria":"General"},{"pregunta":"¿Qué es un parque nacional?","respuesta":"Protección","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El nombre de la rosa'?","respuesta":"Eco","categoria":"General"},{"pregunta":"¿Qué es un verbo en infinitivo?","respuesta":"Base","categoria":"General"},{"pregunta":"¿Qué es una reserva natural?","respuesta":"Conservación","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El retrato de Dorian Gray'?","respuesta":"Wilde","categoria":"General"},{"pregunta":"¿Qué es un verbo en gerundio?","respuesta":"Acción","categoria":"General"},{"pregunta":"¿Qué es un mapa climático?","respuesta":"Clima","categoria":"General"},{"pregunta":"¿Qué autor escribió 'Don Juan Tenorio'?","respuesta":"Zorrilla","categoria":"General"},{"pregunta":"¿Qué es un verbo en participio?","respuesta":"Resultado","categoria":"General"},{"pregunta":"¿Qué es un mapa hidrográfico?","respuesta":"Ríos","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La Celestina'?","respuesta":"Rojas","categoria":"General"},{"pregunta":"¿Qué es un verbo en presente?","respuesta":"Ahora","categoria":"General"},{"pregunta":"¿Qué es un mapa económico?","respuesta":"Recursos","categoria":"General"},{"pregunta":"¿Qué autor escribió 'El Quijote'?","respuesta":"Cervantes","categoria":"General"},{"pregunta":"¿Qué es un verbo en pasado?","respuesta":"Antes","categoria":"General"},{"pregunta":"¿Qué es un mapa de población?","respuesta":"Habitantes","categoria":"General"},{"pregunta":"¿Qué autor escribió 'La casa de Bernarda Alba'?","respuesta":"Lorca","categoria":"General"},{"pregunta":"¿Qué es un verbo en futuro?","respuesta":"Después","categoria":"General"},{"pregunta":"¿Qué es un mapa de carreteras?","respuesta":"Vías","categoria":"General"},{"pregunta":"¿Cuánto es 25 x 4?","respuesta":"100","categoria":"General"},{"pregunta":"¿Cómo se traduce 'desafío' al inglés?","respuesta":"Challenge","categoria":"General"},{"pregunta":"¿Cuál es el resultado de 144 ÷ 12?","respuesta":"12","categoria":"General"},{"pregunta":"¿Cómo se traduce 'ambición' al inglés?","respuesta":"Ambition","categoria":"General"},{"pregunta":"¿Cuánto es 7 x 8?","respuesta":"56","categoria":"General"},{"pregunta":"¿Cómo se traduce 'responsabilidad' al inglés?","respuesta":"Responsibility","categoria":"General"},{"pregunta":"¿Cuál es el resultado de 81 ÷ 9?","respuesta":"9","categoria":"General"},{"pregunta":"¿Cómo se traduce 'logro' al inglés?","respuesta":"Achievement","categoria":"General"},{"pregunta":"¿Cuánto es 15 x 6?","respuesta":"90","categoria":"General"},{"pregunta":"¿Cómo se traduce 'perseverancia' al inglés?","respuesta":"Perseverance","categoria":"General"}]);}),
"[project]/src/components/TournamentQuiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useQuizLogic.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const TournamentQuiz = ({ userGrade, onTournamentComplete })=>{
    _s();
    const { preguntaActual, setPreguntaActual, objetoPreguntaActual, setObjetoPreguntaActual, respuestaCorrecta, setRespuestaCorrecta, respuestaUsuario, setRespuestaUsuario, feedback, setFeedback, preguntasUsadas, setPreguntasUsadas, timeLeft, setTimeLeft, bloqueado, setBloqueado, aciertos, setAciertos, puntuacionTotal, setPuntuacionTotal, preguntaNumero, setPreguntaNumero, comprobarRespuesta, generarPregunta, resetQuiz } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuizLogic"])({
        timeLimit: 300,
        onTimeUp: {
            "TournamentQuiz.useQuizLogic": ()=>{
                setPuntuacionTotal(puntuacionTotal - 15);
                setFeedback("⏰ Tiempo agotado. -15 puntos");
            }
        }["TournamentQuiz.useQuizLogic"]
    });
    // Cargar preguntas de general según el curso (solo ese curso)
    let preguntas = [];
    try {
        preguntas = __turbopack_context__.f({
            "../questions/general-1primaria.json": {
                id: ()=>"[project]/src/questions/general-1primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-1primaria.json (json)")
            },
            "../questions/general-2primaria.json": {
                id: ()=>"[project]/src/questions/general-2primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-2primaria.json (json)")
            },
            "../questions/general-3primaria.json": {
                id: ()=>"[project]/src/questions/general-3primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-3primaria.json (json)")
            },
            "../questions/general-4primaria.json": {
                id: ()=>"[project]/src/questions/general-4primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-4primaria.json (json)")
            },
            "../questions/general-5primaria.json": {
                id: ()=>"[project]/src/questions/general-5primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-5primaria.json (json)")
            },
            "../questions/general-6primaria.json": {
                id: ()=>"[project]/src/questions/general-6primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/general-6primaria.json (json)")
            }
        })(`../questions/general-${userGrade}primaria.json`);
    } catch  {
        preguntas = [];
    }
    // Función para normalizar respuestas (más permisiva)
    function normalizar(str) {
        return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9áéíóúüñ]+/gi, "") // quita espacios, signos, etc
        .replace(/^(el|la|los|las|un|una|unos|unas)/, "") // quita artículos
        .replace(/s$/, "") // quita plural simple
        .replace(/o$/, "a") // masculino/femenino simple
        .trim();
    }
    const handleGenerarPregunta = ()=>{
        if (preguntasUsadas.length >= 25) {
            // Torneo completado
            onTournamentComplete(aciertos, puntuacionTotal);
            return;
        }
        generarPregunta(preguntas, 25, ()=>{
            onTournamentComplete(aciertos, puntuacionTotal);
        });
    };
    const handleVerificarRespuesta = ()=>{
        if (bloqueado) return;
        const tiempoUsado = 300 - timeLeft;
        let puntosPregunta = 0;
        // Comparación flexible
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        if (esCorrecta) {
            setAciertos(aciertos + 1);
            if (tiempoUsado <= 60) {
                puntosPregunta = 10;
                setFeedback("✅ ¡Correcto! +10 puntos (rápido)");
            } else if (tiempoUsado <= 120) {
                puntosPregunta = 5;
                setFeedback("✅ ¡Correcto! +5 puntos");
            } else {
                puntosPregunta = 5;
                setFeedback("✅ ¡Correcto! +5 puntos");
            }
        } else {
            if (tiempoUsado <= 60) {
                puntosPregunta = -5;
                setFeedback(`❌ Incorrecto. -5 puntos\nLa respuesta correcta era: ${respuestaCorrecta}`);
            } else if (tiempoUsado <= 120) {
                puntosPregunta = -10;
                setFeedback(`❌ Incorrecto. -10 puntos\nLa respuesta correcta era: ${respuestaCorrecta}`);
            } else {
                puntosPregunta = -10;
                setFeedback(`❌ Incorrecto. -10 puntos\nLa respuesta correcta era: ${respuestaCorrecta}`);
            }
        }
        setPuntuacionTotal(puntuacionTotal + puntosPregunta);
        setBloqueado(true);
    };
    // Iniciar el torneo automáticamente
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "TournamentQuiz.useEffect": ()=>{
            if (preguntas.length > 0 && !preguntaActual) {
                handleGenerarPregunta();
            }
        }
    }["TournamentQuiz.useEffect"], [
        preguntas
    ]);
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "TournamentQuiz.useEffect": ()=>{
            if (preguntasUsadas.length >= 25) {
                onTournamentComplete(aciertos, puntuacionTotal);
            }
        // eslint-disable-next-line
        }
    }["TournamentQuiz.useEffect"], [
        preguntasUsadas.length
    ]);
    if (preguntasUsadas.length >= 25) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-xl p-8 text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "🎯 ¡Torneo Completado!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🏆"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg mb-2",
                        children: [
                            "Aciertos: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    aciertos,
                                    "/25"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 138,
                                columnNumber: 59
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg mb-2",
                        children: [
                            "Puntuación total: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    puntuacionTotal,
                                    " puntos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 139,
                                columnNumber: 67
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: [
                            "Promedio: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    (puntuacionTotal / 25).toFixed(1),
                                    " pts/pregunta"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 140,
                                columnNumber: 54
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 140,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-4",
                        children: "Redirigiendo..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 141,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TournamentQuiz.tsx",
                lineNumber: 135,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TournamentQuiz.tsx",
            lineNumber: 134,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "🎯 Modo Torneo Premium"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-6 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold",
                                            children: [
                                                preguntaNumero,
                                                "/25"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: "Pregunta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold",
                                            children: aciertos
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: "Aciertos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold",
                                            children: formatTime(timeLeft)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: "Tiempo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-8",
                    children: preguntaActual ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold mb-4",
                                        children: preguntaActual
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                                        lineNumber: 174,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    objetoPreguntaActual && objetoPreguntaActual.imagen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: objetoPreguntaActual.imagen,
                                            alt: "Pregunta",
                                            className: "max-w-full h-auto max-h-64 rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TournamentQuiz.tsx",
                                            lineNumber: 178,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                                        lineNumber: 177,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: respuestaUsuario,
                                    onChange: (e)=>setRespuestaUsuario(e.target.value),
                                    onKeyPress: (e)=>e.key === 'Enter' && handleVerificarRespuesta(),
                                    placeholder: "Escribe tu respuesta aquí...",
                                    className: "w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    disabled: bloqueado
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 189,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 188,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: !bloqueado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleVerificarRespuesta,
                                    disabled: !respuestaUsuario.trim(),
                                    className: "flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 disabled:bg-gray-400 transition-colors",
                                    children: "Verificar Respuesta"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 203,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleGenerarPregunta(),
                                    className: "flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors",
                                    children: preguntasUsadas.length >= 25 ? 'Finalizar Torneo' : 'Siguiente Pregunta'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                                    lineNumber: 211,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 201,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-4 p-4 rounded-lg text-center font-semibold ${feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                children: feedback
                            }, void 0, false, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 222,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4",
                                children: "🎯"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 230,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl",
                                children: "Cargando torneo..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/TournamentQuiz.tsx",
                                lineNumber: 231,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TournamentQuiz.tsx",
                        lineNumber: 229,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/TournamentQuiz.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TournamentQuiz.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TournamentQuiz.tsx",
        lineNumber: 148,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TournamentQuiz, "vqDwsNsEMwW4lzReXRWuo0fpzMk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useQuizLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuizLogic"]
    ];
});
_c = TournamentQuiz;
const __TURBOPACK__default__export__ = TournamentQuiz;
var _c;
__turbopack_context__.k.register(_c, "TournamentQuiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/aprende-con-pipo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AprendeConPipo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChampionshipQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChampionshipQuiz.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TournamentQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TournamentQuiz.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
// Tabla individual de docentes por temporada
async function getTablaDocentes(temporada) {
    try {
        // Obtener todos los usuarios docentes desde la API
        const response = await fetch('/api/users');
        if (!response.ok) return {};
        const users = await response.json();
        const docentes = users.filter((u)=>u.tipo === "Docente");
        // Para cada docente, obtener sus estadísticas de campeonato
        const resultado = {};
        for (const docente of docentes){
            try {
                const statsResponse = await fetch(`/api/stats/championship?nick=${docente.nick}&temporada=t${temporada}&tipo=docentes`);
                if (statsResponse.ok) {
                    const stats = await statsResponse.json();
                    if (stats.likes) {
                        resultado[docente.nick] = stats.likes;
                    }
                }
            } catch (error) {
                console.error(`Error obteniendo stats para ${docente.nick}:`, error);
            }
        }
        // Ordenar y limitar a los 25 mejores
        const ordenados = Object.entries(resultado).sort((a, b)=>b[1] - a[1]).slice(0, 25);
        return Object.fromEntries(ordenados);
    } catch (error) {
        console.error('Error obteniendo tabla docentes:', error);
        return {};
    }
}
;
;
;
;
function AprendeConPipo() {
    _s();
    // Lógica de temporada
    function getCurrentSeason() {
        const now = new Date();
        const year = now.getFullYear();
        // Temporada inicia el 1 de octubre y termina el 30 de septiembre del siguiente año
        if (now.getMonth() + 1 < 10) {
            // Antes de octubre, temporada es del año anterior
            return year - 1;
        }
        return year;
    }
    // Estado para temporada seleccionada
    const [temporadaSeleccionada, setTemporadaSeleccionada] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(getCurrentSeason());
    // Estado para tabla de docentes
    const [tablaDocentes, setTablaDocentes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({});
    // Estado para mostrar modo competición
    const [modoCompeticion, setModoCompeticion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [torneoIniciado, setTorneoIniciado] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [modoTorneoManual, setModoTorneoManual] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isPremium, setIsPremium] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Estado para modo torneo premium
    const [modoTorneo, setModoTorneo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [torneoActivo, setTorneoActivo] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    // Detectar modo torneo por query param
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AprendeConPipo.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                if (params.get("torneo") === "1") {
                    setModoTorneoManual(true);
                }
            }
        }
    }["AprendeConPipo.useEffect"], []);
    // Estado para curso seleccionado en ChampionshipQuiz
    const [cursoCompeticion, setCursoCompeticion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1);
    // Estado para centro escolar (puedes adaptar según tu lógica de usuario)
    const [centroCompeticion, setCentroCompeticion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    // Ejemplo de cursos y asignaturas
    const cursos = [
        "1º Primaria",
        "2º Primaria",
        "3º Primaria",
        "4º Primaria",
        "5º Primaria",
        "6º Primaria"
    ];
    const asignaturas = [
        "naturaleza",
        "matematicas",
        "lenguaje",
        "literatura",
        "ingles",
        "geografia",
        "historia",
        "general",
        "campeonato"
    ];
    const displayAsignaturas = [
        "Naturaleza",
        "Matemáticas",
        "Lenguaje",
        "Literatura",
        "Inglés",
        "Geografía",
        "Historia",
        "General",
        "Campeonato"
    ];
    // Cargar tabla de docentes cuando cambie la temporada
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AprendeConPipo.useEffect": ()=>{
            const loadTablaDocentes = {
                "AprendeConPipo.useEffect.loadTablaDocentes": async ()=>{
                    const tabla = await getTablaDocentes(temporadaSeleccionada);
                    setTablaDocentes(tabla);
                }
            }["AprendeConPipo.useEffect.loadTablaDocentes"];
            loadTablaDocentes();
        }
    }["AprendeConPipo.useEffect"], [
        temporadaSeleccionada
    ]);
    // Actualizar temporada seleccionada desde el desplegable
    function handleTemporadaChange(e) {
        setTemporadaSeleccionada(Number(e.target.value));
    }
    // Likes individuales por temporada (migrado a API)
    async function getLikesIndividual(nick, temporada) {
        try {
            const response = await fetch(`/api/stats/championship?nick=${nick}&temporada=t${temporada}&tipo=individual`);
            if (response.ok) {
                const stats = await response.json();
                return stats.likes || 0;
            }
        } catch (error) {
            console.error('Error obteniendo likes individuales:', error);
        }
        return 0;
    }
    // Likes de centro por temporada (migrado a API)
    async function getLikesCentro(centro, temporada) {
        try {
            const response = await fetch(`/api/stats/championship-table?temporada=t${temporada}&tipo=centro`);
            if (response.ok) {
                const tabla = await response.json();
                return tabla[centro] || 0;
            }
        } catch (error) {
            console.error('Error obteniendo likes de centro:', error);
        }
        return 0;
    }
    // Sumar likes (migrado a API)
    async function sumarLikes(nick, centro, cantidad) {
        try {
            await fetch('/api/stats/championship-update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nick,
                    centro,
                    temporada: `t${getCurrentSeason()}`,
                    cantidad
                })
            });
        } catch (error) {
            console.error('Error sumando likes:', error);
        }
    }
    async function sumarLikesPerfil(nick, cantidad) {
        try {
            await fetch('/api/user/update-likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likesDelta: cantidad
                })
            });
        } catch (error) {
            console.error('Error actualizando likes del perfil:', error);
        }
    }
    async function getTablaIndividual(temporada) {
        try {
            const response = await fetch(`/api/stats/championship-table?temporada=t${temporada}&tipo=individual`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error obteniendo tabla individual:', error);
        }
        return {};
    }
    async function getTablaCentro(temporada) {
        try {
            const response = await fetch(`/api/stats/championship-table?temporada=t${temporada}&tipo=centro`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error obteniendo tabla centro:', error);
        }
        return {};
    }
    // Estado para selección de curso y asignatura - SISTEMA ANTI-TRAMPA
    const [usuarioActual, setUsuarioActual] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [cursoUsuario, setCursoUsuario] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("1º Primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("matematicas");
    const [preguntaActual, setPreguntaActual] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [objetoPreguntaActual, setObjetoPreguntaActual] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [respuestaUsuario, setRespuestaUsuario] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [feedback, setFeedback] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    // Estado para el temporizador: 5 minutos (300 segundos)
    const [timeLeft, setTimeLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(300); // 5 minutos por pregunta
    const [bloqueado, setBloqueado] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ✅ SISTEMA ANTI-TRAMPA: Cargar usuario automáticamente al iniciar
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AprendeConPipo.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Get user from API
            fetch('/api/auth/me').then({
                "AprendeConPipo.useEffect": (response)=>response.json()
            }["AprendeConPipo.useEffect"]).then({
                "AprendeConPipo.useEffect": (data)=>{
                    if (data.user) {
                        setUsuarioActual(data.user);
                        // Check premium from DB
                        fetch('/api/premium', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                action: 'check',
                                nick: data.user.nick
                            })
                        }).then({
                            "AprendeConPipo.useEffect": (res)=>res.json()
                        }["AprendeConPipo.useEffect"]).then({
                            "AprendeConPipo.useEffect": (premiumData)=>{
                                setIsPremium(premiumData.premium);
                            }
                        }["AprendeConPipo.useEffect"]).catch({
                            "AprendeConPipo.useEffect": ()=>{}
                        }["AprendeConPipo.useEffect"]);
                        // ✅ SISTEMA DOCENTES: Detectar curso del usuario automáticamente
                        let cursoDetectado = "1º Primaria";
                        // Si es docente, usar 6º curso por defecto (preguntas más difíciles)
                        const esDocente = data.user.esProfesor || data.user.tipo === "docente" || data.user.tipo === "Docente";
                        if (esDocente) {
                            cursoDetectado = "6º Primaria";
                        } else if (data.user.curso) {
                            // Para estudiantes, usar su curso real
                            if (typeof data.user.curso === "string") {
                                const match = data.user.curso.match(/(\d)/);
                                if (match) {
                                    const numero = parseInt(match[1]);
                                    cursoDetectado = `${numero}º Primaria`;
                                }
                            } else if (typeof data.user.curso === "number") {
                                cursoDetectado = `${data.user.curso}º Primaria`;
                            }
                        }
                        setCursoUsuario(cursoDetectado);
                    }
                }
            }["AprendeConPipo.useEffect"]).catch({
                "AprendeConPipo.useEffect": (error)=>{
                    console.error("Error cargando datos del usuario:", error);
                }
            }["AprendeConPipo.useEffect"]);
        }
    }["AprendeConPipo.useEffect"], []);
    // Temporizador para modo clásico
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AprendeConPipo.useEffect": ()=>{
            if (!preguntaActual || bloqueado) return;
            if (timeLeft === 0) {
                setBloqueado(true);
                setFeedback("⏰ Tiempo agotado. No puedes responder esta pregunta. -2 likes");
                if (usuarioActual) {
                    // Ejecutar en background sin bloquear
                    sumarLikesPerfil(usuarioActual.nick, -2).catch({
                        "AprendeConPipo.useEffect": (err)=>console.error('Error penalizando likes:', err)
                    }["AprendeConPipo.useEffect"]);
                }
                return;
            }
            const timer = setTimeout({
                "AprendeConPipo.useEffect.timer": ()=>setTimeLeft(timeLeft - 1)
            }["AprendeConPipo.useEffect.timer"], 1000);
            return ({
                "AprendeConPipo.useEffect": ()=>clearTimeout(timer)
            })["AprendeConPipo.useEffect"];
        }
    }["AprendeConPipo.useEffect"], [
        timeLeft,
        preguntaActual,
        bloqueado
    ]);
    // Cargar preguntas de todos los archivos según curso automático y materia
    const [preguntas, setPreguntas] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    // Cargar preguntas desde la API
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AprendeConPipo.useEffect": ()=>{
            const cargarPreguntas = {
                "AprendeConPipo.useEffect.cargarPreguntas": async ()=>{
                    let cursoNum = 1;
                    if (cursoUsuario) {
                        const match = cursoUsuario.match(/(\d+)/);
                        if (match) cursoNum = Number(match[1]);
                    }
                    const materias = [
                        "matematicas",
                        "lenguaje",
                        "literatura",
                        "historia",
                        "geografia",
                        "naturaleza",
                        "ingles",
                        "general",
                        "campeonato"
                    ];
                    let todas = [];
                    for (const materia of materias){
                        try {
                            const response = await fetch(`/api/questions?curso=${cursoNum}primaria&asignatura=${materia}`);
                            if (response.ok) {
                                const preguntasMateria = await response.json();
                                todas = todas.concat(preguntasMateria);
                            }
                        } catch  {
                        // Si falla, lo ignora
                        }
                    }
                    setPreguntas(todas);
                }
            }["AprendeConPipo.useEffect.cargarPreguntas"];
            cargarPreguntas();
        }
    }["AprendeConPipo.useEffect"], [
        cursoUsuario
    ]);
    // Filtrar preguntas por asignatura
    const preguntasFiltradas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "AprendeConPipo.useMemo[preguntasFiltradas]": ()=>{
            if (asignaturaSeleccionada === "General") return preguntas;
            // Filtrar solo preguntas con categoria igual a la asignatura seleccionada (ignorando mayúsculas y acentos)
            const filtradas = preguntas.filter({
                "AprendeConPipo.useMemo[preguntasFiltradas].filtradas": (p)=>p.categoria.toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u') === asignaturaSeleccionada
            }["AprendeConPipo.useMemo[preguntasFiltradas].filtradas"]);
            return filtradas;
        }
    }["AprendeConPipo.useMemo[preguntasFiltradas]"], [
        preguntas,
        asignaturaSeleccionada
    ]);
    // Estado para preguntas ya usadas en la sesión
    const [preguntasUsadas, setPreguntasUsadas] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    function generarPregunta() {
        if (preguntasFiltradas.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("No hay preguntas para esta asignatura.");
            setBloqueado(false);
            setTimeLeft(300);
            setPreguntasUsadas([]);
            return;
        }
        // Filtrar preguntas no usadas
        const restantes = preguntasFiltradas.filter((p)=>!preguntasUsadas.includes(p.pregunta));
        if (restantes.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("¡Has respondido todas las preguntas disponibles!");
            setBloqueado(true);
            setTimeLeft(300);
            setPreguntasUsadas([]);
            return;
        }
        const random = Math.floor(Math.random() * restantes.length);
        const preguntaSeleccionada = restantes[random];
        setPreguntaActual(preguntaSeleccionada.pregunta);
        setObjetoPreguntaActual(preguntaSeleccionada); // Guardar objeto completo
        setRespuestaCorrecta(preguntaSeleccionada.respuesta);
        setRespuestaUsuario("");
        setFeedback("");
        setBloqueado(false);
        setTimeLeft(300);
        setPreguntasUsadas([
            ...preguntasUsadas,
            preguntaSeleccionada.pregunta
        ]);
    }
    async function comprobarRespuesta() {
        if (bloqueado) return;
        let likesDelta = 0;
        // ✅ SISTEMA DOCENTES: Detectar si es docente para ajustar puntuación
        const esDocente = usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente";
        const multiplicadorDocente = esDocente ? 0.5 : 1; // Los docentes reciben la mitad de puntos
        function normalizar(str) {
            return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\s+/g, "").trim();
        }
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        setBloqueado(true);
        if (esCorrecta) {
            if (timeLeft > 120) {
                const puntosBase = 1 * multiplicadorDocente;
                setFeedback(`¡Correcto! 🎉 +${puntosBase} like${puntosBase !== 1 ? 's' : ''}${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = puntosBase;
            } else {
                const puntosBase = 0.5 * multiplicadorDocente;
                setFeedback(`¡Correcto! 🎉 +${puntosBase} likes${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = puntosBase;
            }
            // Update DB stats
            if (usuarioActual) {
                fetch('/api/user/increment-stat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        stat: 'respuestasAcertadas',
                        amount: 1
                    })
                }).catch((err)=>console.error('Error updating DB stats:', err));
                // ✅ NUEVO: Guardar respuestas acertadas por asignatura específica
                if (objetoPreguntaActual && objetoPreguntaActual.categoria) {
                // For now, we'll just increment general stats. Individual subject stats can be added later if needed.
                }
            }
        } else {
            if (timeLeft > 120) {
                const penalizacionBase = -0.5 * multiplicadorDocente;
                setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta} ${penalizacionBase} likes${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = penalizacionBase;
            } else {
                const penalizacionBase = -1 * multiplicadorDocente;
                setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta} ${penalizacionBase} like${Math.abs(penalizacionBase) !== 1 ? 's' : ''}${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = penalizacionBase;
            }
            // Update DB for failed questions
            if (usuarioActual) {
                fetch('/api/user/increment-stat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        stat: 'preguntasFalladas',
                        amount: 1
                    })
                }).catch((err)=>console.error('Error updating DB stats falladas:', err));
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (usuarioActual) {
                await sumarLikesPerfil(usuarioActual.nick, likesDelta);
            }
        }
        // Emitir evento para refrescar perfil
        window.dispatchEvent(new Event('profileUpdate'));
    }
    if (modoTorneoManual) {
        // Solo mostrar el torneo, ocultar todo lo demás
        const handleTournamentComplete = async (aciertos, puntuacionTotal)=>{
            try {
                const params = new URLSearchParams(window.location.search);
                const torneoId = params.get("torneoId") || "torneo-mensual-" + (cursoUsuario ? cursoUsuario[0] : "1") + "primaria";
                const res = await fetch('/api/premium/torneos');
                let torneoData = await res.json();
                let torneos = torneoData.torneos || [];
                if (typeof torneos === 'string') {
                    try {
                        torneos = JSON.parse(torneos);
                    } catch  {
                        torneos = [];
                    }
                }
                torneos = torneos.map((t)=>{
                    if (t.id === torneoId) {
                        // Evitar duplicados en resultados
                        let resultados = Array.isArray(t.resultados) ? [
                            ...t.resultados
                        ] : [];
                        if (!resultados.some((r)=>r.nick === usuarioActual?.nick)) {
                            resultados.push({
                                nick: usuarioActual?.nick,
                                aciertos,
                                puntuacion: puntuacionTotal
                            });
                        }
                        resultados.sort((a, b)=>b.puntuacion - a.puntuacion);
                        // Evitar duplicados en participantes
                        let participantes = Array.isArray(t.participantes) ? [
                            ...t.participantes
                        ] : [];
                        if (!participantes.includes(usuarioActual?.nick)) {
                            participantes.push(usuarioActual?.nick);
                        }
                        // El estado global del torneo NO se marca como 'finalizado', solo el resultado del usuario
                        return {
                            ...t,
                            resultados,
                            participantes
                        };
                    }
                    return t;
                });
                await fetch('/api/premium/torneos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        torneos: JSON.stringify(torneos)
                    })
                });
                // Actualizar estadísticas globales del usuario
                const statsRes = await fetch('/api/premium/competiciones');
                let stats = await statsRes.json();
                let participaciones = (stats.participaciones || 0) + 1;
                let puntuacionTotalGlobal = (stats.puntuacionTotal || 0) + puntuacionTotal;
                let victorias = stats.victorias || 0;
                if (torneos.find((t)=>t.id === torneoId)?.resultados?.[0]?.nick === usuarioActual?.nick) {
                    victorias += 1;
                }
                await fetch('/api/premium/competiciones', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        victorias,
                        participaciones,
                        puntuacionTotal: puntuacionTotalGlobal
                    })
                });
                setTimeout(()=>{
                    window.location.href = '/torneos-premium';
                }, 500);
            } catch (err) {
                window.location.href = '/torneos-premium';
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 flex flex-col items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TournamentQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userGrade: parseInt(cursoUsuario) || 1,
                onTournamentComplete: handleTournamentComplete
            }, void 0, false, {
                fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                lineNumber: 462,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
            lineNumber: 461,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8 flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-center",
                children: "Aprende con Pipo"
            }, void 0, false, {
                fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                lineNumber: 469,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch mx-auto",
                style: {
                    transform: 'translateX(-80px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/trofeo16.jpg",
                        alt: "Trofeo 16",
                        className: "h-40 object-contain mr-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                        lineNumber: 471,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-6 mx-auto",
                        children: !modoCompeticion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-2 border-blue-200 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-blue-800 mb-2",
                                            children: "🛡️ Sistema Anti-Trampa Activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-blue-700",
                                                            children: "👤 Usuario:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-800",
                                                            children: usuarioActual?.nick || "No detectado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-blue-700",
                                                            children: "🎓 Curso detectado:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-800 font-semibold",
                                                            children: cursoUsuario
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-blue-700",
                                                            children: "🏫 Centro:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-800",
                                                            children: usuarioActual?.centro || "No asignado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-blue-700",
                                                            children: "👥 Tipo:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-800",
                                                            children: usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente" ? "Docente" : "Estudiante"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-yellow-800",
                                                    children: [
                                                        "🔒 ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Solo podrás responder preguntas de tu nivel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 44
                                                        }, this),
                                                        " para garantizar puntuaciones justas."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 37
                                                }, this),
                                                (usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-orange-800 mt-2",
                                                    children: [
                                                        "👩‍🏫 ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Modo Docente:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 51
                                                        }, this),
                                                        " Preguntas de 6º curso y puntuación reducida al 50% para equilibrar la dificultad."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row gap-4 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold",
                                            children: "Asignatura:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border rounded px-2 py-1",
                                            value: asignaturaSeleccionada,
                                            onChange: (e)=>setAsignaturaSeleccionada(e.target.value),
                                            children: asignaturas.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: a,
                                                    children: displayAsignaturas[i]
                                                }, a, false, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 64
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "(Curso fijo: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: cursoUsuario
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 50
                                                }, this),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].primary + " mt-4",
                                    onClick: generarPregunta,
                                    children: "Generar pregunta"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].orange + " mt-4 self-center",
                                    onClick: ()=>{
                                        // Obtener curso y centro escolar del usuario desde API
                                        let cursoUsuario = 1;
                                        let centroUsuario = "";
                                        if (usuarioActual) {
                                            // El curso puede estar como número (1-6) o como texto ("6º", "5º", ...)
                                            let cursoNum = 1;
                                            if (usuarioActual.curso) {
                                                if (typeof usuarioActual.curso === "string") {
                                                    const match = usuarioActual.curso.match(/(\d)/);
                                                    if (match) cursoNum = Number(match[1]);
                                                } else if (typeof usuarioActual.curso === "number") {
                                                    cursoNum = usuarioActual.curso;
                                                }
                                            }
                                            if (!isNaN(cursoNum) && cursoNum >= 1 && cursoNum <= 6) {
                                                cursoUsuario = cursoNum;
                                            }
                                            // Centro escolar
                                            if (usuarioActual.centro) {
                                                centroUsuario = usuarioActual.centro;
                                            }
                                        }
                                        setModoCompeticion(true);
                                        setCursoCompeticion(cursoUsuario);
                                        setCentroCompeticion(centroUsuario);
                                    },
                                    children: "Modo competición"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 522,
                                    columnNumber: 29
                                }, this),
                                isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].purple + " mt-4 self-center",
                                    onClick: ()=>{
                                        setModoTorneoManual(true);
                                    },
                                    children: "Modo torneo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 33
                                }, this),
                                preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-2",
                                            children: preguntaActual
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-lg mb-2",
                                            children: [
                                                "⏰ Tiempo: ",
                                                Math.floor(timeLeft / 60),
                                                ":",
                                                (timeLeft % 60).toString().padStart(2, '0'),
                                                " min"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 561,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "border rounded px-2 py-1 w-full mb-2",
                                            value: respuestaUsuario,
                                            onChange: (e)=>setRespuestaUsuario(e.target.value),
                                            placeholder: "Escribe tu respuesta aquí",
                                            disabled: bloqueado
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].success,
                                            onClick: comprobarRespuesta,
                                            disabled: bloqueado,
                                            children: "Comprobar respuesta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 37
                                        }, this),
                                        feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 font-bold",
                                            children: feedback
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 33
                                }, this),
                                feedback && !preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 font-bold text-red-600",
                                    children: feedback
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 61
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-2",
                                            children: "Ranking Docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border mb-4",
                                            style: {
                                                backgroundColor: '#fffbe6'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            backgroundColor: '#fff9c4'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2",
                                                                children: "Docente"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                                lineNumber: 584,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-2",
                                                                children: "Likes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                                lineNumber: 585,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                        lineNumber: 583,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: Object.entries(tablaDocentes).map(([nick, likes])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border p-2",
                                                                    children: nick
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border p-2",
                                                                    children: likes
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, nick, true, {
                                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 579,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChampionshipQuiz$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    userGrade: cursoCompeticion,
                                    userSchool: centroCompeticion
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 601,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUTTON_STYLES"].secondary + " mt-4",
                                    onClick: ()=>setModoCompeticion(false),
                                    children: "Salir de competición"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                                    lineNumber: 602,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                            lineNumber: 600,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                        lineNumber: 472,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo-pipo.jpg",
                        alt: "Logo Pipo",
                        className: "h-40 object-contain ml-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                        lineNumber: 608,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
                lineNumber: 470,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/aprende-con-pipo/page.tsx",
        lineNumber: 468,
        columnNumber: 9
    }, this);
// ...existing code...
}
_s(AprendeConPipo, "sRpBXNfMyB/r9kBWG5dwm2DwHA4=");
_c = AprendeConPipo;
var _c;
__turbopack_context__.k.register(_c, "AprendeConPipo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_af885c2a._.js.map