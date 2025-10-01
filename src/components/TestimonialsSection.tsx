
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { SALON_DATA } from '@/data/salonData';
import TestimonialCard from './testimonials/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % SALON_DATA.testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + SALON_DATA.testimonials.length) % SALON_DATA.testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">What Our Clients Say</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {SALON_DATA.testimonials.map(testimonial => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-4 bg-[#d4af37]/10 text-[#d4af37] rounded-full p-2 hover:bg-[#d4af37]/20 transition-colors">
            <ChevronLeft size={32} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-4 bg-[#d4af37]/10 text-[#d4af37] rounded-full p-2 hover:bg-[#d4af37]/20 transition-colors">
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {SALON_DATA.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${currentIndex === index ? 'bg-[#d4af37]' : 'bg-[#3a3a3a]'}`}>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
