import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutIntroSection } from "@/components/home/AboutIntroSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GenuineWorkSection } from "@/components/home/GenuineWorkSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section & Primary CTA */}
      <HeroSection />

      {/* 2. Introduction to MZEVOLVE */}
      <AboutIntroSection />

      {/* 3. Eight Service Cards */}
      <ServicesGridSection />

      {/* 4. Company Principles */}
      <PrinciplesSection />

      {/* 5. How We Work (4-Stage Process) */}
      <ProcessSection />

      {/* 6. Genuine Projects & Architectural Demonstrations */}
      <GenuineWorkSection />

      {/* 7. Contact CTA Banner */}
      <ContactCtaSection />
    </div>
  );
}
