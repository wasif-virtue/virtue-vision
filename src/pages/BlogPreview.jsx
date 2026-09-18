import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";

const latestPosts = blogData.slice(0, 3);

<section className="py-16 bg-gray-100">
  <h2 className="text-4xl font-bold text-center mb-10 text-indigo-900">
    Latest Blog Posts
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {latestPosts.map((post) => (
      <BlogCard key={post.id} {...post} />
    ))}
  </div>
</section>
