import React, { useEffect, useState } from "react";
import axios from "axios";
import './Blog.css';

interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string; 
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const WORDPRESS_API_URL = "https://wordpress.philipp-seidel.de/wp-json/wp/v2";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const categoryResponse = await axios.get<WPCategory[]>(
          `${WORDPRESS_API_URL}/categories?slug=blog`
        );
        const blogCategory = categoryResponse.data[0];

        if (!blogCategory) {
          throw new Error("Blog category not found.");
        }

        const postsResponse = await axios.get<WPPost[]>(
          `${WORDPRESS_API_URL}/posts?categories=${blogCategory.id}`
        );
        setPosts(postsResponse.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
        <h1><i className="bi bi-journal-bookmark-fill"></i> Some stuff I'd like to tell you</h1>
        {posts.length === 0 ? (
        <p>No posts found in the "Blog" category.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <div className="container d-flex justify-content-center align-items-center p-5">
            <div className="col-md">
                <div className="card">
                  <div className="card-body">
                    <main className="flex-grow-1 container">{
                        <li key={post.id}>
                            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            <p>
                                <em>{new Date(post.date).toLocaleString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                                })}</em>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                      </li>
                    }</main>
                  </div>
                </div>
            </div>
            </div>
            
          ))}
        </ul>
      )}
    </section>
    
  );
};

export default Blog;
