import React, { useState, useEffect } from 'react';
import EducationItem from './educationItem';

export default function EducationBody() {
    return (
        <>
            <div
                class="
                    educationContainer
                    container
                    bg-gray-drak
                    border-2
                    border-gray
                    rounded-2xl

                    p-8

                "
            >
                <div
                    class="
                        xl:pl-11
                        2xl:pl-11
                    "
                >
                    <h1
                        class="
                            font-bold
                            text-orange
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
                        "
                    >
                        <EducationItem
                            date="SEP 2021 - APR 2026"
                            major="Computer Engineering"
                            university="Memorial University of Newfoundland"
                            grade="3.9"
                            transcriptLink=""
                        />

                    </div>
                </div>
            </div>
        </>
    );
}