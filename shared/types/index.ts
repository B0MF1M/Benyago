export interface ServiceCard {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  image?: string
  features?: string[]
  isHighlighted?: boolean
}

export interface FleetVehicle {
  id: string
  name: string
  category: 'sedan' | 'suv' | 'van' | 'armored'
  description: string
  features: string[]
  capacity: number
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface ProcessStep {
  id: string
  step: number
  title: string
  description: string
  icon: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}