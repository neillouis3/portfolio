"use client"
import React from "react";
import ReferenceModal from "./referenceModal";
import {Link} from "@nextui-org/link";

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import type {Selection} from "@nextui-org/react";


export default function EducationContent() {

    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));

    
    const itemClasses = {
        base: "py-0 w-full my-2",
        title: "text-small",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-large ml-auto",
        content: "text-small px-2",
    };
    return (
        <div className="w-full h-[60vh] rounded-xl -mt-16 p-8 flex flex-row">
                
                <Accordion 
                    itemClasses={itemClasses} 
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <AccordionItem
                        key="1"
                        aria-label="Janelle Lenard"
                        startContent={
                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/analogLogo.png"
                        />
                        
                        }
                        subtitle={<p className="text-primary">Ongoing</p>}
                        title={
                            <div className="flex flex-row">
                                <p className="text-sm">QOET Enginer Intern @ <Link size="sm" href="#" underline="always" color="foreground"> Analog Devices</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="pl-16 flex flex-col gap-4">
                            <div>
                                <p>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
                                <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to
                                address identified problems.</p>
                                <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
                            </div>
                            <div>
                                <p>Technologies: React, TypeScript, Node.js, Express, MongoDB, Git, GitHub, Heroku</p>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>References: </p> <ReferenceModal />
                            </div>
                            
                        </div>
                        
                    </AccordionItem>
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
                                <p className="text-sm">Software Developer @ <Link size="sm" href="#" underline="always" color="foreground"> Jeddah International School</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="pl-16 flex flex-col gap-4">
                            <div>
                                <p>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
                                <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to
                                address identified problems.</p>
                                <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
                            </div>
                            <div>
                                <p>Technologies: React, TypeScript, Node.js, Express, MongoDB, Git, GitHub, Heroku</p>
                            </div>
                            
                            <ReferenceModal />
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
                                <p className="text-sm">Software Developer @ <Link size="sm" href="#" underline="always" color="foreground"> NLEats</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="pl-16 flex flex-col gap-4">
                            <div>
                                <p>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
                                <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to
                                address identified problems.</p>
                                <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
                            </div>
                            <div>
                                <p>Technologies: React, TypeScript, Node.js, Express, MongoDB, Git, GitHub, Heroku</p>
                            </div>
                            
                            <ReferenceModal />
                        </div>
                    </AccordionItem>
                    
                </Accordion>
            
        </div>
    )
}