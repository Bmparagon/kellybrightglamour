
'use client';

import React, { useState } from 'react';
import { SALON_DATA } from '@/data/salonData';
import { GalleryImage } from '@/types';
import FilterControls from './gallery/FilterControls';
import GalleryGrid from './gallery/GalleryGrid';
import Lightbox from './gallery/Lightbox';

const GallerySection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'All'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter(image => image.category === filter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(image => image.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(image => image.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Work</h2>
        <FilterControls setFilter={setFilter} currentFilter={filter} />
        <GalleryGrid images={filteredImages} onImageClick={openLightbox} />
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;
