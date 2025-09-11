"use client"
import React from "react";
import { CustomAlert } from "./customAlert";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function EducationContent() {
    return (
        <div className="w-full h-[60vh] -mt-16 flex flex-row gap-1">
            <div className="h-full w-full flex flex-col gap-4">
                <div className="w-[50vw] max-lg:w-full mr-auto">
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
                </div>
                <div className="w-[50vw] max-lg:w-full ml-auto">
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
                </div>
                <div className="w-[50vw] max-lg:w-full">
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
                </div>
                    
         
                
            </div>        
        </div>
    )
}