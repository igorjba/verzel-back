import { FastifyRequest, FastifyReply } from 'fastify'
import { listVehicles } from '../../services/vehiclesServices/listingVehiclesService'

interface ListVehiclesQuery {
  page?: string;
  limit?: string;
  search?: string;
}

export const listVehiclesController = async (req: FastifyRequest<{ Querystring: ListVehiclesQuery }>, reply: FastifyReply) => {
  try {
    const page = parseInt(req.query.page || '1')
    const limit = parseInt(req.query.limit || '10')
    const search = req.query.search || null

    const vehicles = await listVehicles(page, limit, search)
    return reply.code(200).send(vehicles)
  } catch (error) {
    if (error instanceof Error) {
      return reply.code(400).send({ error: error.message })
    } else {
      return reply.code(500).send('Internal Server Error')
    }
  }
}
