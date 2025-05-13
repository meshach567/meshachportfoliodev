"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SlideIn from "./SlideIn";
import { projectData } from "@/constants/projectData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Projects = () => {
  return (
    <SlideIn direction="bottom">
      <div className="font-sans relative z-10 mt-10 " id="projects">
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
        </div>

        <div className="card-container px-4 lg:px-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`card project-card project-card-${index + 1} pb-20 md:pb-0 border border-white/10 md:max-w-4xl lg:max-w-6xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl my-14 cursor-pointer hover:shadow-[0_0px_20px_0_rgba(255,255,255,0.05)] transition-all duration-300`}
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
                <div
                  className={`col-span-12 md:col-span-6 lg:col-span-6 ${
                    project.device === "laptop" &&
                    " md:rounded-tr-3xl md:border-t-[1px] md:border-r-[1px] md:border-white/5"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className={`object-cover h-[400px] mx-auto ${
                      project.device === "laptop" &&
                      "sm:w-full sm:object-center md:object-left md:border-t-[16px] md:border-r-[16px] md:border-neutral-950 md:rounded-tr-3xl md:rounded-bl-3xl"
                    } `}
                  />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 pl-6 md:pl-4 pr-8 pt-11 text-left">
                  {/* HEADER SECTION */}
                  <h1 className="text-gray-200 text-3xl mb-1 font-medium flex items-center gap-2">
                    {project.title}
                    <project.icon className="p-2 rounded-full h-10 w-10 bg-white/5 backdrop-blur-sm" />{" "}
                  </h1>
                  <p className="text-gray-400 tracking-wide pt-2 font-light">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES USED ICONS */}
                  <ul className="pt-11 flex items-center gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>
                        <img
                          className={`mr-4 w-7 h-7 ${tech.style || ""}`}
                          src={tech.icon}
                          alt={`${tech.name} logo`}
                        />
                      </li>
                    ))}
                  </ul>

                  {/* LIVE PREVIEW LINK */}
                  <section className="pt-11">
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
        </div>

        {/* Very subtle decorative elements */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-white/5 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </SlideIn>
  );
};
