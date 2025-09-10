"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Link } from "@nextui-org/react";
import ProjectDetails from "./projectDetails";


export default function ProjectContent() {
    const [currentLanguages, setCurrentLanguages] = useState<string[]>(["Python"]);
    const [showDetails, setShowDetails] = useState(false);
    const [currentElement, setCurrentElement] = useState<HTMLElement | null>(null);

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const projectContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === projectContentRef.current) {
                        setShowDetails(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.8 } // Trigger when 50% of the container is visible
        );

        if (projectContentRef.current) {
            observer.observe(projectContentRef.current);
        }

        return () => {
            if (projectContentRef.current) {
                observer.unobserve(projectContentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionIndex = sectionRefs.current.findIndex(
                            (section) => section === entry.target
                        );

                        // Update languages based on the section index
                        if (sectionIndex === 0) {
                            setCurrentLanguages([
                                "Python",
                                "Typescript",
                                "Next.js",

                                "Tailwind CSS",
                                "MongoDB",
                            ]);
                        } else if (sectionIndex === 1) {
                            setCurrentLanguages(["Java"]);
                        } else if (sectionIndex === 2) {
                            setCurrentLanguages(["Typescript", "React.js"]);
                        }
                    }
                });
            },
            { threshold: 0.8 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div ref={projectContentRef} className="w-full flex flex-col -mt-16 h-full overflow-y-scroll no-scrollbar">
            {/* Section 1 */}
            <section
                ref={(el) => { if (el) sectionRefs.current[0] = el; }}
                className="h-screen shrink-0 flex items-center overflow-hidden"
            >
                <div className="h-[60vh] lg:w-[50vw] lg:pr-56">
                    <h1 className="text-3xl">milestones</h1>
                    <h2 className="text-sm text-default-500 mb-4">Full-stack web development</h2>

                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl max-lg:h-[25vh] h-full ml-1"
                        src="/milestoneDemoIMG.png"
                        style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))' }}
                    />
                    
                    
                    <div className="flex flex-col mt-4">
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Demo
                        </Link>
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Github Repo
                        </Link>
                    </div>
                    <div className="w-full text-sm lg:hidden mt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex molestiae quidem!
                                Voluptatem minima, consequatur sequi soluta quisquam vitae aspernatur qui inventore
                                exercitationem. Perspiciatis, cupiditate a nostrum pariatur laborum quas.
                            </p>
                            
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section
                ref={(el) => { if (el) sectionRefs.current[1] = el; }}
                className="h-screen shrink-0  max-lg:-mt-32 flex items-center bg-back_ground dark:bg-darkback_ground overflow-hidden"
            >
                <div className="h-[60vh] lg:w-[50vw] lg:pr-56">
                    <h1 className="text-3xl">JCHEKIM</h1>
                    <h2 className="text-sm text-default-500 mb-4">Web development</h2>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl max-lg:h-[25vh] h-full"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                    />
                    <div className="flex flex-col mt-4">
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Demo
                        </Link>
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Github Repo
                        </Link>
                    </div>
                    <div className="w-full text-sm lg:hidden mt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex molestiae quidem!
                                Voluptatem minima, consequatur sequi soluta quisquam vitae aspernatur qui inventore
                                exercitationem. Perspiciatis, cupiditate a nostrum pariatur laborum quas.
                            </p>
                            
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section
                ref={(el) => { if (el) sectionRefs.current[2] = el; }}
                className="h-screen shrink-0  max-lg:-mt-32 flex items-center bg-back_ground dark:bg-darkback_ground overflow-hidden"
            >
                <div className="h-[60vh] lg:w-[50vw] lg:pr-56">
                    <h1 className="text-3xl">JCHEKIM</h1>
                    <h2 className="text-sm text-default-500 mb-4">Web development</h2>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl max-lg:h-[25vh] h-full"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                    />
                    <div className="flex flex-col mt-4">
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Demo
                        </Link>
                        <Link isExternal showAnchorIcon size="sm" underline="hover" href="">
                            Github Repo
                        </Link>
                    </div>
                    <div className="w-full text-sm lg:hidden mt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex molestiae quidem!
                                Voluptatem minima, consequatur sequi soluta quisquam vitae aspernatur qui inventore
                                exercitationem. Perspiciatis, cupiditate a nostrum pariatur laborum quas.
                            </p>
                            
                    </div>
                </div>
            </section>



            {/* Conditionally Render Project Details */}
            {showDetails && <ProjectDetails languages={currentLanguages} />}
        </div>
    );
}
