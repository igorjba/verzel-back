import { FastifyRequest, FastifyReply } from 'fastify'
import { Role } from '../enums/enumRole'

export function verifyUserRole(allowedRoles: Role[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const user = request.user as { id: string; role: Role }

      if (!user || !allowedRoles.includes(user.role)) {
        return reply.status(403).send({ message: 'Unauthorized.' })
      }
    } catch (error) {
      reply.status(403).send({ message: 'Error while verifying user permission.' })
    }
  }
}
