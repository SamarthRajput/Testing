import { PrismaClient } from "@prisma/client";

// create a separate file db.ts where we are exporting the primsa client and import in index.ts

export const prismaClient = new PrismaClient();

// we want our prismaClient should return us 
// { 
//     PrismaClient: {
//         request: {
//             create: mock(),
//             update: mock()
//         }
//     }
// }