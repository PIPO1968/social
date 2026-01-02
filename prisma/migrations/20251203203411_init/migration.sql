-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nick" TEXT NOT NULL,
    "nombre" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "avatar" TEXT,
    "centro" TEXT,
    "curso" TEXT,
    "tipo" TEXT,
    "language" TEXT DEFAULT 'es',
    "fechaInscripcion" DATETIME,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "respuestasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "competicionesSuperadas" INTEGER NOT NULL DEFAULT 0,
    "concursosGanados" INTEGER NOT NULL DEFAULT 0,
    "comentariosRecibidos" INTEGER NOT NULL DEFAULT 0,
    "historiasCreadas" INTEGER NOT NULL DEFAULT 0,
    "anosEnStoryUp" INTEGER NOT NULL DEFAULT 0,
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "stats_individual" TEXT,
    "stats_centro" TEXT,
    "stats_docente" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "historias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "historias_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "noticias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "noticias_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "amigos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "amigoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "amigos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "amigos_amigoId_fkey" FOREIGN KEY ("amigoId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "campeonatos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "campeonatos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "concursos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "inicio" DATETIME NOT NULL,
    "fin" DATETIME NOT NULL,
    "autor" TEXT NOT NULL,
    "ganador" TEXT,
    "fechaFinal" DATETIME,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "concursos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "solicitudes_premium" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "solicitudes_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sesiones_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sesiones_usuario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "configuracion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clave" TEXT NOT NULL,
    "valor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "palabras_prohibidas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "palabra" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "premios_mensuales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "centro" TEXT NOT NULL,
    "posicion" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "premios_mensuales_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "torneos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "tipo" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "fechaInicio" DATETIME NOT NULL,
    "fechaFin" DATETIME NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo',
    "ganadorId" INTEGER,
    "resultados" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "torneos_ganadorId_fkey" FOREIGN KEY ("ganadorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_stats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "respuestasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "preguntasFalladas" INTEGER NOT NULL DEFAULT 0,
    "victoriasTorneos" INTEGER NOT NULL DEFAULT 0,
    "participacionesTorneos" INTEGER NOT NULL DEFAULT 0,
    "puntuacionTotal" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "user_stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pregunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "asignatura" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Trofeo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imagen" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "criterio" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user_trofeos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "trofeoId" INTEGER NOT NULL,
    "desbloqueado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_trofeos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_trofeos_trofeoId_fkey" FOREIGN KEY ("trofeoId") REFERENCES "Trofeo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "premium_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "fechaInicio" DATETIME,
    "fechaExpiracion" DATETIME,
    "activo" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "premium_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "torneos_premium" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "torneos" TEXT NOT NULL,
    "lastReset" DATETIME,
    "torneoActivo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "torneos_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "competiciones_premium" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "victorias" INTEGER NOT NULL DEFAULT 0,
    "participaciones" INTEGER NOT NULL DEFAULT 0,
    "puntuacionTotal" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "competiciones_premium_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "championship_results" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "centro" TEXT,
    "season" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ganados" INTEGER NOT NULL DEFAULT 0,
    "perdidos" INTEGER NOT NULL DEFAULT 0,
    "preguntasAcertadas" INTEGER NOT NULL DEFAULT 0,
    "preguntasFalladas" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "championship_results_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
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
