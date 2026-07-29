"use client"
import React, { useRef } from "react";
import { Button, Link } from "@heroui/react";
import { motion, useInView } from "framer-motion";

const TECHNICAL = ["Web Development", "Mobile Development", "Cybersecurity", "Software Development", "Machine Learning"];
const LANGUAGES = ["Python", "JavaScript", "TypeScript", "C++", "C#"];
const TOOLS = ["React", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "MongoDB", "Supabase", "Clerk", "Auth0"];
const SOFT = ["Communication", "Teamwork", "Leadership", "Problem Solving", "Time Management", "Adaptability"];

const CERTS = [
    { year: "2024", title: "Computer Hardware @ Cisco", href: "https://www.cisco.com" },
    { year: "2023", title: "React - The Complete Guide (incl. React Router & Redux) @ Udemy", href: "https://www.udemy.com" },
    { year: "2022", title: "Onshape Fundamentals: CAD @ Onshape", href: "https://www.onshape.com" },
];

export default function EducationContent() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });

    const baseTransition = (delay: number) => ({
        stiffness: 100,
        damping: 15,
        duration: 0.5,
        delay,
        ease: [0, 0.71, 0.2, 1.01] as [number, number, number, number],
    });

    return (
        <div className="w-full h-fit -mt-16 flex flex-row gap-1">
            <div className="h-full w-full flex flex-col gap-4">
                <motion.div
                    ref={ref1}
                    className="w-full max-w-4xl mr-auto"
                    initial={{ x: -300, opacity: 0 }}
                    animate={isInView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                    transition={baseTransition(0.2)}
                    layout
                >
                    <div className="border border-default-200 border-l-4 border-l-primary rounded-xl rounded-l-none flex flex-col gap-3 p-6">
                        <h2 className="text-xs text-default-500 uppercase tracking-widest">
                            Education
                        </h2>
                        <div className="flex flex-col">
                            <p className="text-sm text-default-500">Sep 2021 - May 2027</p>
                            <p className="text-sm">
                                Bachelor of Engineering of Computer Engineering @{" "}
                                <Link underline="always" href="https://www.mun.ca" size="sm" isExternal showAnchorIcon>
                                    Memorial University
                                </Link>
                            </p>
                        </div>
                        <Button size="md" variant="bordered" className="w-fit">
                            Request transcript
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref2}
                    className="w-full max-w-4xl ml-auto"
                    initial={{ x: 300, opacity: 0 }}
                    animate={isInView2 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
                    transition={baseTransition(0.4)}
                    layout
                >
                    <div className="border border-default-200 border-r-4 border-r-primary rounded-xl rounded-r-none flex flex-col gap-3 p-6">
                        <h2 className="text-xs text-default-500 uppercase tracking-widest">
                            Certifications
                        </h2>
                        <div className="flex flex-col gap-3">
                            {CERTS.map((cert) => (
                                <div key={cert.title} className="grid grid-cols-[3rem_1fr] gap-x-4 items-baseline">
                                    <p className="text-sm text-default-500">{cert.year}</p>
                                    <Link color="foreground" href={cert.href} size="sm" isExternal showAnchorIcon>
                                        {cert.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref3}
                    className="w-full max-w-4xl"
                    initial={{ x: -300, opacity: 0 }}
                    animate={isInView3 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                    transition={baseTransition(0.6)}
                    layout
                >
                    <div className="border border-default-200 border-l-4 border-l-primary rounded-xl rounded-l-none flex flex-col gap-4 p-6">
                        <h2 className="text-xs text-default-500 uppercase tracking-widest">
                            Skills
                        </h2>
                        <div className="flex flex-col gap-1 text-sm">
                            <p>
                                <span className="text-default-500">Technical:</span>{" "}
                                <span className="text-default-700">{TECHNICAL.join(", ")}</span>
                            </p>
                            <p>
                                <span className="text-default-500">Programming Languages:</span>{" "}
                                <span className="text-default-700">{LANGUAGES.join(", ")}</span>
                            </p>
                            <p>
                                <span className="text-default-500">Frameworks & Tools:</span>{" "}
                                <span className="text-default-700">{TOOLS.join(", ")}</span>
                            </p>
                            <p>
                                <span className="text-default-500">Soft:</span>{" "}
                                <span className="text-default-700">{SOFT.join(", ")}</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
