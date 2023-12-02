import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createVehicle = async (name: string, brand: string, model: string, value: number, photo?: string) => {
  const vehicle = await prisma.vehicle.create({
    data: {
      name,
      brand,
      model,
      value,
      photo,
    },
  })
  return vehicle
}
