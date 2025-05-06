import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Las Vegas Web Developer | Professional Website Creation",
  description:
    "Freelance web developer in Las Vegas creating beautiful, responsive websites for local businesses. Get a free quote today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div>
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-700">
                YourName
              </Link>
              <div className="hidden md:flex space-x-6">
                <a href="#services" className="hover:text-blue-700 transition">
                  Services
                </a>
                <a href="#portfolio" className="hover:text-blue-700 transition">
                  Portfolio
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-blue-700 transition"
                >
                  Testimonials
                </a>
                <a href="#contact" className="hover:text-blue-700 transition">
                  Contact
                </a>
                <a href="/blog" className="hover:text-blue-700 transition">
                  Blog
                </a>
              </div>
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="py-8 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>
              © {new Date().getFullYear()} YourName | Web Developer in Las
              Vegas, Nevada
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400">
                GitHub
              </a>
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
