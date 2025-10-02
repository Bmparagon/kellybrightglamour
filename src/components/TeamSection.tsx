
import React from 'react';
import Image from 'next/image';
import { SALON_DATA } from '@/data/salonData';
import { Barber } from '@/types';
import { Instagram, Scissors, Palette, Dribbble } from 'lucide-react';

const StylistCard = ({ barber }: { barber: Barber }) => {
  return (
    <div className="group relative dark:bg-[#1a2a3a]/60 bg-gray-100/60 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-[#d4af37]/50">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={barber.image}
          alt={barber.name}
          width={300}
          height={400}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-400"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 dark:text-white text-black">
        <h3 className="text-2xl font-bold text-[#f4e4c1] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">{barber.name}</h3>
        <p className="dark:text-[#a0a0a0] text-gray-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-300">{barber.specialty}</p>
        <div className="mt-4 flex items-center gap-3 text-[#d4af37] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-400">
          <Scissors size={18} />
          <Palette size={18} />
          <Dribbble size={18} />
        </div>
        <a href={barber.social.instagram} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 dark:text-white text-black hover:text-[#d4af37] scale-0 group-hover:scale-100 transition-transform duration-300 delay-500">
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="dark:bg-[#0f1419] bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center dark:text-white text-black mb-12">Meet Our Stylists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALON_DATA.barbers.map((barber, index) => (
            <div
              key={barber.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <StylistCard barber={barber} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
