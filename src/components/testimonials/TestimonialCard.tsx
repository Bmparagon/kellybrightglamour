
import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';
import StarRating from './StarRating';
import { CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="dark:bg-[#1e1e1e]/60 bg-gray-100/60 border border-[#d4af37]/20 rounded-xl p-8 shadow-lg w-full max-w-2xl mx-auto">
      <StarRating rating={testimonial.rating} className="mb-4" />
      <p className="dark:text-[#e0e0e0] text-gray-700 text-lg italic leading-relaxed mb-6">“{testimonial.quote}”</p>
      <div className="flex items-center">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
        )}
        <div>
          <p className="font-bold dark:text-[#f4e4c1] text-gray-800">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
