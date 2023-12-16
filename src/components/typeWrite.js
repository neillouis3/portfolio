import React, { useState, useEffect } from 'react';
import headerBanner from "./headerBanner";

export default function TypeWriter({ text, delay }) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      

        }
      }, [currentIndex, delay, text]);

    return (
        <>
            <h1>{currentText}</h1>
        </>
    )
}