import { stackIcons } from "@/constants/stackIcons";
import SlideIn from "./SlideIn";

function Skills() {
  return (
    <div
      className="skills-container px-4 lg:px-8 my-20 overflow-hidden relative"
      id="about"
    >
      {/* Gradient background with blur */}
      <div className="absolute inset-0 -z-10">
        <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="animate-pulse absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="animate-pulse absolute top-40 right-40 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <section className="md:max-w-4xl mx-auto lg:max-w-6xl relative">
        <SlideIn direction="left" duration={0.7}>
          <div className="text-left mb-12">
            <h1 className="animate-pulse text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-4">
              No dark patterns, just clean code
            </h1>
            <h2 className="text-2xl font-medium text-white/90">
              debugging in the light, where transparency shines.
            </h2>
          </div>
        </SlideIn>

        {/* GRID SECTION */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Section - True Glassmorphism */}
          <div className="col-span-12 lg:col-span-4">
            <SlideIn direction="bottom" duration={0.7}>
              <div className="p-8 rounded-2xl bg-white/15 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stackIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex items-center py-2 px-3 text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <img
                        className={`w-8 h-8 ${icon.style || ""}`}
                        src={icon.src}
                        alt={icon.name}
                      />
                      <span className="pl-3">{icon.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>
          </div>

          {/* Right Section - True Glassmorphism */}
          <div className="col-span-12 lg:col-span-8 font-light text-left tracking-wide text-white/90">
            <SlideIn direction="right" duration={0.7}>
              <div className="rounded-2xl bg-white/15 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg p-10">
                <p>
                  Before diving into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 font-medium">
                    software engineering
                  </span>
                  , I started my career in computer hardware repair and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 font-medium">
                    graphic visual design
                  </span>
                  . This foundation in both technology and creativity sparked my
                  interest in coding, where I could combine{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-medium">
                    problem-solving
                  </span>{" "}
                  with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 font-medium">
                    artistic expression
                  </span>
                  .
                </p>

                <p className="mt-4">
                  Over time, I specialized in both{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-medium">
                    frontend
                  </span>{" "}
                  and
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 font-medium">
                    {" "}
                    backend development
                  </span>
                  , focusing on creating digital solutions that are both
                  functional and visually engaging. With a passion for teaching,
                  I share my knowledge of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500 font-medium">
                    FlutterFlow
                  </span>
                  , helping others build responsive applications.
                </p>

                <p className="mt-4">
                  My approach to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-medium">
                    UI/UX design
                  </span>{" "}
                  is shaped by my background in graphic design and video
                  editing, always keeping aesthetics and user experience at the
                  forefront. For me,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 font-medium">
                    coding
                  </span>{" "}
                  is more than just a job—it's an opportunity to innovate and
                  express creativity, leaving a lasting impact on both the tech
                  world and the people I mentor.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;