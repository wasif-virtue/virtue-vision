import { useState, useEffect } from "react"; 
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/projects" },
  { name: "Tools", path: "/tools" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`flex justify-between items-center max-w-full px-6 py-4 shadow-md transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent text-white"}`}
      >
        <h1 className={`text-2xl cursor-pointer font-bold ${scrolled ? "text-indigo-900" : "text-white"}`}>
          VirtueVision.
        </h1>

        {/* Desktop links */}
        <ul className={`hidden md:flex space-x-6 font-medium transition-colors`}>
          {navLinks.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`font-bold transition-all focus:outline-none duration-300 transform hover:scale-105 ${
                    isActive
                      ? "text-[#1692d2]"
                      : scrolled
                      ? "text-indigo-900 hover:text-[#1692d2]"
                      : "text-white hover:text-[#1692d2]"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Active link underline animation */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute top-0 h-[3px] w-full bg-[#1692d2] rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger / Cross button */}
        <div
          className={`md:hidden focus:outline-none flex flex-col justify-between w-7 h-6 cursor-pointer z-50`}
          onClick={toggleSidebar}
        >
          <span className={`block h-[3px] rounded transition-all duration-300 ${sidebarOpen ? "rotate-45 translate-y-[7px]" : ""} ${scrolled ? "bg-indigo-900" : "bg-white"}`} />
          <span className={`block h-[3px] rounded transition-all duration-300 ${sidebarOpen ? "opacity-0" : ""} ${scrolled ? "bg-indigo-900" : "bg-white"}`} />
          <span className={`block h-[3px] rounded transition-all duration-300 ${sidebarOpen ? "-rotate-45 -translate-y-[7px]" : ""} ${scrolled ? "bg-indigo-900" : "bg-white"}`} />
        </div>
      </div>

      {/* Sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 sm:w-72 z-50 flex flex-col px-6 py-8 shadow-2xl rounded-l-2xl"
              style={{ backgroundColor: "transparent", backdropFilter: "blur(40px)" }}
            >
              <div className="flex justify-start mb-6">
                <button onClick={toggleSidebar} className={`text-5xl font-bold ${scrolled ? "text-indigo-950" : "text-white"}`}>
                  &times;
                </button>
              </div>
              <ul className={`flex flex-col space-y-6 font-semibold text-lg`}>
                {navLinks.map(link => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.path} className="relative">
                      <Link
                        to={link.path}
                        onClick={toggleSidebar}
                        className={`transition-all duration-300 font-bold transform hover:scale-105 ${
                          isActive ? "text-[#1692d2]" : "text-white hover:text-[#1692d2]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 bottom-0 h-[3px] w-full bg-[#1692d2] rounded"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
