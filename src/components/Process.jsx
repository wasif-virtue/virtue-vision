import { 
  Lightbulb, 
  MonitorSmartphone, 
  Layers, 
  Rocket 
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "1. Understanding Your Vision",
      desc:
        "We start by studying your goals, brand, and requirements to align perfectly with your business vision.",
      icon: <Lightbulb className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "2. UI/UX Wireframing",
      desc:
        "We prepare clean layouts, structure, and flow to give you clarity before development begins.",
      icon: <MonitorSmartphone className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "3. Development & Testing",
      desc:
        "Your project is developed using modern tech, optimized for speed, security, and mobile-friendliness.",
      icon: <Layers className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "4. Launch & Support",
      desc:
        "After launch, we provide support, updates, fixes, and improvement opportunities to help you grow.",
      icon: <Rocket className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <section id="process" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mt-2">
            How We Work
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            A clear, simple, and effective workflow that ensures your project
            is delivered with quality and clarity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-5">{step.icon}</div>

              <h3 className="text-lg font-semibold text-indigo-600">
                {step.title}
              </h3>

              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
