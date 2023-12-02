import { FastifyInstance } from 'fastify'
import { createVehicleController } from '../controllers/vehiclesController/createVehicleController'
import { verifyJWT } from '../middlewares/verify-jwt'

export const vehiclesRoutes = async (app: FastifyInstance) => {
  app.post('/vehicles', { preHandler: [verifyJWT] }, createVehicleController)
}
