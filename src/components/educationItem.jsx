import React from "react";

export default function EducationItem({date, major, university, grade, course, transcriptLink="", isBottom = false}) {
    return (
        <div
            class={isBottom ? "container" : "container mb-10"}
        >
            <p
                class="
                    font-black
                    text-gray-light

                    xl:text-xs
                    
                    2xl:text-xs

                    3xl:text-lg
                "
            >{date}</p>

            <p
                class="
                    font-extrabold
                    text-white

                    xl:text-m

                    2xl:text-xs


                    3xl:text-lg
                "           
            >{major}</p>

            <p
                class="
   
                    text-white


                    xl:text-s

                    2xl:text-xs

                    3xl:text-lg
                "              
            >{university}</p>

            <p
                class="
                    font-bold
                    text-gray

                    xl:text-s
                    xl:mt-1

                    2xl:text-xs
                    2xl:mt-1

                    3xl:text-lg
                "              
            >Grade: {grade}</p>

            <p
                class="
                    font-bold
                    text-gray

                    xl:text-s
                    xl:mt-2

                    2xl:text-xs
                    2xl:mt-1

                    3xl:text-lg
                "              
            >Transcript: 
                <a 
                    href={transcriptLink}
                >View
                </a>
            </p>

            <p
                class="
                    font-bold
                    text-gray

                    xl:text-s
                    xl:mt-1

                    2xl:text-xs
                    2xl:mt-1

                    3xl:text-lg
                "              
            >Courses: {course}</p>

        </div>
    );
}

