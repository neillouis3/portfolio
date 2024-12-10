"use client";
import React, { useEffect, useState } from "react";
import { Chip} from "@nextui-org/react";
import * as Icons from "./programmingIcons";

export default function ProjectDetails({ languages}: { languages: string[];}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const techStack = [
        { name: "Python", icon: <Icons.Python />, key: "Python" },
        { name: "Typescript", icon: <Icons.TypeScript />, key: "Typescript" },
        { name: "Java", icon: <Icons.Java />, key: "Java" },
        { name: "C++", icon: <Icons.Cplusplus />, key: "C++" },
        { name: "PHP", icon: <Icons.Php />, key: "PHP" },
        { name: "Tailwind CSS", icon: <Icons.TailwindCSS />, key: "Tailwind CSS" },
        { name: "Next.js", icon: <Icons.NextJS />, key: "Next.js" },
        { name: "React.js", icon: <Icons.ReactJS />, key: "React.js" },
        { name: "Firebase", icon: <Icons.Firebase />, key: "Firebase" },
        { name: "MySQL", icon: <Icons.MySQL />, key: "MySQL" },
        { name: "C#", icon: <Icons.Csharp />, key: "C#" },
        { name: "Laravel", icon: <Icons.Laravel />, key: "Laravel" },
    ];

    return (
            <div className={`h-screen w-[25vw] flex flex-col justify-center z-40 fixed right-[12.5vw] top-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-[60vh] flex flex-col justify-between pt-8 pb-12">
                    <div className="flex flex-col gap-4">
                        <div className="w-full text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex molestiae quidem!
                            Voluptatem minima, consequatur sequi soluta quisquam vitae aspernatur qui inventore
                            exercitationem. Perspiciatis, cupiditate a nostrum pariatur laborum quas.
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-sm">Technologies</h1>
                        <div className="flex flex-wrap gap-1">
                            {techStack.map((tech) => (
                                <Chip
                                    key={tech.key}
                                    radius="sm"
                                    className="t transition-all duration-300"
                                    startContent={tech.icon}
                                    variant={languages.includes(tech.name) ? "solid" : "faded"}
                                    color={languages.includes(tech.name) ? "primary" : undefined}
                                    size="md"
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
