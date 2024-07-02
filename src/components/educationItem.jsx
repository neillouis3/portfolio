import React from "react";
import SkillItem from "./ui/skillItem";

const formatCourses = (courses) => {
    return courses.map((course, index) => (
      <p
        className="
          font-bold 
          text-gray 
          xl:text-s 
          xl:mt-1 
          2xl:text-xs 
          2xl:mt-1 
          3xl:text-lg
        "
        key={index}
      >
        <SkillItem course={course} />
      </p>
  ));
};

export default function EducationItem({date, major, university, courses, transcriptLink="", isBottom = false}) {
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
                    xl:mt-2

                    2xl:text-xs
                    2xl:mt-1

                    3xl:text-lg
                    flex
                    flex-wrap
                "              
            >Transcript: 
                <a 
                    href={transcriptLink}
                    className=""
                    
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
              
                </a>
            </p>

            <div className="container">
                <div
                className="
                font-bold 
                text-gray 
                xl:text-s 
                xl:mt-1 
                2xl:text-xs 
                2xl:mt-1 
                3xl:text-lg
                mr-2
              "
                >
                    Relevant Courses:
                </div>
                <div
                    class="flex
                    flex-wrap
                    gap-2"
                >
                    {formatCourses(courses)}
                </div>

            </div>
        </div>
    );
}

