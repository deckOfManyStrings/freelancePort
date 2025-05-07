'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-700 flex items-center"
            aria-label="YourName - Home"
          >
            {/* Replace with your logo if you have one */}
            <span className="hidden sm:inline">YourName</span>
            <span className="sm:hidden">YN</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#services" label="Services" />
            <NavLink href="/#pricing" label="Pricing" />
            <NavLink href="/#testimonials" label="Testimonials" />
            <NavLink href="/blog" label="Blog" />
            <Link 
              href="/#contact" 
              className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/#services" label="Services" onClick={closeMobileMenu} />
              <MobileNavLink href="/#portfolio" label="Portfolio" onClick={closeMobileMenu} />
              <MobileNavLink href="/#testimonials" label="Testimonials" onClick={closeMobileMenu} />
              <MobileNavLink href="/blog" label="Blog" onClick={closeMobileMenu} />
              <MobileNavLink 
                href="/#contact" 
                label="Get in Touch" 
                onClick={closeMobileMenu}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors inline-block"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Desktop navigation link component
function NavLink({ href, label }) {
  return (
    <Link 
      href={href} 
      className="font-medium text-gray-700 hover:text-blue-700 transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

// Mobile navigation link component
function MobileNavLink({ href, label, onClick, className = '' }) {
  return (
    <Link 
      href={href} 
      className={`font-medium ${className || 'text-gray-700 hover:text-blue-700 transition-colors'}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}