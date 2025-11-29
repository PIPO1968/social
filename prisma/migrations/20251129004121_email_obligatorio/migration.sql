/*
  Warnings:

  - You are about to drop the column `descripcion` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `premio` on the `premios_mensuales` table. All the data in the column will be lost.
  - Added the required column `autor` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fin` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inicio` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `texto` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `centro` to the `premios_mensuales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `premios_mensuales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posicion` to the `premios_mensuales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `premios_mensuales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `premios_mensuales` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "concursos" DROP COLUMN "descripcion",
DROP COLUMN "nombre",
ADD COLUMN     "autor" TEXT NOT NULL,
ADD COLUMN     "fechaFinal" TIMESTAMP(3),
ADD COLUMN     "fin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ganador" TEXT,
ADD COLUMN     "inicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "numero" INTEGER NOT NULL,
ADD COLUMN     "texto" TEXT NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "premios_mensuales" DROP COLUMN "premio",
ADD COLUMN     "centro" TEXT NOT NULL,
ADD COLUMN     "month" INTEGER NOT NULL,
ADD COLUMN     "posicion" INTEGER NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;
