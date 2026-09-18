export default function Testimonials() {
  const testimonials = [
    {
      name: "Sadia Nawaz",
      role: "Small Business Owner",
      feedback:
        "Virtue Vision built my website exactly how I imagined. Fast delivery, clean design, and amazing support!",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Bilal Raza",
      role: "E-commerce Seller",
      feedback:
        "Their branding and 3D product visuals helped my store look premium. Highly recommended!",
      image: "https://img.freepik.com/free-photo/portrait-teenage-boy_23-2148105582.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Ali Raza",
      role: "Startup Founder",
      feedback:
        "AI automation and workflows saved us hours every week. Virtue Vision really understands modern business needs.",
      image: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-indigo-900">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <img
              src={t.image}
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <p className="text-gray-700 italic mb-6">“{t.feedback}”</p>
            <h4 className="text-xl font-semibold text-indigo-600">{t.name}</h4>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
