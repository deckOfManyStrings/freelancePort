export const metadata = {
    title: 'Web Development Blog | Las Vegas Developer Tips & Insights',
    description: 'Expert web development insights for Las Vegas businesses. Learn about the latest web technologies and strategies to boost your online presence.',
  };
  
  export default function BlogPage() {
    // In a real site, you would fetch these from a CMS or database
    const blogPosts = [
      {
        id: 1,
        title: 'How Las Vegas Businesses Can Benefit from Modern Web Design',
        excerpt: 'Discover how effective website design can help your Las Vegas business stand out from the competition and attract more customers.',
        date: 'May 2, 2025',
        slug: 'las-vegas-businesses-modern-web-design',
        image: '/blog-placeholder-1.jpg'
      },
      {
        id: 2,
        title: 'Why Next.js is the Perfect Framework for Business Websites',
        excerpt: 'Learn how Next.js provides the speed, SEO benefits, and developer experience that makes it ideal for business websites.',
        date: 'April 24, 2025',
        slug: 'nextjs-perfect-framework-business-websites',
        image: '/blog-placeholder-2.jpg'
      },
      {
        id: 3,
        title: 'Local SEO Strategies for Las Vegas Small Businesses',
        excerpt: 'Practical tips to improve your website\'s visibility in local Las Vegas search results and attract more nearby customers.',
        date: 'April 15, 2025',
        slug: 'local-seo-strategies-las-vegas',
        image: '/blog-placeholder-3.jpg'
      },
    ];
  
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Web Development Blog</h1>
          <p className="text-xl mb-12">Insights and tips to help your Las Vegas business succeed online</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold mb-2">
                    <a href={`/blog/${post.slug}`} className="hover:text-blue-700 transition">
                      {post.title}
                    </a>
                  </h2>
                  <p className="mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className="text-blue-700 font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get Web Development Tips in Your Inbox</h2>
            <p className="mb-6">Sign up for my newsletter to receive the latest web development insights for Las Vegas businesses.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }