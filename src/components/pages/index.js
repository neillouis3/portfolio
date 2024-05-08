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

export default function Index() {
    return (
    <>
        <div
        class="
        container
        h-screen
        w-screen

        "
        >
            <HeaderBanner/>
            <div
                class="
                container
                flex
                z-10

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

                    2xl:w-80
                    3xl:w-144

                    "
                >
                    <Profile/>
                    <Social/>
                    <ProgLang/>
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
