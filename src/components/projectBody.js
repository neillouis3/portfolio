import React from "react";
import ProjectItem from "./projectItem";


export default function ProjectBody() {
    return (
        <>
            <div 
                class="
                    mainContainer
                    container 




                    bg-gray-dark
                    
                    2xl:h-102
                    3xl:h-144

                    border-2
                    border-gray
                    rounded-lg

                    p-8
                "          
            >

                <div
                    class="
                        titleContainer
                        container
                        2xl:pl-11
                        xl:pl-11
                    "
                >
                    <h1
                        class="
                            font-extrabold
                                
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-orange
                        "
                    >Projects</h1>

                </div>

                <div
                    class="
                        itemContainer
                        container
                        2xl:mt-8
                        xl:mt-8
                        w-full
                        grid
                        grid-cols-2
                        gap-4
                    "
                >

                    <ProjectItem 
                        title="TIC TAC TOE"
                        description="Mobile game of TIC TACT TOE"
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