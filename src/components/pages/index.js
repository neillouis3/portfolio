import React from "react";
import HeaderBanner from '../headerBanner';
import Profile from '../profile';
import Social from '../social';
import Footer from '../footer';
import ExperienceBody from '../experienceBody';
import ProgLang from '../progLang';
import EducationBody from '../educationBody';
import ProjectBody from '../projectBody';
import ExtraCur from '../extraCur';
import Certification from '../certification';

export default function Index() {
    return (
    <>
        <div
        class="
        container
        h-full
        w-full
        bg-gray-dark

        "
        >
            <HeaderBanner/>
            <div
                class="
                container
                flex
                z-10

                xl:w-9/12
                xl:gap-3
                xl:-mt-5


                2xl:w-9/12
                2xl:gap-3
                2xl:-mt-5

                3xl:w-8/12
                3xl:gap-4
                3xl:-mt-8
                "
            >
                <div
                    class="
                    container
                    flex
                    flex-col
                    gap-4

                    xl:w-96
                    2xl:w-80
                    3xl:w-144

                    "
                >
                    <Profile/>
                    <Social/>
                    <ProgLang/>
                    <Certification/>
                    <ExtraCur/>
                </div>
                <div
                    class="
                        container
                        flex
                        flex-col
                        gap-4
                    "
                >
                    <ExperienceBody/>
                    <EducationBody/>
                    <ProjectBody/>
                </div>
            


            </div>
        
            <Footer/>   

    
        </div>

    </>

    );


}
