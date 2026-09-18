import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to complete a website?",
    a: "Most standard websites take 5–10 days. Web applications or advanced features may require 2–4 weeks depending on requirements.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "We guide you in selecting the best hosting (Hostinger recommended), and we handle complete setup, deployment, and optimization.",
  },
  {
    q: "Can I update my website myself?",
    a: "Yes. If you choose CMS or admin panel, you will get full control to update text, images, products, and content easily.",
  },
  {
    q: "Do you offer revisions?",
    a: "Absolutely. All plans include design and content revisions to ensure the final result matches your expectations.",
  },
  {
    q: "Do you build e-commerce stores?",
    a: "Yes, we build fully functional e-commerce stores with product management, checkout flows, secure payments, admin dashboards, and analytics support.",
  },
  {
    q: "How do we start working together?",
    a: "You contact us through the website. We discuss your needs, share the plan, finalize pricing, and begin your project with a clear roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Answers to the most common questions about our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 cursor-pointer">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-blue-200 rounded-2xl p-6 shadow-sm cursor-pointer"
            >
              <button
                className="w-full focus:outline-none flex justify-between cursor-pointer items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg cursor-pointer font-semibold text-gray-900">
                  {item.q}
                </span>

                <ChevronDown
                  className={`w-6 h-6 text-blue-600 cursor-pointer transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === i && (
                <p className="mt-4 text-gray-700 leading-relaxed cursor-pointer">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
