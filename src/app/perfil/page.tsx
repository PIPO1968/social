"use client";
import React, { useState, useEffect, useMemo } from "react";
import { renderNick } from "@/utils/renderNick";
import { TROFEOS_PREMIUM } from "@/data/trofeosPremiumImport";
import { useTranslation } from "@/utils/i18n";
import { useRouter } from "next/navigation";
import { BUTTON_STYLES } from "../../utils/styles";
import { useUser } from "@/contexts/UserContext";
import { UserLink } from "@/components/UserLink";

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
    const { user, setUser } = useUser();
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
    const [tieneMensajesSinLeer, setTieneMensajesSinLeer] = useState(false);
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
    const [displayedUserProfile, setDisplayedUserProfile] = useState<any>(null);
    const [concursos, setConcursos] = useState<any[]>([]);
    // Estados para preguntas
    const [cursoSeleccionado, setCursoSeleccionado] = useState<string>("1primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState<string>("matematicas");
    const [pregunta, setPregunta] = useState<string>("");
    const [respuesta, setRespuesta] = useState<string>("");
    // Estados para solicitudes de amistad
    const [pendingRequests, setPendingRequests] = useState<any[]>([]);

    const { t } = useTranslation();


    const displayedUser = useMemo(() => selectedUser ? (selectedUserData || { ...user, trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados, trofeosBloqueados: userTrofeos.trofeosBloqueados }) : { ...user, trofeosDesbloqueados: userTrofeos.trofeosDesbloqueados, trofeosBloqueados: userTrofeos.trofeosBloqueados }, [selectedUser, selectedUserData, user, userTrofeos]);

    // Inicialización y sincronización de rankings
    useEffect(() => {
        // Obtener concursos
        fetch('/api/concursos')
            .then(response => response.json())
            .then(concursos => {
                setConcursos(concursos);
                // Calcular el próximo ID basado en los concursos existentes
                const maxNumero = concursos.length > 0 ? Math.max(...concursos.map((c: any) => c.numero)) : 0;
                setConcursoId(maxNumero + 1);
            })
            .catch(error => {
                console.warn('No se pudo cargar la lista de concursos:', error);
            });

        // Obtener todos los usuarios registrados para el selector del chat
        fetch('/api/users')
            .then(response => response.json())
            .then(users => {
                if (Array.isArray(users)) {
                    // Ordenar alfabéticamente por nick
                    users.sort((a, b) => a.nick.localeCompare(b.nick, 'es', { sensitivity: 'base' }));
                    setUsuarios(users);
                }
            })
            .catch(error => {
                console.warn('No se pudo cargar la lista de usuarios:', error);
            });
    }, []);

    // Manejo seguro de datos premium y trofeos
    useEffect(() => {
        if (user && user.nick) {
            fetch('/api/premium/data?nick=' + user.nick)
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

            // Cargar datos del perfil del usuario para sincronizar trofeos
            fetch('/api/user/profile?nick=' + user.nick)
                .then(response => response.json())
                .then(profileData => {
                    if (profileData && profileData.user) {
                        // Guardar los datos completos del perfil
                        setDisplayedUserProfile(profileData.user);

                        // Sincronizar trofeos automáticos con los datos completos del perfil
                        fetch('/api/trofeos/user-trofeos?nick=' + user.nick)
                            .then(response => response.json())
                            .then(trofeosData => {
                                if (trofeosData && !trofeosData.error) {
                                    setUserTrofeos(trofeosData);
                                    // Sincronizar trofeos automáticos
                                    syncAutoTrofeos(profileData.user, trofeosData);
                                } else {
                                    setUserTrofeos({ trofeosDesbloqueados: [], trofeosBloqueados: [] });
                                    // Sincronizar trofeos automáticos
                                    syncAutoTrofeos(profileData.user, { trofeosDesbloqueados: [], trofeosBloqueados: [] });
                                }
                            })
                            .catch(error => {
                                setUserTrofeos({ trofeosDesbloqueados: [], trofeosBloqueados: [] });
                                console.warn('No se pudo cargar trofeos:', error);
                                // Sincronizar trofeos automáticos
                                syncAutoTrofeos(profileData.user, { trofeosDesbloqueados: [], trofeosBloqueados: [] });
                            });
                    }
                })
                .catch(error => {
                    console.warn('No se pudo cargar datos del perfil:', error);
                });

            fetch('/api/friends?action=requests&nick=' + user.nick)
                .then(response => response.json())
                .then(data => {
                    if (data.requests) {
                        setPendingRequests(data.requests);
                    } else {
                        setPendingRequests([]);
                    }
                })
                .catch(error => {
                    setPendingRequests([]);
                    console.warn('No se pudo cargar solicitudes:', error);
                });
        }
    }, [user]);

    // Cargar mensajes del chat solo cuando cambia el usuario
    useEffect(() => {
        if (user && user.nick) {
            fetch('/api/chat?nick=' + user.nick)
                .then(response => response.json())
                .then(messages => {
                    setChatMessages(messages);
                    // Comprobar si hay mensajes no leídos
                    const lastRead = localStorage.getItem('lastReadMsg') || '';
                    // Buscar el último mensaje recibido para este usuario
                    const lastReceived = messages.filter((msg: any) => msg.to === user.nick)
                        .map((msg: any) => {
                            // Parsear fecha robustamente
                            const d = msg.fecha ? Date.parse(msg.fecha) : NaN;
                            return isNaN(d) ? 0 : d;
                        })
                        .reduce((max: any, curr: any) => Math.max(max, curr), 0);
                    const unread = lastReceived > Number(lastRead);
                    setTieneMensajesSinLeer(unread);
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
    const handleSendMessage = () => {
        if (!chatInput.trim() || !user || !selectedUser) return;
        fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from: user.nick, to: selectedUser, text: chatInput.trim() })
        })
            .then(() => {
                setChatInput('');
                // Refrescar mensajes
                fetch('/api/chat?nick=' + user.nick)
                    .then(response => response.json())
                    .then(messages => {
                        setChatMessages(messages);
                        // Guardar timestamp del último mensaje recibido como leído
                        const lastReceived = messages.filter((msg: any) => msg.to === user.nick)
                            .map((msg: any) => {
                                const d = msg.fecha ? Date.parse(msg.fecha) : NaN;
                                return isNaN(d) ? 0 : d;
                            })
                            .reduce((max: any, curr: any) => Math.max(max, curr), 0);
                        if (lastReceived > 0) {
                            localStorage.setItem('lastReadMsg', lastReceived.toString());
                        } else {
                            localStorage.setItem('lastReadMsg', Date.now().toString());
                        }
                        setTieneMensajesSinLeer(false);
                    })
                    .catch(error => console.warn('No se pudo refrescar los mensajes:', error));
            })
            .catch(error => {
                console.error('Error enviando mensaje:', error);
            });
    };

    const handleAcceptRequest = async (requestId: number) => {
        if (!user) return;

        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'accept', userNick: user.nick, requestId })
            });
            if (response.ok) {
                // Remover de pendingRequests
                setPendingRequests(prev => prev.filter((r: any) => r.id !== requestId));
                // Recargar para actualizar contadores
                window.location.reload();
            } else {
                alert('Error al aceptar solicitud');
            }
        } catch (error) {
            alert('Error al aceptar solicitud');
        }
    };

    const handleRejectRequest = async (requestId: number) => {
        if (!user) return;

        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'reject', userNick: user.nick, requestId })
            });
            if (response.ok) {
                // Remover de pendingRequests
                setPendingRequests(prev => prev.filter((r: any) => r.id !== requestId));
                // Recargar para actualizar contadores
                window.location.reload();
            } else {
                alert('Error al rechazar solicitud');
            }
        } catch (error) {
            alert('Error al rechazar solicitud');
        }
    };
    const handleApagarBullying = () => {
        setBullyingActivo(false);
        setUsuarioBullying("");
    };
    const handleConcursoSubmit = (e: React.FormEvent) => {
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
            headers: { 'Content-Type': 'application/json' },
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
        })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw new Error(err.error || 'Error desconocido'); });
                }
                return response.json();
            })
            .then(data => {
                setConcursoId(concursoId + 1);
                setConcursoTitulo("");
                setConcursoTexto("");
                setFechaInicio("");
                setFechaFin("");
                setUsuarioGanador("");
                // Refrescar concursos
                fetch('/api/concursos').then(r => r.json()).then(setConcursos);
                alert('Concurso creado exitosamente.');
            })
            .catch(error => {
                console.error('Error creando concurso:', error);
                alert('Error creando concurso: ' + error.message);
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
            trofeosDesbloqueados: Array.isArray(userTrofeos.trofeosDesbloqueados) ? userTrofeos.trofeosDesbloqueados.filter((id: any) => id !== trofeoIdx) : [],
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
        { src: "/trofeo25.jpg", texto: "Trofeo 1", tipo: "auto" },
        { src: "/trofeo7.jpg", texto: "Trofeo 2", tipo: "auto" },
        { src: "/trofeo12.jpg", texto: "Trofeo 3", tipo: "auto" },
        { src: "/trofeo5.jpg", texto: "Trofeo 4", tipo: "auto" },
        { src: "/trofeo13.png", texto: "Trofeo 5", tipo: "auto" },
        { src: "/trofeo17.jpg", texto: "Trofeo 6", tipo: "auto" },
        { src: "/trofeo27.jpg", texto: "Trofeo 7", tipo: "auto" },
        { src: "/trofeo10.jpg", texto: "Trofeo 8", tipo: "auto" },
        { src: "/trofeo23.jpg", texto: "Trofeo 9", tipo: "auto" },
        { src: "/trofeo15.jpg", texto: "Trofeo 10", tipo: "auto" },
        { src: "/trofeo26.jpg", texto: "Trofeo 11", tipo: "auto" },
        { src: "/trofeo1.jpg", texto: "Trofeo 12", tipo: "auto" },
        { src: "/trofeo22.jpg", texto: "Trofeo 13", tipo: "auto" },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto" },
        { src: "/trofeo20.jpg", texto: "Trofeo 15", tipo: "auto" },
        { src: "/trofeo11.jpg", texto: "Trofeo 16", tipo: "auto" },
        { src: "/trofeo24.jpg", texto: "Trofeo 17", tipo: "auto" },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto" },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto" },
        { src: "/trofeo15.jpg", texto: "Trofeo 20", tipo: "auto" },
        { src: "/trofeo9.jpg", texto: "Trofeo 21", tipo: "auto" },
        { src: "/trofeo8.jpg", texto: "Trofeo 22", tipo: "auto" },
        { src: "/trofeo21.jpg", texto: "Trofeo 23", tipo: "auto" },
        { src: "/trofeo16.jpg", texto: "Trofeo 24", tipo: "auto" },
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
        { src: "/trofeo25.jpg", texto: "Trofeo 1", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 10 },
        { src: "/trofeo7.jpg", texto: "Trofeo 2", tipo: "auto", condicion: (user: any) => Array.isArray(user.amigos) && user.amigos.length >= 1 },
        { src: "/trofeo12.jpg", texto: "Trofeo 3", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 1 },
        { src: "/trofeo5.jpg", texto: "Trofeo 4", tipo: "auto", condicion: (user: any) => (user.historiasCreadas || 0) >= 1 },
        { src: "/trofeo13.png", texto: "Trofeo 5", tipo: "auto", condicion: (user: any) => (user.respuestasAcertadas || 0) >= 20 },
        { src: "/trofeo17.jpg", texto: "Trofeo 6", tipo: "auto", condicion: (user: any) => (user.competicionesSuperadas || 0) >= 1 },
        {
            src: "/trofeo27.jpg", texto: "Trofeo 7", tipo: "auto", condicion: (user: any) => {
                // Aparecer en rankings
                return (user.respuestasAcertadas || 0) >= 1 || (user.likes || 0) >= 1 || (user.historiasCreadas || 0) >= 1;
            }
        },
        { src: "/trofeo10.jpg", texto: "Trofeo 8", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 1 },
        { src: "/trofeo23.jpg", texto: "Trofeo 9", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 100 },
        { src: "/trofeo15.jpg", texto: "Trofeo 10", tipo: "auto", condicion: (user: any) => Array.isArray(user.amigos) && user.amigos.length >= 10 },
        { src: "/trofeo26.jpg", texto: "Trofeo 11", tipo: "auto", condicion: (user: any) => (user.historiasCreadas || 0) >= 3 },
        { src: "/trofeo1.jpg", texto: "Trofeo 12", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 3 },
        { src: "/trofeo22.jpg", texto: "Trofeo 13", tipo: "auto", condicion: (user: any) => (user.competicionesSuperadas || 0) >= 1 },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 500 },
        { src: "/trofeo20.jpg", texto: "Trofeo 15", tipo: "auto", condicion: (user: any) => Array.isArray(user.amigos) && user.amigos.length >= 30 },
        { src: "/trofeo11.jpg", texto: "Trofeo 16", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 10 },
        { src: "/trofeo24.jpg", texto: "Trofeo 17", tipo: "auto", condicion: (user: any) => (user.historiasCreadas || 0) >= 15 },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 3 },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto", condicion: (user: any) => (user.respuestasAcertadas || 0) >= 1000 },
        { src: "/trofeo15.jpg", texto: "Trofeo 20", tipo: "auto", condicion: (user: any) => (user.anosEnStoryUp || 0) >= 1 },
        { src: "/trofeo9.jpg", texto: "Trofeo 21", tipo: "auto", condicion: (user: any) => (user.historiasCreadas || 0) >= 30 },
        { src: "/trofeo8.jpg", texto: "Trofeo 22", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 1000 },
        { src: "/trofeo21.jpg", texto: "Trofeo 23", tipo: "auto", condicion: (user: any) => Array.isArray(user.amigos) && user.amigos.length >= 50 },
        {
            src: "/trofeo16.jpg", texto: "Trofeo 24", tipo: "auto", condicion: (user: any) => {
                // Máster (500 respuestas)
                return (user.likes || 0) >= 500 && Array.isArray(user.amigos) && user.amigos.length >= 10 && (user.historiasCreadas || 0) >= 5 && (user.respuestasAcertadas || 0) >= 100;
            }
        }
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

        console.log('getAutoTrofeos: Evaluating user data:', userSync);

        let autoTrofeos = TROFEOS_AUTO
            .map((t: any, idx: number) => {
                const conditionResult = typeof t.condicion === 'function' && t.condicion(userSync);
                console.log(`getAutoTrofeos: Trofeo ${idx} condition result:`, conditionResult, 'for user data:', {
                    likes: userSync.likes,
                    amigos: userSync.amigos,
                    comentariosRecibidos: userSync.comentariosRecibidos,
                    historias: userSync.historias,
                    respuestasAcertadas: userSync.respuestasAcertadas
                });
                return conditionResult ? idx + 1 : null;  // ids empiezan en 1
            })
            .filter((id: any) => id !== null);

        console.log('getAutoTrofeos: Final auto trofeos:', autoTrofeos);

        // Desbloqueo automático de trofeos premium
        const esPremium = userSync.premium === true || userSync.isPremium === true || userSync.tipo === "premium";
        const historiasCreadas = Array.isArray(userSync.historias) ? userSync.historias.length : (userSync.historiasCreadas || 0);
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
            autoTrofeos.push(104); // id del trofeo premium 4
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
            tieneLogoStoryUp = userSync.historias.some((historia: any) => {
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
        const materiasRequeridas = ["matematicas", "lenguaje", "ciencias", "ingles", "historia", "geografia", "literatura"];
        const nivelesMaterias = userSync.nivelesMaterias || {};
        const todasNivel3 = materiasRequeridas.every(m => nivelesMaterias[m] >= 3);
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
    const syncAutoTrofeos = async (userData: any, currentTrofeos: any) => {
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
            const nuevosAutoTrofeos = autoTrofeos.filter((idx: any) =>
                !manual.includes(idx) && !bloqueados.includes(idx)
            );

            // Trofeos que ya no cumplen la condición (remover)
            const toRemove = manual.filter((id: any) => !autoTrofeos.includes(id));

            console.log('syncAutoTrofeos: Trofeos to remove:', toRemove);

            let updatedTrofeosDesbloqueados = manual;

            if (nuevosAutoTrofeos.length > 0 || toRemove.length > 0) {
                // Agregar nuevos y remover los que ya no cumplen
                updatedTrofeosDesbloqueados = [...manual, ...nuevosAutoTrofeos].filter((id: any) => !toRemove.includes(id));

                const updated = {
                    trofeosDesbloqueados: updatedTrofeosDesbloqueados,
                    trofeosBloqueados: bloqueados
                };

                console.log('syncAutoTrofeos: Saving updated trofeos:', updated);

                // Guardar en la base de datos
                await fetch('/api/trofeos/user-trofeos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nick: userData.nick, ...updated })
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
    const isTrofeoUnlocked = (user: any, idx: number) => {
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
        const getTrofeoId = (idx: number) => {
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
        return (
            <div className="min-h-screen bg-green-100 flex items-center justify-center">
                <div className="max-w-md w-full bg-white shadow rounded p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Perfil</h2>
                    <p className="text-gray-600">No se ha iniciado sesión.</p>
                </div>
            </div>
        );
    }

    const isPremium = displayedUser ? (displayedUser.premium === true || displayedUser.isPremium === true || displayedUser.tipo === "premium") : false;
    return (
        <div className="min-h-screen bg-green-100 flex flex-col pt-4">
            {/* Solicitudes de Amistad Pendientes */}
            {pendingRequests.length > 0 && (
                <div className="w-full max-w-4xl mx-auto mb-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="text-lg font-bold text-yellow-800 mb-2">Solicitudes de Amistad Pendientes</h3>
                        {pendingRequests.map((request: any) => (
                            <div key={request.id} className="flex items-center justify-between bg-white p-3 rounded mb-2 shadow">
                                <span className="text-gray-700">Solicitud de <strong>{renderNick(request.solicitante.nick)}</strong></span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleAcceptRequest(request.id)}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold"
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        onClick={() => handleRejectRequest(request.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold"
                                    >
                                        Rechazar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="w-full max-w-6xl mx-auto mt-4 mb-4 flex items-center justify-center gap-4">
                {tieneMensajesSinLeer && (
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded font-semibold animate-bounce"
                        onClick={() => {
                            localStorage.setItem('lastReadMsg', Date.now().toString());
                            setTieneMensajesSinLeer(false);
                        }}
                    >
                        Mensajes sin leer
                    </button>
                )}
                <h1 className="text-3xl font-bold text-center">Perfil de: <UserLink nick={displayedUser.nick} /></h1>
            </div>
            <div className="w-full max-w-6xl mx-auto mt-8 grid grid-cols-2 gap-8">
                {/* Información Personal - Izquierda */}
                <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative transition-all duration-500 ${isPremium ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse overflow-hidden' : ''}`}>
                    {/* Efecto de partículas para premium */}
                    {isPremium && (
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
                            <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-80"></div>
                        </div>
                    )}

                    <div className="flex justify-between items-center mb-4 relative">
                        <h3 className={`text-xl font-bold text-center w-full transition-all duration-300 ${isPremium ? 'text-yellow-600' : ''}`}>
                            Información Personal
                            {isPremium && (
                                <span className="ml-2 animate-spin">👑</span>
                            )}
                        </h3>
                    </div>

                    <div className="flex flex-col items-center mb-4 relative">
                        <div className={`relative ${isPremium ? '' : ''}`}>
                            <img src={displayedUser.avatar || "/avatars/simple1.png"} alt="Avatar" className={`w-20 h-20 rounded-full mb-2 transition-all duration-300 ${isPremium ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg shadow-yellow-400/50 hover:scale-110' : ''}`} />
                            {isPremium && (
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs animate-bounce">
                                    ✨
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <a href="/perfil/avatar" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition">Seleccionar y Cambiar Avatar</a>
                        </div>
                    </div>

                    <p><strong>Nick:</strong> {renderNick(displayedUser.nick)}</p>
                    <p><strong>Email:</strong> {displayedUser.email}</p>
                    <p><strong>Centro Educativo:</strong> {displayedUser.centro}</p>
                    <p><strong>Curso:</strong> {displayedUser.curso}</p>
                    <p><strong>Tipo de Usuario:</strong> {displayedUser.tipo}</p>
                    <p><strong>Fecha de Inscripción:</strong> {displayedUser.fechaInscripcion ? new Date(displayedUser.fechaInscripcion).toLocaleDateString('es-ES') : ''}</p>
                    <div className="mb-2 flex items-center">
                        <div className="flex flex-col mt-2 gap-y-4">
                            <div className="flex flex-row gap-x-12">
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">👍</span>
                                    <strong>Likes:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm">{displayedUser.likes || 0}</span>
                                </div>
                                <div className="flex items-center ml-8">
                                    <span className="mr-2 text-lg">👥</span>
                                    <strong>Total de Amigos:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm">{displayedUser.amigos || 0}</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-12">
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">📖</span>
                                    <strong>Total de Historias:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm">{displayedUser.historias ? displayedUser.historias.length : 0}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">💬</span>
                                    <strong>Total de Comentarios:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm">{displayedUser.comentariosRecibidos || 0}</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-12">
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">🏆</span>
                                    <strong>Trofeos Desbloqueados:</strong>
                                    {(() => {
                                        const trofeos = Array.isArray(displayedUser.trofeosDesbloqueados) ? displayedUser.trofeosDesbloqueados : [];
                                        const total = trofeos.length;
                                        return (
                                            <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm">{total}</span>
                                        );
                                    })()}
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">✅</span>
                                    <strong>Respuestas acertadas:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm">{displayedUser.respuestasAcertadas || 0}</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-12">
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">🥇</span>
                                    <strong>Competiciones:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm">{displayedUser.competicionesSuperadas || 0}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-lg">🎉</span>
                                    <strong>Concursos:</strong>
                                    <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm">{displayedUser.concursosGanados || 0}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trofeos y Trofeos Premium - Derecha */}
                <div className="flex flex-col gap-4">
                    {/* Trofeos */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-center mb-4">Trofeos</h3>
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                            {TROFEOS.slice(0, 24).map((trofeo: any, idx: number) => (
                                <div key={idx} className={`relative aspect-square flex flex-col items-center justify-center p-1 rounded-lg overflow-hidden ${isTrofeoUnlocked(displayedUser, idx) ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100 border-2 border-gray-300'}`}>
                                    <img src={trofeo.src} alt={trofeo.texto} className={`w-[50px] h-[50px] ${!isTrofeoUnlocked(displayedUser, idx) ? 'opacity-25' : ''}`} />
                                    {!isTrofeoUnlocked(displayedUser, idx) && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-red-600 text-4xl font-bold">✕</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trofeos Premium */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-center mb-4">Trofeos Premium</h3>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                            {TROFEOS_PREMIUM.map((trofeo: any, idx: number) => (
                                <div key={idx} className={`relative aspect-square flex flex-col items-center justify-center p-1 rounded-lg overflow-hidden ${isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) ? 'bg-purple-100 border-2 border-purple-400' : 'bg-gray-100 border-2 border-gray-300'}`}>
                                    <img src={trofeo.src} alt={trofeo.texto} className={`w-[50px] h-[50px] ${!isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) ? 'opacity-25' : ''}`} />
                                    {!isTrofeoUnlocked(displayedUser, TROFEOS.length + idx) && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-red-600 text-4xl font-bold">✕</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat - Debajo */}
            <div className="w-full max-w-6xl mx-auto mt-8">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row gap-6">
                    {/* Selector de usuario a la izquierda */}
                    <div className="w-1/4 min-w-[180px] flex flex-col gap-2">
                        <label htmlFor="user-selector" className="font-semibold mb-2">Selecciona usuario:</label>
                        <select
                            id="user-selector"
                            className="border rounded px-3 py-2"
                            value={selectedUser}
                            onChange={e => setSelectedUser(e.target.value)}
                        >
                            <option value="">-- Elige un usuario --</option>
                            {usuarios.filter((u: any) => u.nick !== user.nick).map((u: any) => (
                                <option key={u.nick} value={u.nick}>{u.nick}</option>
                            ))}
                        </select>
                    </div>
                    {/* Chat principal */}
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-center mb-4">Chat</h3>
                        <div className="h-64 overflow-y-auto border rounded p-4 mb-4 bg-gray-50">
                            {chatMessages.slice(-5).map((msg: any, idx: number) => {
                                const esEnviado = msg.from === user.nick;
                                const tipo = esEnviado ? 'enviado' : 'recibido';
                                const fecha = msg.fecha ? new Date(msg.fecha) : new Date();
                                // Mostrar fecha robustamente
                                let fechaStr = '';
                                if (msg.fecha) {
                                    const d = Date.parse(msg.fecha);
                                    if (!isNaN(d)) {
                                        const fecha = new Date(d);
                                        fechaStr = `${fecha.toLocaleDateString('es-ES')} - ${fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`;
                                    } else {
                                        fechaStr = msg.fecha;
                                    }
                                }
                                else {
                                    fechaStr = '';
                                }
                                return (
                                    <div key={idx} className={`mb-2 ${esEnviado ? 'text-right' : 'text-left'}`}>
                                        <span className="font-semibold">{msg.from}:</span> {msg.text}
                                        <span className="text-xs text-gray-500 ml-2">({tipo} - {fechaStr})</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                className="flex-1 border rounded px-3 py-2"
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                disabled={!selectedUser}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
                                disabled={!selectedUser || !chatInput.trim()}
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOQUES EXTRA SOLO PARA DOCENTES */}
            {user.tipo && user.tipo.toLowerCase() === "docente" && (
                <>
                    <div className="w-full max-w-6xl mx-auto mt-20">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-center mb-2">Crear noticia</h3>
                                <form className="w-full flex flex-col gap-4" onSubmit={handleNoticiaSubmit}>
                                    <input type="text" className="border rounded px-3 py-2 w-full" placeholder="Título de la noticia" value={noticiaTitulo} onChange={e => setNoticiaTitulo(e.target.value)} />
                                    <div className="relative w-full">
                                        <textarea className="border rounded px-3 py-2 w-full min-h-[80px]" placeholder="Escribe la noticia aquí..." value={noticiaTexto} onChange={e => setNoticiaTexto(e.target.value)} />
                                        {noticiaImagen && (
                                            <img src={noticiaImagen} alt="Previsualización" className="absolute left-0 top-0 w-full h-full object-contain rounded shadow pointer-events-none" style={{ zIndex: 1, opacity: 0.7 }} />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <input id="noticia-imagen" type="file" accept="image/*" className="hidden" onChange={e => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setNombreArchivo(file.name);
                                                const reader = new FileReader();
                                                reader.onload = (ev) => {
                                                    setNoticiaImagen(ev.target?.result as string);
                                                };
                                                reader.readAsDataURL(file);
                                            } else {
                                                setNombreArchivo("");
                                                setNoticiaImagen("");
                                            }
                                        }} />
                                        <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold border" onClick={() => document.getElementById('noticia-imagen')?.click()}>Seleccionar imagen</button>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Publicar noticia</button>
                                    </div>
                                </form>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-center mb-2">Crear concurso</h3>
                                <form className="w-full flex flex-col gap-4" onSubmit={handleConcursoSubmit}>
                                    <div className="flex items-center gap-4">
                                        <input type="text" className="border rounded px-3 py-2 flex-1" placeholder={t('titulo')} value={concursoTitulo} onChange={e => setConcursoTitulo(e.target.value)} />
                                        <span className="text-sm text-gray-500">ID: {concursoId}</span>
                                    </div>
                                    <textarea className="border rounded px-3 py-2 w-full min-h-[80px]" placeholder={t('descripcion')} value={concursoTexto} onChange={e => setConcursoTexto(e.target.value)} />
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col flex-1">
                                            <label className="text-sm mb-1">{t('fechaInicio')}</label>
                                            <input type="date" className="border rounded px-3 py-2" value={fechaInicio} onChange={e => setFechaInicio(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="text-sm mb-1">{t('fechaFin')}</label>
                                            <input type="date" className="border rounded px-3 py-2" value={fechaFin} onChange={e => setFechaFin(e.target.value)} />
                                        </div>
                                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold" onClick={handleConcursoSubmit}>{t('enviar')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Gestión de Concursos Finalizados - Solo para docentes */}
                        <div className="w-full mt-6 pt-4 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-center mb-3 text-gray-700">{t('gestionarConcursosFinalizados')}</h4>
                            <div className="flex flex-col gap-3">
                                <select className="border rounded px-3 py-2 text-sm" value={concursoSeleccionado} onChange={e => setConcursoSeleccionado(e.target.value)}>
                                    <option value="">{t('seleccionarConcurso')}</option>
                                    {(() => {
                                        const hoy = new Date();
                                        return concursos
                                            .filter((c: any) => {
                                                if (!c.fin) return false;
                                                const fechaFin = new Date(c.fin);
                                                const ahora = new Date();
                                                // Solo mostrar concursos del docente actual que hayan finalizado y sin ganador
                                                return fechaFin < ahora && c.autor === user.nick && !c.ganador;
                                            })
                                            .map((c: any) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.titulo} (ID: {c.numero}) - Sin ganador
                                                </option>
                                            ));
                                    })()}
                                </select>
                                <select className="border rounded px-3 py-2 text-sm" value={ganadorSeleccionado} onChange={e => setGanadorSeleccionado(e.target.value)}>
                                    <option value="">{t('seleccionarGanador')}</option>
                                    {usuarios.sort((a: any, b: any) => a.nick.localeCompare(b.nick)).map((u: any, idx: number) => (
                                        <option key={idx} value={u.nick}>{u.nick}</option>
                                    ))}
                                </select>
                                <button className="bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm" onClick={handleAsignarGanador} disabled={!concursoSeleccionado || !ganadorSeleccionado}>
                                    {t('asignarGanador')}
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 mt-6">
                            <h3 className="text-xl font-bold text-center mb-2">Agregar Pregunta - Aprende con Pipo</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-700 mb-2">Curso:</label>
                                    <select value={cursoSeleccionado} onChange={(e) => setCursoSeleccionado(e.target.value)} className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="1primaria">1º Primaria</option>
                                        <option value="2primaria">2º Primaria</option>
                                        <option value="3primaria">3º Primaria</option>
                                        <option value="4primaria">4º Primaria</option>
                                        <option value="5primaria">5º Primaria</option>
                                        <option value="6primaria">6º Primaria</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-700 mb-2">Asignatura:</label>
                                    <select value={asignaturaSeleccionada} onChange={(e) => setAsignaturaSeleccionada(e.target.value)} className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="campeonato">Campeonato</option>
                                        <option value="general">General</option>
                                        <option value="matematicas">Matemáticas</option>
                                        <option value="lenguaje">Lenguaje</option>
                                        <option value="literatura">Literatura</option>
                                        <option value="historia">Historia</option>
                                        <option value="geografia">Geografía</option>
                                        <option value="ingles">Inglés</option>
                                        <option value="naturaleza">Naturaleza</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-blue-700 mb-2">Pregunta:</label>
                                <textarea value={pregunta} onChange={(e) => setPregunta(e.target.value)} placeholder="Escribe la pregunta aquí..." className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-blue-700 mb-2">Respuesta:</label>
                                <input type="text" value={respuesta} onChange={(e) => setRespuesta(e.target.value)} placeholder="Escribe la respuesta aquí..." className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="text-center">
                                <button onClick={enviarPregunta} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all">
                                    ✅ Enviar Pregunta
                                </button>
                            </div>
                            <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded">
                                <p className="text-sm text-blue-800">
                                    <strong>💡 Información:</strong> Las preguntas se agregan automáticamente al archivo correspondiente
                                    <code className="bg-blue-200 px-1 rounded">{asignaturaSeleccionada}-{cursoSeleccionado}.json</code>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Panel de administración y antibullying solo para docentes */}
                    {user.tipo && user.tipo.toLowerCase() === "docente" && (
                        <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                            <div className="w-full">
                                <h3 className="text-xl font-bold mb-4 text-center">{t('panelAdministracion')}</h3>
                                <form className="w-full flex flex-col items-center gap-4" onSubmit={handlePalabraProhibidaSubmit}>
                                    <div className="flex w-full max-w-xs items-center gap-2">
                                        <input type="text" className="border rounded px-3 py-2 min-w-[280px] max-w-full" placeholder={t('palabraProhibida')} value={palabraProhibida} onChange={e => setPalabraProhibida(e.target.value)} />
                                        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded font-semibold whitespace-nowrap">Seleccionar</button>
                                    </div>
                                </form>
                                <h4 className="text-lg font-semibold mt-6 text-center">{t('sistemaAntibullying')}</h4>
                                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700 max-w-2xl mx-auto">
                                    <div className="flex flex-row items-start gap-8">
                                        <div className="flex-1">
                                            <p className="font-semibold mb-2">{t('avisoAntibullying')}</p>
                                            <ol className="list-decimal ml-6 space-y-1">
                                                <li>{t('historiasTerror')}</li>
                                                <li>{t('perdidaLikes')}</li>
                                                <li>{t('mensajesUsuario')}</li>
                                                <li>{t('palabrasProhibidasChat')}</li>
                                                <li>{t('actividadConsecutiva')}</li>
                                            </ol>
                                        </div>
                                        <div className="flex flex-col items-center justify-center min-w-[180px]">
                                            <button type="button" className={`relative w-32 h-32 rounded-full font-bold text-white text-lg mb-2 transition-all flex items-center justify-center ${bullyingActivo ? 'bg-red-600 opacity-100 shadow-lg animate-blink' : 'bg-green-600 opacity-40'}`} disabled={!bullyingActivo} onClick={handleApagarBullying}>
                                                {bullyingActivo ? 'Aviso Antibullying' : t('sinPeligro')}
                                                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-70">
                                                        <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="10" />
                                                        <line x1="90" y1="10" x2="10" y2="90" stroke="white" strokeWidth="10" />
                                                    </svg>
                                                </span>
                                            </button>
                                            {usuarioBullying && (
                                                <div className="text-center text-red-700 font-semibold text-base">{usuarioBullying}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );

}
export default PerfilUsuario;
