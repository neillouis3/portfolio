import React from "react";

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
            <p
                class="
                    text-orange
                    opacity-100
                "
            >{lang}</p>
        </div>
    );

}