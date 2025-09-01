"use client";

import SlideIn from "@/components/shared/SlideIn";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-4 lg:px-8 py-16 mt-6">
      <div className="md:max-w-4xl mx-auto lg:max-w-6xl">
        <SlideIn direction="top">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            About Me
          </h1>
        </SlideIn>

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <SlideIn direction="left">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                <Image
                  src="/assets/images/big.jpg"
                  alt="Meshach Arinze"
                  width={900}
                  height={1200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </SlideIn>
          </div>

          <div className="col-span-12 md:col-span-7 text-gray-300 leading-relaxed">
            <SlideIn direction="right">
              <p className="mb-4">
                I am a Fullstack Developer focused on building fast, scalable, and reliable web applications. My work blends strong engineering practices with thoughtful UI/UX, enabling teams to ship with confidence.
              </p>
              <p className="mb-4">
                I specialize in <span className="text-white font-medium">React, Next.js, React Native Node.js</span>, and modern tooling across the web stack. I enjoy designing clean component systems, improving performance, and collaborating on product experiences end-to-end.
              </p>
              <p className="mb-4">
                Beyond coding, I mentor, write, and explore ways to make product development more predictable and enjoyable. I value clarity, maintainability, and measurable impact.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Performance & Accessibility</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Design Systems</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">API Design</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">CI/CD & Testing</div>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
