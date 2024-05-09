import React from "react";

export default function ProjectItem({title, description, imageLink, githubLink, demoLink}) {
    return (
        <div
            class="
                container
                bg-white
                border-2
                border-black
                rounded-lg
                w-1/3
                p-4
            "
        >
            <div
                class="
                    container
                    justify-center

                    bg-gray

                "
            >
                <img 
                    src={imageLink}
                    alt={title}
                    class="
                        w-40
                        h-40
                        rounded-lg
                    "
                
                />
            </div>
            <div
                class="
                    container
                "
            >
                <p
                    class="
                        font-bold
                        text-xl
                        mt-4    
                    "
                >{title}</p>
                
                <p
                    class="
                    
                    "
                >{description}</p>

                <div
                    class="
                    
                        container
                        flex
                        gap-4
                    "
                
                >
                    
                    <div
                        class="
                            border-2
                            border-black
                            rounded-lg
                            p-2
                        
                        "
                    >
                        <a
                            href={githubLink}
                            class="

                            "
                        >Github</a>
                    </div>
                    <div
                        class="
                            border-2
                            border-black
                            rounded-lg
                            p-2
                        "
                    >
                        <a
                            href={demoLink}
                            class="
                            "
                        >Demo</a>
                    </div>
                </div>
            </div>


        </div>
    );
}