import React from "react";
import ProgLangItem from "./progLangItem2";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectItem({ title, description, imageLinks, githubLink, demoLink, lang }) {
    const formatProjectLang = (lang) => {
        return lang.map((course, index) => (
            <ProgLangItem title={course} key={index} />
        ));
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <div>
            <div className="
                container
                border-2
                border-gray
                rounded-lg
                p-4
                h-102
                hover:bg-gray-light
                hover:bg-opacity-10
                hover:border-gray-light
                hover:border-opacity-10
                w-full

            ">
                <div className="
                    container
                    justify-center
                    bg-gray
                    rounded-md
                    h-fit
                ">
                    <Slider {...settings}>
                        {imageLinks.map((link, index) => (

                                <img
                                    key={index}
                                    src={link}
                                    alt={`${title}-${index}`}
                                    className="
                                        h-full
                                        mx-auto
                                        
                                    "
                                />
                            
                                
                            
                        ))}
                    </Slider>
                </div>
                <div className="container">
                    <div className="flex h-fit mt-4">
                        <p className="
                            font-extrabold
                            text-white
                            xl:text-lg
                            2xl:text-lg
                            3xl:text-lg
                            xl:mr-auto
                        ">
                            {title}
                        </p>
                        <div className="flex py-0.5 px-1 bg-white w-fit rounded-full text-sm h-fit gap-1 ">
                            <span className="h-4 w-4 rounded-full bg-blue my-auto"></span>In progress
                        </div>
                    </div>
                    <div className="flex container gap-2 mt-1 ">
                        <a href={demoLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="h-5 w-5" viewBox="0 0 256 315">
                                <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/>
                            </svg>
                        </a>
                        <a href={githubLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                    <p className="
                        bg-black2 bg-opacity-15 w-full p-4 rounded-lg text-gray-light xl:text-s xl:mt-4 2xl:text-xs 2xl:mt-4 3xl:text-lg
                    ">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">{formatProjectLang(lang)}</div>
                </div>
            </div>
        </div>
    );
}

