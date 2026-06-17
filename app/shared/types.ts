export interface ServiceCard {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  features: string[]
  isHighlighted?: boolean
}

export interface FleetVehicle {
  id: string
  name: string
  category: string
  capacity: string
  description: string
  features: string[]
}

export interface ProcessStep {
  id: number
  step: number
  title: string
  description: string
  icon: string
}
