import React, {useState, useEffect, useCallback} from "react";
import Typed from "react-typed";
import "./headerBanner.css";
import { motion } from "framer-motion"


function HeaderBanner() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    return (
        <>
            <div className="bannerContainer">

                
                
                <h1>
                <Typed 
                    className="bannerText"
                    strings={ [
                        "Hi there, I'm Neil Louise",
                        "Have you tried dragging the boxes?",
                        "Have you tried resizing the boxes?",
                        "You can reset the layout on the lower right corner."
                    ]} 
                    typeSpeed={40} loop />

                </h1>

                
            </div>
        
        </>
    )
}

export default HeaderBanner;