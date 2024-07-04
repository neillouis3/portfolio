import React, { useState, useEffect, useRef } from 'react';
import EducationItem from './educationItem';

export default function EducationBody() {
    const [rectHeight, setRectHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollHeight, clientHeight, scrollTop } = containerRef.current;
                const maxScrollableHeight = scrollHeight - clientHeight;
                const newHeight = (scrollTop / maxScrollableHeight) * 425; // Adjust 500 to desired max height
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
                class="
                    educationContainer
                    container
                    bg-gray-drak
                    border-2
                    border-gray
                    rounded-xl

                    p-8
                    h-exph

                    max-h-screen
                "
            >
                <div
                    class="
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
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                    </div>


                    <h1
                        class="
                            font-bold
                            text-white
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                        "
                    >Education</h1>
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
                            class="
                                -z-10
                                -mt-3
                            "
                        >
                            <svg
                                width="10"
                                height="100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="5"
                                    y="0"
                                    width="5"
                                    height="10"
                                    fill="#E06C75"
                                />
                            </svg>
                        </div>
                        
                    </div>
                    <div
                        class="
                            container
                            -ml-8
                        "
                    >
                        <EducationItem
                            date="SEP 2021 - APR 2026"
                            major="Computer Engineering"
                            university="Memorial University of Newfoundland"
                            courses={["Digital Systems","Control Systems","Software Design","Intro to Systems and Signals","Microprocessors","Data Structures","Electric Circuits","Digital Logics","Foundations of Programming","Circuit Analysis","Mechanisms & Electric Circuit", "Engineering Mechanics"]}
                            transcriptLink=""
                        />

                    </div>
                </div>
            </div>
        </>
    );
}