import React from "react";

export default function ExperienceItem({date, position, company, companyURL, description, skills}) {
    return (
        <div
            class="
                container
            "
        >
            <p
                class="
                    text-gray-light
                    font-black

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
            >{position}</p>
            <p
                class="

                    font-bold
                    text-white

                    xl:text-s

                    2xl:text-xs

                    3xl:text-lg

                "
            >
                <a href={companyURL} target="_blank" rel="noopener noreferrer">
                    {company}
                </a>
            </p>
            <p
                class="
                    text-gray-light
                    
                    xl: text-s
                    xl:mt-2

                    2xl:text-xs
                    2xl:mt-2

                    3xl:text-lg
                "
            >{description}</p>
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
            >Skills: {skills}
            </p>

            <p
                class="
                    font-bold
                    text-gray

                    xl:text-s
                    xl:mt-1
                    xl:mb-20

                    2xl:text-xs
                    2xl:mt-1

                    3xl:text-lg
                "  
            >Reference: Saif Ahmed
            </p>
        </div>

    );

}