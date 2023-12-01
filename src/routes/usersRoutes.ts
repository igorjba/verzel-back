import { FastifyInstance } from 'fastify'


import { authenticate } from '@/http/controllers/users/authenticate'
import { passwordRecovery } from '@/http/controllers/users/password-recovery'
import { passwordSetting } from '@/http/controllers/users/password-setting'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)
  app.post('/password-recovery', passwordRecovery)
  app.post('/password-setting', passwordSetting)
}
