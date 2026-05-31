"use client";

import { Background } from "@/components/Background";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/pages/Hero";
import { About } from "@/components/pages/About";
import { Projects } from "@/components/pages/Projects";
import { Experience } from "@/components/pages/Experience";
import { Stack } from "@/components/pages/Stack";
import { Building } from "@/components/pages/Building";
import { Achievements } from "@/components/pages/Achievements";
import { Collaborate } from "@/components/pages/Collaborate";
import { Contact } from "@/components/pages/Contact";
import { Footer } from "@/components/pages/Footer";

export default function Index() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Building />
        <Achievements />
        <Collaborate />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
