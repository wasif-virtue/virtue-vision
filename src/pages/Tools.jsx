import { Link } from "react-router-dom";

export default function Tools() {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-indigo-900 mb-6">
        Start Your Website
      </h1>

      <p className="text-gray-700 mb-10">
        If you want to create your own website, these are the tools I personally
        recommend for beginners.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {/* Hosting */}
        <div className="bg-white shadow-lg rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
            1. Hosting (Most Important)
          </h2>
          <p className="text-gray-700 mb-8">
            To host your website online.
            <br /> I recommend Hostinger because it is beginner-friendly, fast,
            and affordable.
            <p className="text-lm text-purple-500 mt-2">
                Beginner-friendly + low cost (best for starting)
            </p>

          </p>

          <a
            href="https://www.hostinger.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white focus:outline-none whitespace-nowrap text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 sm:px-8"
          >
            Let's Start
          </a>
        </div>

        {/* Domain */}
        <div className="bg-white shadow-lg rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
            2. Domain Name
          </h2>
          <p className="text-gray-700 mb-8">
            Your domain is your website name (www.your_website.com). I recommend
            Namecheap for buying domains.
            <p className="text-lm text-orange-500 mt-2">
                Beginner-friendly + low cost (best for starting)
            </p>
          </p>
          <a
            href="https://www.namecheap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white whitespace-nowrap focus:outline-none text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 border-2 border-indigo-700 hover:text-white hover:bg-indigo-700 sm:px-8"
          >
            Let's Start
          </a>
        </div>
      </div>

      <p className="text-sm text-gray-500 m-6">
        <span className="text-gray-700 font-bold text-xl">Note:</span>
        <br /> Some links are affiliate links, which means I may earn a small
        commission at no extra cost to you.
      </p>
      {/* Service CTA */}
      <div className="bg-indigo-700 text-white rounded-xl p-8 mt-10 mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Don’t want to do it yourself?
        </h2>
        <p className="mb-8">I can set up your website for you step by step.</p>

        <Link
          to="/contact"
          className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-white hover:text-white sm:px-8"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
