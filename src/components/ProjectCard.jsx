import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  image,
  status,
  techStack,
  liveLink,
}) {
  const statusStyles = {
    Live: "bg-green-100 text-green-700",
    "In Development": "bg-yellow-100 text-yellow-700",
    Concept: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {liveLink && (
          <Link
            to={liveLink}
            target="_blank"
            className="inline-block mt-5 text-sm font-semibold text-indigo-600 hover:underline"
          >
            View Live →
          </Link>
        )}
      </div>
    </div>
  );
}
