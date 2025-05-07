import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Website Development',
      description: 'Professional, responsive websites built with modern technologies that load quickly and look great on all devices. Perfect for Las Vegas businesses looking to establish a strong online presence.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'E-Commerce Solutions',
      description: 'Full-featured online stores with secure payment processing, inventory management, and customer accounts. Increase your revenue by selling products and services 24/7 to customers across Las Vegas and beyond.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Local SEO Optimization',
      description: 'Get found by Las Vegas customers looking for your services. SEO-optimized websites that rank higher in local search results, increasing your visibility and bringing in qualified leads.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Website Maintenance',
      description: 'Keep your website secure, up-to-date, and running smoothly with regular maintenance and support. Don\'t let technical issues hurt your Las Vegas business or compromise your security.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Web Performance Optimization',
      description: 'Speed up your website to provide a better user experience and improve search engine rankings. Fast-loading websites convert more visitors into customers and reduce bounce rates.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Progressive Web Apps (PWAs)',
      description: 'Create app-like experiences that work offline, load instantly, and can be installed on mobile devices. Perfect for Las Vegas businesses looking to provide a more engaging experience.',
      icon: (
        <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-lg text-gray-600">
            I provide comprehensive web development services tailored to the needs of Las Vegas businesses. 
            From custom website creation to e-commerce solutions, I&apos;m committed to delivering high-quality, 
            responsive websites that help your business succeed online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition inline-block"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}