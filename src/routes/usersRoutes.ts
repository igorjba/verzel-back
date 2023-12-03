import { FastifyInstance } from 'fastify'
import { registerController } from '../controllers/usersControllers/registerController'
import { loginController } from '../controllers/usersControllers/loginController'

export const usersRoutes = async (app: FastifyInstance) => {
  app.post('/register', registerController)
  app.post('/login', loginController)
}
