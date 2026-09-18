import {ShieldCheck, Users, Globe, Sparkles } from "lucide-react";

export default function Projects() {
    return(
    <section className="w-full bg-white max-w-7xl mx-auto px-6">
        
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-center text-indigo-900 mb-10">
            Core Values That Guide Us
          </h3>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center">
          Virtue Vision is built on strong principles that define our culture,
          guide our decisions, and shape every product we create.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Honesty */}
            <div className="p-8 rounded-xl border border-green-600 shadow-sm bg-white hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-green-600 mb-2">Honesty — We build with transparency. No shortcuts, no exaggeration.</h4>
            </div>

            {/* Innovation */}
            <div className="p-8 rounded-xl border border-purple-600 shadow-sm bg-white hover:shadow-md transition">
              <Sparkles className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-purple-600 mb-2">Innovation — We experiment, prototype, and push boundaries daily.</h4>
            </div>

            {/* Teamwork */}
            <div className="p-8 rounded-xl border border-blue-500 shadow-sm bg-white hover:shadow-md transition">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Teamwork — Everyone contributes. Everyone grows.</h4>
            </div>

            {/* Global Impact */}
            <div className="p-8 rounded-xl border border-emerald-600 shadow-sm bg-white hover:shadow-md transition">
              <Globe className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="text-xl font-semibold text-emerald-600 mb-2">Global Impact — We create a positive impact through technology and innovation.</h4>
            </div>

            {/* Responsibility */}
            <div className="p-8 rounded-xl border border-red-600 shadow-sm bg-white hover:shadow-md transition">
              <ShieldCheck className="w-10 h-10 text-red-600 mb-4" />
              <h4 className="text-xl font-semibold text-red-600 mb-2">Responsibility — We own our work & value every client</h4>
            </div>

            {/* Continuous Growth */}
            <div className="p-8 rounded-xl border border-indigo-600 shadow-sm bg-white hover:shadow-md transition">
              <Sparkles className="w-10 h-10 text-indigo-600 mb-4" />
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">Continuous Growth — We aim for learning never stop.</h4>
            </div>

          </div>
        </div>
    </section>
    );
}