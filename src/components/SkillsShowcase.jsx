import {
  Code2,
  ShoppingBag,
  PenTool,
  Cpu,
  AppWindow,
  Megaphone,
} from "lucide-react";
import { SkillTag } from "../components/SkillTag";

export default function SkillsShowcase() {
  const capabilities = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-600" />,
      title: "Frontend Engineering",
      desc: "Modern, fast, and scalable interfaces using React, Tailwind, and advanced component architecture.",
      skills: ["React.js", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript","Bootstrap", "Astro", "Cypress","GraphQL", "Typescript"],
      impact:
        "We build UI that loads fast, feels smooth, and converts visitors into customers.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-indigo-600" />,
      title: "E-Commerce Development",
      desc: "Custom storefronts, product systems, user dashboards, and complete ShopVirtue infrastructure.",
      skills: ["Shopify", "WooCommerce", "Wordpress", "Complete e-commerce store"],
      impact:
        "You get sales-ready stores with perfect UX and fully optimized checkout experiences.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-600" />,
      title: "UI/UX & Product Design",
      desc: "High-quality interfaces, branding assets, and visual flows crafted for beautiful user experiences.",
      skills: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
      impact:
        "Your product looks modern, professional, and visually trustworthy from day one.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      title: "AI & Automation",
      desc: "AI-powered tools, automation scripts, prompt systems, and future AI products under Virtue Vision.",
      skills: ["AI Prompting", "Python", "Chat AI"],
      impact:
        "We automate tasks so your business saves time, reduces effort, and scales faster.",
    },
    {
      icon: <AppWindow className="w-8 h-8 text-indigo-600" />,
      title: "App Development (Android)",
      desc: "Modern, fast, and lightweight Android apps built with clean UI and optimized performance.",
      skills: ["Kotlin"],
      impact:
        "Your app runs fast, looks premium, and provides an excellent user experience.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-indigo-600" />,
      title: "Growth, SEO & Marketing",
      desc: "Content optimization, SEO, analytics, and affiliate marketing.",
      skills: ["SEO", "Analytics"],
      impact:
        "We help you grow organically and reach the right audience with strategic digital marketing.",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-indigo-900">Capabilities & Expertise</h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Everything we build is engineered for performance, clarity, and long-term growth.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition duration-300 group"
            >
              <div className="mb-4">{cap.icon}</div>

              <h3 className="text-xl font-semibold text-indigo-950">{cap.title}</h3>

              <p className="text-gray-700 mt-3">{cap.desc}</p>

              <div className="flex flex-wrap mt-4">
                {cap.skills.map((skill, i) => (
                  <SkillTag key={i} text={skill} />
                ))}
              </div>

              <p className="text-sm text-indigo-700 font-medium mt-6 bg-indigo-50 px-3 py-2 rounded-lg">
                {cap.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
