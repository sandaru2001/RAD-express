import {PrismaClient, Role, User} from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(user: { password: string; email: string; role: Role }) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const addedUser = await prisma.user.create({
        data: {
            email : user.email,
            password : hashedPassword,
            role:user.role
        },
    });
    console.log("User created:", addedUser);
}

export async function verifyUserCredentials(verifyUser: { password: any; email: any }) {
    const user : User | null = await prisma.user.findUnique({
        where: { email: verifyUser.email },
    });
    if (!user) {
        return false;
    }

    return await bcrypt.compare(verifyUser.password, user.password);
}