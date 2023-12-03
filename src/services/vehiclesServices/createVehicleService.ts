import * as vehicleRepository from '../../repositories/vehicleRepository'

export const createVehicle = async (name: string, brand: string, model: string, value: number, photo?: string) => {
  return await vehicleRepository.createVehicle(name, brand, model, value, photo)
}
