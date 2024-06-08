import React, { useState, useEffect, useRef } from 'react';
import ExperienceItem from './experienceItem';

export default function ExperienceBody() {
    const [rectHeight, setRectHeight] = useState(0); // Initial height set to 0
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollHeight, clientHeight, scrollTop } = containerRef.current;
                const maxScrollableHeight = scrollHeight - clientHeight;
                const newHeight = (scrollTop / maxScrollableHeight) * 500; // Adjust 500 to desired max height
                setRectHeight(newHeight);
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <>
            <div 
                ref={containerRef}
                className="
                    container
                    bg-gray-dark
                    2xl:h-102
                    3xl:h-144
                    border-2
                    border-gray
                    rounded-2xl
                    p-8
                    overflow-y-scroll
                    h-96
                    scrollbar-hidden
                "
            >
                <div 
                    className="
                        2xl:pl-11
                        xl:pl-11
                    "
                >
                    <h1
                        className="
                            font-extrabold
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-orange
                        "
                    >Experience</h1>
                </div>

                <div
                    className="
                        container
                        flex
                        2xl:mt-8
                        xl:mt-8
                    "
                >
                    <div
                        className="
                            svgContainer
                            container
                            w-1/8
                            h-full
                        "
                    >
                        <div>
                            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#E06C75" />
                            </svg>
                        </div>

                        <div
                            className="
                                -z-10
                                -mt-3
                            "
                        >
                            <svg
                                width="10"
                                height={rectHeight}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="5"
                                    y="0"
                                    width="5"
                                    height="100%"
                                    fill="#E06C75"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className="
                            itemsContainer
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
