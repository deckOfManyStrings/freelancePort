'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = useState('monthly');
  
  // Pricing packages
  const pricingPackages = {
    starter: {
      name: 'Starter',
      monthly: 149,
      yearly: 129 * 12, // 13% discount for annual plan
      description: 'Perfect for small businesses just getting started online',
      projectTemplate: {
        name: 'Local Cafe Website',
        description: 'A clean, modern website for a local coffee shop with essential information and contact form',
        pages: ['Home', 'Menu', 'About', 'Contact', 'Location'],
        features: ['Online menu display', 'Contact form', 'Google Maps integration', 'Mobile responsive design'],
        imageUrl: '/projects/starter-template.jpg',
        demoUrl: '/demos/starter'
      },
      features: [
        'Custom responsive website (up to 5 pages)',
        'Mobile-friendly design',
        'Basic SEO optimization',
        'Contact form integration',
        'Google Analytics setup',
        'Social media links',
        '2 rounds of revisions',
        '30 days of support post-launch'
      ],
      notIncluded: [
        'E-commerce functionality',
        'Custom animations',
        'Database integration',
        'User authentication system'
      ]
    },
    professional: {
      name: 'Professional',
      monthly: 299,
      yearly: 259 * 12, // 13% discount for annual plan
      description: 'Ideal for established businesses looking to grow their online presence',
      projectTemplate: {
        name: 'Real Estate Agency Website',
        description: 'Professional website with property listings, lead capture forms, and blog integration',
        pages: ['Home', 'Property Listings', 'About', 'Services', 'Blog', 'Testimonials', 'Team', 'Contact', 'Property Details', 'Area Guides'],
        features: ['Property search functionality', 'Lead generation forms', 'Blog with categories', 'Team member profiles', 'Client testimonials showcase'],
        imageUrl: '/projects/professional-template.jpg',
        demoUrl: '/demos/professional'
      },
      features: [
        'Custom responsive website (up to 10 pages)',
        'Premium modern design',
        'Advanced SEO optimization',
        'Content management system (CMS)',
        'Blog setup and integration',
        'Email newsletter signup',
        'Lead generation optimization',
        'Contact form with custom fields',
        'Google Maps integration',
        'Google Analytics with enhanced reporting',
        '3 rounds of revisions',
        '60 days of support post-launch',
        'Basic website training session'
      ],
      notIncluded: [
        'Complex e-commerce systems',
        'User membership areas',
        'Custom web applications'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      monthly: 599,
      yearly: 499 * 12, // 17% discount for annual plan
      description: 'Comprehensive solution for businesses with complex online requirements',
      projectTemplate: {
        name: 'E-Commerce Store',
        description: 'Full-featured online store with product catalog, shopping cart, and secure checkout',
        pages: ['Home', 'Shop', 'Product Categories', 'Product Details', 'Shopping Cart', 'Checkout', 'User Account', 'Order History', 'About', 'Contact', 'Blog', 'FAQ', 'Terms & Conditions', 'Privacy Policy'],
        features: ['Product catalog with filtering', 'User accounts & authentication', 'Secure payment processing', 'Inventory management', 'Order tracking', 'Customer reviews', 'Related products recommendations'],
        imageUrl: '/projects/enterprise-template.jpg',
        demoUrl: '/demos/enterprise'
      },
      features: [
        'Custom responsive website (unlimited pages)',
        'Premium brand-focused design',
        'E-commerce functionality',
        'Advanced user experience (UX) design',
        'Custom animations and interactive elements',
        'Advanced SEO strategy implementation',
        'Performance optimization',
        'Database integration',
        'User authentication system',
        'Custom API integrations',
        'Advanced analytics dashboard',
        'Unlimited revisions',
        '90 days of support post-launch',
        'Comprehensive website training sessions'
      ],
      notIncluded: []
    }
  };
  
  // Format price for display
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Website Package</h2>
          <p className="text-lg text-gray-600 mb-10">
            Select from one of our pre-designed website templates, customized to your brand. 
            Each package includes everything you need to establish a professional online presence.
          </p>
          
          {/* Billing toggle */}
          <div className="flex justify-center items-center space-x-4 mb-10">
            <span className={`text-sm ${billingFrequency === 'monthly' ? 'text-blue-700 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button 
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              onClick={() => setBillingFrequency(billingFrequency === 'monthly' ? 'yearly' : 'monthly')}
              aria-pressed={billingFrequency === 'yearly'}
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingFrequency === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`} 
              />
            </button>
            <span className={`text-sm ${billingFrequency === 'yearly' ? 'text-blue-700 font-medium' : 'text-gray-500'}`}>
              Yearly <span className="text-xs text-green-600 font-medium">(Save 13-17%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.keys(pricingPackages).map((packageKey) => {
            const pkg = pricingPackages[packageKey];
            const isPopular = packageKey === 'professional';
            
            return (
              <div 
                key={packageKey}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2 ${
                  isPopular ? 'border-2 border-blue-500 relative' : ''
                }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Project Template Preview */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* Project image would go here */}
                  {/* 
                  <Image
                    src={pkg.projectTemplate.imageUrl}
                    alt={pkg.projectTemplate.name}
                    fill
                    className="object-cover"
                  />
                  */}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 text-lg mb-2">{pkg.projectTemplate.name}</h4>
                      <p className="text-gray-600 text-sm">{pkg.projectTemplate.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <Link 
                      href={pkg.projectTemplate.demoUrl}
                      className="text-sm font-medium hover:underline"
                    >
                      View Demo →
                    </Link>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      {formatPrice(billingFrequency === 'monthly' ? pkg.monthly : pkg.yearly / 12)}
                    </span>
                    <span className="text-gray-500">
                      {billingFrequency === 'monthly' ? '/month' : ' /mo (billed annually)'}
                    </span>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors w-full ${
                      isPopular 
                        ? 'bg-blue-700 hover:bg-blue-800 text-white' 
                        : 'bg-white border border-blue-700 text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="px-8 pb-8">
                  {/* Template pages */}
                  <div className="mb-6">
                    <p className="font-medium text-sm uppercase text-gray-500 tracking-wide mb-2">Template includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.projectTemplate.pages.slice(0, 5).map((page, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {page}
                        </span>
                      ))}
                      {pkg.projectTemplate.pages.length > 5 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          +{pkg.projectTemplate.pages.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="font-medium text-sm uppercase text-gray-500 tracking-wide mb-4">What's included:</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium text-sm uppercase text-gray-500 tracking-wide mb-4">Not included:</p>
                      <ul className="space-y-3">
                        {pkg.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-3 text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-xl font-bold mb-4">Need a custom website design?</h3>
          <p className="text-gray-600 mb-6">
            Don't see a template that fits your needs? I also create fully custom websites tailored to your specific business requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}