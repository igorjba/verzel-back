import * as vehicleRepository from '../../repositories/vehicleRepository'

export const listVehicles = async (page: number, limit: number, search: string | null) => {
  return await vehicleRepository.listVehicles(page, limit, search)
}
