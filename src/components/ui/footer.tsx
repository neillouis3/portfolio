import {Snippet} from "@heroui/snippet";
import React from "react";
import { GithubIcon, InstagramIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Footer () {
    return (
        <div className="bg-white/70 dark:bg-darkback_ground/70 backdrop-blur-sm w-full h-fit bottom-0 z-14 fixed justify-center items-center flex max-lg:hidden t-8  pb-12 pt-4 ">
            <div className="w-[75%] flex flex-row justify-between items-center">
                <div className="flex items-center justify-center transition-colors">
                    <p className="items-center text-sm">Designed & built by &copy; neillouis3</p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <Snippet symbol="@" size="sm" className="max-md:hidden">neil03.castillon@gmail.com</Snippet>
                    <a href="https://www.instagram.com/neillouis3" target="_blank">
                        <HugeiconsIcon icon={InstagramIcon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
                    </a>
                    <a href="https://www.linkedin.com/in/neillouis3" target="_blank">
                        <HugeiconsIcon icon={Linkedin01Icon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
                    </a>
                    <a href="https://www.github.com/neillouis3" target="_blank">
                        <HugeiconsIcon icon={GithubIcon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
                    </a>
                    

                </div>
                
            </div>
            


        
        </div>
    );
}