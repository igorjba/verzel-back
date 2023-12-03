import { FastifyRequest, FastifyReply } from 'fastify'
import { updateVehicleSchema } from '../../schemas/vehiclesSchemas'
import { updateVehicle } from '../../services/vehiclesServices/updateVehicleService'

export const updateVehicleController = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { params: { vehicleId }, body } = updateVehicleSchema.parse(req)

    const updatedVehicle = await updateVehicle(vehicleId, body)

    return reply.code(200).send(updatedVehicle)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send(error.message)
    } else {
      return reply.code(500).send('Internal Server Error')
    }
  }
}
