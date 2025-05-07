import Link from 'next/link';

export const metadata = {
  title: 'About - Urban Brew',
  description: 'Learn about Urban Brew, a cozy neighborhood café in Las Vegas with a passion for great coffee and community.',
};

export default function AboutPage() {
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
            <Link href="/demos/starter/about" className="text-amber-800 font-medium">About</Link>
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
          <h1 className="text-4xl font-bold text-amber-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know our story, our passion for coffee, and what makes Urban Brew a special place in Las Vegas.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-amber-100 h-64 md:h-96 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018 by coffee enthusiasts Sarah and Michael, Urban Brew began as a small pop-up at local farmers' markets. Our handcrafted coffee quickly gained a following, and in 2020, we opened our doors at our current location in downtown Las Vegas.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a simple mission: create a warm, welcoming space where people could enjoy exceptional coffee and connect with others in the community. That mission continues to guide everything we do today.
              </p>
              <p className="text-gray-600">
                As we've grown, we've remained committed to our founding principles: serving the highest quality coffee, supporting local producers, and creating a positive impact in our neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Coffee Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="bg-amber-200 h-64 md:h-96 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Coffee</h2>
              <p className="text-gray-600 mb-4">
                At Urban Brew, we believe that great coffee starts with great beans. We source our coffee from ethical, sustainable farms around the world and roast it locally to ensure peak freshness and flavor.
              </p>
              <p className="text-gray-600 mb-4">
                Our head barista, Emma, brings over a decade of experience to her role. She personally trains each member of our team to uphold our high standards for every cup we serve.
              </p>
              <p className="text-gray-600">
                Whether you're a coffee connoisseur or just looking for your morning caffeine fix, we're dedicated to providing you with a memorable coffee experience. From our signature Urban Latte to our meticulously prepared pour-overs, quality is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-amber-800 mb-2">Co-Founder & Owner</p>
              <p className="text-gray-600">Coffee enthusiast with a background in hospitality management. Sarah oversees the café operations and customer experience.</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-amber-800 mb-2">Co-Founder & Head Roaster</p>
              <p className="text-gray-600">Former chef turned coffee expert. Michael selects our beans and develops our signature roast profiles.</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Emma Rodriguez</h3>
              <p className="text-amber-800 mb-2">Head Barista</p>
              <p className="text-gray-600">Award-winning barista with over 10 years of experience. Emma ensures every cup meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe coffee brings people together. We're committed to creating a welcoming space for everyone and supporting local initiatives that strengthen our community.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From our carefully sourced beans to our meticulously crafted drinks and homemade pastries, excellence is our standard.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-amber-800 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices. From our compostable packaging to our support for sustainable farming, we strive to minimize our ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Come Visit Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to share our passion for coffee with you. Stop by Urban Brew and experience the difference for yourself.
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