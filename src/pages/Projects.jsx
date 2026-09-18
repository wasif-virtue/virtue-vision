import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Our Projects
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          A selection of systems and products built with scalability,
          performance, and vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {project.tagline}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-indigo-500">
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
