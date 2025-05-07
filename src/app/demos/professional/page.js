// src/app/page.js
import { FaTools, FaLightbulb, FaWrench, FaPhone } from 'react-icons/fa';
import { MdPlumbing, MdHandyman, MdStar } from 'react-icons/md';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Web Solutions for Las Vegas Trades</h1>
            <p className="text-xl mb-8">Custom websites for plumbers, electricians, and skilled tradespeople that bring in more customers</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition inline-block text-center"
              >
                Get a Free Quote
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition inline-block text-center"
              >
                See Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-specific benefits section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Why Trades Businesses Need Professional Websites</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Stand out from the competition and get more customer calls with a website built specifically for your trade
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">More Local Calls</h3>
              </div>
              <p>Optimized for local SEO so Las Vegas homeowners find you first when they need emergency plumbing or electrical work.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MdStar className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">Showcase Your Work</h3>
              </div>
              <p>Display your completed projects and customer testimonials to build trust and credibility with potential clients.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaTools className="text-blue-700 text-xl" />
                </div>
                <h3 className="text-xl font-semibold">24/7 Service Requests</h3>
              </div>
              <p>Allow customers to request quotes or emergency services online at any time, even when you're on another job.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Web Services for Trade Professionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <MdPlumbing className="text-blue-700 text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Plumbing Websites</h3>
              <p>Custom-built websites for plumbers with emergency service forms, gallery of completed work, and local SEO optimization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <FaLightbulb className="text-blue-700 text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Electrician Websites</h3>
              <p>Showcase your electrical services with professional websites featuring service area maps, online booking, and customer testimonials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <MdHandyman className="text-blue-700 text-5xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">General Contractor Sites</h3>
              <p>Portfolio-focused websites that highlight your renovation and building projects with before/after galleries and quote forms.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Trades Websites</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-64 bg-gray-200 relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                  <MdPlumbing className="text-blue-700 text-6xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vegas Fast Plumbing</h3>
                <p className="mb-4">Mobile-friendly website with emergency service booking system for a 24/7 Las Vegas plumbing company.</p>
                <p className="text-blue-600 font-medium">Next.js • Tailwind CSS • Google Maps API</p>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-64 bg-gray-200 relative">
                {/* This would be an actual image in production */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-100">
                  <FaLightbulb className="text-blue-700 text-6xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Desert Electrical Services</h3>
                <p className="mb-4">Complete business website with service area map, project portfolio, and customer reviews for a local electrician.</p>
                <p className="text-blue-600 font-medium">React • Next.js • Local SEO Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Trade Professionals Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <MdStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="italic mb-4">"Since launching my new website, my plumbing business has seen a 40% increase in service calls. The emergency booking feature has been a game-changer for my customers."</p>
              <p className="font-semibold">- Mike Rodriguez, Owner of Rodriguez Plumbing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <MdStar key={star} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="italic mb-4">"My electrical contracting business was struggling to find new customers until I invested in a professionally built website. Now we're booked solid with jobs from local homeowners who found us online."</p>
              <p className="font-semibold">- Sarah Williams, Desert Electrical Services</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Questions About Websites for Trades Businesses</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How much does a trades business website cost?</h3>
              <p>Professional websites for plumbers, electricians and other tradespeople typically range from $1,500-$3,500 depending on your specific needs. We offer flexible payment plans for small business owners.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does it take to build a website for my trades business?</h3>
              <p>Most trades websites can be completed in 2-4 weeks from start to finish, including time for your feedback and revisions.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Will my website work on mobile phones?</h3>
              <p>Absolutely! All our websites are fully responsive and optimized for mobile devices. This is crucial since many customers will search for emergency services from their phones.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can you help me rank higher in Google searches?</h3>
              <p>Yes, we build all trades websites with local SEO best practices, helping you appear higher in search results when Las Vegas residents search for services like yours.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Get a Free Website Quote for Your Trades Business</h2>
          <p className="text-center text-xl mb-12 max-w-2xl mx-auto">Complete the form below, and I'll get back to you within 24 hours with ideas and pricing for your new website.</p>
          <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block mb-2 font-medium">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="tradetype" className="block mb-2 font-medium">Type of Trade</label>
                <select 
                  id="tradetype" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select your trade</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="hvac">HVAC</option>
                  <option value="general">General Contractor</option>
                  <option value="other">Other Trade</option>
                </select>
              </div>
              <div>
                <label htmlFor="project" className="block mb-2 font-medium">What are you looking for in a website?</label>
                <textarea 
                  id="project" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center"
              >
                <FaWrench className="mr-2" />
                Request Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}