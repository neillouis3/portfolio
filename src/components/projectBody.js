import React from "react";
import ProjectItem from "./projectItem";


export default function ProjectBody() {
    return (
        <>
            <div 
                class="
                    mainContainer
                    container 
                    justify-center
                    items-center

                    w-full
                    h-auto

                    bg-white
                    border-2
                    border-black
                    rounded-lg

                    p-8
                "          
            >

                <div
                    class="
                        titleContainer
                        container
                        2xl:pl-11
                    "
                >
                    <h1
                        class="
                            font-extrabold
                            2xl:text-xl
                            3xl:text-3xl
                        "
                    >Projects</h1>

                </div>

                <div
                    class="
                        itemContainer
                        container
                        2xl:mt-8
                        w-full
                        flex
                        flex-wrap
                        gap-4
                    "
                >

                    <ProjectItem 
                        title="Quest"
                        description="Gamify the learning experience"
                        techStack="Tech Stack 1"
                        githubLink="https://github.com"
                        demoLink="https://github.com"
                    />

                    <ProjectItem 
                        title="Quest"
                        description="Gamify the learning experience"
                        techStack="Tech Stack 1"
                        githubLink="https://github.com"
                        demoLink="https://github.com"
                    />

                    <ProjectItem 
                        title="Quest"
                        description="Gamify the learning experience"
                        techStack="Tech Stack 1"
                        githubLink="https://github.com"
                        demoLink="https://github.com"
                    />

                </div>


            </div>
        </>
    );

}