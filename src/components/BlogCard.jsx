import { Link } from "react-router-dom";

export default function BlogCard({ id, title, excerpt, image, date }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>

        <h3 className="text-xl font-bold text-indigo-700 mb-3">
          {title}
        </h3>

        <p className="text-gray-700 mb-4">
          {excerpt}
        </p>

        <Link
          to={`/blog/${id}`}
          className="text-indigo-600 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
