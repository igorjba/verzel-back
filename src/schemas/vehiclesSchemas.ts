import { z } from 'zod'

export const createVehicleSchema = z.object({
  body: z.object({
    name: z.string(),
    brand: z.string(),
    model: z.string(),
    value: z.number(),
    photo: z.string().optional(),
  }),
})
