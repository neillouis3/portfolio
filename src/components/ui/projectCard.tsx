"use client";
import React from "react";
import { Image } from "@heroui/react"; 
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    languages: string[];
    liveLink: string;
    githubLink: string;
}

export default function ProjectCard({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    description,
    languages,
    liveLink,
    githubLink,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" rounded-lg overflow-hidden   transition-shadow duration-300 flex flex-col  p-2 h-fit"
        >
            {/* Project Image */}
            <div className=" relative flex items-center justify-center w-full overflow-hiddenrounded-lg">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    height={225}
                    
                    isZoomed
                    shadow="sm"
                    className="mx-auto w-full bg-white "

                    
                />
            </div>

            {/* Project Content */}
            <div className=" py-4 h-full">
                {/* Title and Subtitle */}
                <div className="mb-3">
                    <h3 className="text-2xl font-bold  mb-1">
                        {title}
                    </h3>
                    <p className="text-sm  uppercase tracking-wide">
                        {subtitle}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4 h-16">
                    {languages.map((lang, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium rounded-full h-fit"
                        >
                            {lang}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 ">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                        >
                            Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

