import Link from 'next/link';

export const metadata = {
  title: 'Contact Us - Urban Brew',
  description: 'Get in touch with Urban Brew. Contact us for catering inquiries, feedback, or questions about our coffee and services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            href="/demos/starter" 
            className="text-2xl font-bold text-amber-800"
          >
            Urban Brew
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/demos/starter" className="text-gray-700 hover:text-amber-800">Home</Link>
            <Link href="/demos/starter/menu" className="text-gray-700 hover:text-amber-800">Menu</Link>
            <Link href="/demos/starter/about" className="text-gray-700 hover:text-amber-800">About</Link>
            <Link href="/demos/starter/location" className="text-gray-700 hover:text-amber-800">Location</Link>
            <Link href="/demos/starter/contact" className="text-amber-800 font-medium">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Page Header */}
      <section className="py-10 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to order coffee for your next event? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-amber-800 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">123 Coffee Lane</p>
                    <p className="text-gray-600">Las Vegas, NV 89101</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-amber-800 font-medium hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber-800 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">(702) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber-800 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@urbanbrew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-amber-800 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 7:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Sunday: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-amber-800 hover:text-amber-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 5.16c-.67.3-1.38.5-2.14.58.77-.46 1.36-1.19 1.64-2.06-.72.43-1.52.74-2.37.9-1.34-1.42-3.58-1.49-5-.14-.7.65-1.1 1.56-1.1 2.52 0 .27.03.54.1.8-4.3-.22-8.1-2.27-10.66-5.4-.46.8-.72 1.73-.72 2.67 0 1.84.93 3.47 2.35 4.42-.65-.02-1.27-.2-1.8-.5v.05c0 2.57 1.83 4.7 4.25 5.19-.44.12-.91.18-1.39.18-.34 0-.67-.03-1-.09.68 2.1 2.64 3.63 4.96 3.68-1.82 1.42-4.11 2.27-6.6 2.27-.43 0-.85-.03-1.27-.08 2.35 1.5 5.14 2.38 8.14 2.38 9.76 0 15.1-8.08 15.1-15.1 0-.23 0-.46-.01-.69.72-.52 1.35-1.16 1.84-1.9z" />
                      </svg>
                    </a>
                    <a href="#" className="text-amber-800 hover:text-amber-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                    <a href="#" className="text-amber-800 hover:text-amber-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Find Us</h2>
          <div className="bg-gray-200 h-96 rounded-lg">
            {/* Map would go here */}
            <div className="h-full flex items-center justify-center text-gray-500">
              <p>Map Component Would Display Here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">Urban Brew</h3>
              <p>The best coffee in Las Vegas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Pages</h4>
                <ul className="space-y-2">
                  <li><Link href="/demos/starter" className="hover:text-amber-500">Home</Link></li>
                  <li><Link href="/demos/starter/menu" className="hover:text-amber-500">Menu</Link></li>
                  <li><Link href="/demos/starter/about" className="hover:text-amber-500">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Visit</h4>
                <ul className="space-y-2">
                  <li><Link href="/demos/starter/location" className="hover:text-amber-500">Location</Link></li>
                  <li><Link href="/demos/starter/contact" className="hover:text-amber-500">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-amber-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 5.16c-.67.3-1.38.5-2.14.58.77-.46 1.36-1.19 1.64-2.06-.72.43-1.52.74-2.37.9-1.34-1.42-3.58-1.49-5-.14-.7.65-1.1 1.56-1.1 2.52 0 .27.03.54.1.8-4.3-.22-8.1-2.27-10.66-5.4-.46.8-.72 1.73-.72 2.67 0 1.84.93 3.47 2.35 4.42-.65-.02-1.27-.2-1.8-.5v.05c0 2.57 1.83 4.7 4.25 5.19-.44.12-.91.18-1.39.18-.34 0-.67-.03-1-.09.68 2.1 2.64 3.63 4.96 3.68-1.82 1.42-4.11 2.27-6.6 2.27-.43 0-.85-.03-1.27-.08 2.35 1.5 5.14 2.38 8.14 2.38 9.76 0 15.1-8.08 15.1-15.1 0-.23 0-.46-.01-.69.72-.52 1.35-1.16 1.84-1.9z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.83-.26.83-.57 0-.28-.01-1.03-.02-2.02-3.34.73-4.03-1.61-4.03-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .1-.78.41-1.3.75-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58 4.77-1.59 8.2-6.09 8.2-11.38C24 5.37 18.63 0 12 0z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.5l-2.3 6.9 7.1-2.3c2.2 1.2 4.7 1.8 7.2 1.8 6.6 0 12-5.4 12-12S18.6 0 12 0zm7 16.9c-.3.9-1.6 1.6-2.7 1.8-.7.1-1.6.2-4.7-1-3.9-1.5-6.5-5.3-6.7-5.5-.2-.2-1.9-2.5-1.9-4.8S4 4.1 4.5 3.6c.4-.4.9-.6 1.4-.6h.5c.4 0 .7 0 1 .8.3.9 1.1 3.2 1.2 3.4.1.2.2.5 0 .8-.2.3-.3.5-.6.8-.3.3-.6.6-.9.9-.3.3-.6.6-.3 1.1.4.5 1.7 2.2 3.6 3.5 2.7 1.8 4.5 2.2 5.1 2.4.5.2.8.1 1.1-.2.3-.4 1.3-1.5 1.6-2.1.3-.6.7-.5 1.1-.3.4.2 2.7 1.3 3.2 1.5.5.2.8.4.9.5.1.2.1.9-.2 1.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Urban Brew. All rights reserved.</p>
            <p className="mt-2">This is a demo template for the Starter Package. <Link href="/#pricing" className="text-blue-400 hover:underline">Return to pricing</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}