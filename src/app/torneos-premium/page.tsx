"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Torneo {
    id: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    categoria: string;
    premio: string;
    maxParticipantes: number;
    participantes: string[];
    estado: 'registro' | 'activo' | 'finalizado';
    ganador?: string;
    resultados?: any[];
    _usuarioYaParticipado?: boolean;
}

const TorneosPremiumPage: React.FC = () => {
    const [stats, setStats] = useState({ victorias: 0, participaciones: 0, puntuacionTotal: 0 });
    useEffect(() => {
        fetch('/api/premium/competiciones')
            .then(res => res.ok ? res.json() : { victorias: 0, participaciones: 0, puntuacionTotal: 0 })
            .then(setStats);
    }, []);
    const router = useRouter();
    const [usuarioActual, setUsuarioActual] = useState<any>(null);
    const [isPremium, setIsPremium] = useState(false);
    const [loading, setLoading] = useState(true);
    const [torneos, setTorneos] = useState<Torneo[]>([]);
    const [torneoActivo, setTorneoActivo] = useState<Torneo | null>(null);
    const [cursoUsuario, setCursoUsuario] = useState<number>(1);

    useEffect(() => {
        const loadUser = async () => {
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
        };
        loadUser();
    }, []);

    const esTorneoDisponibleParaUsuario = (torneoId: string) => {
        const match = torneoId.match(/torneo-mensual-(\d)primaria/);
        if (match) {
            const cursoTorneo = parseInt(match[1]);
            return cursoTorneo === cursoUsuario;
        }
        return false;
    };

    const cargarTorneos = async () => {
        try {
            const response = await fetch('/api/premium/torneos');
            if (response.ok) {
                const torneoData = await response.json();
                if (torneoData.torneos) {
                    let torneosParsed = torneoData.torneos;
                    if (typeof torneosParsed === 'string') {
                        try {
                            torneosParsed = JSON.parse(torneosParsed);
                        } catch {
                            torneosParsed = [];
                        }
                    }
                    // Forzar comparación robusta de nick
                    const normalizar = (str: string) => (str || '').toLowerCase().replace(/\s+/g, '');
                    torneosParsed = torneosParsed.map((t: any) => {
                        if (t.resultados && t.resultados.some((r: any) => normalizar(r.nick) === normalizar(usuarioActual?.nick))) {
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
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({})
                    });
                    // Recargar datos de la Liga Premium
                    fetch('/api/premium/competiciones')
                        .then(res => res.ok ? res.json() : { victorias: 0, participaciones: 0, puntuacionTotal: 0 })
                        .then(setStats);
                    return;
                }
            }
        } catch (error) {
            console.error('Error loading torneos:', error);
        }

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const torneosDefault: Torneo[] = [
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                torneos: torneosDefault,
                lastReset: new Date().toISOString()
            })
        });
    };

    const registrarseTorneo = async (torneoId: string) => {
        if (!usuarioActual) return;

        const torneosActualizados = torneos.map(torneo => {
            if (torneo.id === torneoId) {
                if (torneo.participantes.includes(usuarioActual.nick)) {
                    return torneo;
                }
                if (torneo.participantes.length >= torneo.maxParticipantes) {
                    return torneo;
                }
                return {
                    ...torneo,
                    participantes: [...torneo.participantes, usuarioActual.nick]
                };
            }
            return torneo;
        });

        setTorneos(torneosActualizados);

        await fetch('/api/premium/torneos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                torneos: JSON.stringify(torneosActualizados)
            })
        });

    };

    const iniciarTorneo = async (torneo: Torneo) => {
        await fetch('/api/premium/torneos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
        setTimeout(() => {
            cargarTorneos();
        }, 2000);

        router.push('/aprende-con-pipo?torneo=1');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-white text-xl">Cargando Torneos Premium...</div>
            </div>
        );
    }

    if (!isPremium) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">🎯 Torneos Premium</h1>
                    <p className="text-purple-100 text-lg">Compite en torneos exclusivos y gana premios especiales</p>
                </div>

                {torneoActivo ? (
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">{torneoActivo.nombre}</h2>
                        <div className="text-6xl mb-4">🎯</div>
                        <p className="text-gray-600 mb-6">Torneo en progreso...</p>
                        <div className="animate-spin text-4xl">⏳</div>
                        <p className="text-sm text-gray-500 mt-4">Calculando resultados...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {torneos.map((torneo) => (
                            <div key={torneo.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                                    <h3 className="text-lg font-bold text-white">{torneo.nombre}</h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{torneo.descripcion}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Categoría:</span>
                                            <span className="font-semibold text-purple-600">{torneo.categoria}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Participantes:</span>
                                            <span className="font-semibold">{torneo.participantes.length}/{torneo.maxParticipantes}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Estado:</span>
                                            <span className={`font-semibold ${torneo.estado === 'registro' ? 'text-green-600' :
                                                torneo.estado === 'finalizado' ? 'text-gray-600' : 'text-blue-600'
                                                }`}>
                                                {torneo.estado === 'registro' ? 'Abierto' :
                                                    torneo.estado === 'finalizado' ? 'Finalizado' : 'Disponible'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded mb-4">
                                        <p className="text-sm font-semibold text-yellow-800">🏆 Premio:</p>
                                        <p className="text-sm text-yellow-700">{torneo.premio}</p>
                                    </div>

                                    {/* Clasificación general del torneo */}
                                    {torneo.estado === 'finalizado' && torneo.resultados && torneo.resultados.length > 0 && (
                                        <div className="bg-green-50 p-3 rounded mb-4">
                                            <p className="text-sm font-semibold text-green-800">🏆 Clasificación General:</p>
                                            <table className="w-full text-xs mt-2">
                                                <thead>
                                                    <tr className="bg-green-100">
                                                        <th className="px-2 py-1">#</th>
                                                        <th className="px-2 py-1">Nick</th>
                                                        <th className="px-2 py-1">Aciertos</th>
                                                        <th className="px-2 py-1">Puntuación</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Mostrar solo el mejor resultado por usuario */}
                                                    {(() => {
                                                        const normalizar = (str: string) => (str || '').toLowerCase().replace(/\s+/g, '');
                                                        const mejoresPorUsuario: { [nick: string]: any } = {};
                                                        torneo.resultados.forEach((r: any) => {
                                                            const nickNorm = normalizar(r.nick);
                                                            if (!mejoresPorUsuario[nickNorm] || r.puntuacion > mejoresPorUsuario[nickNorm].puntuacion) {
                                                                mejoresPorUsuario[nickNorm] = r;
                                                            }
                                                        });
                                                        return Object.values(mejoresPorUsuario)
                                                            .sort((a: any, b: any) => b.puntuacion - a.puntuacion)
                                                            .map((resultado: any, idx: number) => (
                                                                <tr key={resultado.nick + '-' + idx} className={normalizar(resultado.nick) === normalizar(usuarioActual?.nick) ? "font-bold text-purple-700 bg-purple-50" : ""}>
                                                                    <td className="px-2 py-1">{idx + 1}</td>
                                                                    <td className="px-2 py-1">{resultado.nick}</td>
                                                                    <td className="px-2 py-1">{resultado.aciertos}/25</td>
                                                                    <td className="px-2 py-1">{resultado.puntuacion} pts</td>
                                                                </tr>
                                                            ));
                                                    })()}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    <div className="flex gap-2">
                                        {/* Lógica simplificada y robusta: */}
                                        {/* Bloqueo extra: si el usuario tiene resultado o más de una participación, oculta el botón */}
                                        {torneo._usuarioYaParticipado || (torneo.resultados && torneo.resultados.filter((r: any) => r.nick === usuarioActual.nick).length > 0) || (torneo.participantes.filter((n: string) => n === usuarioActual.nick).length > 1) ? (
                                            <span className="flex-1 text-center bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold">
                                                Torneo finalizado
                                            </span>
                                        ) : torneo.estado === 'registro' ? (
                                            !torneo.participantes.includes(usuarioActual.nick) ? (
                                                esTorneoDisponibleParaUsuario(torneo.id) ? (
                                                    <button
                                                        onClick={() => registrarseTorneo(torneo.id)}
                                                        disabled={torneo.participantes.length >= torneo.maxParticipantes}
                                                        className="flex-1 bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
                                                    >
                                                        Registrarse
                                                    </button>
                                                ) : (
                                                    <span className="flex-1 text-center bg-gray-100 text-gray-600 px-4 py-2 rounded font-semibold">
                                                        Solo para {torneo.nombre.split(' ')[2]} {torneo.nombre.split(' ')[3]}
                                                    </span>
                                                )
                                            ) : (
                                                <>
                                                    <span className="flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded font-semibold">
                                                        ✓ Registrado
                                                    </span>
                                                    <button
                                                        onClick={() => iniciarTorneo(torneo)}
                                                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                                                    >
                                                        Comenzar Torneo
                                                    </button>
                                                </>
                                            )
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Clasificación Liga Premium con puntos totales */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">🏅 Clasificación Premium (Liga)</h3>
                    <table className="w-full text-xs mt-2">
                        <thead>
                            <tr className="bg-green-100">
                                <th className="px-2 py-1">Nick</th>
                                <th className="px-2 py-1">Puntos Totales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={usuarioActual ? "font-bold text-purple-700 bg-purple-50" : ""}>
                                <td className="px-2 py-1">{usuarioActual?.nick}</td>
                                <td className="px-2 py-1">{stats.puntuacionTotal} pts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => router.push('/premium-nuevo')}
                        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
                    >
                        ← Volver a Premium
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TorneosPremiumPage;