import Link from "next/link"; // Import Link from Next.js
import {
  navigationOnLargeScreen,
  navigationOnMobile,
} from "@/constants/navigation";

const Navbar = () => {
  return (
    <div className="fixed z-50 top-6 inset-x-0 mx-auto w-fit">
      {/* ON LARGE SCREEN DEVICES */}
      <nav className="hidden md:block lg:block backdrop-blur-xl bg-white/10 rounded-full text-pink-50 font-sans text-sm pr-3 pl-7 py-2 navbar border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <ul className="flex flex-row items-center gap-x-8 cursor-pointer tracking-wide">
          {navigationOnLargeScreen.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              {...(nav.name === "Resume" && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <li className="hover:text-pink-300 transition duration-300 ease-in-out">
                {nav.name}
              </li>
            </Link>
          ))}
          <Link href="mailto:meshacharinze@gmail.com">
            <li className="backdrop-blur-xl bg-white/10 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white/20 border border-white/20">
              <span className="animate-pulse-ring inline-block bg-green-600 rounded-full w-2 h-2 mr-2"></span>
              Let&apos;s Work
            </li>
          </Link>
        </ul>
      </nav>
      {/* ON MOBILE DEVICES */}
      <nav className="md:hidden lg:hidden backdrop-blur-xl bg-white/10 rounded-full text-pink-50 font-sans text-sm py-4 px-16 navbar nav-mobile border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <ul className="flex flex-row items-center gap-x-8 cursor-pointer tracking-wide">
          {navigationOnMobile.map((mobileNav, index) => (
            <Link
              key={index}
              href={mobileNav.href}
              {...(mobileNav.name === "Resume" && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <li className="hover:text-pink-300 transition duration-300 ease-in-out">
                {mobileNav.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
