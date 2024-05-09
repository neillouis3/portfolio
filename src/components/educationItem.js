import React from "react";

export default function EducationItem({date, major, university, grade, transcriptLink="", isBottom = false}) {
    return (
        <div
            class={isBottom ? "container" : "container mb-10"}
        >
            <p
                class="
                    font-black
                    text-gray
                "
            >{date}</p>

            <p
                class="
                    font-extrabold
                "           
            >{major}</p>

            <p
                class="
                    font-bold
                "              
            >{university}</p>

            <p
                class="
                    mt-1
                    text-gray
                "              
            >Grade: {grade}</p>

            <p
                class="
                    font-bold
                    mt-2
                    text-gray
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

