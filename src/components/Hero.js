export default function Hero() {
    return (
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container relative mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column with text */}
            <div className="flex flex-col space-y-6 max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Web Developer in <span className="text-blue-200">Las Vegas</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                I create beautiful, responsive websites that help local businesses stand out from the competition and attract more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a 
                  href="#portfolio" 
                  className="btn-primary px-8 py-4 text-center"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 transition-colors px-8 py-4 rounded-lg font-medium text-center"
                >
                  Get a Free Quote
                </a>
              </div>
              
              <div className="pt-6">
                <p className="text-blue-100 mb-3 font-medium">Trusted by local Las Vegas businesses:</p>
                <div className="flex flex-wrap gap-8 opacity-80">
                  {/* You can replace these with actual client logos */}
                  <div className="h-8 w-24 bg-white/20 rounded"></div>
                  <div className="h-8 w-32 bg-white/20 rounded"></div>
                  <div className="h-8 w-28 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Right column with image */}
            <div className="hidden md:block">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96 relative">
                {/* Replace with your actual portfolio screenshot or illustration */}
                <div className="absolute inset-0 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,53.3C672,64,768,64,864,74.7C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>
    );
  }