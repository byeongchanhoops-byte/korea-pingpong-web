export interface PricingItem {
  category: string;
  price30: string;
  price60: string;
}

export interface MonthlyPricing {
  duration: string;
  price: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name reference
  image?: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  type: 'notice' | 'event';
}

export enum SectionId {
  HOME = 'home',
  FACILITIES = 'facilities',
  PRICING = 'pricing',
  LOCATION = 'location',
  CONTACT = 'contact'
}