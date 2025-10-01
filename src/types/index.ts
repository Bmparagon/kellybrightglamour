export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  image?: string;
  rating: number;
  source: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  service: string;
}

export interface Barber {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  bio: string;
  image: string;
  social: {
    instagram: string;
  };
}

export interface SalonData {
  name: string;
  tagline: string;
  services: Service[];
  barbers: Barber[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  hours: Record<string, string>;
  contact: Record<string, string>;
}
