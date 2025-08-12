"use client";

import SlideIn from "./SlideIn";

const services = [
  {
    title: "Product Engineering",
    description: "End-to-end product development with scalable architecture, testing, and CI/CD.",
  },
  {
    title: "UI Engineering",
    description: "Design systems, component libraries, performance tuning, and accessibility.",
  },
  {
    title: "Fullstack Development",
    description: "Next.js, Node.js, databases, APIs, and cloud-ready deployments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 lg:px-8 my-20">
      <div className="md:max-w-4xl mx-auto lg:max-w-6xl">
        <SlideIn direction="top">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Services
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            I help teams ship reliably with clean code, maintainable systems, and measurable performance.
          </p>
        </SlideIn>

        <div className="grid grid-cols-12 gap-6">
          {services.map((s, i) => (
            <div key={i} className="col-span-12 md:col-span-4">
              <SlideIn direction="bottom">
                <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/15 transition shadow-lg h-full">
                  <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{s.description}</p>
                </div>
              </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

