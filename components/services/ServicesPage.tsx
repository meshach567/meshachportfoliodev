"use client";

import SlideIn from "@/components/shared/SlideIn";

const offerings = [
  {
    title: "Product Engineering",
    bullets: [
      "Roadmapping & scoping",
      "Architecture & data modeling",
      "Testing strategy & CI/CD",
      "Performance budgets & monitoring",
    ],
  },
  {
    title: "UI Engineering",
    bullets: [
      "Design systems & component libraries",
      "Accessibility & semantic HTML",
      "Animations & micro-interactions",
      "Cross-browser and device testing",
    ],
  },
  {
    title: "Fullstack Development",
    bullets: [
      "Next.js + Node.js APIs",
      "Database schema & ORM integration",
      "Auth, payments, and infrastructure",
      "Cloud deployments",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="px-4 lg:px-8 py-16">
      <div className="md:max-w-4xl mx-auto lg:max-w-6xl">
        <SlideIn direction="top">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Services
          </h1>
          <p className="text-gray-400 mb-10 max-w-2xl">
            I partner with teams to build resilient, maintainable products. Here’s how I can help.
          </p>
        </SlideIn>

        <div className="grid grid-cols-12 gap-6">
          {offerings.map((service, idx) => (
            <div key={idx} className="col-span-12 md:col-span-4">
              <SlideIn direction="bottom">
                <div className="h-full rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                    {service.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
