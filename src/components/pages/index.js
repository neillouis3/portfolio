import React from "react";
import HeaderBanner from '../headerBanner';
import Profile from '../profile';
import Social from '../social';
import Footer from '../footer';
import ExperienceBody from '../experienceBody';
import ProgLang from '../progLang';

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
                    3xl:w-96

                    "
                >
                    <Profile/>
                    <Social/>
                    <ProgLang/>
                </div>
                <div
                    class="
                    container
                    "
                >
                    <ExperienceBody
                        height="screen"
                    />
                </div>
            


            </div>
        
            <Footer/>   

    
        </div>

    </>

    );


}
