"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectDetails from "./projectDetails";
import ProjectItem from "./ProjectItem";
import projectsData from "@/data/projects.json";
import { Button } from "@heroui/react";
import ProjectsModal from "./projectsModal";

export default function ProjectContent() {
    const [currentLanguages, setCurrentLanguages] = useState<string[]>(projectsData[0].languages);
    const [description, setDescription] = useState(projectsData[0].description);
    const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const projectContentRef = useRef<HTMLDivElement | null>(null);
    
    // Project data imported from JSON
    const projects = projectsData;

    useEffect(() => {
        // Observer for individual project sections
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionIndex = sectionRefs.current.indexOf(entry.target as HTMLElement);
                        if (sectionIndex >= 0 && sectionIndex < projects.length) {
                            setCurrentLanguages(projects[sectionIndex].languages);
                            setDescription(projects[sectionIndex].description);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Observer for the entire project content visibility
        const visibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsProjectSectionVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.01 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) projectObserver.observe(section);
        });

        if (projectContentRef.current) {
            visibilityObserver.observe(projectContentRef.current);
        }

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) projectObserver.unobserve(section);
            });
            if (projectContentRef.current) {
                visibilityObserver.unobserve(projectContentRef.current);
            }
        };
    }, []);

    return (
        <div ref={projectContentRef} className="w-full flex flex-col mt-192 h-fit no-scrollbar">
            {/* Section 1 */}
            <section
                ref={(el) => { if (el) sectionRefs.current[0] = el; }}
                className="h-screen shrink-0 flex items-center overflow-hidden -mt-124"
            >
                <ProjectItem {...projects[0]} />
            </section>
            <section
                ref={(el) => { if (el) sectionRefs.current[1] = el; }}
                className="h-screen shrink-0  max-lg:-mt-32 flex items-center bg-back_ground dark:bg-darkback_ground overflow-hidden"
            >
                <ProjectItem {...projects[1]} />
            </section>

            <section
                ref={(el) => { if (el) sectionRefs.current[2] = el; }}
                className="h-screen shrink-0  max-lg:-mt-32 flex items-center bg-back_ground dark:bg-darkback_ground overflow-hidden"
            >
                <ProjectItem {...projects[2]} />
            </section>

            <section
                ref={(el) => { if (el) sectionRefs.current[3] = el; }}
                className="h-screen shrink-0  max-lg:-mt-32 flex items-center bg-back_ground dark:bg-darkback_ground overflow-hidden"
            >
                <ProjectItem {...projects[3]} />

            </section>
                            <div className="flex flex-col mt-32 w-fit mb-32">
                    <Button 
                        onClick={() => setIsModalOpen(true)}
                        size="sm"
                        color="primary"
                        variant="flat"
                    >
                        View all projects
                    </Button>
                </div>

            

            {/* Conditionally Visible Project Details Sidebar */}
            {isProjectSectionVisible && (
                <ProjectDetails
                    languages={currentLanguages}
                    description={description}
                />
            )}

            {/* Projects Modal */}
            <ProjectsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}