"use client";
import React, { useState, useMemo } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Pagination } from "@heroui/react";
import ProjectCard from "@/components/ui/projectCard";
import projectsData from "@/data/projects.json";

interface ProjectsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Category = "all" | "software" | "design" | "hardware";

interface Project {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    languages: string[];
    category: string;
    liveLink: string;
    githubLink: string;
    delay: number;
    duration: number;
    rotatePattern: number[];
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
    const [selectedCategory, setSelectedCategory] = useState<Category>("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "all") {
            return projectsData;
        }
        return projectsData.filter((project: Project) => project.category === selectedCategory);
    }, [selectedCategory]);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredProjects.slice(start, end);
    }, [filteredProjects, currentPage]);

    const handleCategoryChange = (key: any) => {
        setSelectedCategory(key as Category);
        setCurrentPage(1);
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            size="2xl"
            scrollBehavior="inside"
            backdrop="blur"
            classNames={{
                base: "max-w-7xl h-[90vh] m-4",
                body: "py-6 overflow-y-auto",
      
            }}
        >
            
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-3 px-8">
                            <div>
                                <h2 className="text-2xl font-normal tracking-tight">
                                    Projects
                                </h2>

                            </div>
                            
                            <Tabs
                                aria-label="Project categories"
                                selectedKey={selectedCategory}
                                onSelectionChange={handleCategoryChange}
                                classNames={{
                                    tabContent: "font-normal"
                                }}
                                
                            >
                                <Tab key="all" title="All Projects" />
                                <Tab key="software" title="Software" />
                                <Tab key="design" title="Design" />
                                <Tab key="hardware" title="Hardware" />
                            </Tabs>
                        </ModalHeader>
                        <ModalBody className="px-8 flex flex-col">
                            {filteredProjects.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                                        {paginatedProjects.map((project: Project, index: number) => (
                                            <ProjectCard
                                                key={index}
                                                title={project.title}
                                                subtitle={project.subtitle}
                                                imageSrc={project.imageSrc}
                                                imageAlt={project.imageAlt}
                                                description={project.description}
                                                languages={project.languages}
                                                liveLink={project.liveLink}
                                                githubLink={project.githubLink}
                                            />
                                        ))}
                                    </div>
                                    {totalPages > 1 && (
                                        <div className="flex justify-center mt-auto pt-4">
                                            <Pagination
                                                total={totalPages}
                                                page={currentPage}
                                                onChange={setCurrentPage}
                                                showControls
                                                color="primary"
                                                size="sm"
                                            />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-default-500 text-sm">
                                        No projects found in this category yet.
                                    </p>
                                </div>
                            )}
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

