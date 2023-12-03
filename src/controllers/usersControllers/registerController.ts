import { FastifyRequest, FastifyReply } from 'fastify'
import { createUserSchema } from '../../schemas/userSchemas'
import { registerUser } from '../../services/usersServices/registerUserService'

export const registerController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { body } = createUserSchema.parse(req)
    const user = await registerUser(body.name, body.email, body.password, body.role)

    const userWithNullPassword = { ...user, password: null }

    return reply.code(201).send(userWithNullPassword)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send({ error: error.message })
    } else {
      return reply.code(500).send('Ocorreu um erro inesperado')
    }
  }
}
