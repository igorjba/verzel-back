import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { MakeAuthenticateService } from '@/services/factories/make-authenticate-service'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  const authenticateService = MakeAuthenticateService()
  const { user } = await authenticateService.execute({ email, password })
  const token = await reply.jwtSign({ role: user.role }, { sign: { sub: user.id } })

  return reply.status(200).send({ id: user.id, name: user.name, role: user.role, token })
}
