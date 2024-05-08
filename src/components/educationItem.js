import React from "react";

export default function EducationItem({date, major, university, grade, transcriptLink=""}) {
    return (
        <div
            class="
                container
            "
        >
            <p
                class="
                
                "
            >{date}</p>
            <p
            
            >{major}</p>
            <p
            
            >{university}</p>
            <p
            
            >Grade: {grade}</p>

            <p
            
            >Transcript: <a href={transcriptLink}>View</a></p>
        </div>
    );
}

