"use client";
import Link from "next/link";
import { contactlinks } from "@/constants/contactLinks";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is not available");
      return;
    }

    setLoading(true);
    setStatus({ success: false, message: "" });

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!, // "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!, // "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY! //"YOUR_PUBLIC_KEY"
      );

      if (result.text === "OK") {
        setStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Let&apos;s discuss your project or just say hello. I&apos;m always open to new
            opportunities.
          </p>
        </div>

        {/* Glass card container */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 relative">
            {/* Left content area (3/5 width) */}
            <div className="md:col-span-3 p-8 md:p-10 lg:p-12 relative overflow-hidden">
              {/* Subtle shine effect */}
              <div className="absolute -inset-full h-96 w-96 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[shine_8s_ease-in-out_infinite]"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <Image
                    className="rounded-full w-[30px] h-[30px] mr-3"
                    src="https://img.freepik.com/free-photo/3d-cartoon-character_23-2151021959.jpg?t=st=1744194906~exp=1744198506~hmac=b6ef39eb1100a7b6d674e98ab1d0b03ab66dc25fe47459076857bd94b5c868d2&w=996"
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-100 group-hover:text-pink-400 transition-colors duration-300">
                    Let&apos;s connect
                  </h3>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 mb-6">
                    Ready to start your next project? Send me an email or
                    connect with me on social media.
                  </p>

                  <Link
                    href="mailto:Olinyacpaul7849@gmail.com"
                    className="inline-flex items-center group"
                  >
                    <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-100 group-hover:text-pink-400 transition-colors duration-300">
                      meshacharinze@gmail.com
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 text-pink-500 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-4">
                    Connect with me on social media:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {contactlinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 flex items-center justify-center backdrop-blur-sm bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
                        aria-label={link.title}
                      >
                        <Image
                          src={link.icon}
                          className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity duration-300"
                          alt={link.title}
                          width={20}
                          height={20}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right content area with form (2/5 width) */}
            <div className="md:col-span-2 bg-black/20 backdrop-blur-md p-8 md:p-10">
              <h4 className="text-lg font-medium text-white mb-6">
                Send a Message
              </h4>

              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg ${
                    status.success
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form
                ref={formRef}
                className="space-y-4"
                onSubmit={handleSubmitForm}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name" // Important for EmailJS template mapping
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email" // Important for EmailJS template mapping
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // Important for EmailJS template mapping
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300"
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Professional footer note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Expect a response within 24-48 hours. Thank you for reaching out!
        </p>
      </div>

      {/* Style tag for custom animation */}
      <style jsx global>{`
        @keyframes shine {
          0%,
          20%,
          100% {
            transform: translateX(-100%) skewX(-12deg);
          }
          60%,
          80% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
