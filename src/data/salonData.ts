import { SalonData } from '../types';

export const SALON_DATA: SalonData = {
  name: "Kelly-Bright Glamour",
  tagline: "Where Style Meets Precision",
  
  services: [
    // Barbing
    { 
      id: 1, 
      name: 'Signature Cut',
      category: 'Barbing',
      price: 10_000, 
      duration: 45,
      description: 'Premium haircut with consultation and styling'
    },
    { 
      id: 2, 
      name: 'Classic Shave',
      category: 'Barbing',
      price: 5_000, 
      duration: 30,
      description: 'Traditional hot towel shave experience'
    },
    { 
      id: 3, 
      name: 'Beard Sculpting',
      category: 'Barbing',
      price: 3_000, 
      duration: 25,
      description: 'Professional beard trim and shaping'
    },
    // Hair Services
    { 
      id: 4, 
      name: 'Color & Highlights',
      category: 'Hair Services',
      price: 15_000, 
      duration: 90,
      description: 'Vibrant, lasting color from expert stylists.'
    },
    { 
      id: 5, 
      name: 'Keratin Treatment',
      category: 'Hair Services',
      price: 25_000, 
      duration: 120,
      description: 'Smooth and straighten hair for a frizz-free look.'
    },
    // Beauty Treatments
    { 
      id: 6, 
      name: 'Signature Facial',
      category: 'Beauty Treatments',
      price: 8_000, 
      duration: 60,
      description: 'Customized facial to rejuvenate and refresh your skin.'
    },
    { 
      id: 7, 
      name: 'Manicure & Pedicure',
      category: 'Beauty Treatments',
      price: 7_000, 
      duration: 50,
      description: 'Complete nail care for a polished and clean look.'
    },
    // Spa & Wellness
    { 
      id: 8, 
      name: 'Deep Tissue Massage',
      category: 'Spa & Wellness',
      price: 12_000, 
      duration: 60,
      description: 'Intensive massage to relieve chronic muscle tension.'
    },
    { 
      id: 9, 
      name: 'Aromatherapy Session',
      category: 'Spa & Wellness',
      price: 6_000, 
      duration: 30,
      description: 'Relaxing session with essential oils to soothe your mind.'
    }
  ],

  barbers: [
    {
      id: 1,
      name: 'Marcus Rodriguez',
      specialty: 'Modern Fades & Textures',
      experience: '12 years',
      rating: 4.9,
      bio: 'Marcus is a master of precision cutting, creating sharp, clean looks that are both modern and timeless. He is passionate about continuous learning and staying ahead of trends.',
      image: '/team/stylist-1.jpg',
      social: {
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'James Thompson',
      specialty: 'Classic Cuts & Shaves',
      experience: '8 years',
      rating: 4.8,
      bio: 'With a steady hand and a keen eye for detail, James specializes in traditional barbering techniques, delivering classic styles with a touch of modern sophistication.',
      image: '/team/stylist-2.jpg',
      social: {
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Antonio Silva',
      specialty: 'Beard Artistry',
      experience: '6 years',
      rating: 4.9,
      bio: 'Antonio is a true artist when it comes to beards. From sculpting and shaping to maintenance and care, he helps clients achieve their ultimate beard goals.',
      image: '/team/stylist-3.jpg',
      social: {
        instagram: '#'
      }
    }
  ],

  gallery: [
    { id: 1, src: '/gallery/hair-1.jpg', alt: 'A stylish haircut', category: 'Hair', service: 'Women\'s Cut' },
    { id: 2, src: '/gallery/beauty-1.jpg', alt: 'A beauty treatment', category: 'Beauty', service: 'Facial' },
    { id: 3, src: '/gallery/barbing-1.jpg', alt: 'A sharp beard trim', category: 'Barbing', service: 'Beard Trim' },
    { id: 4, src: '/gallery/color-1.jpg', alt: 'Vibrant hair color', category: 'Color', service: 'Balayage' },
    { id: 5, src: '/gallery/hair-2.jpg', alt: 'A stylish haircut', category: 'Hair', service: 'Men\'s Cut' },
    { id: 6, src: '/gallery/beauty-2.jpg', alt: 'A beauty treatment', category: 'Beauty', service: 'Manicure' },
    { id: 7, src: '/gallery/barbing-2.jpg', alt: 'A classic shave', category: 'Barbing', service: 'Hot Shave' },
    { id: 8, src: '/gallery/color-2.jpg', alt: 'Vibrant hair color', category: 'Color', service: 'Highlights' },
  ],

  testimonials: [
    {
      id: 1,
      quote: 'The best haircut I have ever had! The attention to detail is unmatched. I felt like a new person walking out of the salon.',
      name: 'Jessica Miller',
      image: '/testimonials/customer-1.jpg',
      rating: 5,
      source: 'Verified Google Review'
    },
    {
      id: 2,
      quote: 'An amazing experience from start to finish. The stylists are true professionals and the atmosphere is so relaxing.',
      name: 'Sarah Chen',
      image: '/testimonials/customer-2.jpg',
      rating: 5,
      source: 'Verified Yelp Review'
    },
    {
      id: 3,
      quote: 'I came in for a beard trim and was blown away by the skill and precision. I will definitely be back.',
      name: 'David Rodriguez',
      image: '/testimonials/customer-3.jpg',
      rating: 4.5,
      source: 'Verified Google Review'
    }
  ],

  hours: {
    'Mon-Fri': '9:00 AM - 7:00 PM',
    'Saturday': '8:00 AM - 6:00 PM',
    'Sunday': '10:00 AM - 4:00 PM'
  },

  contact: {
    phone: '+234 806 390 2370',
    email: 'kbglamour@gmail.com',
    address: '123 Victoria Island, Lagos, Nigeria'
  }
};