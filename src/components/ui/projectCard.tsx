"use client";
import React from "react";
import { Button, Chip, Image } from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ExternalLinkIcon, Github01Icon } from "@hugeicons/core-free-icons";
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
                    <p className="text-xs text-default-500">
                        {subtitle}
                    </p>
                </div>
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

                {(liveLink || githubLink) && (
                    <div className="flex flex-wrap gap-2">
                        {liveLink && (
                            <Button
                                as="a"
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="sm"
                                variant="flat"
                                color="primary"
                                startContent={<HugeiconsIcon icon={ExternalLinkIcon} size={16} />}
                            >
                                Demo
                            </Button>
                        )}
                        {githubLink && (
                            <Button
                                as="a"
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="sm"
                                variant="flat"
                                color="default"
                                startContent={<HugeiconsIcon icon={Github01Icon} size={16} />}
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

