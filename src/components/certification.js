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
                    rounded-lg

                    p-8
                "
            >
                <div
                    class="
                        titleContainer
                        container

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