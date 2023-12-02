import { FastifyRequest, FastifyReply } from 'fastify'
import { loginUserSchema } from '../../schemas/userSchemas'
import { loginUser } from '../../services/usersService/loginService'

export const loginController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {

    const { body } = loginUserSchema.parse(req)

    const { email, password } = body
    
    const result = await loginUser(email, password)

    return reply.code(200).send(result)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send(error.message)
    } else {
      return reply.code(500).send('An unexpected error occurred')
    }
  }
}
