import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nick, likes, avatar } = body;

        const user = await prisma.user.findUnique({ where: { nick } });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const updateData: any = {};
        if (likes !== undefined) updateData.likes = likes;
        if (avatar !== undefined) updateData.avatar = avatar;

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: updateData
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
    }
}