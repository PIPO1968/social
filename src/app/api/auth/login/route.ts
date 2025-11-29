import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { signToken } from '@/utils/jwt';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: 'Email y contraseña requeridos' }, { status: 400 });
        }

        // Buscar usuario por email
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: {
                id: true,
                nick: true,
                email: true,
                password: true
            }
        });

        if (!user || !user.password) {
            return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
        }

        // Verificar contraseña
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
        }

        // Crear token JWT
        const token = signToken({ userId: user.id, nick: user.nick });

        // Devolver usuario sin contraseña
        const { password: _, ...userWithoutPassword } = user;

        const response = NextResponse.json({ user: userWithoutPassword });

        // Setear cookie con el token
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            maxAge: 60 * 60 * 24 * 7, // 7 días
            domain: process.env.NODE_ENV === 'production' ? '.storyup.es' : undefined
        });

        return response;
    } catch (error) {
        console.error('Error en login:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}