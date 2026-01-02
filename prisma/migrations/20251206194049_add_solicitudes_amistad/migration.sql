-- CreateTable
CREATE TABLE "solicitudes_amistad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "solicitanteId" INTEGER NOT NULL,
    "solicitadoId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "solicitudes_amistad_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "solicitudes_amistad_solicitadoId_fkey" FOREIGN KEY ("solicitadoId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "solicitudes_amistad_solicitanteId_solicitadoId_key" ON "solicitudes_amistad"("solicitanteId", "solicitadoId");
