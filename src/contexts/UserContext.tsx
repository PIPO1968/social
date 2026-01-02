import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: number;
    nick: string;
    nombre?: string;
    email: string;
    centro?: string;
    curso?: string;
    tipo?: string;
    fechaInscripcion?: string;
    likes: number;
    respuestasAcertadas: number;
    // Add other fields as needed
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/me');
                if (response.ok) {
                    const data = await response.json();
                    if (data.user) {
                        setUser(data.user);
                    }
                }
            } catch (error) {
                console.error('Error checking auth:', error);
            }
        };

        checkAuth();

        // Listener para actualizar usuario cuando se responden preguntas
        const handleProfileUpdate = () => {
            checkAuth();
        };

        window.addEventListener('profileUpdate', handleProfileUpdate);

        return () => {
            window.removeEventListener('profileUpdate', handleProfileUpdate);
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};