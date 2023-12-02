import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(allowedRoles: string[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const userRole = request.user.role
      if (!allowedRoles.includes(userRole)) {
        return reply.status(403).send({ message: 'Unauthorized.' })
      }
    } catch (error) {
      return reply.status(403).send({ message: 'Unauthorized.' })
    }
  }
}