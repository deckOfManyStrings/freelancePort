import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  // These would be replaced with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Las Vegas Restaurant Website',
      description: 'A responsive website with online ordering capabilities for a local restaurant.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      imageUrl: '/projects/restaurant-website.jpg',
      link: '/projects/restaurant-website',
      category: 'business',
      featured: true
    },
    {
      id: 2,
      title: 'Local Real Estate Portal',
      description: 'Property listing website with advanced search for Las Vegas properties.',
      technologies: ['Next.js', 'MongoDB', 'Mapbox'],
      imageUrl: '/projects/real-estate-portal.jpg',
      link: '/projects/real-estate-portal',
      category: 'business',
      featured: true
    },
    {
      id: 3,
      title: 'Las Vegas Event Booking Platform',
      description: 'A platform for discovering and booking local events in the Las Vegas area.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      imageUrl: '/projects/event-booking.jpg',
      link: '/projects/event-booking',
      category: 'web-app',
      featured: true
    },
    {
      id: 4,
      title: 'Local Business Directory',
      description: 'A comprehensive directory of businesses in Las Vegas with reviews and ratings.',
      technologies: ['Next.js', 'Firebase', 'Google Maps API'],
      imageUrl: '/projects/business-directory.jpg',
      link: '/projects/business-directory',
      category: 'web-app',
      featured: false
    }
  ];

  // Filter to show only featured projects on the homepage
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
          <p className="text-lg text-gray-600">
            Here are some of the websites and web applications I&apos;ve recently built for 
            clients in the Las Vegas area. Each project is crafted with attention to 
            detail, focusing on performance, usability, and achieving business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                {/* Project image would go here */}
                {/* 
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                */}
                
                {/* Gradient overlay visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Link 
                    href={project.link} 
                    className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/portfolio" 
            className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}