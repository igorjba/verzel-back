import prisma from '../prismaClient'

export const createVehicle = async (name: string, brand: string, model: string, value: number, photo?: string) => {
  return await prisma.vehicle.create({
    data: {
      name,
      brand,
      model,
      value,
      photo,
    },
  })
}

export const deleteVehicle = async (id: string) => {
  return await prisma.vehicle.delete({
    where: { id },
  })
}

export const findVehicleById = async (id: string) => {
  return await prisma.vehicle.findUnique({
    where: { id },
  })
}

export const listVehicles = async (page: number, limit: number, search: string | null) => {
  const whereClause = search
    ? {
      OR: [
        {
          name: {
            contains: search,
            mode: 'insensitive' as const,
          }
        },
        {
          brand: {
            contains: search,
            mode: 'insensitive' as const,
          }
        },
        {
          model: {
            contains: search,
            mode: 'insensitive' as const,
          }
        },
      ],
    }
    : {}
  
  return await prisma.vehicle.findMany({
    where: whereClause,
    orderBy: { value: 'asc' },
    skip: (page - 1) * limit,
    take: limit,
  })
}
  
  

export const updateVehicle = async (vehicleId: string, data: { name?: string; brand?: string; model?: string; value?: number; photo?: string }) => {
  return await prisma.vehicle.update({
    where: { id: vehicleId },
    data,
  })
}
