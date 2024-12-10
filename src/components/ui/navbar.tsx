"use client";

import { ThemeSwitcher } from "./themeSwitch";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React from "react";

interface NavBarProps {
  currentPage: string;
  onBreadcrumbClick: (key: string | number) => void;
}

export default function NavBar({ currentPage, onBreadcrumbClick }: NavBarProps) {
  return (
    <div className="bg-white dark:bg-darkback_ground w-full h-fit top-0 z-50 fixed justify-center items-center flex pb-4 pt-8">
      <div className="w-[75%] flex flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center"></div>
        <div className="flex flex-row gap-8 items-center justify-center">
          <Breadcrumbs
            size="md"
            onAction={(key) => onBreadcrumbClick(key as string | number)} // Cast key
            classNames={{
              list: "gap-2",
            }}
            itemClasses={{
              item: [
                "px-2 py-0.5",
                "data-[current=true]:text-foreground transition-colors",
              ],
            }}
          >
            <BreadcrumbItem
              key="about"
              isCurrent={currentPage === "about"}
              onClick={() => onBreadcrumbClick("about")}
            >
              About Me
            </BreadcrumbItem>
            <BreadcrumbItem
              key="work"
              isCurrent={currentPage === "work"}
              onClick={() => onBreadcrumbClick("work")}
            >
              Experience
            </BreadcrumbItem>
            <BreadcrumbItem
              key="education"
              isCurrent={currentPage === "education"}
              onClick={() => onBreadcrumbClick("education")}
            >
              Education
            </BreadcrumbItem>
            <BreadcrumbItem
              key="projects"
              isCurrent={currentPage === "projects"}
              onClick={() => onBreadcrumbClick("projects")}
            >
              Projects
            </BreadcrumbItem>
          </Breadcrumbs>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
