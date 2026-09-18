import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$53.83 ~ Rs.15,000",
      features: [
        "1 Page Website",
        "Responsive Design",
        "Basic UI/UX",
        "Contact Form",
        "Fast Delivery",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "$107.66 ~ Rs.30,000",
      features: [
        "5–7 Page Website",
        "Professional UI Design",
        "Animations & Interactions",
        "CMS or Admin Panel",
        "SEO Basics + Speed Optimization",
      ],
      highlight: true, // highlighted card
    },
    {
      name: "Premium",
      price: "$200+ ~ Rs.55,000+",
      features: [
        "Custom Web Application",
        "Advanced UI/UX System",
        "API Integrations",
        "Full E-Commerce Features",
        "Advanced Performance Optimization",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mt-2">
            Choose Your Plan
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Transparent pricing for every type of business — from small brands
            to growing companies.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border shadow-sm transition ${
                plan.highlight
                  ? "bg-white border-indigo-500 shadow-lg scale-[1.02]"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-4 text-3xl font-extrabold text-indigo-600">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/923066045714?text=Hi! I want the ${plan.name} plan from Virtue Vision.`,
                    "_blank"
                  )
                }
                className={`w-full mt-8 py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-transparent border-2 hover:text-indigo-600 hover:border-indigo-600"
                    : "bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white "
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
