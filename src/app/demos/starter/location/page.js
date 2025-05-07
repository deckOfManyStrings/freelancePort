import Link from "next/link";

export const metadata = {
  title: "Location & Hours - Urban Brew",
  description:
    "Find Urban Brew café in downtown Las Vegas. Check our hours, get directions, and plan your visit to enjoy our fresh coffee and pastries.",
};

export default function LocationPage() {
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
            <Link
              href="/demos/starter"
              className="text-gray-700 hover:text-amber-800"
            >
              Home
            </Link>
            <Link
              href="/demos/starter/menu"
              className="text-gray-700 hover:text-amber-800"
            >
              Menu
            </Link>
            <Link
              href="/demos/starter/about"
              className="text-gray-700 hover:text-amber-800"
            >
              About
            </Link>
            <Link
              href="/demos/starter/location"
              className="text-amber-800 font-medium"
            >
              Location
            </Link>
            <Link
              href="/demos/starter/contact"
              className="text-gray-700 hover:text-amber-800"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-10 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            Location & Hours
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in downtown Las Vegas, just minutes away from the Strip.
            Free parking available for customers.
          </p>
        </div>
      </section>

      {/* Map & Location Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map */}
            <div className="lg:w-2/3">
              <div className="bg-gray-200 h-96 rounded-lg mb-6">
                {/* Map would go here */}
                <div className="h-full flex items-center justify-center text-gray-500">
                  <p>Interactive Map Would Display Here</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Getting Here</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">From the Strip</h3>
                  <p className="text-gray-600">
                    We're just a 10-minute drive from the Las Vegas Strip. Head
                    north on Las Vegas Blvd, then turn right onto Coffee Lane.
                    You'll find us on the right side of the street.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Public Transportation
                  </h3>
                  <p className="text-gray-600">
                    Take bus route 108 or 208 and get off at the Downtown
                    Transit Center. We're a 5-minute walk from there.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Parking</h3>
                  <p className="text-gray-600">
                    Free street parking is available directly in front of our
                    café. There's also a public parking garage one block away
                    for just $2/hour.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="lg:w-1/3 bg-amber-50 p-8 rounded-lg h-fit">
              <h2 className="text-2xl font-bold mb-6">Visit Us</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">123 Coffee Lane</p>
                  <p className="text-gray-600 mb-2">Las Vegas, NV 89101</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-800 font-medium hover:underline inline-flex items-center"
                  >
                    <span>Get Directions</span>
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hours of Operation</h3>
                  <div className="space-y-1">
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
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="flex items-center text-gray-600 mb-1">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (702) 555-1234
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@urbanbrew.com
                  </p>
                </div>
              </div>

              <Link
                href="/demos/starter/contact"
                className="mt-8 block text-center bg-amber-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Neighborhood
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nearby Attraction 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Arts District</h3>
                <p className="text-gray-600 mb-4">
                  Located in the heart of the Las Vegas Arts District, we're
                  surrounded by galleries, boutiques, and creative spaces.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Distance:</span> 5 minute walk
                </p>
              </div>
            </div>

            {/* Nearby Attraction 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Downtown Container Park
                </h3>
                <p className="text-gray-600 mb-4">
                  Check out this unique shopping center made from shipping
                  containers, featuring local shops, restaurants, and live
                  entertainment.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Distance:</span> 10 minute walk
                </p>
              </div>
            </div>

            {/* Nearby Attraction 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Fremont Street Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience the vibrant pedestrian mall with its iconic light
                  shows, street performers, and classic casinos.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Distance:</span> 15 minute walk
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do you have WiFi?</h3>
              <p className="text-gray-600">
                Yes, we offer free high-speed WiFi for all our customers. Ask
                our staff for the current password.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Is there accessible parking nearby?
              </h3>
              <p className="text-gray-600">
                Yes, we have two accessible parking spots directly in front of
                our café, and the public parking garage one block away also has
                accessible parking available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Do you take reservations?
              </h3>
              <p className="text-gray-600">
                We generally operate on a first-come, first-served basis.
                However, for groups of 6 or more, we recommend calling ahead so
                we can try to accommodate you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Are you pet-friendly?
              </h3>
              <p className="text-gray-600">
                Well-behaved dogs are welcome on our outdoor patio. For health
                and safety reasons, we can't allow pets inside the café (service
                animals excepted, of course).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Come Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can't wait to serve you! Stop by Urban Brew for a warm welcome
            and a delicious cup of coffee.
          </p>
          <Link
            href="/demos/starter/contact"
            className="bg-white text-amber-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">
                Urban Brew
              </h3>
              <p>The best coffee in Las Vegas.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Pages</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/demos/starter"
                      className="hover:text-amber-500"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demos/starter/menu"
                      className="hover:text-amber-500"
                    >
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demos/starter/about"
                      className="hover:text-amber-500"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Visit</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/demos/starter/location"
                      className="hover:text-amber-500"
                    >
                      Location
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demos/starter/contact"
                      className="hover:text-amber-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-amber-500">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 5.16c-.67.3-1.38.5-2.14.58.77-.46 1.36-1.19 1.64-2.06-.72.43-1.52.74-2.37.9-1.34-1.42-3.58-1.49-5-.14-.7.65-1.1 1.56-1.1 2.52 0 .27.03.54.1.8-4.3-.22-8.1-2.27-10.66-5.4-.46.8-.72 1.73-.72 2.67 0 1.84.93 3.47 2.35 4.42-.65-.02-1.27-.2-1.8-.5v.05c0 2.57 1.83 4.7 4.25 5.19-.44.12-.91.18-1.39.18-.34 0-.67-.03-1-.09.68 2.1 2.64 3.63 4.96 3.68-1.82 1.42-4.11 2.27-6.6 2.27-.43 0-.85-.03-1.27-.08 2.35 1.5 5.14 2.38 8.14 2.38 9.76 0 15.1-8.08 15.1-15.1 0-.23 0-.46-.01-.69.72-.52 1.35-1.16 1.84-1.9z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-500">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.83-.26.83-.57 0-.28-.01-1.03-.02-2.02-3.34.73-4.03-1.61-4.03-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .1-.78.41-1.3.75-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58 4.77-1.59 8.2-6.09 8.2-11.38C24 5.37 18.63 0 12 0z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-500">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 3.2 1.2 6.2 3.5 8.5l-2.3 6.9 7.1-2.3c2.2 1.2 4.7 1.8 7.2 1.8 6.6 0 12-5.4 12-12S18.6 0 12 0zm7 16.9c-.3.9-1.6 1.6-2.7 1.8-.7.1-1.6.2-4.7-1-3.9-1.5-6.5-5.3-6.7-5.5-.2-.2-1.9-2.5-1.9-4.8S4 4.1 4.5 3.6c.4-.4.9-.6 1.4-.6h.5c.4 0 .7 0 1 .8.3.9 1.1 3.2 1.2 3.4.1.2.2.5 0 .8-.2.3-.3.5-.6.8-.3.3-.6.6-.9.9-.3.3-.6.6-.3 1.1.4.5 1.7 2.2 3.6 3.5 2.7 1.8 4.5 2.2 5.1 2.4.5.2.8.1 1.1-.2.3-.4 1.3-1.5 1.6-2.1.3-.6.7-.5 1.1-.3.4.2 2.7 1.3 3.2 1.5.5.2.8.4.9.5.1.2.1.9-.2 1.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Urban Brew. All rights reserved.</p>
            <p className="mt-2">
              This is a demo template for the Starter Package.{" "}
              <Link href="/#pricing" className="text-blue-400 hover:underline">
                Return to pricing
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
