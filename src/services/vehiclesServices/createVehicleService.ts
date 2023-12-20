import * as vehicleRepository from '../../repositories/vehicleRepository'

export const createVehicle = async (data: { name: string, brand: string, model: string, value: number, photo?: string }) => {
  return await vehicleRepository.createVehicle(data)
}
