'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, ChevronUp } from 'lucide-react';
import { SALON_DATA } from '@/data/salonData';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="dark:bg-black bg-white border-t dark:border-gray-800 border-gray-200 py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold dark:text-white text-black mb-4">Kelly Bright Glamour</h3>
            <p className="dark:text-[#a0a0a0] text-gray-500 text-sm max-w-xs">Your premier destination for hair, beauty, and wellness. Transforming looks and boosting confidence since 2015.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold dark:text-[#f4e4c1] text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]">Home</Link></li>
              <li><Link href="#services" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]">Services</Link></li>
              <li><Link href="#team" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]">Our Team</Link></li>
              <li><Link href="#gallery" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]">Gallery</Link></li>
              <li><Link href="#contact" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold dark:text-[#f4e4c1] text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm dark:text-white text-black">
                <div className="flex items-center"><MapPin size={18} className="text-[#d4af37] mr-3" /><span>{SALON_DATA.contact.address}</span></div>
                <div className="flex items-center"><Phone size={18} className="text-[#d4af37] mr-3" /><span>{SALON_DATA.contact.phone}</span></div>
                <div className="flex items-center"><Mail size={18} className="text-[#d4af37] mr-3" /><span>{SALON_DATA.contact.email}</span></div>
                <div className="flex items-start"><Clock size={18} className="text-[#d4af37] mr-3 mt-1" /><div>{Object.entries(SALON_DATA.hours).map(([day, time]) => <div key={day}>{day}: {time}</div>)}</div></div>
            </div>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold dark:text-[#f4e4c1] text-gray-800 mb-4">Stay Updated</h3>
            <p className="dark:text-[#8a8a8a] text-gray-500 text-sm mb-4">Subscribe for exclusive offers and tips.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full dark:bg-[#1a1a1a] bg-gray-200 dark:border-[#3a3a3a] border-gray-300 dark:text-white text-black p-2 rounded-l-md focus:ring-[#d4af37] focus:border-[#d4af37]" />
              <button type="submit" className="bg-[#d4af37] text-black p-2 rounded-r-md hover:bg-[#c29a2f]">Subscribe</button>
            </form>
            <div className="mt-6">
                <h4 className="text-md font-semibold dark:text-[#f4e4c1] text-gray-800 mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                    <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]"><Instagram size={28} /></a>
                    <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]"><Facebook size={28} /></a>
                    <a href="#" className="dark:text-[#b0b0b0] text-gray-500 hover:text-[#d4af37]"><Twitter size={28} /></a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center dark:text-[#8a8a8a] text-gray-500 text-sm mt-16 border-t dark:border-[#2a2a2a] border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Kelly Bright Glamour. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-[#d4af37]">Privacy Policy</Link>
                <Link href="#" className="hover:text-[#d4af37]">Terms of Service</Link>
            </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-[#d4af37] text-black rounded-full p-3 shadow-lg hover:bg-[#c29a2f] transition-all duration-300 animate-fadeIn">
          <ChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;