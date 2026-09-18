export default function TeamSection() {
  const fallbackImg = "/assets/default-profile.png"; // ADD a simple placeholder

  const team = [
    { name: "M Wasif Raza", role: "CEO & Full Stack Developer", img: "/assets/image.webp" },
    { name: "M Farooq", role: "3D Designer & Animator", img: "/assets/image11.webp" },
    { name: "Adeel Jafar", role: "Prompt Engineer", img:"/assets/image1.webp" },
    { name: "Abdul Basit", role: "Android App Developer", img: "/assets/image10.webp" },
    { name: "M Dawood", role: "Growth & SEO Expert", img: "/assets/image15.webp" },
    { name: "M Umer", role: "Web Designer", img: "/assets/image16.webp" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-900 mb-14">
        Our Core Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {team.map((member, i) => (
          <div
            key={i}
            className="
              group relative h-[360px] sm:h-[390px] rounded-2xl overflow-hidden 
              shadow-md hover:shadow-xl 
              transition-all duration-500 
              border border-gray-200 hover:border-[#1692d2]/50
              bg-white
            "
          >
            {/* Background Image */}
            <img
              src={member.img}
              alt={member.name} loading="lazy"
              className="
                w-full h-full object-cover
                transition-transform duration-700 
                group-hover:scale-105
              "
            />

            {/* Soft top gradient */}
            <div
              className="
                absolute inset-0 
                bg-linear-to-t from-white/10 to-transparent
                pointer-events-none
              "
            />

            {/* Text */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center w-full px-4">
              <h3 className="text-xl font-semibold text-white drop-shadow-sm">
                {member.name}
              </h3>

              <p
                className="
                  text-indigo-700 mt-2 text-sm 
                  backdrop-blur-md bg-white/90
                  inline-block px-4 py-1 rounded-full shadow-sm
                "
              >
                {member.role}
              </p>
            </div>

            {/* Glow Hover Border */}
            <div
              className="
                absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100 
                transition duration-500 
                pointer-events-none
                bg-linear-to-r from-[#1692d2]/10 to-transparent
              "
            />
          </div>
        ))}

      </div>
    </section>
  );
}
