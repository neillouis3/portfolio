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
                    h-fill
                "
            >
                <div 
                    className="
                        2xl:pl-11
                        xl:pt-2.5
                        xl:pb-2.5
                        xl:pl-5
                        xl:pr-5
                        bg-orange
                        rounded-lg
                        flex
                        gap-5
                    "
                >
                    <div
                        class="
                           
                            mt-0.5
                        "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                        </svg>
                    </div>
                    
                    <h1
                        className="
                            font-extrabold
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-white
                            
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
