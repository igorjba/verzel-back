import { FastifyReply, FastifyRequest } from 'fastify'
import { env } from '../env'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    const token = env.SUPER_TOKEN

    if (token === request.headers.authorization) {
      request.user = { email: '', name: '', sub: request.headers.authorization, role: 'admin' }
      return
    }

    await request.jwtVerify()
  } catch (error) {
    return reply.status(401).send({ message: 'Invalid authentication.' })
  }
}
