import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mohit | Full Stack Developer & AI Enthusiast",
  description: "Crafting modern web applications, intelligent solutions, and meaningful digital experiences through clean code and thoughtful design.",
  keywords: [
    "Mohit",
    "Full Stack Developer",
    "AI Enthusiast",
    "Portfolio",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "C++",
    "DSA",
    "Mohit.dev",
  ],
  authors: [{ name: "Mohit", url: "https://mohit.dev" }],
  creator: "Mohit",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Mohit | Full Stack Developer & AI Enthusiast",
    description: "Crafting modern web applications, intelligent solutions, and meaningful digital experiences through clean code and thoughtful design.",
    url: "https://mohit.dev",
    siteName: "Mohit Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit | Full Stack Developer & AI Enthusiast",
    description: "Crafting modern web applications, intelligent solutions, and meaningful digital experiences through clean code and thoughtful design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
