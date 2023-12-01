import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

import { authenticate } from '@/http/controllers/users/authenticate'
import { passwordRecovery } from '@/http/controllers/users/password-recovery'
import { passwordSetting } from '@/http/controllers/users/password-setting'
import { ProfileQuery, profiles } from '@/http/controllers/users/profiles'
import { register } from '@/http/controllers/users/register'
import { removeUser } from '@/http/controllers/users/remove-user'
import { updateUser } from '@/http/controllers/users/update-user'
import { makeGetUserProfileService } from '@/services/factories/make-get-user-profile-service'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/sessions', authenticate)
  app.post('/password-recovery', passwordRecovery)
  app.post('/password-setting', passwordSetting)

  app.get<{ Querystring: ProfileQuery }>('/users', { onRequest: [verifyJWT] }, profiles)
  app.post('/users', { onRequest: [verifyJWT, verifyUserRole('admin', makeGetUserProfileService())] }, register)
  app.patch('/users/:id', { onRequest: [verifyJWT, verifyUserRole('admin', makeGetUserProfileService())] }, updateUser)
  app.delete('/users/:id', { onRequest: [verifyJWT, verifyUserRole('admin', makeGetUserProfileService())] }, removeUser)
}
