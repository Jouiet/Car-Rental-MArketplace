export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  category: string;
  price: number;
  transmission: 'automatic' | 'manual';
  fuelType: string;
  seats: number;
  imageUrl: string;
  agency: Agency;
}

export interface Agency {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
}

export interface SearchFilters {
  location: string;
  startDate: Date;
  endDate: Date;
  category?: string;
  priceRange?: [number, number];
  transmission?: string;
}