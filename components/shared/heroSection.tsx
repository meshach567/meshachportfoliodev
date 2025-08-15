"use client";

import { useState } from "react";
import SlideIn from "./SlideIn";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  const [isVideoOrImage, setIsVideoOrImage] = useState<"isVideo" | "isImage">(
    "isImage"
  );

  return (
    <SlideIn>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 to-black">
        {/* Subtle Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto py-8 md:py-16 lg:py-16">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 mt-12 md:mt-20">
            {/* Text Section */}
            <div className="w-full md:w-3/5 flex flex-col">
              <div className="mb-6 max-sm:mt-10 md:mb-8 backdrop-blur-md bg-white/5 w-fit px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
                <div className="flex items-center">
                  <span className="inline-block bg-green-500 rounded-full w-1.5 sm:w-2 h-1.5 sm:h-2 mr-2 animate-pulse" />
                  <span className="text-gray-300 text-xs sm:text-sm font-light">
                    I&apos;m available for Remote, Open Source, Hackathons and
                    collaborations.
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 lg:mb-8">
                <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
                  Hi, my name is
                </span>{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Meshach Arinze
                </span>
              </h1>

              <div className="text-gray-300 text-sm sm:text-base md:text-[15px] mb-6 md:mb-8 lg:mb-10 max-w-2xl leading-relaxed text-justify">
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  Over the past few years in tech, I have worked in role that fit both Frontend, Backend, and Mobile development.{" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  I have built project with programming language like JavaScript,
                  TypeScript and Python. {" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  Currently, I am writing Rust for Blockchain and learning how
                Bitcoin is been develop. {" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  I am delving into AI and Machine Learning, exploring how
                  these technologies can enhance user experiences and
                  application performance. {" "}
                </span>
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                  I have experience in building web applications using
                  frameworks like React.js, Next.js, Express.js, Nest.js, and FastAPI.{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                  I have worked on mobile applications using React Native and Expo.
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                While working on frontend project, I have make used of Headless CMS like WordPress, Strapi, Sanity, and Contentful to build blogs. {" "}
                </span>
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
                  {" "}
                  Also, I am very familiar with SQL and NoSQL Database like PostgreSQL, MongoDB, Neon, Firebase, Supabase, and Appwrite. {" "}
                </span>
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
                  {" "}
                  I have experience with cloud platforms like AWS, Vercel, and Netlify.{" "}
                  {" "}
                </span>
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                  {" "}
                  I have basic knowledge of Blockchain and Smart Contract development using Solidity, Hardhat, and Ethers.js.{" "}
                   {" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  I help startups build fast, scalable, production-ready
                  applications.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 border border-white/10 transition"
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/10 transition"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Media Section */}
            <div className="w-full md:w-1/2 mx-auto flex justify-center md:justify-end mt-6 md:mt-0">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full max-w-md md:max-w-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl">
                <div className="aspect-[4/3] relative">
                  {isVideoOrImage === "isVideo" ? (
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isVideoOrImage === "isVideo"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>
                  ) : (
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isVideoOrImage === "isImage"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src="/assets/images/ekene.jpg"
                        alt="Meshach Arinze"
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="w-full h-full object-center object-cover cursor-pointer"
                        onMouseEnter={() => setIsVideoOrImage("isVideo")}
                        onMouseLeave={() => setIsVideoOrImage("isImage")}
                      />
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 px-4 sm:px-6 py-3 sm:py-5">
                  <p className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium text-base sm:text-lg">
                    Full Stack Developer | Product Engineer | UI Engineer |
                    Mobile App Developer | Blockchain Enthutiast
                  </p>
                  <div className="flex items-center mt-1 sm:mt-2">
                    <div className="w-1 h-1 rounded-full bg-gray-400 mr-2" />
                    <p className="text-gray-300 text-xs sm:text-sm bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SlideIn>
  );
}

export default HeroSection;
