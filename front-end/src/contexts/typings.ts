export interface DriverContextProps {
  rideInfos: RideEstimate | undefined;
  step: number;
  handleRideInfosChange: (newRideInfos: RideEstimate) => void;
  handleStepChange: (newStep: number) => void;
}

export interface RideEstimate {
  origin: LatLong,
  destination: LatLong,
  distance: number,
  duration: string,
  options: Driver[],
  routeResponse: object
}

export interface Driver {
  id: number,
  name: string,
  description: string,
  vehicle: string,
  review: Review,
  value: number
}

type LatLong = {
  latitude: number,
  longitude: number
}

type Review = {
  rating: number,
  comment: string
}