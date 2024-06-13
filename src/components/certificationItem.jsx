import React from "react";

export default function CertificatonItem ({certification, date, issuer, ID, url, isBottom}) {
    return (
        <>
            <div
                class={
                    isBottom ? "container" : "container mb-10"}
            >
                <p
                    class="
                        text-gray-light
                        font-black
    
                        xl:text-xs
                        
                        2xl:text-xs
    
                        3xl:text-lg
                    "
                >{date}</p>
                <p
                    class="
                        font-extrabold
                        text-white

                        xl:text-m

                        2xl:text-xs


                        3xl:text-lg

                    "
                >{certification}</p>
                <p
                    class="
  
                        text-white

                        xl:text-s

                        2xl:text-xs

                        3xl:text-lg
                    "
                >{issuer}</p>

            </div>
        </>
    );
}