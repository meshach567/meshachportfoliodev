import { experiences } from "@/constants/experience";
import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";
import SlideIn from "./SlideIn";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

function Experience() {
  return (
    <section className="px-4 lg:px-8 py-10  cursor-pointer experience-container relative">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-pulse absolute top-20 left-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="animate-pulse absolute bottom-20 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="md:max-w-4xl mx-auto lg:max-w-6xl relative pt-6">
        <SlideIn direction="top">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Professional Experience
          </h2>
        </SlideIn>

        <div className="mt-5 rounded-3xl text-left">
          <div className="grid grid-cols-12 gap-6">
            {experiences.map((exp, index) => (
              <div key={index} className="col-span-12 lg:col-span-6 mb-4">
                <SlideIn direction="bottom">
                  <div className="p-8 rounded-2xl bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 experience-card">
                    <section className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-100">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                          {exp.role}
                        </span>
                        ,{"    "}
                        <Link
                          href={""}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 transition-all duration-300"
                        >
                          {" "}
                          {exp.company}{" "}
                        </Link>{" "}
                        <img
                          alt=""
                          src={exp.location}
                          className="ml-0.5 inline-block h-auto w-5 shrink-0"
                        />
                      </h3>
                    </section>

                    <h4 className="mt-1 text-white/60 text-sm font-medium mb-4 flex items-center">
                      <CalendarIcon className="mr-2 text-indigo-400" />{" "}
                      {exp.duration}
                    </h4>

                    <div className="h-px w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                    <p className="mt-5 text-white/90 text-sm tracking-wide leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap">
                      {exp.technologies.map((tech, techIndex) => (
                        <li
                          key={techIndex}
                          className="mr-2 mb-2 font-medium border border-white/20 rounded-full text-white py-1 px-3 text-xs bg-white/10 backdrop-filter backdrop-blur-md hover:bg-white/15 transition-all duration-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SlideIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
