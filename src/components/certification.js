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
                    p-4
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
                            text-4xl
                        "
                    >Certifications</h1>
                </div>
                <div
                    class="
                        listBodyContainer
                        container
                    "
                >
                    <div
                        class="
                            awsContainer
                            container
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
                        />
                        
                        <CertificatonItem
                            certification = "Onshape Fundamentals: CAD"
                            date = "AUG 2022"
                            issuer = "Onshape"
                        />
                    </div>
                    
                </div>

            </div>
            
        </>
    );
}