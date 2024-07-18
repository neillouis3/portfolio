import React, { useState } from "react";
import ProjectItem from "./projectItem";

export default function ProjectBody() {
    const [activeTab, setActiveTab] = useState("software");

    return (
        <>
            <div
                className="
                    mainContainer
                    container
                    bg-gray-dark
                    2xl:h-102
                    3xl:h-fit
                    border-2
                    border-gray
                    rounded-xl
                    p-8
                "
            >
                <div
                    className="
                        titleContainer
                        container
                        xl:pt-2.5
                        xl:pb-2.5
                        xl:pl-5
                        xl:pr-5
                        bg-orange
                        rounded-lg
                        flex
                        gap-5
                    "
                >
                    <div className="mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                            <path fillRule="evenodd" d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1
                        className="
                            font-extrabold
                            xl:text-2xl
                            2xl:text-xl
                            3xl:text-3xl
                            text-white
                        "
                    >
                        Projects
                    </h1>
                </div>

                <div className="flex gap-4 my-4">
                    <div
                        className={`text-white px-4 py-0.5 rounded-full ${activeTab === 'software' ? 'bg-orange' : 'bg-orange bg-opacity-50 text-orange'}`}
                        onClick={() => setActiveTab("software")}
                        style={{ cursor: 'pointer' }}
                    >
                        Software
                    </div>
                    <div
                        className={`text-white px-4 py-0.5 rounded-full ${activeTab === 'hardware' ? 'bg-orange' : 'bg-orange bg-opacity-50 text-orange'}`}
                        onClick={() => setActiveTab("hardware")}
                        style={{ cursor: 'pointer' }}
                    >
                        Hardware
                    </div>
                    <div
                        className={`text-white px-4 py-0.5 rounded-full ${activeTab === 'design' ? 'bg-orange' : 'bg-orange bg-opacity-50 text-orange'}`}
                        onClick={() => setActiveTab("design")}
                        style={{ cursor: 'pointer' }}
                    >
                        Design
                    </div>
                </div>

                <div className="itemContainer container 2xl:mt-8 xl:mt-8 w-full">
                    {activeTab === "software" && (
                        <div className="softwareContainer grid-cols-2 gap-4 grid">
                            <ProjectItem
                                title="Tic-Tac Legends"
                                description="Redefines the classic game with new modes and minigames."
                                githubLink="https://github.com"
                                demoLink="https://github.com"
                                imageLinks={["../../images/ttlegends/title.png", "../../images/ttlegends/title.png"]}
                                lang={["React Native", "Swift", "Python"]}
                            />

                            <ProjectItem
                                title="Meditime"
                                description="Notify you when it's time to drink your medication."
                                githubLink="https://github.com"
                                demoLink="https://github.com"
                                imageLinks={["../../images/ttlegends/title.png", "../../images/ttlegends/title.png"]}
                                lang={["React Native", "Swift", "Python"]}
                            />

                            <ProjectItem
                                title="Webfly"
                                description="Showcases multiple design pages in one."
                                githubLink="https://github.com"
                                demoLink="https://github.com"
                                imageLinks={["../../images/ttlegends/title.png", "../../images/ttlegends/title.png"]}
                                lang={["React JS", "REST API", "Python"]}
                            />
                        </div>
                    )}
                    {activeTab === "hardware" && (
                        <div className="hardwareContainer grid-cols-2 gap-4 grid">

                        </div>
                    )}
                    {activeTab === "design" && (
                        <div className="designContainer grid-cols-2 gap-4 grid">

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
