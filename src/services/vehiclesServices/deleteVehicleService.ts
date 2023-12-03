import * as vehicleRepository from '../../repositories/vehicleRepository'

export const deleteVehicle = async (id: string) => {
  return await vehicleRepository.deleteVehicle(id)
}
