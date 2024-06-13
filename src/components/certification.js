import React from 'react';
import CertificatonItem from './certificationItem';

export default function Certification() {
    return (
        <>
            <div 
                class="'
                    certificationContainer
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
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <h1
                        class="
                            font-extrabold
                                
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-white
                        "
                    >Certifications</h1>
                </div>
                <div
                    class="
                        listBodyContainer
                        container
                        flex
                        2xl:mt-8
                        xl:mt-8
                    "
                >
                    <div
                        class="
                            sideContainer
                            container

                            w-3/8
                            h-full
                        "
                    >
                    </div>
                    <div
                        class="
                            bodyContainer
                            container
                        "
                    >

                        <CertificatonItem
                            certification = "Computer Hardware"
                            date = "JUN 2024"
                            issuer = "Cisco"
                            isBottom = {false}
                        />

                        <CertificatonItem
                            certification = "React JS"
                            date = "DEC 2023"
                            issuer = "Udemy"
                            isBottom = {false}
                        />
                        
                        <CertificatonItem
                            certification = "Onshape Fundamentals: CAD"
                            date = "AUG 2022"
                            issuer = "Onshape"
                            isBottom = {true}
                        />
                    </div>
                    
                </div>

            </div>
            
        </>
    );
}