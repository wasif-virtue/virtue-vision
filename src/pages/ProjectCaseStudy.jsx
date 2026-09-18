import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-20">Project not found</div>;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">
          {project.title}
        </h1>
        <p className="text-gray-600 mb-6">{project.tagline}</p>

        <img
          src={project.cover}
          alt={project.title}
          className="rounded-2xl mb-12"
        />

        {/* Sections */}
        <Section title="Problem" content={project.problem} />
        <Section title="Goal" content={project.goal} />
        <Section title="Solution" content={project.solution} />

        <ListSection title="Tech Stack" items={project.techStack} />
        <ListSection title="System Design" items={project.systemDesign} />
        <ListSection title="Result" items={project.result} />
        <ListSection title="Next Steps" items={project.nextSteps} />

      </div>
    </section>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {content}
      </p>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
        {title}
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
