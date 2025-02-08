import { PrismaClient } from '@prisma/client'
import { mockDeep } from 'vitest-mock-extended'

// we want every transitive key get mocked to the very end  
// We want this PrismaClient gets mocked as deep as possible 
// mockDeep of the prismaClient variable 
// it will figure out all the keys that exists on a new PrismaClient() and mock everything inside   
export const prismaClient = mockDeep<PrismaClient>()