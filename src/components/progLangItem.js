import React from "react";

export default function ProgLangItem({lang}) {
    return (
        <div
            class="
                container
                p-2
                bg-orange
                w-auto
                h-10
                rounded-lg

                justify-center
                items-center
                text-center

                inline-block

            "
        >
            <p
                class="
                    text-white
                "
            >{lang}</p>
        </div>
    );

}