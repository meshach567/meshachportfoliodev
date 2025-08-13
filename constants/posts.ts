export type Post = {
  title: string;
  href: string;
  date: string;
  description: string;
};

export const posts: Post[] = [
  {
    title: "Optimizing Next.js Images for Performance",
    href: "https://example.com/blog/next-image-performance",
    date: "2024-06-12",
    description: "A quick checklist to squeeze the most out of next/image without breaking layout.",
  },
  {
    title: "Type-safe APIs with Zod and tRPC",
    href: "https://example.com/blog/typesafe-apis-zod-trpc",
    date: "2024-03-22",
    description: "How to eliminate entire classes of runtime bugs by embracing end-to-end types.",
  },
  {
    title: "Production-grade Tailwind Patterns",
    href: "https://example.com/blog/tailwind-patterns",
    date: "2023-12-02",
    description: "Structuring components and utility classes for readability and scale.",
  },
];


