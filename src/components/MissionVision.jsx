import { Lightbulb, Target, } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-indigo-900">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            At Virtue Vision, every project begins with honesty, innovation, and impact.
          </p>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="p-8 rounded-2xl shadow-sm border-blue-500 border bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">To build technology that empowers people and businesses through honesty, innovation, and world-class engineering.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl shadow-sm border border-yellow-500 bg-gray-50 hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-semibold text-yellow-500">Our Vision</h3>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">To create a global tech ecosystem — with products like ShopVirtue, VirtueHub, VirtueCode, VirtueSearch, and more — built with discipline and long-term impact.
            </p>
          </div>

        </div>

        {/* Values Section */}
        
      </div>
    </section>
  );
}
