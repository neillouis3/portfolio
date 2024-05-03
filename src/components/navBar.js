import React from "react";
import  ComponentSize from "../contants/componentSize.js";

export default function NavBar() {
    return (
        <>
            <nav
                class="
                    container
                    rounded-lg
                    border-2
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
                            
                            >Projects</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block

                                "
                            >Experience</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block

                                "
                            >Education</a>
                        </li>
                        <li>
                            <a 
                                href="/"
                                class="
                                    block
                                
                                "
                            >Contact</a>
                        </li>


                    </ul>
                </div>
                
            </nav>

        </>    
    )
}