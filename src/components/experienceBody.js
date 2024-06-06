import React from 'react';
import ExperienceItem from './experienceItem';

export default function ExperienceBody() {
    return (
        <>
            <div 
                class="
                    container

                    bg-gray-dark
                    
                    2xl:h-102
                    3xl:h-144

                    border-2
                    border-gray
                    rounded-2xl

                    p-8
                "
            >
                <div 
                    class="
                        2xl:pl-11
                        xl:pl-11
                    "
                >
                    <h1
                        class="
                            font-extrabold
                            
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-orange
                        "
                    >Experience</h1>
                </div>

                <div
                    class="
                        container
                        flex
                        2xl:mt-8
                        xl:mt-8
                    "
                >
                    <div 
                        class="
                            w-1/8
                            h-full

                        "
                    >


                    </div>
                    <div
                        class="
                            container
                        "
                    >
                        <ExperienceItem 
                            date="JUN 2024 - PRESENT"
                            position="Software Developer (Internship)"
                            company="Jeddah International School"
                            companyURL="https://www.jischool.org/"
                            description="
                            - Developed comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.
                            "
                            skills="JS"
                        />
                        <ExperienceItem 
                            date="SEP 2023 - DEC 2023"
                            position="Software Engineer (Co-op)"
                            company="NLEats"
                            companyURL="https://nleats.com/"
                            description="
                            - Developed robust mobile applications with React Native and Expo Router, delivering cross-platform solutions with high performance and responsiveness.
- Integrated APIs into applications, leveraging databases and Azure cloud computing.
- Implemented seamless communication between applications and physical devices, specializing in connecting, accessing, and controlling Arduino devices.
- Designed cutting-edge websites and mobile applications using Figma, ensuring a user-centric and visually appealing interface.
                            "
                            skills="JS"
                        />                    
                    </div>
                </div>
            </div>
        </>
    );


}