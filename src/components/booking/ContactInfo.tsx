
import React from 'react';
import { SALON_DATA } from '@/data/salonData';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="dark:text-white text-black">
      <h3 className="text-3xl font-bold dark:text-[#f4e4c1] text-gray-800 mb-6">Get in Touch</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin size={24} className="text-[#d4af37] mr-4 mt-1" />
          <p>{SALON_DATA.contact.address}</p>
        </div>
        <div className="flex items-center">
          <Phone size={24} className="text-[#d4af37] mr-4" />
          <a href={`tel:${SALON_DATA.contact.phone}`} className="hover:underline">{SALON_DATA.contact.phone}</a>
        </div>
        <div className="flex items-center">
          <Mail size={24} className="text-[#d4af37] mr-4" />
          <a href={`mailto:${SALON_DATA.contact.email}`} className="hover:underline">{SALON_DATA.contact.email}</a>
        </div>
        <div className="flex items-start">
          <Clock size={24} className="text-[#d4af37] mr-4 mt-1" />
          <div>
            {Object.entries(SALON_DATA.hours).map(([day, time]) => (
              <p key={day}><span className="font-semibold">{day}:</span> {time}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold dark:text-[#f4e4c1] text-gray-800 mb-4">Follow Us</h4>
        <div className="flex items-center gap-4">
          <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37] transition-colors"><Instagram size={32} /></a>
          <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37] transition-colors"><Facebook size={32} /></a>
          <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37] transition-colors"><Twitter size={32} /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
