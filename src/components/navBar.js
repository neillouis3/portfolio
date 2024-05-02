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
                    border-gray
                    p-2
                    
                "
            >
                <div
                    class={`
                        w-[${ComponentSize.LargeComponent}]

                        bg-transparent
                        rounder-lg
                    `}
                
                >
                    <ul
                        class="
                            flex
                            flex-row

                            bg-transparent
                            rounder-lg
                            gap-4
                            
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