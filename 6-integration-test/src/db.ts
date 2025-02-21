// In db.ts we are importing/store and export the PrismaClient 
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();