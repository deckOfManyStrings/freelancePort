// src/components/TradesNavigation.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaTools, FaPhone } from 'react-icons/fa';

export default function TradesNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-bold text-blue-700">
            <FaTools className="mr-2" />
            <span>TradesWeb</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#services" className="hover:text-blue-700 transition font-medium">
                Services
              </a>
              <a href="#portfolio" className="hover:text-blue-700 transition font-medium">
                Portfolio
              </a>
              <a href="#testimonials" className="hover:text-blue-700 transition font-medium">
                Testimonials
              </a>
              <Link href="/blog" className="hover:text-blue-700 transition font-medium">
                Blog
              </Link>
            </div>
            <a 
              href="#contact" 
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition flex items-center"
            >
              <FaPhone className="mr-2" />
              Get a Quote
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="hover:text-blue-700 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="hover:text-blue-700 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#testimonials" 
                className="hover:text-blue-700 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <Link 
                href="/blog" 
                className="hover:text-blue-700 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#contact" 
                className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition flex items-center w-fit"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone className="mr-2" />
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}