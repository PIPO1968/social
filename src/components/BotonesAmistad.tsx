import React, { useEffect, useState } from "react";

interface BotonesAmistadProps {
    perfilNick: string;
}

const BotonesAmistad: React.FC<BotonesAmistadProps> = ({ perfilNick }) => {
    const [user, setUser] = useState<any>(null);
    const [esAmigo, setEsAmigo] = useState(false);
    const [sentRequest, setSentRequest] = useState(false);

    useEffect(() => {
        // Get current user
        fetch('/api/auth/me')
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                }
            })
            .catch(() => { });
    }, []);

    useEffect(() => {
        if (!user || !perfilNick || perfilNick === user.nick) return;

        // Check if friend
        fetch(`/api/friends?action=friends&nick=${user.nick}`)
            .then(response => response.json())
            .then(data => {
                setEsAmigo(data.friends.some((f: any) => f.nick === perfilNick));
            })
            .catch(() => { });

        // Check if sent request
        fetch(`/api/friends?action=requests&nick=${perfilNick}`)
            .then(response => response.json())
            .then(data => {
                const request = data.requests.find((r: any) => r.solicitante.nick === user.nick);
                setSentRequest(!!request);
            })
            .catch(() => { });
    }, [user, perfilNick]);

    const handleSolicitar = async () => {
        if (!user || !perfilNick || perfilNick === user.nick) return;

        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'add', userNick: user.nick, friendNick: perfilNick })
            });
            if (response.ok) {
                setSentRequest(true);
            } else {
                response.json().then(data => alert(data.error || 'Error al enviar solicitud'));
            }
        } catch (error) {
            alert('Error al enviar solicitud');
        }
    };

    const handleFinalizar = async () => {
        if (!user || !perfilNick) return;

        try {
            const response = await fetch('/api/friends', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'remove', userNick: user.nick, friendNick: perfilNick })
            });
            if (response.ok) {
                setEsAmigo(false);
                setSentRequest(false); // Asegurar que no hay solicitud pendiente
                window.location.reload(); // Recargar para actualizar estados
            } else {
                alert('Error al finalizar amistad');
            }
        } catch (error) {
        }
    };

    if (!user || perfilNick === user.nick) return null;

    if (esAmigo) {
        return (
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-pulse"
                onClick={handleFinalizar}
            >
                Finalizar amistad
            </button>
        );
    }

    if (sentRequest) {
        return (
            <button
                className="bg-gray-500 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2"
                disabled
            >
                Solicitud enviada
            </button>
        );
    }

    return (
        <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-bounce"
            onClick={handleSolicitar}
        >
            Solicitar Amistad
        </button>
    );
};

export default BotonesAmistad;
