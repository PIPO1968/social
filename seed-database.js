const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

async function seedDatabase() {
    const prisma = new PrismaClient();

    try {
        console.log('🧹 Limpiando datos de prueba existentes...\n');

        // Limpiar datos de prueba antes de poblar
        console.log('📖 Eliminando historias de prueba...');
        const historiasEliminadas = await prisma.historia.deleteMany({
            where: {
                autor: {
                    nick: {
                        in: ['TestDocente', 'TestEstudiante']
                    }
                }
            }
        });
        console.log(`✅ ${historiasEliminadas.count} historias de prueba eliminadas`);

        console.log('📰 Eliminando noticias de prueba...');
        const noticiasEliminadas = await prisma.noticia.deleteMany({
            where: {
                autor: {
                    nick: {
                        in: ['TestDocente', 'TestEstudiante']
                    }
                }
            }
        });
        console.log(`✅ ${noticiasEliminadas.count} noticias de prueba eliminadas`);

        console.log('👥 Eliminando usuarios de prueba...');
        const usuariosEliminados = await prisma.user.deleteMany({
            where: {
                nick: {
                    in: ['TestDocente', 'TestEstudiante']
                }
            }
        });
        console.log(`✅ ${usuariosEliminados.count} usuarios de prueba eliminados`);

        console.log('🌱 Iniciando población de base de datos...\n');

        // 1. Poblar trofeos desde JSON
        console.log('🏅 Poblando trofeos...');
        const trofeosPath = path.join(__dirname, 'src/data/trofeos.json');
        if (fs.existsSync(trofeosPath)) {
            const trofeos = JSON.parse(fs.readFileSync(trofeosPath, 'utf8'));
            for (const trofeo of trofeos) {
                await prisma.trofeo.upsert({
                    where: { id: trofeo.id },
                    update: trofeo,
                    create: trofeo

        // 2. Poblar preguntas desde archivos JSON
        console.log('❓ Poblando preguntas...');
                    const questionsDir = path.join(__dirname, 'src/questions');
                    if(fs.existsSync(questionsDir)) {
// Archivo desactivado: toda la lógica y datos de prueba han sido eliminados.