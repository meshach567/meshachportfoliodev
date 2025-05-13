import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olinya Paul Chinedu | Portfolio",
  description: `I'm Paul, a MERN Stack Developer experienced in MongoDB, Express.js, React.js, and Node.js. I work with startups and businesses to build fast and scalable web applications.
I write clean code, design user-friendly interfaces, and build systems that grow with your business. Whether you're starting a new project or improving an existing one, I can help you build a solid web application.
Reach out if you need a reliable MERN Stack developer.`,
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
    <html lang="en">
      <head>
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
      <body className="bg-neutral-950">{children}</body>
    </html>
  );
}
