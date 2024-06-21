import React from "react";
import {AnimatedTooltip} from "./ui/animatedTooltip";

export default function ProgLangItem({items}) {
    return (
        <div
            class="
                container
                p-1
                bg-orange
                w-1/3
                
                rounded-full

                justify-center
                items-center
                text-center

                inline-block
                bg-opacity-50

            "
        >
            <AnimatedTooltip 
                items= {items}
        
            />
        </div>
    );

}