import React from 'react';
import EducationItem from './educationItem';

export default function EducationBody() {
    return (
        <>
            <div
                class="
                    container
                    bg-gray-drak
                    border-2
                    border-gray
                    rounded-lg

                    p-8
                "
            >
                <div
                    class="
                        2xl:pl-11
                    "
                >
                    <h1
                        class="
                            font-bold
                            text-orange
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