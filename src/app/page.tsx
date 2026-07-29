
import React from "react";
import AboutContent from "@/components/ui/aboutContent";
import FeaturedContent from "@/components/ui/featuredContent";
import ExperienceContent from "@/components/ui/experienceContent";
import EducationContent from "@/components/ui/educationContent";
import ProjectContent from "@/components/ui/projectContent";

export default function Home() {

  return (
    <div className="h-fit w-[60%] flex flex-col  no-scrollbar ">
      <div data-section="about" className="h-fit min-h-screen flex items-center py-16">
        <AboutContent />
      </div>

      <div data-section="featured" className="h-fit mt-16 mb-16 flex items-center">
        <FeaturedContent />
      </div>
      
      <div data-section="work" className="min-h-screen flex items-center py-24">
        <ExperienceContent />
      </div>

      <div data-section="education" className="h-fit flex items-center py-24">
        <EducationContent />
      </div>

      <div data-section="projects" className="h-fit flex items-center ">
        <ProjectContent />
      </div>



    </div>
  );
}
