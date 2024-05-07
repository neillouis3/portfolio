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

        "
        >
            <HeaderBanner/>
            <div
                class="
                container
                flex
                w-8/12
                gap-4

                z-10
                -mt-5
                "
            >
                <div
                    class="
                    container

                    w-80


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
