
import { FastifyInstance } from 'fastify'
import { createVehicleController } from '../controllers/vehiclesControllers/createVehicleController'
import { deleteVehicleController } from '../controllers/vehiclesControllers/deleteVehicleController'
import { getVehicleController } from '../controllers/vehiclesControllers/getVehicleController'
import { listVehiclesController } from '../controllers/vehiclesControllers/listingVehiclesController'
import { updateVehicleController } from '../controllers/vehiclesControllers/updateVehicleController'
import { Role } from '../enums/enumRole'
import { verifyJWT } from '../middlewares/verify-jwt'
import { verifyUserRole } from '../middlewares/verify-user-role'

export const vehiclesRoutes = async (app: FastifyInstance) => {
  app.post('/vehicles', { preHandler: [verifyJWT, verifyUserRole([Role.ADMIN])] }, createVehicleController)
  app.put('/vehicles/:vehicleId', { preHandler: [verifyJWT, verifyUserRole([Role.ADMIN])] }, updateVehicleController)
  app.delete('/vehicles/:vehicleId', { preHandler: [verifyJWT, verifyUserRole([Role.ADMIN])] }, deleteVehicleController)
  app.get('/vehicles/:vehicleId', getVehicleController)
  app.get('/vehicles', listVehiclesController)
}

