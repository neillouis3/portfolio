import React from "react";
import AnimatedTooltip from "./ui/animatedTooltip";

export default function ProgLangItem({children, title}) {
    return (
        <div
            class="
                bg-orange
                bg-opacity-50
                rounded-full

                justify-center
                items-center
                text-center

                
                px-2
                py-0.5

                flex
                flex-wrap

            "
        >
            <div
                className="
                    pr-2
                    
                "
            >
                {children}
            </div>
            <div
                className="
                    text-orange
                    xl:text-s
                "
            >
                {title}
            </div>
            
        </div>
    );

}