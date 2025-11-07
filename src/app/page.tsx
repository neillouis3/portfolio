
import React from "react";
import AboutContent from "@/components/ui/aboutContent";
import ExperienceContent from "@/components/ui/experienceContent";
import EducationContent from "@/components/ui/educationContent";
import ProjectContent from "@/components/ui/projectContent";
import { metadata as layoutMetadata } from "./layout-metadata";

export const metadata = layoutMetadata;

export default function Home() {

  return (
    <div className="h-fit w-[75%] flex flex-col  no-scrollbar ">
      <div data-section="about" className="h-screen flex items-center ">
        <AboutContent />

        {/* <h1 className="absolute bottom-0 w-full z-40 text-center pt-8 pb-16 uppercase text-primary text-5xl font-bold">Experience</h1> */}
        
      </div>
      
      <div data-section="work" className="h-fit mt-64 mb-32 flex items-center ">
        <ExperienceContent />
      </div>

      <div data-section="education" className="h-screen flex items-center ">
        <EducationContent />
      </div>

      <div data-section="projects" className="h-fit flex items-center ">
        <ProjectContent />
      </div>

    </div>
  );
}
