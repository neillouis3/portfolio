"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon, Globe02Icon } from "@hugeicons/core-free-icons";
import ContributionCalendar from "./contributionCalendar";
import projectsData from "@/data/projects.json";
import { TECH_ICON_MAP } from "./techIconMap";

type FeaturedProject = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  languages: string[];
  liveLink: string;
  githubLink: string;
  videoSrc?: string;
};

const FEATURED: FeaturedProject[] = [
  {
    ...(projectsData[0] as FeaturedProject),
    description:
      "A social app for celebrating and sharing life achievements.",
  },
  {
    ...(projectsData[1] as FeaturedProject),
    description:
      "A personal movie and TV streaming hub — browse, search, and watch.",
  },
];

function FeaturedMedia({ project }: { project: FeaturedProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [project.videoSrc]);

  if (project.videoSrc) {
    return (
      <video
        ref={videoRef}
        src={project.videoSrc}
        poster={project.imageSrc}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={project.imageAlt}
      />
    );
  }

  return (
    <Image
      src={project.imageSrc}
      alt={project.imageAlt}
      width={640}
      height={400}
      className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  );
}

function FeaturedProjectItem({ project }: { project: FeaturedProject }) {
  const techIcons = project.languages
    .map((lang) => ({ lang, Icon: TECH_ICON_MAP[lang] }))
    .filter((t) => t.Icon)
    .slice(0, 6);

  return (
    <article className="group flex flex-col gap-3">
      <div className="relative w-full overflow-hidden">
        <FeaturedMedia project={project} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-sm font-medium tracking-tight text-foreground">
            {project.title}
          </h3>
          <div className="flex gap-3 shrink-0 pt-0.5">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-default-400 hover:text-foreground transition-colors"
              >
                <HugeiconsIcon icon={Github01Icon} size={18} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="text-default-400 hover:text-foreground transition-colors"
              >
                <HugeiconsIcon icon={Globe02Icon} size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-default-500 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 items-center opacity-95">
          {techIcons.map(({ lang, Icon }) => (
            <span
              key={lang}
              title={lang}
              className="text-default-600 hover:text-foreground transition-colors hover:scale-110 duration-150"
            >
              <Icon size={22} />
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedContent() {
  return (
    <div className="w-full flex flex-col gap-10 py-8">
      <ContributionCalendar />

      <div className="flex flex-col gap-4">
        <h2 className="text-xs text-default-500 uppercase tracking-widest">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {FEATURED.map((project) => (
            <FeaturedProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
