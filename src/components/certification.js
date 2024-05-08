import React from 'react';
import CertificatonItem from './certificationItem';

export default function Certification() {
    return (
        <>
            <div 
                class="'
                    certificationContainer
                    container
                    bg-white
                    border-2
                    border-black
                    rounded-lg

                    p-8
                "
            >
                <div
                    class="
                        titleContainer
                        container
                    "
                >
                    <h1
                        class="
                            font-bold
                                
                            2xl:text-xl
                            3xl:text-3xl
                        "
                    >Certifications</h1>
                </div>
                <div
                    class="
                        listBodyContainer
                        container

                        flex
                        2xl:mt-8

                    "
                >
                    <div
                        class="
                            sideContainer
                            container

                            w-1/8
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