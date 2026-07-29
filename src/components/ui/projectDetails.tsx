"use client";
import React, { useEffect, useState } from "react";
import { Chip } from "@heroui/react";
import * as Icons from "./programmingIcons";

export default function ProjectDetails({
  languages,
  description,
  isOpen = true,
  onClose,
}: {
  languages: string[];
  description: string;
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const show = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(show);
    }

    setIsVisible(false);
    const hide = setTimeout(() => setShouldRender(false), 500);
    return () => clearTimeout(hide);
  }, [isOpen]);

  const techStack = [
    { name: "Python", icon: <Icons.Python size={14} />, key: "Python" },
    { name: "Typescript", icon: <Icons.TypeScript size={14} />, key: "Typescript" },
    { name: "Java", icon: <Icons.Java size={14} />, key: "Java" },
    { name: "C++", icon: <Icons.Cplusplus size={14} />, key: "C++" },
    { name: "PHP", icon: <Icons.Php size={14} />, key: "PHP" },
    { name: "Tailwind CSS", icon: <Icons.TailwindCSS size={14} />, key: "Tailwind CSS" },
    { name: "Next.js", icon: <Icons.NextJS size={14} />, key: "Next.js" },
    { name: "React.js", icon: <Icons.ReactJS size={14} />, key: "React.js" },
    { name: "Firebase", icon: <Icons.Firebase size={14} />, key: "Firebase" },
    { name: "MySQL", icon: <Icons.MySQL size={14} />, key: "MySQL" },
    { name: "C#", icon: <Icons.Csharp size={14} />, key: "C#" },
    { name: "Laravel", icon: <Icons.Laravel size={14} />, key: "Laravel" },
    { name: "MongoDB", icon: <Icons.MongoDB size={14} />, key: "MongoDB" },
    { name: "Supabase", icon: <Icons.Supabase size={14} />, key: "Supabase" },
    { name: "Clerk", icon: <Icons.Clerk size={14} />, key: "Clerk" },
    { name: "Auth0", icon: <Icons.Auth0 size={14} />, key: "Auth0" },
  ];

  if (!shouldRender) return null;

  return (
    <div
      className={`bg-back_ground dark:bg-darkback_ground max-lg:h-[26vh] lg:h-screen w-full max-lg:border-t-1 max-lg:border-t-default-300 lg:w-[25vw] flex flex-col items-center lg:justify-center z-13 max-lg:left-0 bottom-0 fixed lg:right-[12.5vw] lg:top-0 pointer-events-none transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 lg:translate-x-0"
          : "opacity-0 translate-y-4 lg:translate-y-0 lg:translate-x-6"
      }`}
    >
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-primary transition-colors z-50 pointer-events-auto"
        >
          ×
        </button>
      )}
      <div className="lg:h-[60vh] w-[75%] lg:w-full flex flex-col lg:justify-between lg:pt-8 lg:pb-12">
        <div className="flex flex-col w-full max-lg:hidden">
          <div
            className={`w-full text-sm transition-all duration-500 ease-out delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <p>{description}</p>
          </div>
        </div>
        <div
          className={`flex flex-col gap-1 max-lg:pt-4 max-lg:pb-4 pointer-events-none transition-all duration-500 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h1 className="text-xs text-default-500 uppercase tracking-widest">
            Technologies
          </h1>
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <Chip
                key={tech.key}
                radius="sm"
                className="transition-all duration-300 ease-out h-6 min-h-6 text-xs"
                startContent={tech.icon}
                variant={languages.includes(tech.name) ? "solid" : "faded"}
                color={languages.includes(tech.name) ? "primary" : undefined}
                size="sm"
              >
                {tech.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
