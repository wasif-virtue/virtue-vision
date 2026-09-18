import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="bg-white pt-22 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-4xl font-extrabold text-indigo-900 leading-tight">
            Professional Web Services <br />
            <span className="text-indigo-600 text-2xl font-bold">Built for Speed, Design & Growth</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            At Virtue Vision, we create high-quality digital experiences — from business websites to full web applications. We focus on clean design, strong performance, and scalable systems that help your business grow.
          </p>

          <div className="mt-8 flex gap-4 flex-col md:flex-row">
            <Link
              to="/contact"
              className="font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/image17.jpg"
            alt="Services Illustration"
            className="w-80 md:w-96 object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
