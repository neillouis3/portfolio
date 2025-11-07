"use client"
import React, { useRef } from "react";
import { CustomAlert } from "./customAlert";
import { Button } from "@heroui/react";
import { Link } from "@heroui/react";
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
                    <CustomAlert
                        hideIcon
                        key="primary"
                        color="primary"
                        description={
                            <div>
                                <p className="text-sm text-default-500">Sep 2021 - May 2027</p>
                                <p className="text-sm text-foreground">Bachelor of Engineering of Computer Engineering @ <Link underline="always" href="https://www.mun.ca" size="sm" isExternal>Memorial University</Link></p>
                            </div>
                        }
                    >
                        <div className="flex items-center gap-1 mt-3">
                            <Button
                            className="bg-background text-default-700 font-medium border-1 shadow-small"
                            size="sm"
                            variant="bordered"
                            >
                            Request transcript
                            </Button>

                        </div>

                    </CustomAlert>
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
                    <CustomAlert
                        hideIcon
                        key="primary2"
                        color="primary"
                        title="Certifications"
                        description=""
                        direction="right"
                    >
                        <div className="flex flex-col gap-1 mt-2">
                            <div>
                                <p className="text-sm text-default-500">2024</p>
                                <div className="-mt-1">
                                    <Link color="foreground" href="https://www.mun.ca" size="sm" isExternal showAnchorIcon>Computer Hardware @ Cisco</Link>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-default-500">2023</p>
                                <div className="-mt-1">
                                    <Link color="foreground" href="https://www.mun.ca" size="sm" isExternal showAnchorIcon>React - The Complete Guide (incl. React Router & Redux) @ Udemy</Link>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-default-500">2022</p>
                                <div className="-mt-1">
                                    <Link color="foreground" href="https://www.mun.ca" size="sm" isExternal showAnchorIcon>Onshape Fundamentals: CAD @ Onshape</Link>
                                </div>
                            </div>

                        </div>

                    </CustomAlert>
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
                    <CustomAlert
                        hideIcon
                        key="primary3"
                        color="primary"
                        title="Skills"
                        description=""
                    >
                        <div className="flex flex-col gap-2 mt-2 text-sm text-foreground w-[80%]">
                            <div className="flex flex-col">
                                <h1 className="text-default-500">Technical</h1>
                                <div className="flex flex-row  flex-wrap">
                                    <p>Web Development, Mobile Development, Cybersecurity, Software Development, Machine Learning</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className=" text-default-500">Programming Languages</h1>
                                <div className="flex flex-row flex-wrap">
                                    <p>Python, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, MySQL, MongoDB, Clerk</p>
                                    
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-default-500">Soft</h1>
                                <div className="flex flex-row flex-wrap">
                                    <p>Communication, Teamwork, Leadership, Problem Solving, Time Management, Adaptability </p>
                                </div>
                            
                                 
                            </div>

                        </div>

                    </CustomAlert>
                </motion.div>
                    
         
                
            </div>        
        </div>
    )
}