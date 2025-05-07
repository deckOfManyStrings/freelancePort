export default function CallToAction() {
    return (
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Las Vegas Business Online?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s work together to create a website that delivers results. I help local businesses in Las Vegas
              attract more customers and grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium rounded-lg px-8 py-4 text-lg transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/portfolio"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg px-8 py-4 text-lg transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }