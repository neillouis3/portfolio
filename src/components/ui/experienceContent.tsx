"use client"
import React from "react";
import ReferenceModal from "./referenceModal";
import {Link} from "@nextui-org/link";

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import type {Selection} from "@nextui-org/react";


export default function ExperienceContent() {

    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));

    
    const itemClasses = {
        base: "py-0 w-full my-2",
        title: "text-small",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-large ml-auto",
        content: "text-small px-2",
    };
    return (
        <div className="w-full h-[60vh] -mt-16 flex flex-row">
                
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
                                <p className="text-sm">QOET Enginer Intern @ <Link size="sm" href="https://www.analog.com/en/index.html" underline="always" color="foreground" isExternal> Analog Devices</Link></p>
                                
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