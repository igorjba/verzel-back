import * as vehicleRepository from '../../repositories/vehicleRepository'

export const findVehicleById = async (id: string) => {
  return await vehicleRepository.findVehicleById(id)
}
