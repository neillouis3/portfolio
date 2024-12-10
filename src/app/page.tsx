"use client"
import React from "react";
import AboutContent from "@/components/ui/aboutContent";
import ExperienceContent from "@/components/ui/experienceContent";
import EducationContent from "@/components/ui/educationContent";
import ProjectContent from "@/components/ui/projectContent";

export default function Home() {

  return (
    <div className="h-screen w-[75%] flex flex-col snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <section className="h-screen flex items-center shrink-0 snap-start relative">
        <AboutContent />

        {/* <h1 className="absolute bottom-0 w-full z-40 text-center pt-8 pb-16 uppercase text-primary text-5xl font-bold">Experience</h1> */}
        
      </section>
      
      <section className="h-screen flex items-center shrink-0 snap-start">
        <ExperienceContent />
      </section>

      <section className="h-screen flex items-center shrink-0 snap-start">
        <EducationContent />
      </section>

      <section className="h-screen flex items-center shrink-0 snap-start">
        <ProjectContent />
      </section>

    </div>
  );
}
