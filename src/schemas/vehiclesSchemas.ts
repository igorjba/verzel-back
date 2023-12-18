import { z } from 'zod'

export const createVehicleSchema = z.object({
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  value: z.number(),
  photoUrl: z.string().optional(),
})

export const updateVehicleSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    value: z.number().optional(),
    photoUrl: z.string().optional(),
  }),
  params: z.object({
    vehicleId: z.string().uuid(),
  }),
})

export const deleteVehicleSchema = z.object({
  params: z.object({
    vehicleId: z.string().uuid(),
  }),
})