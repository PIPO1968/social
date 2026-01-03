-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nick" TEXT NOT NULL,
    "nombre" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "avatar" TEXT,
    "centro" TEXT,
    "curso" TEXT,
    "tipo" TEXT,
    "language" TEXT DEFAULT 'es',
    "fechaInscripcion" TIMESTAMP(3),
    "likes" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "respuestasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "preguntasFalladas" INTEGER NOT NULL DEFAULT 0,
    "competicionesSuperadas" INTEGER NOT NULL DEFAULT 0,
    "concursosGanados" INTEGER NOT NULL DEFAULT 0,
    "comentariosRecibidos" INTEGER NOT NULL DEFAULT 0,
    "historiasCreadas" INTEGER NOT NULL DEFAULT 0,
    "anosEnStoryUp" INTEGER NOT NULL DEFAULT 0,
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "stats_individual" TEXT,
    "stats_centro" TEXT,
    "stats_docente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historias" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "historias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "noticias" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amigos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amigoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "amigos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitudes_amistad" (
    "id" SERIAL NOT NULL,
    "solicitanteId" INTEGER NOT NULL,
    "solicitadoId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "solicitudes_amistad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campeonatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "concursos" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fin" TIMESTAMP(3) NOT NULL,
    "autor" TEXT NOT NULL,
    "ganador" TEXT,
    "fechaFinal" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "concursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitudes_premium" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solicitudes_premium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sesiones_usuario" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sesiones_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "configuracion" (
    "id" SERIAL NOT NULL,
    "clave" TEXT NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "configuracion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "palabras_prohibidas" (
    "id" SERIAL NOT NULL,
    "palabra" TEXT NOT NULL,

    CONSTRAINT "palabras_prohibidas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "premios_mensuales" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "centro" TEXT NOT NULL,
    "posicion" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "premios_mensuales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "torneos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "tipo" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo',
    "ganadorId" INTEGER,
    "resultados" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "torneos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_stats" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "respuestasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "preguntasFalladas" INTEGER NOT NULL DEFAULT 0,
    "victoriasTorneos" INTEGER NOT NULL DEFAULT 0,
    "participacionesTorneos" INTEGER NOT NULL DEFAULT 0,
    "puntuacionTotal" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "user_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "asignatura" TEXT NOT NULL,

    CONSTRAINT "Pregunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trofeo" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "criterio" TEXT NOT NULL,

    CONSTRAINT "Trofeo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_trofeos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trofeoId" INTEGER NOT NULL,
    "desbloqueado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_trofeos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "premium_data" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3),
    "fechaExpiracion" TIMESTAMP(3),
    "activo" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "premium_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "torneos_premium" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "torneos" TEXT NOT NULL,
    "lastReset" TIMESTAMP(3),
    "torneoActivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "torneos_premium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competiciones_premium" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "victorias" INTEGER NOT NULL DEFAULT 0,
    "participaciones" INTEGER NOT NULL DEFAULT 0,
    "puntuacionTotal" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "competiciones_premium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "championship_results" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "centro" TEXT,
    "season" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ganados" INTEGER NOT NULL DEFAULT 0,
    "perdidos" INTEGER NOT NULL DEFAULT 0,
    "preguntasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "preguntasFalladas" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "championship_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nick_key" ON "users"("nick");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "configuracion_clave_key" ON "configuracion"("clave");

-- CreateIndex
CREATE UNIQUE INDEX "palabras_prohibidas_palabra_key" ON "palabras_prohibidas"("palabra");

-- CreateIndex
CREATE UNIQUE INDEX "user_stats_userId_key" ON "user_stats"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_trofeos_userId_trofeoId_key" ON "user_trofeos"("userId", "trofeoId");

-- CreateIndex
CREATE UNIQUE INDEX "premium_data_userId_key" ON "premium_data"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "torneos_premium_userId_key" ON "torneos_premium"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "competiciones_premium_userId_key" ON "competiciones_premium"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "championship_results_userId_centro_season_type_key" ON "championship_results"("userId", "centro", "season", "type");

-- AddForeignKey
ALTER TABLE "historias" ADD CONSTRAINT "historias_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "noticias" ADD CONSTRAINT "noticias_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amigos" ADD CONSTRAINT "amigos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "amigos" ADD CONSTRAINT "amigos_amigoId_fkey" FOREIGN KEY ("amigoId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitudes_amistad" ADD CONSTRAINT "solicitudes_amistad_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitudes_amistad" ADD CONSTRAINT "solicitudes_amistad_solicitadoId_fkey" FOREIGN KEY ("solicitadoId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "concursos" ADD CONSTRAINT "concursos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitudes_premium" ADD CONSTRAINT "solicitudes_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sesiones_usuario" ADD CONSTRAINT "sesiones_usuario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premios_mensuales" ADD CONSTRAINT "premios_mensuales_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "torneos" ADD CONSTRAINT "torneos_ganadorId_fkey" FOREIGN KEY ("ganadorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_trofeos" ADD CONSTRAINT "user_trofeos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_trofeos" ADD CONSTRAINT "user_trofeos_trofeoId_fkey" FOREIGN KEY ("trofeoId") REFERENCES "Trofeo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premium_data" ADD CONSTRAINT "premium_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "torneos_premium" ADD CONSTRAINT "torneos_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competiciones_premium" ADD CONSTRAINT "competiciones_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "championship_results" ADD CONSTRAINT "championship_results_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
