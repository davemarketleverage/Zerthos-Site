import React, { useState, useEffect } from 'react';
import logoDark from '../../assets/zerthos-dark.png';
import { useNavigate } from 'react-router-dom';

export const Header = ({ isScrolled = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const navigate = useNavigate();

  // Detect current page based on pathname
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
      setCurrentPage('home');
    } else {
      setCurrentPage(pathname.substring(1)); // Remove leading slash
    }
  }, []);

  // Helper function to check if a nav item is active
  const isActive = (page) => {
    return currentPage === page;
  };

  return (
    <>
      <div className={`w-full mx-auto px-12 md:px-8 sm:px-4 py-8 md:py-6 sm:py-4 flex justify-between items-center fixed top-0 z-50 bg-white transition-all duration-300 ease-in-out ${isScrolled || mobileMenuOpen ? 'border-b border-gray-200 shadow-sm' : ''}`} style={{ minHeight: '80px' }}>
        <div className="relative h-12 cursor-pointer shrink-0" onClick={() => navigate('/')}>
          <img
            className="w-full h-full object-contain"
            alt="Zerthos Logo"
            src={logoDark}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4 text-lg font-medium items-center">
          <a 
            href="/" 
            className={`px-3 py-1 transition-colors duration-200 ${
              isActive('home') 
                ? 'text-[#F09A07] font-semibold' 
                : 'text-[#202020] hover:text-[#F09A07]'
            }`}
          >
            Home
          </a>
          <a 
            href="/technology" 
            className={`px-3 py-1 transition-colors duration-200 ${
              isActive('technology') 
                ? 'text-[#F09A07] font-semibold' 
                : 'text-[#202020] hover:text-[#F09A07]'
            }`}
          >
            Technology
          </a>
          <a 
            href="/industries" 
            className={`px-3 py-1 transition-colors duration-200 ${
              isActive('industries') 
                ? 'text-[#F09A07] font-semibold' 
                : 'text-[#202020] hover:text-[#F09A07]'
            }`}
          >
            Industries
          </a>
          <a 
            href="/leadership" 
            className={`px-3 py-1 transition-colors duration-200 ${
              isActive('leadership') 
                ? 'text-[#F09A07] font-semibold' 
                : 'text-[#202020] hover:text-[#F09A07]'
            }`}
          >
            Leadership
          </a>
          <a 
            href="/careers" 
            className={`px-3 py-1 transition-colors duration-200 ${
              isActive('careers') 
                ? 'text-[#F09A07] font-semibold' 
                : 'text-[#202020] hover:text-[#F09A07]'
            }`}
          >
            Careers
          </a>
          <a 
            href="http://ec2-3-84-10-33.compute-1.amazonaws.com:3001/login" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F09A07] text-white rounded-xl px-5 py-2 ml-2 font-semibold transition-colors duration-200 hover:bg-[#F09A07]/90"
          >
            Login
          </a>
          <a 
            href="/contact" 
            className={`border border-[#F09A07] rounded-xl px-5 py-2 ml-2 font-semibold transition-colors duration-200 ${
              isActive('contact') 
                ? 'bg-[#F09A07] text-white hover:bg-[#F09A07]/90' 
                : 'text-[#F09A07] hover:bg-[#FFF7E0]'
            }`}
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-20">
            <div className="flex justify-between items-center mb-8">
              <img
                className="w-24 h-12 object-contain"
                alt="Zerthos Logo"
                src={logoDark}
              />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 flex flex-col justify-center items-center"
              >
                <div className="w-6 h-0.5 bg-gray-800 rotate-45"></div>
                <div className="w-6 h-0.5 bg-gray-800 -rotate-45 -mt-0.5"></div>
              </button>
            </div>
            <nav className="space-y-4">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive('home')
                    ? 'bg-[#F09A07]/10 text-[#F09A07] font-semibold border-l-4 border-[#F09A07]'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                Home
              </a>
              <a
                href="/technology"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive('technology')
                    ? 'bg-[#F09A07]/10 text-[#F09A07] font-semibold border-l-4 border-[#F09A07]'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                Technology
              </a>
              <a
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive('industries')
                    ? 'bg-[#F09A07]/10 text-[#F09A07] font-semibold border-l-4 border-[#F09A07]'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                Industries
              </a>
              <a
                href="/leadership"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive('leadership')
                    ? 'bg-[#F09A07]/10 text-[#F09A07] font-semibold border-l-4 border-[#F09A07]'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                Leadership
              </a>
              <a
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                  isActive('careers')
                    ? 'bg-[#F09A07]/10 text-[#F09A07] font-semibold border-l-4 border-[#F09A07]'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                Careers
              </a>
              <a
                href="http://ec2-3-84-10-33.compute-1.amazonaws.com:3001/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 px-4 rounded-xl font-semibold transition-colors duration-200 bg-[#F09A07] text-white hover:bg-[#F09A07]/90"
              >
                Login
              </a>
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-colors duration-200 ${
                  isActive('contact')
                    ? 'bg-[#F09A07] text-white hover:bg-[#F09A07]/90'
                    : 'border border-[#F09A07] text-[#F09A07] hover:bg-[#FFF7E0]'
                }`}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}; 