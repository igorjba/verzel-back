import { FastifyRequest, FastifyReply } from 'fastify'
import { deleteVehicle } from '../../services/vehiclesServices/deleteVehicleService'
import { deleteVehicleSchema } from '../../schemas/vehiclesSchemas'

export const deleteVehicleController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const params = deleteVehicleSchema.parse(req).params
    await deleteVehicle(params.vehicleId)
    return reply.code(200).send({ message: 'Vehicle deleted successfully.' })
  } catch (error) {
    if (error instanceof Error) {
      return reply.status(400).send({ error: error.message })
    }
    return reply.status(500).send({ error: 'Internal Server Error' })
  }
}
