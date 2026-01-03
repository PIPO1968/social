import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { signToken } from '@/utils/jwt';

const colegiosPermitidos = [
    "Aguere", "Angeles Bermejo", "Aregume", "Buen Consejo", "Camino La Villa", "Camino Largo", "Casa Azul", "Chamberi", "Chayofa", "Cisneros Alter", "Colegio Cervantes", "Costa Adeje I.", "Cuesta 25 de Julio", "Dominguez Alfonso", "Echeyde Arona", "Echeyde La Laguna", "El Monte", "Escuela Rural", "Escuelas Pias", "Gobierno de Canarias (Educacion)", "Hispano La Salud", "La Cuesta B.N", "La Higuerita", "La Rosa", "La Salle", "La Vega", "La Verdellada", "Los Alisios", "Los Menceyes", "Luis Alvarez Cruz", "Luther King", "Mayex", "Mayco", "Montessori", "Nuryana", "Punta Larga", "Pureza de Maria", "Ravelo", "Rodriguez Alberto", "Rodriguez Campos", "Saint Andrews", "Salesianas", "San Agustin", "San Fernando", "San Isidro", "San Pablo", "Santa Catalina de Siena", "Santa Cruz de California", "Santa Maria del Mar", "Santa Rosa de Lima", "Tacoronte", "Tagoror", "Teofilo Perez", "Tincer", "Virgen de Fatima", "Virgen del Mar"
];

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {

        const { nombre, nick, centro, curso, tipo, email, password } = await request.json();

        // Validar que el centro esté en la lista de colegios permitidos
        if (!colegiosPermitidos.includes(centro)) {
            return NextResponse.json({ error: 'Centro escolar no válido' }, { status: 400 });
        }

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { nick }
        });

        if (existingUser) {
            return NextResponse.json({ error: 'El nick ya está en uso' }, { status: 400 });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const user = await prisma.user.create({
            data: {
                nombre: nombre || null,
                nick,
                centro: centro || null,
                curso: curso || null,
                tipo: tipo || 'estudiante',
                email: email || null,
                password: hashedPassword,
                fechaInscripcion: new Date(),
                likes: 0,
                respuestasAcertadas: 0,
                competicionesSuperadas: 0,
                concursosGanados: 0,
                comentariosRecibidos: 0,
                historiasCreadas: 0,
                anosEnStoryUp: 0,
                premium: false
            } as any
        });

        // Crear token JWT
        const token = signToken({ userId: user.id, nick: user.nick });

        const response = NextResponse.json({ message: 'Usuario registrado exitosamente', user: { id: user.id, nick: user.nick } });

        // Setear cookie con el token
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7 // 7 días
        });

        return response;
    } catch (error) {
        console.error('Error registrando usuario:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}