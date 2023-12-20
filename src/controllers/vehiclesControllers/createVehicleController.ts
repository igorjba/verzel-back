import { FastifyRequest, FastifyReply } from 'fastify'
import { createVehicleSchema } from '../../schemas/vehiclesSchemas'
import { createVehicle } from '../../services/vehiclesServices/createVehicleService'

export const createVehicleController = async (req: FastifyRequest, reply: FastifyReply) => {
  const { body } = createVehicleSchema.parse(req)
  try {
    const vehicle = await createVehicle(body)
    return reply.code(201).send(vehicle)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send(error.message)
    } else {
      return reply.code(500).send('Internal Server Error')
    }
  }
}