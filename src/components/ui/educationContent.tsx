"use client"
import React from "react";
import { CustomAlert } from "./customAlert";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function EducationContent() {
    return (
        <div className="w-full h-[60vh] rounded-xl -mt-16 py-8 flex flex-row gap-1">
            <div className=" flex-2 h-full w-full">
                <div className="flex flex-col gap-4">
                    <CustomAlert
                        hideIcon
                        key="primary"
                        color="primary"
                        description={
                            <div>
                                <p className="text-sm text-default-500">Sep 2021 - May 2026</p>
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
                    <CustomAlert
                        hideIcon
                        key="primary2"
                        color="primary"
                        title="Certifications"
                        description=""
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
                
            </div>
            <div className="flex-1  h-full w-full">

            </div>
                
        </div>
    )
}