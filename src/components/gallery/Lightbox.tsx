
import React, { useEffect } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn" onClick={onClose}>
      <div className="relative w-full h-full max-w-4xl max-h-4/5" onClick={e => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="contain"
          className="animate-fadeInUp"
        />
      </div>
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-[#d4af37] transition-colors">
        <X size={32} />
      </button>
      <button onClick={onPrev} className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors">
        <ChevronLeft size={48} />
      </button>
      <button onClick={onNext} className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors">
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default Lightbox;
