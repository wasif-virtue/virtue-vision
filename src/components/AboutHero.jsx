import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <section className="relative bg-white pt-22 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-indigo-900 text-4xl md:text-4xl font-bold leading-tight">
            About <span className="text-indigo-500">Virtue Vision</span>
          </p>

          <h1 className="mt-4 text-xl font-semibold text-gray-700 leading-relaxed">
            Virtue Vision is a young, disciplined, fast-growing tech company building powerful digital products with honesty and future-focused innovation.
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Virtue Vision was founded with one purpose: to build technology with
            honesty and impact. We focus on clean development, strong UI,
            disciplined teamwork, and long-term products that create real value
            for businesses and users across the world.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-indigo-500 hover:text-indigo-500 sm:px-8"
            >
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 border-2 border-indigo-500 text-indigo-500 sm:px-8 hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Founder Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/image.webp"
            alt="Founder"
            className="w-100 h-100 md:w-100 rounded-2xl shadow-xl object-cover border-indigo-500 border-4"
          />
        </div>
      </div>
    </section>
  );
}
