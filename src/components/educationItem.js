import React from "react";

export default function EducationItem({date, major, university, grade, transcriptLink="", isBottom = false}) {
    return (
        <div
            class={isBottom ? "container" : "container mb-10"}
        >
            <p
                class="
                    font-black
                    text-gray-light
                "
            >{date}</p>

            <p
                class="
                    font-extrabold
                    text-white
                "           
            >{major}</p>

            <p
                class="
                    font-bold
                    text-white
                "              
            >{university}</p>

            <p
                class="
                    mt-1
                    text-gray-light
                "              
            >Grade: {grade}</p>

            <p
                class="
                    font-bold
                    mt-2
                    text-gray-light
                "              
            >Transcript: 
                <a 
                    href={transcriptLink}
                >View
                </a>
            </p>
        </div>
    );
}

