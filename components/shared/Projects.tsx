"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideIn from "./SlideIn";
import { projectData } from "@/constants/projectData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";

export const Projects = () => {
  const [activeTab, setActiveTab] = React.useState<string>("web");
  const tabs: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "web3", label: "Web3" },
    { key: "open-source", label: "Open Source" },
    { key: "cloud", label: "Cloud" },
  ];

  const filtered = React.useMemo(() => {
    if (activeTab === "all") return projectData;
    return projectData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <SlideIn direction="bottom">
      <div className="font-sans relative z-10 mt-24 " id="projects">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/5 -z-10 blur-xl"></div>

        <div className="text-center mb-10 mx-4 project-header">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className=" animate-pulse bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Amazing project, that will hook your day
            </span>
          </p>
          <p className="font-light text-gray-300 max-w-2xl mx-auto leading-relaxed mt-10">
            My work and creativity goes beyond just code. I create beautiful and
            functional web applications that not only look good but also perform
            exceptionally well. My projects are a testament to my dedication to
            quality and my passion for web development.
          </p>

          {/* Certificates placeholder */}
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-3">Certificates</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">Coming soon</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center mb-8 gap-2 px-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`relative px-3 py-1.5 rounded-full border text-sm transition ${
                activeTab === t.key ? "text-white" : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {activeTab === t.key && (
                <motion.span
                  layoutId="tabActive"
                  className="absolute inset-0 rounded-full bg-white/10 border border-white/30"
                  transition={{ type: "spring", stiffness: 500, damping: 40, mass: 1 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto max-w-7xl grid grid-cols-12 gap-6 px-4 lg:px-8"
          >
          {filtered.map((project, index) => (
            <div
              key={project.title}
              className={`col-span-12 md:col-span-6 lg:col-span-4 card project-card project-card-${
                index + 1
              } border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-[0_0px_20px_0_rgba(255,255,255,0.05)] transition-all duration-300`}
            >
              {/* TOP SECTION */}
              <section className="pl-6 py-9 flex items-center justify-between border-b border-white/5">
                <span className="text-gray-400 tracking-widest text-sm font-light card-top-section-header">
                  {`0${index + 1} | ${project.niche}`}
                </span>
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <GitHubLogoIcon className="mr-6 h-7 w-7 text-gray-400 hover:text-white transition-all duration-300" />
                  </span>
                </Link>
              </section>

              {/* GRID SECTION */}
              <section className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full object-cover h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[420px]"
                    width={800}
                    height={400}
                    sizes="(max-width: 1280px) 100vw, 800px"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-12 px-6 pt-6 text-left">
                  {/* HEADER SECTION */}
                  <h1 className="text-gray-200 text-2xl md:text-3xl mb-1 font-medium flex items-center gap-2">
                    {project.title}
                    <project.icon className="p-2 rounded-full h-10 w-10 bg-white/5 backdrop-blur-sm" />{" "}
                  </h1>
                  <p className="text-gray-400 tracking-wide pt-2 font-light">
                    {project.description}
                  </p>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300">UI/UX</span>
                    <span className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300">Responsive</span>
                    <span className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300">Clean Structure</span>
                  </div>

                  {/* TECHNOLOGIES USED ICONS */}
                  <ul className="pt-11 flex items-center gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>
                        <Image
                          className={`mr-4 w-7 h-7 ${tech.style || ""}`}
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                          width={28}
                          height={28}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>

                  {/* Learnings */}
                  {project.learnings && (
                    <div className="mt-5 text-sm text-gray-300 leading-relaxed">
                      <span className="text-white/80 font-medium">What I learned: </span>
                      {project.learnings}
                    </div>
                  )}

                  {/* LIVE PREVIEW LINK */}
                  <section className="pt-6 md:pt-8">
                    <Link
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-gray-300 hover:text-white hover:underline tracking-wide inline-block">
                        🌍 Live Preview →
                      </p>
                    </Link>
                  </section>
                </div>
              </section>
            </div>
          ))}
          </motion.div>
        </AnimatePresence>

        {/* Very subtle decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-white/5 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </SlideIn>
  );
};
