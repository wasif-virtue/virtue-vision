import { SkillTag } from "../components/SkillTag";
import {
  Code2,
  Palette,
  Cpu,
  Smartphone,
  BarChart3,
  Users,
} from "lucide-react";

export default function FullTeamProfiles() {
  const team = [
    {
      name: "Muhammad Wasif Raza",
      role: "Founder • CEO • Full Stack Developer",
      img: "/assets/image.webp",
      bio: "Wasif is the founder of Virtue Vision and the core engineer behind every product. He specializes in frontend development, interface design, and creating systems that are fast, scalable, and visually clean. With a deep vision for technology, he oversees development, architecture, product design, and future R&D projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React.js",
        "GraphQL",
        "Next.js",
        "Astro",
        "TypeScript",
        "Cypress",
        "Node.js"
      ],
      strength:
        "Transforms ideas into clean, modern products with exceptional UI and technical clarity. I also  help beginners create their first website.",
      tools: ["VS Code", "Figma", "GitHub", "Vite","npm"
      ],
      icon: <Code2 className="w-10 h-10 text-indigo-600" />,
    },
    {
      name: "Muhammad Farooq",
      role: "3D Designer • Animator",
      img: "/assets/image11.webp",
      bio: "Farooq brings products to life with 3D visuals, animations, and realistic design elements. His work enhances landing pages, product showcases, and app visuals with clean, modern, and cinematic-quality design.",
      skills: ["Blender", "Cinema4D", "3D Modeling", "Rendering"],
      strength:
        "Turns concepts into high-quality 3D visuals that make your brand look premium and modern.",
      tools: ["Blender", "Cinema4D"],
      icon: <Palette className="w-10 h-10 text-indigo-600" />,
    },
    {
      name: "Adeel Jafar",
      role: "AI Prompt Engineer • Automation Developer",
      img: "/assets/image1.webp",
      bio: "Adeel is responsible for AI strategy, prompt systems, automation tools, and helping clients integrate AI into their workflows. He builds custom automation solutions that save time and increase business efficiency.",
      skills: ["AI Prompting", "AI Chat App"],
      strength:
        "Builds automation workflows that reduce work hours and dramatically boost productivity.",
      tools: ["ChatGPT", "Gemini", "All other AIs"],
      icon: <Cpu className="w-10 h-10 text-indigo-600" />,
    },
    {
      name: "Abdul Basit",
      role: "Android App Developer",
      img: "/assets/image10.webp",
      bio: "Basit develops fast, lightweight Android applications with clean UI and modern user experience. He focuses on delivering smooth interfaces, consistent performance, and scalable mobile architecture.",
      skills: ["Kotlin"],
      strength:
        "Creates stable, modern Android apps with smooth performance and excellent user experience.",
      tools: ["Android Studio", "Firebase"],
      icon: <Smartphone className="w-10 h-10 text-indigo-600" />,
    },
    {
      name: "Muhammad Dawood",
      role: "SEO Specialist • Growth Lead",
      img: "/assets/image15.webp",
      bio: "Dawood manages SEO, keyword research, content ranking strategies, and organic traffic growth. He helps businesses reach more customers through smart SEO and content optimization.",
      skills: ["SEO", "Analytics", "Affiliate Marketing","Shopify"],
      strength:
        "Helps clients grow organically with strong SEO strategy and data-based digital growth.",
      tools: ["Google Analytics", "SEO Tools"],
      icon: <BarChart3 className="w-10 h-10 text-indigo-600" />,
    },
    {
      name: "M Umer",
      role: "Web Designer • Frontend Developer",
      img: "/assets/image16.webp",
      bio: "M Umer ensures clients always receive clear communication, timely updates, and smooth project experience through the advance design response. He handles the designing of websites, systems & products properly.",
      skills: ["Figma", "UI/UX", "HTML","CSS","JavaScript"],
      strength:
        "Ensures every client feels heard, valued, and supported throughout the entire project.",
      tools: ["Figma", "VS Code"],
      icon: <Users className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-16">
          Meet the Team — In Detail
        </h2>

        <div className="space-y-20">
          {team.map((member, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-2xl border-2 border-indigo-500 shadow-xl w-full h-130 object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {member.icon}
                  <h3 className="text-3xl font-bold text-indigo-600">
                    {member.name}
                  </h3>
                </div>

                <p className="text-indigo-600 font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-gray-700 leading-relaxed">{member.bio}</p>

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills:</h4>
                  <div className="flex flex-wrap">
                    {member.skills.map((skill, i) => (
                      <SkillTag key={i} text={skill} />
                    ))}
                  </div>
                </div>

                {/* Strength */}
                <p className="mt-6 bg-white border-l-4 border-indigo-600 p-4 rounded shadow-sm text-gray-700 italic">
                  “{member.strength}”
                </p>

                {/* Tools */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
