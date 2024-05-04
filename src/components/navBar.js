import React from "react";
import  ComponentSize from "../contants/componentSize.js";

export default function NavBar() {
    return (
        <>
            <nav
                class="
                    container
                    rounded-lg
                    border-1
                    border-black
                    p-5
                    
                    bg-white

                    h-10

                "
            >
                <div
                    class={`
                        w-[${ComponentSize.LargeComponent}]

                        bg-transparent
                        rounder-lg
                        h-full
                    `}
                
                >
                    <ul
                        class="
                            flex
                            flex-row
                            items-center
                            bg-transparent
                            rounder-lg
                            gap-4

                            text-xs
                            h-full
                        "
                    >
                        <li>
                            <a 
                                href="/"
                                class="
                                    block

                                "
                            
                            >PROJECTS</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block

                                "
                            >EXPERIENCE</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block

                                "
                            >EDUCATION</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block
                                
                                "
                            ></a>
                        </li>


                    </ul>
                </div>
                
            </nav>

        </>    
    )
}