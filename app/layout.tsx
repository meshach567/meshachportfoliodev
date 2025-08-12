import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meshach Arinze | Portfolio",
  description: `I'm Meshach, a Fullstack Next.js Developer experienced in Typescript, React.js, Next.js, Node.js, Python. I work with startups and businesses to build fast and scalable web applications.
I write clean code, design user-friendly interfaces, and build systems that grow with your business. Whether you're starting a new project or improving an existing one, I can help you build a solid web application.
Reach out if you need a reliable Product Engineer, UI Engineer, Frontend developer.`,
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://img.freepik.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.freepik.com" />
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DJZ8CKLRYG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DJZ8CKLRYG');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={cn("bg-neutral-950 text-gray-200 antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
