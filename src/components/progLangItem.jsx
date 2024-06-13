import React from "react";
import {Tooltip} from "@nextui-org/react";

export default function ProgLangItem({lang, svg}) {
    return (
        <div
            class="
                container
                p-1
                bg-orange
                w-16
                
                rounded-full

                justify-center
                items-center
                text-center

                inline-block



            "
        >
            <Tooltip showArrow={true} content={lang}>
                Hello
            </Tooltip>
        </div>
    );

}