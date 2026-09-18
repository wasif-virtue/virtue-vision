import { motion } from "framer-motion";
import { Rocket, Lightbulb, Code2, Globe, TrendingUp } from "lucide-react";

export default function AboutJourney() {
  const timeline = [
    {
      year: "2024",
      icon: <Lightbulb className="w-7 h-7 text-primary" />,
      title: "The Idea Was Born",
      description:
        "Virtue Vision started as a solo mission by Founder • Wasif to build honest, modern, high-quality digital products — without shortcuts, without low-quality templates, and without fake marketing.",
    },
    {
      year: "2025",
      icon: <Code2 className="w-7 h-7 text-primary" />,
      title: "Foundations & First Projects",
      description:
        "He Started learning full-stack development, building demo projects, drafting the powerful systems, and assembling the core team.",
    },
    {
      year: "Late 2025",
      icon: <Rocket className="w-7 h-7 text-primary" />,
      title: "Virtue Vision Launch",
      description:
        "He officially launched the Virtue Vision brand, offering web development, digital services, content creation, and marketing with a focus on quality and transparency.",
    },
    {
      year: "2026–2030",
      icon: <TrendingUp className="w-7 h-7 text-primary" />,
      title: "Expansion & Skill Mastery",
      description:
        "He will be mastering cloud, DevOps, Python, AI, cybersecurity, DSA, and blockchain. Starting large product builds including Management Systems, E-commerce Systems and Platforms.",
    },
    {
      year: "2030–2035",
      icon: <Globe className="w-7 h-7 text-primary" />,
      title: "Global Innovation Journey",
      description:
        "He will be building the Virtue Vision ecosystem: Including Softwares for Coding, Learning Platforms, Games, Tools, and advanced systems that compete with global tech giants.",
    },
  ];

  return (
    <section className="py-10 px-6 bg-white" id="journey">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-indigo-900 text-center mb-6"
        >
          The Virtue Vision Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          From a small dream to a future global tech ecosystem — this is the
          story behind Virtue Vision and the mission that drives us.
        </motion.p>

        {/* Timeline */}
        <div className="relative border-l border-indigo-500 ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8"
            >
              <div className="absolute -left-10 bg-white border border-indigo-500 text-indigo-500 p-3 rounded-full">
                {item.icon}
              </div>

              <h3 className="text-xl text-indigo-900 font-bold">{item.year}</h3>
              <h4 className="text-lg text-indigo-500 font-semibold mt-1">{item.title}</h4>
              <p className="text-gray-700 mt-2 max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
