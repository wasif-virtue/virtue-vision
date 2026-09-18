import blogData from "../data/blogData";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Blog
        </h1>

        <p className="text-gray-600 mb-12">
          Insights, systems, and stories from Virtue Vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
