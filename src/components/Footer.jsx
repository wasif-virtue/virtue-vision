import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">VirtueVision.</h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses with modern digital solutions, powerful designs, and reliable technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to= "/" className="hover:text-indigo-400  focus:outline-none transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400  focus:outline-none transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-indigo-400  focus:outline-none transition">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-400  focus:outline-none transition">Blog</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-indigo-400  focus:outline-none transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 focus:outline-none transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-400  focus:outline-none transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-400 focus:outline-none transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">Email: virtuevisioncompany@gmail.com</p>
          <p className="text-gray-400 mt-2">Location: Pakistan</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VirtueVision. All rights reserved.
      </div>
    </footer>
  );
}
