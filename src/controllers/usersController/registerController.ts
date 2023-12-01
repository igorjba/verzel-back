import { FastifyRequest, FastifyReply } from 'fastify'
import { createUserSchema } from '../../schemas/userSchemas'
import { registerUser } from '../../services/registerService'

export const registerController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { body } = createUserSchema.parse(req)
    const user = await registerUser(body.email, body.password, body.isAdmin)
    return reply.code(201).send(user)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send(error.message)
    } else {
      return reply.code(500).send('An unexpected error occurred')
    }
  }
}
