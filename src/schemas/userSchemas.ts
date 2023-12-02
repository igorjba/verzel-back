import { z } from 'zod'

export const RoleEnum = z.enum(['USER', 'ADMIN'])

export const createUserSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: RoleEnum,
  }),
})


export const loginUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
})

export const updateUserSchema = z.object({
  params: z.object({
    userId: z.string().uuid(),
  }),
  body: z.object({
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  }),
})
