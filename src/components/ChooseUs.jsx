import { img } from "framer-motion/client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "High-Performance Websites",
      desc: "Fast, optimized, and clean websites built with modern technologies like React, Vite, and Tailwind — delivering smooth user experiences.",
      icon: (
        <img className="w-12 h-12" src="/assets/vector.png" />
      ),
    },
    {
      title: "Professional & Modern Designs",
      desc: "We focus on clean UI, strong visuals, and structured layouts that give your brand a professional digital presence.",
      icon:  (
        <img className="w-12 h-12" src="/assets/vector1.png" />
      ),
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "No hidden costs, no confusion. We offer clear pricing with the best quality-to-cost ratio for startups and businesses.",
      icon:  (
        <img className="w-12 h-12" src="/assets/vector2.png" />
      ),
    },
    {
      title: "Fast Delivery",
      desc: "We deliver projects quickly without compromising quality — staying on schedule and meeting deadlines.",
      icon: (
        <img className="w-12 h-12" src="/assets/vector3.png" />
      ),
    },
    {
      title: "Dedicated Support",
      desc: "Our team stays connected with you from start to finish, ensuring smooth communication and long-term support.",
      icon: (
        <img className="w-12 h-12" src="/assets/vector4.png" />
      ),
    },
    {
      title: "Ethical & Trustworthy",
      desc: "Virtue Vision stands on honesty, transparency, and ethical business practices — you get a relationship, not just a service.",
      icon: (
        <img className="w-12 h-12" src="/assets/vector5.png" />
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">
        Why Choose <span className="text-indigo-600">Virtue Vision?</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-gray-100 rounded-2xl shadow-blue-200 hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
