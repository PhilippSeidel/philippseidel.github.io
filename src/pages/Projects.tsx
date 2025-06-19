import React, { useEffect, useState } from "react";
import axios from "axios";
import ReadMoreElement from "../components/ReadMoreElement";
import './Projects.css';

interface WPPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string; 
  tags: number[]; 
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

interface WPTag {
    id: number;
    name: string;
    slug: string;
}


const Projects: React.FC = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [tagsMap, setTagsMap] = useState<Record<number, WPTag>>({});
  const [sortedPosts, setSortedPosts] = useState<WPPost[]>([]);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const WORDPRESS_API_URL = "https://wordpress.philipp-seidel.de/wp-json/wp/v2";

  useEffect(() => {
    const fetchProjectsPosts = async () => {
      try {
        const categoryResponse = await axios.get<WPCategory[]>(
          `${WORDPRESS_API_URL}/categories?slug=projects`
        );
        const projectsCategory = categoryResponse.data[0];

        if (!projectsCategory) {
          throw new Error("Projects category not found.");
        }

        const postsResponse = await axios.get<WPPost[]>(
          `${WORDPRESS_API_URL}/posts?categories=${projectsCategory.id}&_embed=true`
        );
        setPosts(postsResponse.data);

        const tagIds = Array.from(
            new Set(postsResponse.data.flatMap((post) => post.tags))
          );
          if (tagIds.length === 0) {
            setTagsMap({});
            return;
          }
          const tagsRes = await axios.get<WPTag[]>(
            `${WORDPRESS_API_URL}/tags?include=${tagIds.join(",")}&per_page=100`
          );
          const map: Record<number, WPTag> = {};
          tagsRes.data.forEach((tag) => {
            map[tag.id] = tag;
          });
          setTagsMap(map);
          setSelectedTags(tagIds);
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

    fetchProjectsPosts();
  }, []);

  useEffect(() => {
    let filteredPosts = [...posts];
    if (searchTerm.trim() !== "") {
        const term = searchTerm.trim().toLowerCase();
        filteredPosts = filteredPosts.filter((post) =>
          post.title.rendered.toLowerCase().includes(term)
        );
      }
    if (selectedTags.length > 0) {
    filteredPosts = filteredPosts.filter(
        (post) =>
        post.tags &&
        post.tags.some((tagId) => selectedTags.includes(tagId))
    );
    } else {
    // If no tags selected, show no posts (optional: show all instead)
    filteredPosts = [];
    }
  
    const sorted = filteredPosts.sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return sortOrder === "newest" ? timeB - timeA : timeA - timeB;  
    });
  
    setSortedPosts(sorted);
  }, [posts, tagsMap, sortOrder, selectedTags, searchTerm]);

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "newest" | "oldest");
  };

  const handleTagCheckboxChange = (tagId: number) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const getColorForTag = (tagName: string): string => {
    let hash = 0;
    for (let i = 0; i < tagName.length; i++) {
      hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 65%, 70%)`; // pastel tone
  };

  if (loading) return (
    <section>
      <div className="loader"></div> 
    </section>);
  if (error) return <p>Error: {error}</p>;
  return (
    <section>
        <h1><i className="bi bi-rocket-takeoff"></i> What I worked on</h1>
        <div className="row mb-3 align-items-center">

        <div className="col-md-6">
            <input
            type="text"
            className="form-control"
            placeholder="Search posts by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <hr style={{border: 0}}/>

        <div className="col-auto">
        <label htmlFor="sortOrderSelect" className="form-label">
            Sort by Date:
        </label>
        <select
            id="sortOrderSelect"
            className="form-select"
            value={sortOrder}
            onChange={handleSortOrderChange}
        >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
        </select>
        </div>

        
        <div className="col-md-6">
        <label className="form-label">Filter by Tags:</label>
        <div className="d-flex flex-wrap gap-2">
            {Object.values(tagsMap).map((tag) => (
            <div key={tag.id} className="form-check me-3">
                <input
                type="checkbox"
                className="form-check-input"
                id={`tag-${tag.id}`}
                checked={selectedTags.includes(tag.id)}
                onChange={() => handleTagCheckboxChange(tag.id)}
                />
                <label
                htmlFor={`tag-${tag.id}`}
                className="form-check-label"
                >
                <span
                                key={tag.id}
                                className="badge me-1"
                                style={{backgroundColor: getColorForTag(tagsMap[tag.id]?.name)}}
                                title={`Tag: ${tagsMap[tag.id]?.name || "Unknown"}`}
                            >
                                {tagsMap[tag.id]?.name || "Unknown"}
                            </span>
                </label>
            </div>
            ))}
        </div>
        </div>

      </div>
      <ul className="list-group">
        <div className="row">
            {sortedPosts.map((post) => (
                <div key={post.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                    {post._embedded?.["wp:featuredmedia"]?.[0] && (
                        <img src={post._embedded?.["wp:featuredmedia"]?.[0].source_url} className="card-img-top" alt={post._embedded?.["wp:featuredmedia"]?.[0].alt_text || "Project Post Image"}/>  
                                    )}
                        <div className="card-body">
                            <main className="flex-grow-1 container">{
                                <li className="list-group-item mb-3" key={post.id}>
                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                
                                <div className="mt-2 mb-2">
                                    {post.tags.length > 0 ? (
                                        post.tags.map((tagId) => (
                                        <span
                                            key={tagId}
                                            className="badge me-1"
                                            style={{backgroundColor: getColorForTag(tagsMap[tagId]?.name)}}
                                            title={`Tag: ${tagsMap[tagId]?.name || "Unknown"}`}
                                        >
                                            {tagsMap[tagId]?.name || "Unknown"}
                                        </span>
                                        ))
                                    ) : (
                                        <span className="text-muted fst-italic">No tags</span>
                                    )}
                                </div>
                                <ReadMoreElement>
                                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                </ReadMoreElement>
                            </li>
                            }</main>
                    </div>
                    </div>
                </div>
            ))}
        </div> 
      </ul>
    </section>
    
  );
};

export default Projects;
