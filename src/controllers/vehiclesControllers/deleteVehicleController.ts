import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteVehicle } from '../../services/vehiclesServices/deleteVehicleService'
import { VehicleParams } from '../../@types/vehicleTypes'

export const deleteVehicleController = async (req: FastifyRequest<{ Params: VehicleParams }>, reply: FastifyReply) => {
  try {
    const { vehicleId } = req.params

    await deleteVehicle(vehicleId)
    return reply.code(200).send({ message: 'Vehicle deleted successfully.' })
  } catch (error) {
    return reply.status(500).send({ error: 'Internal Server Error' })
  }
}
