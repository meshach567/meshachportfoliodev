import Link from "next/link";
import { navigationOnLargeScreen } from "@/constants/navigation";
import { contactlinks } from "@/constants/contactLinks";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-8 py-14 border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8 text-sm text-gray-400">
        <div className="col-span-12 md:col-span-4">
          <h3 className="text-white font-semibold mb-3">Meshach Arinze</h3>
          <p className="leading-relaxed">
            Fullstack TypeScript Developer. I build fast, scalable products with clean code and thoughtful UI/UX.
          </p>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h4 className="text-white font-semibold mb-3">Navigate</h4>
          <ul className="space-y-2">
            {navigationOnLargeScreen.map((n, i) => (
              <li key={i}>
                <Link className="hover:text-white transition" href={n.href}>
                  {n.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2">
            {contactlinks.map((c, i) => (
              <li key={i}>
                <Link className="hover:text-white transition" href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-white transition" href="mailto:meshacharinze@gmail.com">
                meshacharinze@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 mt-10">
        <p>© {new Date().getFullYear()} Meshach Arinze. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
