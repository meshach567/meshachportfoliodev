import Image from "next/image";

const testimonials = [
  {
    name: "Amaka O.",
    role: "Product Manager",
    avatar: "/assets/images/meshach.jpg",
    quote:
      "Meshach elevated our UI and delivery speed. Thoughtful, communicative, and reliable—exactly what you want in a fullstack dev.",
  },
  {
    name: "David K.",
    role: "Founder, SaaS Startup",
    avatar: "/assets/images/meshach.jpg",
    quote:
      "We shipped our MVP in weeks, not months. Clean architecture and smooth developer experience.",
  },
  {
    name: "Sarah M.",
    role: "Engineering Lead",
    avatar: "/assets/images/meshach.jpg",
    quote:
      "Great attention to detail and DX. Meshach brought clarity to our frontend and consistency to our APIs.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold text-white mb-6">What clients say</h2>
        <div className="grid grid-cols-12 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="col-span-12 md:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                <div className="flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full w-10 h-10 object-cover" />
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">“{t.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


