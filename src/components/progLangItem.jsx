import React from "react";
import {Tooltip} from "@nextui-org/tooltip";

export default function ProgLangItem({lang}) {
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
            <Tooltip showArrow={true} content="I am a tooltip">
                Hello
            </Tooltip>
        </div>
    );

}