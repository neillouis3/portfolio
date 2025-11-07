"use client"
import React, { useRef, useEffect } from "react";
import ReferenceModal from "./referenceModal";
import {Link} from "@heroui/link";

import {Accordion, AccordionItem, Avatar} from "@heroui/react";
import type {Selection} from "@heroui/react";


export default function ExperienceContent() {
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [hasBeenInView, setHasBeenInView] = React.useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasBeenInView) {
                        setHasBeenInView(true);
                        setSelectedKeys(new Set(["1"]));
                    }
                });
            },
            { threshold: 0.7 }
        );

        const currentRef = contentRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasBeenInView]);


    return (
        <div ref={contentRef} className="w-full h-[60vh] -mt-16 flex flex-row">
                
                <Accordion 

                    selectedKeys={selectedKeys}
                    variant="light"
                    onSelectionChange={setSelectedKeys}
                >
                     <AccordionItem
                        key="1"
                        aria-label="Janelle Lenard"
                        startContent={

                        <Avatar
                            size="lg"
                            radius="lg"

                            src="/orion.png"
                            classNames={{
                                base: "bg-white   "
                            }}
                        />
                        
                        }
                        subtitle="Starting Jan 2026"
                        title={
                            <div className="flex flex-row gap-1">
                                <p className="text-sm">Associate Implementation Consultant Intern @ <Link size="sm" href="https://orionhealth.com/ca/" underline="always" color="foreground" isExternal> Orion Health Limited</Link></p>
                                
                            </div>
                        }
                            
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <div>
                                <p>- Supporting design, configuration, testing, and documentation of healthcare software solutions based on project requirements and client specifications.</p>
                                <p>- Learning and participating in multiple stages of testing including System, Integration, and Performance testing for implemented solutions.</p>
                                <p>- Assisting with data extraction, conversion, and manipulation using RDBMS while maintaining technical documentation for project deliverables.</p>
                                <p>- Providing remote and onsite troubleshooting support to clients, utilizing Issue Tracking systems to analyze and resolve technical problems.</p>
                            </div>
                            <div className="max-lg:hidden">
                                <p><span className="text-default-500">Technologies:</span> Java, Python, JavaScript, HTML, REST/SOAP, XML, Linux, Bash</p>
                                <p><span className="text-default-500">Tools:</span> Git, Issue Tracking Systems, RDBMS</p>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>References: </p> 
                                <ReferenceModal
                                    name="Marcus de Leon"
                                    role="Supervisor"
                                    position="Solutions Architect"
                                    company="Orion Health Limited "
                                    companyLink="orionhealth.com/ca"
                                    linkedin="linkedin.com/in/marcus-de-leon-6a214048/"
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
                            classNames={{
                                base: "bg-white    "
                            }}
                        />
                        
                        }
                        subtitle="May 2024 - Jan 2025"
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
                                <p><span className="text-default-500">Technologies:</span> PHP, Laravel, Javascript, MySQL, AWS</p>
                                <p><span className="text-default-500">Tools:</span> Figma, Notion, Teams, Git</p>
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
                                <ReferenceModal
                                    name="Imran Ullah"
                                    role="Supervisor"
                                    position="IT Head"
                                    company="Jeddah International School"
                                    companyLink="jischool.org"
                                    linkedin="linkedin.com/in/imranullah1/"
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
                            classNames={{
                                base: "bg-white   "
                            }}
                        />
                        
                        }
                        subtitle="Sep 2023 - Jan 2024"
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
                                <p><span className="text-default-500">Technologies:</span> React JS, React Native, MongoDB, Microsoft Azure, Firebase</p>
                                <p><span className="text-default-500">Tools:</span> Figma, Notion, Slack</p>
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>References: </p> 
                                <ReferenceModal
                                    name="Saif Ahmed"
                                    role="Supervisor"
                                    position="Cofounder"
                                    company="NLEats"
                                    companyLink="nleats.com"
                                    linkedin="linkedin.com/in/saifahmed-/"
                                />
                            </div>
                        </div>
                    </AccordionItem>
                    
                </Accordion>
            
        </div>
    )
}