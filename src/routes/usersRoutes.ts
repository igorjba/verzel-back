import { FastifyInstance } from 'fastify'
import { registerController } from '../controllers/usersController/registerController'
import { loginController } from '../controllers/usersController/loginController'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post('/register', registerController)
  app.post('/login', loginController)
}
