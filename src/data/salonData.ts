import { SalonData } from '../types';

export const SALON_DATA: SalonData = {
  name: "Kelly-Bright Glamour",
  tagline: "Where Style Meets Precision",
  
  services: [
    { 
      id: 1, 
      name: 'Signature Cut', 
      price: 10_000, 
      duration: 45,
      description: 'Premium haircut with consultation and styling'
    },
    { 
      id: 2, 
      name: 'Classic Shave', 
      price: 5_000, 
      duration: 30,
      description: 'Traditional hot towel shave experience'
    },
    { 
      id: 3, 
      name: 'Beard Sculpting', 
      price: 3_000, 
      duration: 25,
      description: 'Professional beard trim and shaping'
    },
    { 
      id: 4, 
      name: 'Full Experience', 
      price: 10_000, 
      duration: 75,
      description: 'Cut, shave, and beard grooming package'
    },
    { 
      id: 5, 
      name: 'Quick Trim', 
      price: 3_000, 
      duration: 20,
      description: 'Fast and efficient touch-up'
    },
    { 
      id: 6, 
      name: 'Hair Wash & Style', 
      price: 3_000, 
      duration: 30,
      description: 'Deep cleanse with professional styling'
    }
  ],

  barbers: [
    {
      id: 1,
      name: 'Marcus Rodriguez',
      specialty: 'Modern Fades & Textures',
      experience: '12 years',
      rating: 4.9
    },
    {
      id: 2,
      name: 'James Thompson',
      specialty: 'Classic Cuts & Shaves',
      experience: '8 years',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Antonio Silva',
      specialty: 'Beard Artistry',
      experience: '6 years',
      rating: 4.9
    }
  ],

  hours: {
    'Mon-Fri': '9:00 AM - 7:00 PM',
    'Saturday': '8:00 AM - 6:00 PM',
    'Sunday': '10:00 AM - 4:00 PM'
  },

  contact: {
    phone: '(555) 987-6543',
    email: 'hello@apexbarberstudio.com',
    address: '456 Style Avenue, Downtown District, NY 10001'
  }
};