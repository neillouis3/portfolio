"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectDetails from "./projectDetails";
import ProjectItem from "./ProjectItem";
import projectsData from "@/data/projects.json";
import { Button } from "@heroui/react";
import ProjectsModal from "./projectsModal";

export default function ProjectContent() {
    const projects = projectsData;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const projectContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const qualifyingRatios = new Array(projects.length).fill(0);

        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = sectionRefs.current.indexOf(
                        entry.target as HTMLElement,
                    );
                    if (index < 0) return;
                    const qualifies =
                        entry.isIntersecting &&
                        entry.boundingClientRect.top < window.innerHeight * 0.35;
                    qualifyingRatios[index] = qualifies
                        ? entry.intersectionRatio
                        : 0;
                });

                let bestIndex = -1;
                let bestRatio = 0;
                qualifyingRatios.forEach((ratio, index) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestIndex = index;
                    }
                });

                if (bestIndex >= 0) {
                    setActiveIndex(bestIndex);
                    setIsProjectSectionVisible(true);
                } else {
                    setIsProjectSectionVisible(false);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -20% 0px",
                threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
            },
        );

        const visibilityObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        setIsProjectSectionVisible(false);
                    }
                });
            },
            { threshold: 0 },
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
    }, [projects.length]);

    const activeProject = projects[activeIndex] ?? projects[0];

    return (
        <div ref={projectContentRef} className="w-full flex flex-col mt-24 h-fit no-scrollbar">
            {projects.slice(0, 4).map((project, index) => (
                <section
                    key={project.title}
                    ref={(el) => {
                        sectionRefs.current[index] = el;
                    }}
                    className={`h-screen shrink-0 flex items-center overflow-hidden bg-back_ground dark:bg-darkback_ground ${
                        index > 0 ? "max-lg:-mt-32" : ""
                    }`}
                >
                    <ProjectItem {...project} />
                </section>
            ))}

            <div className="flex flex-col mt-32 w-fit mb-32 items-center">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    size="sm"
                    color="primary"
                    variant="solid"
                    className="text-sm font-normal !h-7 !min-h-7 px-3"
                >
                    View all projects
                </Button>
            </div>

            <ProjectDetails
                isOpen={isProjectSectionVisible}
                languages={activeProject.languages}
                description={activeProject.description}
            />

            <ProjectsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
