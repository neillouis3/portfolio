import React from "react";

export default function  HeaderBanner() {
    return (
        <>
            <div 
                class="
                  container
                  flex

                  w-full


                  xl:h-72
                  2xl:h-80
                  3xl:h-80


                  items-center
                  justify-center

                  bg-bannerBG

                  bg-center

                  rounded-lg
                " 
            >
                <h1 class="
                        text-white
                        font-black
                        xl:text-6xl
                        2xl:text-4xl
                        3xl:text-6xl
                        4xl:text-8xl
                    "
                >Welcome...</h1>
            </div>
        </>
    );
}
