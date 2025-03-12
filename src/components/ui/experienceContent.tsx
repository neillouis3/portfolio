"use client"
import React from "react";
import ReferenceModal from "./referenceModal";
import {Link} from "@nextui-org/link";

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import type {Selection} from "@nextui-org/react";


export default function ExperienceContent() {

    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));


    return (
        <div className="w-full h-[60vh] -mt-16 flex flex-row">
                
                <Accordion 

                    selectedKeys={selectedKeys}
                    variant="light"
                    onSelectionChange={setSelectedKeys}
                >
                    <AccordionItem
                        key="2"
                        aria-label="Janelle Lenard"
                        startContent={

                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/jisLogo.png"
                        />
                        
                        }
                        subtitle="May 2024 - Dec 2024"
                        title={
                            <div className="flex flex-row gap-1">
                                <p className="text-sm">Software Developer @ <Link size="sm" href="https://www.jischool.org" underline="always" color="foreground" isExternal> Jeddah International School</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <div>
                                <p>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
                                <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to
                                address identified problems.</p>
                                <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
                            </div>
                            <div className="max-lg:hidden">
                                <p>Technologies: React, TypeScript, Node.js, Express, MongoDB, Git, GitHub, Heroku</p>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>References: </p> 
                                <ReferenceModal
                                    name="Saif Khalid"
                                    role="Supervisor"
                                    position="IT Head"
                                    company="Jeddah International School"
                                    companyLink="jischool.org"
                                    linkedin="linkedin.com/in/saifullahkhalid"
                                />
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                        key="3"
                        aria-label="Janelle Lenard"
                        startContent={

                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/nleatsLogo.png"
                        />
                        
                        }
                        subtitle="May 2024 - Dec 2024"
                        title={
                            <div className="flex flex-row gap-1">
                                <p className="text-sm">Software Developer @ <Link size="sm" href="https://www.nleats.com" underline="always" color="foreground" isExternal> NL Eats</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <div>
                                <p>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
                                <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to
                                address identified problems.</p>
                                <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
                            </div>
                            <div className="max-lg:hidden">
                                <p>Technologies: React, TypeScript, Node.js, Express, MongoDB, Git, GitHub, Heroku</p>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>References: </p> 
                                <ReferenceModal
                                    name="Saif Khalid"
                                    role="Supervisor"
                                    position="IT Head"
                                    company="Jeddah International School"
                                    companyLink="jischool.org"
                                    linkedin="linkedin.com/in/saifullahkhalid"
                                />
                            </div>
                        </div>
                    </AccordionItem>
                    
                </Accordion>
            
        </div>
    )
}