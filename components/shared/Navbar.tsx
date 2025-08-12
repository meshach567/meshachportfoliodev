"use client";

import Link from "next/link"; // Import Link from Next.js
import {
  navigationOnLargeScreen,
  navigationOnMobile,
} from "@/constants/navigation";
import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedElementRef = useRef<Element | null>(null);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock and focus management
  useEffect(() => {
    if (open) {
      previouslyFocusedElementRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      // Focus the close button after render
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      // Restore focus to toggle
      if (toggleButtonRef.current) toggleButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape to close and Tab focus trap
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const container = drawerRef.current;
        if (!container) return;
        const focusableSelectors = [
          'a[href]',
          'button:not([disabled])',
          'textarea:not([disabled])',
          'input[type="text"]:not([disabled])',
          'input[type="radio"]:not([disabled])',
          'input[type="checkbox"]:not([disabled])',
          'select:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(',');
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(focusableSelectors)
        ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

        if (focusable.length === 0) return;

        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        const isShift = event.shiftKey;

        if (!active) return;

        if (!isShift && active === lastEl) {
          event.preventDefault();
          firstEl.focus();
        } else if (isShift && active === firstEl) {
          event.preventDefault();
          lastEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="fixed z-50 top-6 inset-x-0 mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/10 rounded-full text-pink-50 font-sans text-sm px-4 py-2 navbar border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          {/* Brand */}
          <Link href="/" className="font-semibold tracking-tight text-white">
            Meshach
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:block lg:block">
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
                <li className="ml-2 backdrop-blur-xl bg-white/10 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white/20 border border-white/20">
                  <span className="animate-pulse-ring inline-block bg-green-600 rounded-full w-2 h-2 mr-2"></span>
                  Let&apos;s Work
                </li>
              </Link>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full w-10 h-10 border border-white/20 hover:bg-white/10 transition"
            aria-controls="mobile-menu"
            aria-haspopup="menu"
            data-state={open ? 'open' : 'closed'}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            ref={toggleButtonRef}
          >
            {open ? (
              <Cross2Icon className="w-5 h-5" />
            ) : (
              <HamburgerMenuIcon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile overlay and drawer */}
        <div
          className={`md:hidden fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
          aria-hidden="true"
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            tabIndex={-1}
            ref={drawerRef}
            className={`absolute top-0 left-0 right-0 bg-neutral-900 border-b border-white/10 rounded-b-2xl mx-4 mt-2 overflow-hidden transform transition-transform duration-300 ${
              open ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <div className="py-6 px-6 relative">
              <h2 id="mobile-menu-title" className="sr-only">Mobile menu</h2>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full w-10 h-10 border border-white/20 hover:bg-white/10 transition text-white"
                ref={closeButtonRef}
              >
                <Cross2Icon className="w-5 h-5" />
                <span className="sr-only">Close menu</span>
              </button>
              <ul className="flex flex-col items-start gap-y-4 cursor-pointer tracking-wide text-white/90">
                {navigationOnMobile.map((mobileNav, index) => (
                  <Link
                    key={index}
                    href={mobileNav.href}
                    onClick={() => setOpen(false)}
                    {...(mobileNav.name === "Resume" && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <li className="hover:text-white transition">
                      {mobileNav.name}
                    </li>
                  </Link>
                ))}
                <Link href="mailto:meshacharinze@gmail.com" onClick={() => setOpen(false)}>
                  <li className="mt-2 inline-flex items-center backdrop-blur-xl bg-white/10 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-white/20 border border-white/20">
                    <span className="animate-pulse-ring inline-block bg-green-600 rounded-full w-2 h-2 mr-2"></span>
                    Let&apos;s Work
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
