
import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { Service } from '@/types';

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-[#1a1a1a] border border-transparent rounded-lg p-6 shadow-lg transition-all duration-300 hover:border-[#d4af37] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
      <h3 className="text-xl font-bold text-[#f4e4c1] mb-2">{service.name}</h3>
      <p className="text-[#b0b0b0] text-sm mb-4 h-10">{service.description}</p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold text-[#d4af37]">${service.price / 100}</p>
        <p className="text-sm text-[#b0b0b0]">{service.duration} min</p>
      </div>
      <a href="#" className="text-[#d4af37] font-semibold hover:underline">Learn More</a>
    </div>
  );
};

const ServicesSection = () => {
  const servicesByCategory = SALON_DATA.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
