export interface VehicleParams {
  vehicleId: string;
}

export interface VehicleCreationData {
  name: string;
  brand: string;
  model: string;
  value: number;
  photoUrl?: string;
}
