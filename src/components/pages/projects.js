import React from "react";
import HeaderBanner from '../headerBanner';
import NavBar from '../navBar';
import Profile from '../profile';
import Social from '../social';
import Footer from '../footer';

export default function Projects() {
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
                w-10/12
                gap-4

                z-10
                -mt-5
                "
            >
            <div
                class="
                container

                rounded-lg
                border-1
                border-black
                w-80
                h-screen
                bg-white
                "
            >
                <Profile/>
                <Social/>
            </div>
            <div
                class="
                container

                "
            >
                
            </div>
            


            </div>
        
            <Footer/>   

    
        </div>
        
        
        
        
        
        
        
        
        
        
    </>



    );


}
