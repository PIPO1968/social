"use client";
import React, { useState, useEffect } from "react";
import { renderNick } from "@/utils/renderNick";
import { TROFEOS_PREMIUM } from "@/data/trofeosPremiumImport";
import { useTranslation } from "@/utils/i18n";
import { useRouter } from "next/navigation";
import { BUTTON_STYLES } from "../../utils/styles";

interface Usuario {
    nick: string;
    nombre: string;
    email: string;
    centro: string;
    curso: string;
    tipo: string;
    fechaInscripcion: string;
    likes: number;
    amigos: string[];
    respuestasAcertadas: number;
    competicionesSuperadas: number;
    concursosGanados: number;
    comentariosRecibidos: number;
    historiasCreadas: number;
    anosEnStoryUp: number;
    trofeos: any[];
};

const PerfilUsuario: React.FC = () => {
    const router = useRouter();
    // Función para asignar trofeos al usuario si su centro ganó premios este mes
    const asignarTrofeosUsuario = async (usuario: any) => {
        if (typeof window === "undefined") return;

        const fechaActual = new Date();
        const year = fechaActual.getFullYear();
        const month = fechaActual.getMonth() + 1;

        try {
            const response = await fetch(`/api/premios/mensuales?year=${year}&month=${month}`);
            const premios = await response.json();
            const premioCentro = premios.find((p: any) => p.centro === usuario.centro);

            if (premioCentro) {
                let idTrofeo = 0;
                switch (premioCentro.posicion) {
                    case 1: idTrofeo = 25; break; // Campeón Mensual
                    case 2: idTrofeo = 26; break; // Subcampeón Mensual
                    case 3: idTrofeo = 27; break; // Tercer Lugar Mensual
                    default:
                        if (premioCentro.posicion <= 10) {
                            idTrofeo = 28; // Top 10 Mensual
                        } else {
                            idTrofeo = 29; // Participante Activo
                        }
                        break;
                }

                if (idTrofeo > 0 && !usuario.trofeosDesbloqueados.includes(idTrofeo)) {
                    const updated = {
                        trofeosDesbloqueados: [...usuario.trofeosDesbloqueados, idTrofeo],
                        trofeosBloqueados: usuario.trofeosBloqueados
                    };
                    await fetch('/api/trofeos/user-trofeos', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ nick: usuario.nick, ...updated })
                    });
                }
            }
        } catch (e) {
            console.error('Error asignando trofeos:', e);
        }
    };

    const [user, setUser] = useState<any>(null);
    const [bullyingActivo, setBullyingActivo] = useState(false);
    const [usuarioBullying, setUsuarioBullying] = useState("");
    const [palabraProhibida, setPalabraProhibida] = useState("");
    const [concursoTitulo, setConcursoTitulo] = useState("");
    const [concursoTexto, setConcursoTexto] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [usuarioGanador, setUsuarioGanador] = useState("");
    const [concursoId, setConcursoId] = useState(1);
    const [nombreArchivo, setNombreArchivo] = useState("");
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState<{ from: string, to: string, text: string, fecha?: string }[]>([]);
    const [mensajeRecibido, setMensajeRecibido] = useState(false);
    const [noticiaTitulo, setNoticiaTitulo] = useState("");
    const [noticiaTexto, setNoticiaTexto] = useState("");
    const [noticiaImagen, setNoticiaImagen] = useState<string>("");
    // Estado para el trofeo seleccionado por el admin
    const [trofeoSeleccionado, setTrofeoSeleccionado] = useState("");
    // Estados para gestionar concursos finalizados
    const [concursoSeleccionado, setConcursoSeleccionado] = useState("");
    const [ganadorSeleccionado, setGanadorSeleccionado] = useState("");
    const [selectedUserData, setSelectedUserData] = useState<any>(null);
    // Estados para datos de base de datos
    const [premiumData, setPremiumData] = useState<any>(null);
    const [userTrofeos, setUserTrofeos] = useState<{ trofeosDesbloqueados: number[]; trofeosBloqueados: number[] }>({ trofeosDesbloqueados: [], trofeosBloqueados: [] });
    const [concursos, setConcursos] = useState<any[]>([]);
    // Estados para preguntas
    const [cursoSeleccionado, setCursoSeleccionado] = useState<string>("1primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState<string>("matematicas");
    const [pregunta, setPregunta] = useState<string>("");
    const [respuesta, setRespuesta] = useState<string>("");

    const { t } = useTranslation();

    // Inicialización y sincronización de usuario y rankings SOLO una vez
    useEffect(() => {
        // Obtener usuario actual
        fetch('/api/auth/me')
            .then(response => {
                if (!response.ok) {
                    router.push('/');
                    return null;
                }
                return response.json();
            })
            .then(data => {
                if (data && data.user) {
                    setUser(data.user);
                } else if (data && !data.user) {
                    router.push('/');
                }
            })
            .catch(error => {
                console.warn('Error comprobando sesión:', error);
            });

        // Obtener concursos
        fetch('/api/concursos')
            .then(response => response.json())
            .then(concursos => {
                setConcursos(concursos);
            })
            .catch(error => {
                console.warn('No se pudo cargar la lista de concursos:', error);
            });
    }, []);

    // Manejo seguro de datos premium y trofeos
    useEffect(() => {
        if (displayedUser && displayedUser.nick) {
            fetch('/api/premium/data?nick=' + displayedUser.nick)
                .then(response => response.json())
                .then(data => {
                    if (data && !data.error) {
                        setPremiumData(data);
                    } else {
                        setPremiumData(null);
                        console.warn('No hay datos premium para este usuario.');
                    }
                })
                .catch(error => {
                    setPremiumData(null);
                    console.warn('No se pudo cargar datos premium:', error);
                });

            fetch('/api/trofeos/user-trofeos?nick=' + displayedUser.nick)
                .then(response => response.json())
                .then(data => {
                    if (data && !data.error) {
                        setUserTrofeos(data);
                    } else {
                        setUserTrofeos({ trofeosDesbloqueados: [], trofeosBloqueados: [] });
                        console.warn('No hay trofeos para este usuario.');
                    }
                })
                .catch(error => {
                    setUserTrofeos({ trofeosDesbloqueados: [], trofeosBloqueados: [] });
                    console.warn('No se pudo cargar trofeos:', error);
                });
        }
    }, [displayedUser]);


    const displayedUser = selectedUser ? (selectedUserData || { ...user, trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados, trofeosBloqueados: userTrofeos.trofeosBloqueados }) : { ...user, trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados, trofeosBloqueados: userTrofeos.trofeosBloqueados };

    // Cargar mensajes del chat solo cuando cambia el usuario
    useEffect(() => {
        if (user && user.nick) {
            fetch('/api/chat?nick=' + user.nick)
                .then(response => response.json())
                .then(messages => {
                    setChatMessages(messages);
                })
                .catch(error => {
                    console.warn('No se pudo cargar los mensajes del chat:', error);
                });
        }
    }, [user]);

    const handlePalabraProhibidaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPalabraProhibida("");
    };
    const handleApagarBullying = () => {
        setBullyingActivo(false);
        setUsuarioBullying("");
    };
    const handleConcursoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('/api/concursos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                numero: concursoId,
                titulo: concursoTitulo,
                texto: concursoTexto,
                inicio: fechaInicio,
                fin: fechaFin,
                autor: user ? user.nick : "",
                ganador: usuarioGanador,
                fechaFinal: fechaFin
            })
        })
            .then(response => response.json())
            .then(() => {
                setConcursoId(concursoId + 1);
                setConcursoTitulo("");
                setConcursoTexto("");
                setFechaInicio("");
                setFechaFin("");
                setUsuarioGanador("");
                // Refrescar concursos
                fetch('/api/concursos').then(r => r.json()).then(setConcursos);
            })
            .catch(error => {
                console.error('Error creando concurso:', error);
            });
    };
    // Función general para sumar o restar likes a cualquier usuario
    const updateLikes = (nick: string, cantidad: number) => {
        if (!nick) return;
        const currentLikes = usuarios.find((u: any) => u.nick === nick)?.likes || 0;
        fetch('/api/users/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nick, likes: currentLikes + cantidad })
        })
            .then(response => response.json())
            .then(updatedUser => {
                const updatedUsers = usuarios.map((u: any) => u.nick === nick ? updatedUser : u);
                setUsuarios(updatedUsers);
                if (user && user.nick === nick) {
                    setUser(updatedUser);
                }
            })
            .catch(error => console.error('Error updating likes:', error));
    };

    const handleSeleccionarGanador = () => {
        if (usuarioGanador) {
            fetch('/api/concursos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: concursos[0].id, ganador: usuarioGanador })
            })
                .then(() => {
                    updateLikes(usuarioGanador, 1);
                })
                .catch(error => {
                    console.error('Error seleccionando ganador:', error);
                });
        }
    };
    const handleAsignarGanador = async () => {
        if (!concursoSeleccionado || !ganadorSeleccionado) {
            return;
        }
        try {
            await fetch('/api/concursos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: concursoSeleccionado, ganador: ganadorSeleccionado })
            });
            updateLikes(ganadorSeleccionado, 10);
            setConcursoSeleccionado("");
            setGanadorSeleccionado("");
            // Refrescar concursos
            fetch('/api/concursos').then(r => r.json()).then(setConcursos);
        } catch (error) {
            console.error('Error asignando ganador:', error);
        }
    };
    const handleNoticiaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('/api/noticias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: noticiaTitulo,
                contenido: noticiaTexto,
                autorNick: user ? user.nick : ""
            })
        })
            .then(response => response.json())
            .then(() => {
                setNoticiaTitulo("");
                setNoticiaTexto("");
                setNoticiaImagen("");
            })
            .catch(error => {
                console.error('Error creando noticia:', error);
            });
    };

    // Función para enviar pregunta
    const enviarPregunta = async () => {
        if (!pregunta.trim() || !respuesta.trim()) {
            return;
        }
        try {
            const response = await fetch('/api/add-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    curso: cursoSeleccionado,
                    asignatura: asignaturaSeleccionada,
                    pregunta: pregunta.trim(),
                    respuesta: respuesta.trim(),
                }),
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
        const updateLikes = (nick: string, cantidad: number) => {
            if (!nick) return;
            const currentLikes = usuarios.find((u: any) => u.nick === nick)?.likes || 0;
            fetch('/api/users/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, likes: currentLikes + cantidad })
            })
                .then(response => response.json())
                .then(updatedUser => {
                    const updatedUsers = usuarios.map((u: any) => u.nick === nick ? updatedUser : u);
                    setUsuarios(updatedUsers);
                    if (user && user.nick === nick) {
                        setUser(updatedUser);
                    }
                })
                .catch(error => console.error('Error updating likes:', error));
        };
    };
    // Función para bloquear trofeo específico
    const handleLockTrofeo = (trofeoIdx: number) => {
        if (!selectedUser) return;
        const updated = {
            trofeosDesbloqueados: Array.isArray(userTrofeos.trofeosDesbloqueados) ? userTrofeos.trofeosDesbloqueados.filter((id: number) => id !== trofeoIdx) : [],
            trofeosBloqueados: Array.isArray(userTrofeos.trofeosBloqueados) ? [...userTrofeos.trofeosBloqueados, trofeoIdx] : [trofeoIdx]
        };
        fetch('/api/trofeos/user-trofeos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nick: selectedUser, ...updated })
        })
            .then(() => {
                setUserTrofeos(updated);
            })
            .catch(error => {
                console.error('Error locking trofeo:', error);
            });
    };    // Lista de trofeos normales (24)
    const TROFEOS = [
        { src: "/trofeo1.jpg", texto: "Trofeo 1", tipo: "auto" },
        { src: "/trofeo2.jpg", texto: "Trofeo 2", tipo: "auto" },
        { src: "/trofeo3.jpg", texto: "Trofeo 3", tipo: "auto" },
        { src: "/trofeo4.jpg", texto: "Trofeo 4", tipo: "auto" },
        { src: "/trofeo5.jpg", texto: "Trofeo 5", tipo: "auto" },
        { src: "/trofeo6.jpg", texto: "Trofeo 6", tipo: "auto" },
        { src: "/trofeo7.jpg", texto: "Trofeo 7", tipo: "auto" },
        { src: "/trofeo8.jpg", texto: "Trofeo 8", tipo: "auto" },
        { src: "/trofeo9.jpg", texto: "Trofeo 9", tipo: "auto" },
        { src: "/trofeo10.jpg", texto: "Trofeo 10", tipo: "auto" },
        { src: "/trofeo11.jpg", texto: "Trofeo 11", tipo: "auto" },
        { src: "/trofeo12.jpg", texto: "Trofeo 12", tipo: "auto" },
        { src: "/trofeo13.png", texto: "Trofeo 13", tipo: "auto" },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto" },
        { src: "/trofeo15.jpg", texto: "Trofeo 15", tipo: "auto" },
        { src: "/trofeo16.jpg", texto: "Trofeo 16", tipo: "auto" },
        { src: "/trofeo17.jpg", texto: "Trofeo 17", tipo: "auto" },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto" },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto" },
        { src: "/trofeo20.jpg", texto: "Trofeo 20", tipo: "auto" },
        { src: "/trofeo21.jpg", texto: "Trofeo 21", tipo: "auto" },
        { src: "/trofeo22.jpg", texto: "Trofeo 22", tipo: "auto" },
        { src: "/trofeo23.jpg", texto: "Trofeo 23", tipo: "auto" },
        { src: "/trofeo24.jpg", texto: "Trofeo 24", tipo: "auto" },
        { src: "/trofeo1.jpg", texto: "🏆 Campeón Mensual", tipo: "asignado" },
        { src: "/trofeo2.jpg", texto: "🥈 Subcampeón Mensual", tipo: "asignado" },
        { src: "/trofeo3.jpg", texto: "🥉 Tercer Lugar Mensual", tipo: "asignado" },
        { src: "/trofeo4.jpg", texto: "🏅 Top 10 Mensual", tipo: "asignado" },
        { src: "/trofeo5.jpg", texto: "📚 Participante Activo", tipo: "asignado" }
    ];
    // Lista de trofeos premium (12)
    // TROFEOS_PREMIUM ahora se importa desde trofeosPremiumImport.ts
    // Trofeos automáticos con condición
    const TROFEOS_AUTO = [
        { src: "/trofeo1.jpg", texto: "Trofeo 1", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 10 },
        { src: "/trofeo2.jpg", texto: "Trofeo 2", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 1 },
        { src: "/trofeo3.jpg", texto: "Trofeo 3", tipo: "auto", condicion: (user: any) => (user.comentariosRealizados || 0) >= 1 },
        { src: "/trofeo4.jpg", texto: "Trofeo 4", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 1 },
        { src: "/trofeo5.jpg", texto: "Trofeo 5", tipo: "auto", condicion: (user: any) => (user.preguntasAcertadas || 0) >= 20 },
        { src: "/trofeo6.jpg", texto: "Trofeo 6", tipo: "auto", condicion: (user: any) => (user.competicionesSuperadas || 0) >= 1 },
        { src: "/trofeo7.jpg", texto: "Trofeo 7", tipo: "auto", condicion: (user: any) => !!user.estaEnRanking },
        { src: "/trofeo8.jpg", texto: "Trofeo 8", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 1 },
        { src: "/trofeo9.jpg", texto: "Trofeo 9", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 100 },
        { src: "/trofeo10.jpg", texto: "Trofeo 10", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 10 },
        { src: "/trofeo11.jpg", texto: "Trofeo 11", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 3 },
        { src: "/trofeo12.jpg", texto: "Trofeo 12", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 3 },
        { src: "/trofeo13.png", texto: "Trofeo 13", tipo: "auto", condicion: (user: any) => !!user.estaEnRankingCompeticiones },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 500 },
        { src: "/trofeo15.jpg", texto: "Trofeo 15", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 30 },
        { src: "/trofeo16.jpg", texto: "Trofeo 16", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 10 },
        { src: "/trofeo17.jpg", texto: "Trofeo 17", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 15 },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 3 },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto", condicion: (user: any) => (user.preguntasAcertadas || 0) >= 1000 },
        {
            src: "/trofeo20.jpg", texto: "Trofeo 20", tipo: "auto", condicion: (user: any) => {
                if (!user.fechaInscripcion) return false;
                const fecha = new Date(user.fechaInscripcion);
                const ahora = new Date();
                const diff = ahora.getTime() - fecha.getTime();
                return diff >= 365 * 24 * 60 * 60 * 1000; // 1 año en ms
            }
        },
        { src: "/trofeo21.jpg", texto: "Trofeo 21", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 30 },
        { src: "/trofeo22.jpg", texto: "Trofeo 22", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 1000 },
        { src: "/trofeo23.jpg", texto: "Trofeo 23", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 50 }
    ];
    // Unificar todos los trofeos para el selector
    const TROFEOS_ALL = [...TROFEOS, ...TROFEOS_PREMIUM];
    // Función para obtener trofeos desbloqueados automáticamente
    const getAutoTrofeos = (user: any) => {
        // Trofeo Premium 7: Diseñador del Futuro
        // ...existing code...
        // Asegurar que el campo amigos es siempre un array actualizado
        const userSync = {
            ...user,
            amigos: Array.isArray(user.amigos) ? user.amigos : []
        };
        let autoTrofeos = TROFEOS_AUTO
            .map((t, idx) => (typeof t.condicion === 'function' && t.condicion(userSync)) ? idx : null)
            .filter(idx => idx !== null);

        // Desbloqueo automático de trofeos premium
        const esPremium = userSync.premium === true || userSync.isPremium === true || userSync.tipo === "premium";
        const historiasCreadas = Array.isArray(userSync.historias) ? userSync.historias.length : (userSync.historiasCreadas || 0);
        const preguntasAcertadas = userSync.preguntasAcertadas || 0;
        // Trofeo Premium 1: Historiador Premium
        if (esPremium && historiasCreadas >= 35) {
            autoTrofeos.push(TROFEOS.length); // Índice del trofeo premium 1
        }
        // Trofeo Premium 2: Sabio Premium
        if (esPremium && preguntasAcertadas >= 1200) {
            autoTrofeos.push(TROFEOS.length + 1); // Índice del trofeo premium 2
        }
        // Trofeo Premium 3: Amigo Premium
        const amigosCount = Array.isArray(userSync.amigos) ? userSync.amigos.length : 0;
        if (esPremium && amigosCount >= 60) {
            autoTrofeos.push(TROFEOS.length + 2); // Índice del trofeo premium 3
        }
        // Trofeo Premium 4: Espíritu Navideño Premium
        let tieneHistoriaNavidad = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaNavidad = userSync.historias.some((historia: any) => {
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
            autoTrofeos.push(TROFEOS.length + 3); // Índice del trofeo premium 4
        }
        // Trofeo Premium 5: Verano Dorado Premium
        let tieneHistoriaVerano = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaVerano = userSync.historias.some((historia: any) => {
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
            autoTrofeos.push(TROFEOS.length + 4); // Índice del trofeo premium 5
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
            autoTrofeos.push(TROFEOS.length + 5); // Índice del trofeo premium 6
        }
        // Trofeo Premium 7: Diseñador del Futuro
        let tieneLogoStoryUp = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneLogoStoryUp = userSync.historias.some((historia: any) => {
                if (!historia || !historia.titulo || !historia.imagen) return false;
                const tituloLower = historia.titulo.toLowerCase();
                return tituloLower.includes("logo storyup") && !!historia.imagen;
            });
        }
        if (esPremium && tieneLogoStoryUp) {
            autoTrofeos.push(TROFEOS.length + 6); // Índice del trofeo premium 7
        }
        // Trofeo Premium 8: Escritor Premium
        if (esPremium && historiasCreadas >= 15) {
            autoTrofeos.push(TROFEOS.length + 7); // Índice del trofeo premium 8
        }

        // Trofeo Premium 9: Competidor Premium
        // Consigue al menos 30 trofeos (normales + premium)
        const totalTrofeosDesbloqueados = Array.isArray(userSync.trofeosDesbloqueados) ? userSync.trofeosDesbloqueados.length : 0;
        // Incluye los automáticos calculados en esta función
        const totalAutoTrofeos = autoTrofeos.length;
        const totalTrofeos = totalTrofeosDesbloqueados + totalAutoTrofeos;
        if (esPremium && totalTrofeos >= 30) {
            autoTrofeos.push(TROFEOS.length + 8); // Índice del trofeo premium 9
        }
        // Trofeo Premium 10: Cerebro de Oro
        // 2500+ preguntas acertadas en Aprende con Pipo
        if (esPremium && preguntasAcertadas >= 2500) {
            autoTrofeos.push(TROFEOS.length + 9); // Índice del trofeo premium 10
        }

        // Trofeo Premium 11: Analista Premium
        // Consigue nivel 3 en todas las materias en "Analisis por materias" de Estadísticas premium Avanzadas
        // Suponemos que user.nivelesMaterias es un objeto tipo { matematicas: 3, lenguaje: 3, ... }
        const materiasRequeridas = ["matematicas", "lenguaje", "ciencias", "ingles", "historia", "geografia", "literatura"];
        const nivelesMaterias = userSync.nivelesMaterias || {};
        const todasNivel3 = materiasRequeridas.every(m => nivelesMaterias[m] >= 3);
        if (esPremium && todasNivel3) {
            autoTrofeos.push(TROFEOS.length + 10); // Índice del trofeo premium 11
        }
        // Trofeo Premium 12: Red Social Premium
        // Conseguir 100+ amigos
        if (esPremium && amigosCount >= 100) {
            autoTrofeos.push(TROFEOS.length + 11); // Índice del trofeo premium 12
        }
        return autoTrofeos;
    };
    // Función para saber si un trofeo está desbloqueado
    const isTrofeoUnlocked = (user: any, idx: number) => {
        const auto = getAutoTrofeos(user);
        const manual = Array.isArray(user.trofeosDesbloqueados) ? user.trofeosDesbloqueados : [];
        const bloqueados = Array.isArray(user.trofeosBloqueados) ? user.trofeosBloqueados : [];
        const asignados = Array.isArray(user.trofeos) ? user.trofeos : [];
        return (auto.includes(idx) || manual.includes(idx) || asignados.includes(idx)) && !bloqueados.includes(idx);
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-green-100 flex items-center justify-center">
                <div className="max-w-md w-full bg-white shadow rounded p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Perfil</h2>
                    <p className="text-gray-600">No se ha iniciado sesión.</p>
                </div>
            </div>
        );
    }

    const isPremium = displayedUser ? (premiumData && premiumData.activo) : false;
    return (
        <div className="min-h-screen bg-green-100 flex flex-col pt-4">
            {/* ...existing code... */}
            {/* BLOQUES EXTRA SOLO PARA DOCENTES */}
            {user.tipo && user.tipo.toLowerCase() === "docente" && (
                <div className="w-full max-w-6xl mx-auto mt-16 grid grid-cols-2 gap-12">
                    {/* Bloque: Crear noticia */}
                    <form onSubmit={handleNoticiaSubmit} className="bg-white shadow rounded p-6 mb-8 flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Crear noticia</h3>
                        <input type="text" value={noticiaTitulo} onChange={e => setNoticiaTitulo(e.target.value)} placeholder="Título" className="border p-2 rounded" />
                        <textarea value={noticiaTexto} onChange={e => setNoticiaTexto(e.target.value)} placeholder="Contenido" className="border p-2 rounded" />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Publicar noticia</button>
                    </form>

                    {/* Bloque: Crear concurso */}
                    <form onSubmit={handleConcursoSubmit} className="bg-white shadow rounded p-6 mb-8 flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Crear concurso</h3>
                        <input type="text" value={concursoTitulo} onChange={e => setConcursoTitulo(e.target.value)} placeholder="Título" className="border p-2 rounded" />
                        <textarea value={concursoTexto} onChange={e => setConcursoTexto(e.target.value)} placeholder="Descripción" className="border p-2 rounded" />
                        <input type="date" value={fechaInicio} onChange={e => setFechaInicio(e.target.value)} className="border p-2 rounded" />
                        <input type="date" value={fechaFin} onChange={e => setFechaFin(e.target.value)} className="border p-2 rounded" />
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Crear concurso</button>
                    </form>

                    {/* Gestión de Concursos Finalizados */}
                    <div className="bg-white shadow rounded p-6 mb-8 flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Gestión de concursos finalizados</h3>
                        <select value={concursoSeleccionado} onChange={e => setConcursoSeleccionado(e.target.value)} className="border p-2 rounded">
                            <option value="">Selecciona concurso</option>
                            {concursos.map(c => (
                                <option key={c.id} value={c.id}>{c.titulo}</option>
                            ))}
                        </select>
                        <input type="text" value={ganadorSeleccionado} onChange={e => setGanadorSeleccionado(e.target.value)} placeholder="Nick del ganador" className="border p-2 rounded" />
                        <button type="button" onClick={handleAsignarGanador} className="bg-yellow-500 text-white px-4 py-2 rounded">Asignar ganador</button>
                    </div>

                    {/* Bloque: Agregar Pregunta - Aprende con Pipo */}
                    <form onSubmit={e => { e.preventDefault(); enviarPregunta(); }} className="bg-white shadow rounded p-6 mb-8 flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Agregar pregunta (Aprende con Pipo)</h3>
                        <select value={cursoSeleccionado} onChange={e => setCursoSeleccionado(e.target.value)} className="border p-2 rounded">
                            <option value="1primaria">1º Primaria</option>
                            <option value="2primaria">2º Primaria</option>
                            <option value="3primaria">3º Primaria</option>
                            <option value="4primaria">4º Primaria</option>
                            <option value="5primaria">5º Primaria</option>
                            <option value="6primaria">6º Primaria</option>
                        </select>
                        <select value={asignaturaSeleccionada} onChange={e => setAsignaturaSeleccionada(e.target.value)} className="border p-2 rounded">
                            <option value="matematicas">Matemáticas</option>
                            <option value="lenguaje">Lenguaje</option>
                            <option value="ciencias">Ciencias</option>
                            <option value="ingles">Inglés</option>
                            <option value="historia">Historia</option>
                            <option value="geografia">Geografía</option>
                            <option value="literatura">Literatura</option>
                        </select>
                        <input type="text" value={pregunta} onChange={e => setPregunta(e.target.value)} placeholder="Pregunta" className="border p-2 rounded" />
                        <input type="text" value={respuesta} onChange={e => setRespuesta(e.target.value)} placeholder="Respuesta" className="border p-2 rounded" />
                        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Agregar pregunta</button>
                    </form>

                    {/* Panel de administración y antibullying */}
                    <div className="bg-white shadow rounded p-6 mb-8 flex flex-col gap-4">
                        <h3 className="text-lg font-bold mb-2">Panel de administración y antibullying</h3>
                        <form onSubmit={handlePalabraProhibidaSubmit} className="flex gap-2 mb-2">
                            <input type="text" value={palabraProhibida} onChange={e => setPalabraProhibida(e.target.value)} placeholder="Palabra prohibida" className="border p-2 rounded" />
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Agregar palabra</button>
                        </form>
                        <button type="button" onClick={handleApagarBullying} className="bg-gray-500 text-white px-4 py-2 rounded">Desactivar antibullying</button>
                        {bullyingActivo && (
                            <div className="text-red-600 font-bold">Antibullying activo para: {usuarioBullying}</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

}
export default PerfilUsuario;
