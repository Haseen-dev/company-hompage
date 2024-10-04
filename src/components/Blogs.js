import React, { useState, useEffect } from 'react';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page number
  const blogsPerPage = 12;             // Number of blogs to load per page

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${(page - 1) * blogsPerPage}&limit=${blogsPerPage}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]); // Re-fetch data when page changes

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="blogs" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Latest Blogs (Page {page})</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <div key={blog.id} className="p-6 bg-white shadow-md rounded">
                <h3 className="text-xl font-bold">{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>

        {/* Pagination controls */}
        <div className="mt-8">
          <button 
            disabled={page === 1} 
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
          >
            Previous
          </button>
          <button 
            onClick={() => setPage(prev => prev + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
