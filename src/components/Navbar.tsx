
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggleButton } from './ui/ThemeToggleButton';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-black dark:text-white">
            Kelly Bright Glamour
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Services</Link>
            <Link href="#team" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Team</Link>
            <Link href="#gallery" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Gallery</Link>
            <Link href="#testimonials" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-black dark:text-white hover:text-[#d4af37] transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="bg-[#d4af37] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#c29a2f] transition-colors">Login</Link>
              <Link href="/signup" className="border border-[#d4af37] text-[#d4af37] font-bold py-2 px-4 rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors">Sign Up</Link>
            </div>
            <ThemeToggleButton />
            <div className="md:hidden">
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="text-black dark:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible bg-blur'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-8">
          <Link href="#services" className="text-black dark:text-white hover:text-[#d4af37] transition-colors" onClick={closeMenu}>Services</Link>
          <Link href="#team" className="text-black dark:text-white hover:text-[#d4af37] transition-colors" onClick={closeMenu}>Team</Link>
          <Link href="#gallery" className="text-black dark:text-white hover:text-[#d4af37] transition-colors" onClick={closeMenu}>Gallery</Link>
          <Link href="#testimonials" className="text-black dark:text-white hover:text-[#d4af37] transition-colors" onClick={closeMenu}>Testimonials</Link>
          <Link href="#contact" className="text-black dark:text-white hover:text-[#d4af37] transition-colors" onClick={closeMenu}>Contact</Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="bg-[#d4af37] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#c29a2f] transition-colors" onClick={closeMenu}>Login</Link>
            <Link href="/signup" className="border border-[#d4af37] text-[#d4af37] font-bold py-2 px-4 rounded-lg hover:bg-[#d4af37] hover:text-black transition-colors" onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;