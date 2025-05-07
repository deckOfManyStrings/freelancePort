import Link from 'next/link';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Las Vegas Web Developer | Professional Website Creation',
  description: 'Freelance web developer in Las Vegas creating beautiful, responsive websites for local businesses. Get a free quote today!',
  keywords: 'web developer, Las Vegas, website design, website development, responsive websites, Next.js developer, web design, Nevada web developer, freelance web developer',
  authors: [{ name: 'YourName' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Las Vegas Web Developer | Professional Website Creation',
    description: 'Freelance web developer in Las Vegas creating beautiful, responsive websites for local businesses. Get a free quote today!',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Web Developer | Professional Website Creation',
    description: 'Freelance web developer in Las Vegas creating beautiful, responsive websites for local businesses. Get a free quote today!',
  },
  metadataBase: new URL('https://yourdomain.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'YourName Web Development',
              image: 'https://yourdomain.com/images/logo.png',
              '@id': 'https://yourdomain.com',
              url: 'https://yourdomain.com',
              telephone: '+17025551234',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Your Street Address',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89101',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '17:00',
              },
              sameAs: [
                'https://twitter.com/yourhandle',
                'https://www.linkedin.com/in/yourname/',
                'https://github.com/yourusername',
              ],
              priceRange: '$',
              servesCuisine: 'Web Development Services',
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">{children}</main>
        
        <footer className="py-12 bg-gray-800 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* About Column */}
              <div>
                <h3 className="text-xl font-bold mb-4">YourName</h3>
                <p className="mb-4">Freelance web developer in Las Vegas creating beautiful, responsive websites that help local businesses succeed online.</p>
                <p>Serving Las Vegas, Henderson, North Las Vegas, and the surrounding area.</p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/#services" className="hover:text-blue-400 transition">Services</Link>
                  </li>
                  <li>
                    <Link href="/#pricing" className="hover:text-blue-400 transition">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/#testimonials" className="hover:text-blue-400 transition">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:text-blue-400 transition">Contact</Link>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hello@yourdomain.com" className="hover:text-blue-400 transition">
                      hello@yourdomain.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+17025551234" className="hover:text-blue-400 transition">
                      (702) 555-1234
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Las Vegas, Nevada</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <div className="text-center border-t border-gray-700 pt-8">
              <p>© {new Date().getFullYear()} YourName | Web Developer in Las Vegas, Nevada</p>
              <p className="mt-2 text-sm text-gray-400">Built with Next.js and Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}