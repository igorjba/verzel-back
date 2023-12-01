import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (email: string, password: string, isAdmin: boolean = false) => {
  return await prisma.user.create({
    data: {
      email,
      password,
      isAdmin,
    },
  })
}

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}
