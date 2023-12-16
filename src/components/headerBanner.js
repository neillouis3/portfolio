import React, {useState, useEffect, useCallback} from "react";
import Typed from "react-typed";


function HeaderBanner({ text, delay }) {
    const pText = [
        "Hi there, I'm Neil Louise",
        "Have you tried dragging the boxes?",
        "Have you tried resizing the boxes?",
        "You can reset the layout on the lower right corner."
    ]

    const [newText, setNewText] = useState("");



    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * pText.length);
        setNewText(pText[index]);
    }, []);

    useEffect(() => {

        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        
        <>
            <div>


<Typed strings={ [{newText}]} typeSpeed={100} loop />

                
            </div>
        
        </>
    )
}

export default HeaderBanner;