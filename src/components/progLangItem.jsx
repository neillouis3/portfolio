import React from "react";
import AnimatedTooltip from "./ui/animatedTooltip";

export default function ProgLangItem({children, title}) {
    return (
        <div
            class="
                bg-orange
                
                rounded-full

                justify-center
                items-center
                text-center

                bg-opacity-50
                px-2
                py-1

                flex
                flex-wrap

            "
        >
            <div
                className="
                
                "
            >
                {children}
            </div>
            <div
                className="
                
                "
            >
                {title}
            </div>
            
        </div>
    );

}