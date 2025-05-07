import Link from 'next/link';

export const metadata = {
  title: 'Menu - Urban Brew',
  description: 'Explore our menu of specialty coffees, teas, and homemade pastries at Urban Brew cafe in Las Vegas.',
};

export default function MenuPage() {
  // Coffee Menu Items
  const coffeeItems = [
    { name: 'Espresso', description: 'Strong, concentrated coffee served in a small cup', price: 3.25 },
    { name: 'Americano', description: 'Espresso diluted with hot water', price: 3.75 },
    { name: 'Urban Latte', description: 'Our signature latte with house-made caramel and a hint of vanilla', price: 4.95 },
    { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and milk foam', price: 4.50 },
    { name: 'Mocha', description: 'Espresso with steamed milk and chocolate', price: 5.25 },
    { name: 'Cold Brew', description: 'Smooth, cold-brewed coffee steeped for 24 hours', price: 4.50 },
    { name: 'Vanilla Latte', description: 'Espresso with steamed milk and vanilla syrup', price: 4.75 },
    { name: 'Caramel Macchiato', description: 'Vanilla-flavored espresso with caramel drizzle', price: 5.00 },
  ];
  
  // Tea Menu Items
  const teaItems = [
    { name: 'Earl Grey', description: 'Black tea with bergamot flavor', price: 3.50 },
    { name: 'Green Tea', description: 'Classic Japanese green tea', price: 3.50 },
    { name: 'Chai Latte', description: 'Spiced black tea with steamed milk', price: 4.75 },
    { name: 'Herbal Infusion', description: 'Caffeine-free blend of herbs and flowers', price: 3.75 },
    { name: 'Iced Tea', description: 'Freshly brewed and chilled, your choice of flavor', price: 3.25 },
  ];
  
  // Pastry Menu Items
  const pastryItems = [
    { name: 'Croissant', description: 'Buttery, flaky French pastry', price: 3.50 },
    { name: 'Chocolate Chip Cookie', description: 'Soft-baked with premium chocolate', price: 2.75 },
    { name: 'Blueberry Muffin', description: 'Made fresh daily with real blueberries', price: 3.25 },
    { name: 'Cinnamon Roll', description: 'Warm, gooey, and topped with cream cheese frosting', price: 4.25 },
    { name: 'Banana Bread', description: 'Moist banana bread with walnuts', price: 3.75 },
  ];
  
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
            <Link href="/demos/starter/menu" className="text-amber-800 font-medium">Menu</Link>
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
      
      {/* Page Header */}
      <section className="py-10 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From signature coffee blends to homemade pastries, our menu offers something for everyone.
            All items made fresh daily with locally sourced ingredients when possible.
          </p>
        </div>
      </section>
      
      {/* Menu Navigation */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-2 sm:space-x-8">
            <a href="#coffee" className="py-4 px-4 text-amber-800 border-b-2 border-amber-800 font-medium">Coffee</a>
            <a href="#tea" className="py-4 px-4 text-gray-600 hover:text-amber-800">Tea</a>
            <a href="#pastries" className="py-4 px-4 text-gray-600 hover:text-amber-800">Pastries</a>
          </div>
        </div>
      </section>
      
      {/* Coffee Menu */}
      <section id="coffee" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Coffee</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {coffeeItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-amber-800 font-bold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tea Menu */}
      <section id="tea" className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tea</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {teaItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-amber-800 font-bold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pastries Menu */}
      <section id="pastries" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Pastries</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {pastryItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-amber-800 font-bold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop by to try our delicious coffee and pastries in a cozy atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/demos/starter/location" 
              className="bg-white text-amber-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Find Our Location
            </Link>
            <Link 
              href="/demos/starter/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
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