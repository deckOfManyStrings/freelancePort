export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Developer in Las Vegas</h1>
            <p className="text-xl mb-8">Creating beautiful, responsive websites for local businesses</p>
            <a 
              href="#contact" 
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition inline-block"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Website Development</h3>
              <p>Custom-built websites that are fast, mobile-friendly, and optimized for your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">E-Commerce Solutions</h3>
              <p>Online stores that drive sales with secure payment processing and inventory management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Local SEO</h3>
              <p>Get found by Las Vegas customers with websites optimized for local search.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Las Vegas Restaurant Website</h3>
                <p className="mb-4">A responsive website with online ordering capabilities for a local restaurant.</p>
                <p className="text-blue-600 font-medium">React • Next.js • Tailwind CSS</p>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Local Real Estate Portal</h3>
                <p className="mb-4">Property listing website with advanced search for Las Vegas properties.</p>
                <p className="text-blue-600 font-medium">Next.js • MongoDB • Mapbox</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"Working with [Your Name] transformed our online presence. Our website traffic has increased by 60% since launch."</p>
              <p className="font-semibold">- John Smith, Owner of Smith's Bakery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"The website was delivered on time and under budget. It perfectly captures our brand and has helped us reach new customers."</p>
              <p className="font-semibold">- Sarah Johnson, Sunset Spa Las Vegas</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="section bg-blue-700 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
          <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
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
                <label htmlFor="project" className="block mb-2 font-medium">Project Details</label>
                <textarea 
                  id="project" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}