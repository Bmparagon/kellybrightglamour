
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(5)].map((_, i) => {
        const fill = i < Math.floor(rating) ? '#d4af37' : i < rating ? 'url(#grad)' : '#3a3a3a';
        return (
          <Star key={i} fill={fill} strokeWidth={0} className="w-5 h-5" />
        );
      })}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad">
            <stop offset={`${(rating % 1) * 100}%`} stopColor="#d4af37" />
            <stop offset={`${(rating % 1) * 100}%`} stopColor="#3a3a3a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default StarRating;
