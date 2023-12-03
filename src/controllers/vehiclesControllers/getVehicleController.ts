import { FastifyRequest, FastifyReply } from 'fastify'
import { findVehicleById } from '../../services/vehiclesServices/getVehicleService'
import { VehicleParams } from '../../@types/vehicleTypes'

export const getVehicleController = async (req: FastifyRequest<{ Params: VehicleParams }>, reply: FastifyReply) => {
  try {
    const vehicleId = req.params.vehicleId

    const vehicle = await findVehicleById(vehicleId)
    if (!vehicle) {
      return reply.status(404).send({ error: 'Vehicle not found.' })
    }

    return reply.code(200).send(vehicle)
  } catch (error) {
    return reply.status(500).send({ error: 'Internal Server Error' })
  }
}
