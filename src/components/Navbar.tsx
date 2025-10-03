
import React from 'react';
import Link from 'next/link';
import { ThemeToggleButton } from './ui/ThemeToggleButton';

const Navbar = () => {
  return (
    <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-black dark:text-white">Kelly Bright Glamour</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Services</Link>
            <Link href="#team" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Team</Link>
            <Link href="#gallery" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Gallery</Link>
            <Link href="#testimonials" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="bg-[#d4af37] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#c29a2f] transition-colors">Login</Link>
            <Link href="/signup" className="border border-[#d4af37] text-[#d4af37] font-bold py-2 px-4 rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">Sign Up</Link>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;