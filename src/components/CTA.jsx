import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-indigo-900"
        >
          Ready to Build Something Powerful?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg"
        >
          At Virtue Vision, we don’t just create websites — we build brands,
          digital experiences, automated systems, and future-focused
          solutions. Your vision deserves something extraordinary & Your brand deserves better. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:border-indigo-600 border-2 text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-transparent hover:text-indigo-500 transition"
          >
           Let’s build it.
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-gray-500"
        >
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <span>High-quality. Honest. Professional. Future-ready.</span>
        </motion.div>

      </div>
    </section>
  );
}
