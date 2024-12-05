"use client"

import { ThemeSwitcher } from "./themeSwitch";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import React from "react";

export default function NavBar () {
    const [currentPage, setCurrentPage] = React.useState<React.Key>("about");
    return (
        <div className="bg-white dark:bg-darkback_ground w-full h-fit top-0 z-9999 fixed justify-center items-center flex pb-4 pt-8">
            <div className="w-[75%] flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                    
                </div>
                <div className="flex flex-row gap-8 items-center justify-center">
                    
                    <Breadcrumbs
                        size="md"
                        onAction={(key) => setCurrentPage(key)}
                        classNames={{
                            list: "gap-2",
                        }}
                        itemClasses={{
                            item: [
                            "px-2 py-0.5 ",
                            "data-[current=true]:text-foreground  transition-colors",
                            "data-[disabled=true]:border-default-400 data-[disabled=true]:bg-default-100",
                            ],
                            
                        }}
                        >
                        <BreadcrumbItem key="about" isCurrent={currentPage === "about"}>
                            About Me
                        </BreadcrumbItem>
                        <BreadcrumbItem key="work" isCurrent={currentPage === "work"}>
                            Experience
                        </BreadcrumbItem>
                        <BreadcrumbItem key="education" isCurrent={currentPage === "education"}>
                            Education
                        </BreadcrumbItem>
                        <BreadcrumbItem key="projects" isCurrent={currentPage === "projects"}>
                            Projects
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    
                    <ThemeSwitcher />
                </div>
            </div>
            
        </div>
    );
}