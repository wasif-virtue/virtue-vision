import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";

export default function BlogDetails() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Blog post not found
        </h2>
        <Link to="/blog" className="text-indigo-600 mt-4 inline-block">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/blog"
          className="text-indigo-600 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-2xl my-8"
        />

        <p className="text-sm text-gray-500 mb-2">{post.date}</p>

        <h1 className="text-4xl font-bold text-indigo-900 mb-8">
          {post.title}
        </h1>

        {post.content.split("\n").map((para, i) => (
          <p
            key={i}
            className="text-gray-700 leading-relaxed mb-6"
          >
            {para}
          </p>
        ))}

        <div className="mt-10 flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
