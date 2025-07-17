import React from 'react';
import logoSvg from '../../assets/logo.svg';

export const Header = ({ isScrolled = false }) => {
  return (
    <div className={`w-full mx-auto px-12 py-4 flex justify-between items-center fixed top-0 z-50 bg-white transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-gray-200 shadow-sm' : ''}`}>
      <div className="relative w-32 h-16">
        <img
          className="w-full h-full object-contain"
          alt="Zerthos Logo"
          src={logoSvg}
        />
      </div>

      <nav className="flex gap-4 text-lg font-medium items-center">
        <a href="/" className="text-[#202020] hover:text-[#F09A07] transition px-3 py-1">Home</a>
        <a href="/careers" className="text-[#202020] hover:text-[#F09A07] transition px-3 py-1">Careers</a>
        <a href="/contact" className="border border-[#F09A07] text-[#F09A07] rounded-xl px-5 py-2 ml-2 font-semibold hover:bg-[#FFF7E0] transition">Contact</a>
      </nav>
    </div>
  );
}; 