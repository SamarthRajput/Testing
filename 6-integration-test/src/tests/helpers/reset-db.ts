import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Syntax 1 to export the function that will reset our database
// export default async () => {
//     await prisma.$transaction([
//         prisma.request.deleteMany(),
//     ])
// }

// Syntax 2 to export the function that will reset our database
export async function clearDb(){
    prisma.request.deleteMany()
}