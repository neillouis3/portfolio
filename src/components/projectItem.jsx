import React, {useState} from "react";

export default function ProjectItem({title, description, imageLink, githubLink, demoLink}) {
    const  [isHovered, setIsHovered] = useState(false);

    return (
        <div
            class="
                container

                border-2
                border-gray
                rounded-lg

                p-4
            "

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                class="
                    container
                    justify-center

                    bg-gray-light
                    rounded-md

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
                        font-extrabold
                        text-white

                        xl:text-m

                        2xl:text-xs


                        3xl:text-lg

                        mt-4    
                    "
                >{title}</p>
                
                <p
                    class="
                        text-gray-light
                        
                        xl: text-s
                        xl:mt-2

                        2xl:text-xs
                        2xl:mt-2

                        3xl:text-lg
                    "
                >{description}</p>

                {/* <div
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
                </div> */}
            </div>


        </div>
    );
}