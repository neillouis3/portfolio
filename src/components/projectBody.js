import React from "react";
import ProjectItem from "./projectItem";


// Create design section, software section and hardware section (mini navbar)

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
                    rounded-2xl

                    p-8
                "   
                

            >

                <div
                    class="
                        titleContainer
                        container
                        xl:pt-2.5
                        xl:pb-2.5
                        xl:pl-5
                        xl:pr-5
                        bg-orange
                        rounded-lg
                        flex
                        gap-5
                    "
                >
                    <div
                        class="mt-0.5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                            <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <h1
                        class="
                            font-extrabold
                                
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-white
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
                        description="Redefines the classic game with new modes and minigames."
                        techStack="Tech Stack 1"
                        githubLink="https://github.com"
                        demoLink="https://github.com"
                    />

                    <ProjectItem 
                        title="NLEats Hydroponics"
                        description="Connect and manage your hydroponic system"
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



// Software SVG
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
</svg> */}




// Hardware SVG
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M16.5 7.5h-9v9h9v-9Z" />
  <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
</svg> */}
