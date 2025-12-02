"use client";
import React from "react";
import { Chip, Image } from "@heroui/react"; 
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
                    <h3 className="text-2xl">
                        {title}
                    </h3>
                    <p className="text-xs text-default-500 uppercase ">
                        {subtitle}
                    </p>
                </div>
                {/* <div className="flex gap-3 pb-4 ">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                           
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition-colors text-foreground dark:text-darkforeground">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clip-rule="evenodd" />
</svg>


                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank"
                        rel="noopener noreferrer">
                        <svg className="w-6 h-6 transition-colors text-foreground dark:text-darkforeground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                    )}
                </div> */}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                    {languages.map((lang, index) => (
                        <Chip
                            key={index}
                            size="sm"
                            radius="sm"
                            color="primary"
                            variant="faded"
                        >
                            {lang}
                        </Chip>
                    ))}
                </div>

                {/* Links */}
                
            </div>
        </motion.div>
    );
}

