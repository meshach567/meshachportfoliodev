"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export function FloatingDockDemo() {
  const contactlinks = [
    {
      title: "Linkedin",
      icon: (
        <LinkedInLogoIcon className="h-full w-full text-sky-400 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/meshach-ekene/",
    },
    {
      title: "GitHub",
      icon: (
        <GitHubLogoIcon className="h-full w-full text-purple-400 dark:text-neutral-300" />
      ),
      href: "https://github.com/meshach",
    },
  ];

  return (
    <div id="projects" className="flex items-center justify-start mt-6 w-full">
      <FloatingDock items={contactlinks} />
    </div>
  );
}
