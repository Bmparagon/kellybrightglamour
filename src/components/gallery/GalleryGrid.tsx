
import React from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative aspect-w-1 aspect-h-1 cursor-pointer overflow-hidden rounded-lg animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => onImageClick(image)}>
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={500}
            className="object-cover w-full h-full transition-transform duration-400 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-[#f4e4c1] text-lg font-semibold">{image.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
