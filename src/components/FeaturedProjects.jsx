import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3); // only first 3

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Real systems we are building under Virtue Vision — focused on impact,
          scalability, and long-term vision.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <span className="text-xs font-semibold text-indigo-600 uppercase">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-indigo-900 mt-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>

                  <Link
                    to="/projects"
                    className="text-sm font-semibold text-indigo-600 hover:underline"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            to="/projects"
            className="inline-block hover:bg-transparent  bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:text-indigo-600 border-2 hover:border-indigo-600 transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
