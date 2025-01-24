import { PrismaClient } from '@prisma/client'
import { mockDeep } from 'vitest-mock-extended'

// we want every transitive key get mocked to the very end  
// We want this PrismaClient gets mocked as deep as possible 
export const prismaClient = mockDeep<PrismaClient>()