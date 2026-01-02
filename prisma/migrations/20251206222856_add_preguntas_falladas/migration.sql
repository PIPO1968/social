-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_users" ("anosEnStoryUp", "avatar", "centro", "comentariosRecibidos", "competicionesSuperadas", "concursosGanados", "createdAt", "curso", "email", "fechaInscripcion", "historiasCreadas", "id", "language", "likes", "nick", "nombre", "password", "premium", "respuestasAcertadas", "stats_centro", "stats_docente", "stats_individual", "tipo", "updatedAt") SELECT "anosEnStoryUp", "avatar", "centro", "comentariosRecibidos", "competicionesSuperadas", "concursosGanados", "createdAt", "curso", "email", "fechaInscripcion", "historiasCreadas", "id", "language", "likes", "nick", "nombre", "password", "premium", "respuestasAcertadas", "stats_centro", "stats_docente", "stats_individual", "tipo", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_nick_key" ON "users"("nick");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
