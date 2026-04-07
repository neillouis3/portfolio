"use client"
import React, { useRef } from "react";
import { Button, Link, Card, CardHeader, CardBody, Divider, Chip } from "@heroui/react";
import { motion, useInView } from "framer-motion";


export default function EducationContent() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });

    return (
        <div className="w-full h-fit -mt-16 flex flex-row gap-1">
            <div className="h-full w-full flex flex-col gap-4">
                <motion.div 
                    ref={ref1}
                    className="w-[50vw] max-lg:w-full mr-auto"
                    initial={{ x: -300, opacity: 0 }}
                    animate={isInView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                    transition={{
                        stiffness: 100,
                        damping: 15,
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    layout
                >
                    <Card className="shadow-lg border-l-4 border-primary">
                        <CardHeader className="flex flex-col items-start gap-2 p-6">
                            <Chip size="sm" variant="flat" color="primary">Education</Chip>
                            <h3 className="text-lg font-semibold">Bachelor of Engineering</h3>
                            <p className="text-sm text-default-500">Computer Engineering</p>
                        </CardHeader>
                        <CardBody className="pt-0 px-6 pb-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <Link underline="hover" href="https://www.mun.ca" size="sm" isExternal showAnchorIcon>
                                        Memorial University
                                    </Link>
                                    <Chip size="sm" variant="flat" color="default">Sep 2021 - May 2027</Chip>
                                </div>
                                <Button
                                    className="bg-background text-default-700 font-medium border-1 shadow-small"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Request transcript
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
                
                <motion.div 
                    ref={ref2}
                    className="w-[50vw] max-lg:w-full ml-auto"
                    initial={{ x: 300, opacity: 0 }}
                    animate={isInView2 ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
                    transition={{
                        stiffness: 100,
                        damping: 15,
                        duration: 0.5,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    layout
                >
                    <Card className="shadow-lg border-l-4 border-primary">
                        <CardHeader className="flex flex-col items-start gap-2 p-6">
                            <Chip size="sm" variant="flat" color="primary">Certifications</Chip>
                            <h3 className="text-lg font-semibold">Professional Certifications</h3>
                        </CardHeader>
                        <CardBody className="pt-0 px-6 pb-6">
                            <div className="flex flex-col gap-3">
                                <div>
                                    <Chip size="sm" variant="flat" color="default" className="mb-1">2024</Chip>
                                    <Link color="foreground" href="https://www.cisco.com" size="sm" isExternal showAnchorIcon>
                                        Computer Hardware @ Cisco
                                    </Link>
                                </div>
                                <Divider />
                                <div>
                                    <Chip size="sm" variant="flat" color="default" className="mb-1">2023</Chip>
                                    <Link color="foreground" href="https://www.udemy.com" size="sm" isExternal showAnchorIcon>
                                        React - The Complete Guide (incl. React Router & Redux) @ Udemy
                                    </Link>
                                </div>
                                <Divider />
                                <div>
                                    <Chip size="sm" variant="flat" color="default" className="mb-1">2022</Chip>
                                    <Link color="foreground" href="https://www.onshape.com" size="sm" isExternal showAnchorIcon>
                                        Onshape Fundamentals: CAD @ Onshape
                                    </Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
                
                <motion.div 
                    ref={ref3}
                    className="w-[50vw] max-lg:w-full"
                    initial={{ x: -300, opacity: 0 }}
                    animate={isInView3 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                    transition={{
                        stiffness: 100,
                        damping: 15,
                        duration: 0.5,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    layout
                >
                    <Card className="shadow-lg border-l-4 border-primary">
                        <CardHeader className="flex flex-col items-start gap-2 p-6">
                            <Chip size="sm" variant="flat" color="primary">Skills</Chip>
                            <h3 className="text-lg font-semibold">Technical & Soft Skills</h3>
                        </CardHeader>
                        <CardBody className="pt-0 px-6 pb-6">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="text-xs text-default-500 mb-2">Technical</p>
                                    <div className="flex flex-wrap gap-1">
                                        {["Web Development", "Mobile Development", "Cybersecurity", "Software Development", "Machine Learning"].map(skill => (
                                            <Chip key={skill} size="sm" variant="flat" color="primary">{skill}</Chip>
                                        ))}
                                    </div>
                                </div>
                                <Divider />
                                <div>
                                    <p className="text-xs text-default-500 mb-2">Programming Languages</p>
                                    <div className="flex flex-wrap gap-1">
                                        {["Python", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "MySQL", "MongoDB", "Clerk"].map(lang => (
                                            <Chip key={lang} size="sm" variant="flat" color="secondary">{lang}</Chip>
                                        ))}
                                    </div>
                                </div>
                                <Divider />
                                <div>
                                    <p className="text-xs text-default-500 mb-2">Soft Skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {["Communication", "Teamwork", "Leadership", "Problem Solving", "Time Management", "Adaptability"].map(soft => (
                                            <Chip key={soft} size="sm" variant="flat" color="default">{soft}</Chip>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>        
        </div>
    )
}
