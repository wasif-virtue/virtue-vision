import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-5 md:py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <div>
          <h2 className="text-4xl md:text-4xl font-bold text-indigo-900 leading-tight">
            About <span className="text-indigo-500">Virtue Vision</span>
          </h2>

          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            Virtue Vision is a modern digital agency dedicated to building
            high-quality websites, applications, and digital solutions that empower businesses to grow.
            We combine creativity, technology, and clean design to deliver experiences
            that are fast, professional, and meaningful.
          </p>

          <p className="text-gray-700 mt-4 mb-6 leading-relaxed">
            With expertise in full-stack development,
            along with strong design & 3D capabilities — we bring your ideas to life
            through innovation and clear purpose.
          </p>

          <Link to="/about" className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition">
            Learn More
          </Link>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="relative group-hover:scale-110 transition-transform duration-500">
          <img
            src="/assets/image3.webp"
            alt="Virtue Vision teamwork"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
