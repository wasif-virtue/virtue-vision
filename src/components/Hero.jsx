import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-138 bg-linear-to-br from-[#050816] via-[#0b1120] to-[#111827] md:min-h-160 flex items-center justify-center text-white text-center">

      {/* Glow Effects */}
      <div className="absolute top-30 w-87.5 h-87.5 bg-[#1692d2]/30 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-30 -left-25 w-75 h-75 bg-purple-500/20 blur-[120px] rounded-full"></div>


      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Launch Your Vision with Virtue
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
          We build powerful, ethical, and innovative digital products to bring
          your ideas to life.
        </p>

        <Link
          to="/contact"
          className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-white hover:text-white sm:px-8"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
