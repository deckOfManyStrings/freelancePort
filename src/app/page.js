import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Projects Section */}
      {/* <Projects /> */}
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Call to Action Section */}
      <CallToAction />
      
      {/* Contact Form */}
      <section id="contact" className="section bg-blue-700 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Let&apos;s Work Together</h2>
          <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">Ready to elevate your online presence? Fill out the form below with your project details, and I&apos;ll get back to you promptly to discuss how we can bring your vision to life.</p>
          <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}