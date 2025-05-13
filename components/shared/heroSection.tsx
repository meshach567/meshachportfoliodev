"use client";

import { useEffect, useState } from "react";
import { FloatingDockDemo } from "./Dock";
import SlideIn from "./SlideIn";

function HeroSection() {
  const [isVideoOrImage, setIsVideoOrImage] = useState<"isVideo" | "isImage">(
    "isImage"
  );

  // useEffect(() => {
  //   const timeSwap = setInterval(() => {
  //     setIsVideoOrImage((prev) => (prev === "isImage" ? "isImage" : "isImage"));
  //   }, 6000);

  //   return () => clearInterval(timeSwap);
  // }, [isVideoOrImage]);

  return (
    <SlideIn>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 to-black">
        {/* Subtle Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-pulse absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="animate-pulse absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
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
                    Let me transform your ideas into reality. I'm available for Remote, Open Source, Hackathon and collaborations.
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 lg:mb-8">
                <span className="animate-pulse bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent backdrop-blur-sm">
                  Meshach {" "}
                </span>
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Arinze
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base md:text-[15px] mb-6 md:mb-8 lg:mb-12 max-w-2xl leading-relaxed">
                I'm Meshach, a seasoned{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  Fullstack TypeScript Developer
                </span>{" "}
                with expertise in
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium">
                  {" "}
                  MongoDB, Express.js, React.js, and Node.js
                </span>
                . I help startups and growing businesses build fast, scalable,
                and production-ready web applications.{" "}
                <br className="hidden sm:block" />
                <br className="hidden sm:block" />
                With a focus on{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent font-medium">
                  clean code, intuitive UI/UX, and scalable architecture
                </span>
                , I deliver secure, efficient solutions that drive performance
                and growth.
                <br className="hidden sm:block" />
                <br className="hidden sm:block" />
                Let's create a{" "}
                <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent font-medium">
                  powerful, high-performance Product app
                </span>{" "}
                tailored to your business needs. Contact me to get started.
              </p>

              {/* Uncomment when needed */}
              {/* <div className="mt-6 md:mt-8 lg:mt-12 flex items-center justify-start w-full">
                <FloatingDockDemo />
              </div> */}
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
                    >
                        {/* <iframe
                          src="https://www.youtube.com/embed/NnuVAiKOoa0?autoplay=1&mute=1&loop=1&playlist=NnuVAiKOoa0&controls=0"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                          onMouseEnter={() => setIsVideoOrImage("isImage")}
                          onMouseLeave={() => setIsVideoOrImage("isVideo")}
                        /> */}
                      </div>
                
                  ) : (
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isVideoOrImage === "isImage"
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <img
                        src="/Upwork profile image.jpg"
                        alt="Chinedu Paul"
                        loading="lazy"
                        className="w-full h-full object-cover cursor-pointer"
                        onMouseEnter={() => setIsVideoOrImage("isVideo")}
                        onMouseLeave={() => setIsVideoOrImage("isImage")}
                      />
                    </div>
                  )}

                  {/* Optional: Show current mode */}
                  {/* <div className="absolute top-2 right-2 px-2 py-1 text-white bg-black/50 rounded text-xs">
                    {isVideoOrImage}
                  </div> */}
                </div>

                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-black/20 px-4 sm:px-6 py-3 sm:py-5">
                  <p className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent font-medium text-base sm:text-lg">
                    Product Engineer
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
