import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-indigo-900">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {/* Website Development */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl">
          <img 
            src="/assets/image6.webp"
            alt="Website Development"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">Website Development</h3>
          <p className="text-gray-700 mb-4">
            We build modern, responsive, and high-performance websites using React.js, Vite, and Tailwind CSS —
            delivering fast, clean, and visually appealing digital experiences.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

        {/* E-Commerce Solutions */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl">
          <img 
            src="/assets/image4.webp"
            alt="E-Commerce Solutions"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"      
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">E-Commerce Solutions</h3>
          <p className="text-gray-700 mb-4">
            We create professional online stores with beautiful designs, product pages, seller systems,
            and smooth UI — helping businesses launch and grow their digital presence.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

        {/* Web Applications */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl">
          <img 
            src="/assets/image12.jpg"
            alt="Web Applications"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">Web Applications</h3>
          <p className="text-gray-700 mb-4">
            We develop interactive dashboards, admin panels, and modern frontend applications that
            enhance business workflows with speed, clarity, and efficiency.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

        {/* Business & Portfolio Websites */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition">
          <img 
            src="/assets/image5.webp"
            alt="Business & Portfolio Websites"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">Business & Portfolio Websites</h3>
          <p className="text-gray-700 mb-10">
            From company profiles to personal portfolios, we design professional websites
            that represent your identity with clarity and impact.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

        {/* Landing Pages */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl">
          <img 
            src="/assets/image8.webp"
            alt="Landing Pages"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">Landing Page Development</h3>
          <p className="text-gray-700 mb-4">
            High-conversion landing pages designed with smooth UI, strong visuals,
            and clear messaging — perfect for product launches and marketing campaigns.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

        {/* UI/UX Support */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl">
          <img 
            src="/assets/image9.webp"
            alt="UI/UX Design Support"
            className="h-44 w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            
          />
          <h3 className="text-2xl font-semibold mt-5 text-indigo-600">UI/UX Design Support</h3>
          <p className="text-gray-700 mb-18">
            We provide basic UI/UX support including layout planning, component structure,
            color systems, and wireframe guidance to bring ideas into shape.
          </p>
          <Link className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-4xl border-2 shadow hover:bg-transparent hover:text-indigo-600 transition" to="/services">See More</Link>
        </div>

      </div>
    </section>
  );
}
