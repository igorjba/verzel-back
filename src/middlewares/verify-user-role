import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUserProfileService } from '@/services/users/get-user-profile'
import { env } from '../env'

export function verifyUserRole(roleToVerify: 'administrador' | 'mobilizador', getUserProfileService: GetUserProfileService) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const requestRole = request.user.role

    if (request.user.sub === env.SUPER_TOKEN) {
      return
    }

    const { user } = await getUserProfileService.execute({ id: request.user.sub })

    if (requestRole !== roleToVerify || requestRole !== user.role) {
      return reply.status(403).send({ message: 'Não autorizado.' })
    }
  }
}
