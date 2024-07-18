import React from "react";
import HeaderBanner from '../headerBanner';
import Profile from '../profile';
import Social from '../social';
import Footer from '../footer';
import ExperienceBody from '../experienceBody';
import ProgLang from '../progLang';
import EducationBody from '../educationBody';
import ProjectBody from '../projectBody';


export default function Index() {
    const backToTop = () => {
        document.documentElement.style.scrollBehavior = "smooth";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };
    
    return (
        <div
            class="
                w-full
                h-full
                bg-gray-dark
                pt-10

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
                xl:mt-4


                2xl:w-9/12
                2xl:gap-3
                2xl:mt-4

                3xl:w-8/12
                3xl:gap-4
                3xl:mt-4
                "
            >
                <div
                    class="
                        container
                        flex
                        flex-col
                        gap-4

                        xl:w-2/4
                        2xl:w-80
                        3xl:w-144

                    "
                >
                    <Profile/>
                    <Social/>
                    <ProgLang/>
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
                    
                </div>
            


            </div>
            <div
                class="mt-4 container xl:w-9/12 "
            >
                <ProjectBody/>
            </div>
        
            <Footer/>   

    
        </div>
    );


}
