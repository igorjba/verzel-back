import * as vehicleRepository from '../../repositories/vehicleRepository'

export const updateVehicle = async (vehicleId: string, data: { name?: string, brand?: string, model?: string, value?: number, photo?: string }) => {
  return await vehicleRepository.updateVehicle(vehicleId, data)
}
