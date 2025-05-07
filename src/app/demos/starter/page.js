import Link from 'next/link';

export const metadata = {
  title: 'Starter Template - Local Cafe Website Demo',
  description: 'A clean, modern website template for a local coffee shop with essential information and contact form',
};

export default function StarterDemo() {
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
            <Link href="/demos/starter/contact" className="text-gray-700 hover:text-amber-800">Contact</Link>
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
      
      {/* Hero Section */}
      <section className="relative bg-amber-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Coffee & Homemade Pastries</h1>
            <p className="text-xl mb-8">Experience the taste of locally roasted coffee in the heart of Las Vegas.</p>
            <Link 
              href="/demos/starter/menu" 
              className="inline-block bg-white text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Items */}
      <section className="py-16 w-full overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialty Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-amber-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Urban Latte</h3>
                <p className="text-gray-600 mb-4">Our signature latte with house-made caramel and a hint of vanilla.</p>
                <p className="text-amber-800 font-bold">$4.95</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-amber-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mocha Madness</h3>
                <p className="text-gray-600 mb-4">Rich espresso with chocolate, topped with whipped cream.</p>
                <p className="text-amber-800 font-bold">$5.25</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-amber-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cold Brew</h3>
                <p className="text-gray-600 mb-4">Smooth, cold-brewed coffee steeped for 24 hours.</p>
                <p className="text-amber-800 font-bold">$4.50</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/demos/starter/menu" 
              className="inline-block border-2 border-amber-800 text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-amber-800 hover:text-white transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12">
              <div className="bg-amber-100 h-64 md:h-80 lg:h-96 rounded-lg w-full"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Urban Brew</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Urban Brew is a cozy neighborhood café located in the heart of Las Vegas. We're passionate about great coffee and creating a welcoming space for our community.
              </p>
              <p className="text-gray-600 mb-6">
                Our beans are ethically sourced and locally roasted to ensure the freshest and most flavorful coffee experience. Pair that with our homemade pastries and friendly service, and you'll see why locals love Urban Brew.
              </p>
              <Link 
                href="/demos/starter/about" 
                className="inline-block bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location & Hours */}
      <section className="py-16 w-full overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Location & Hours</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 h-64 mb-4 rounded-lg w-full">
                {/* Map would go here */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600 mb-1">123 Coffee Lane</p>
              <p className="text-gray-600 mb-4">Las Vegas, NV 89101</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-800 font-medium hover:underline"
              >
                Get Directions
              </a>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">7:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 mb-1">Phone: (702) 555-1234</p>
                <p className="text-gray-600 mb-4">Email: hello@urbanbrew.com</p>
                <Link 
                  href="/demos/starter/contact" 
                  className="text-amber-800 font-medium hover:underline"
                >
                  Send us a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-800 text-white w-full overflow-x-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop by Urban Brew for your daily coffee fix. Bring a friend and enjoy our cozy atmosphere.
          </p>
          <Link 
            href="/demos/starter/location" 
            className="inline-block bg-white text-amber-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Visit Us
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 w-full overflow-x-hidden">
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
  )
}