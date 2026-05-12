"use client"
import React, { useRef, useEffect } from "react";
import ReferenceModal from "./referenceModal";
import {Link, Accordion, AccordionItem, Avatar} from "@heroui/react";
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
            { threshold: 0.9 }
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
        <div ref={contentRef} className="w-full">
            <Accordion 
                    selectedKeys={selectedKeys}
                    variant="splitted"
                    onSelectionChange={setSelectedKeys}
                    itemClasses={{
                        base: "shadow-none bg-transparent px-0",
                    }}
                >
                     <AccordionItem
                        key="1"
                        aria-label="Orion Health"
                        startContent={
                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/orion.png"
                            classNames={{
                                base: "bg-white"
                            }}
                        />
                        }
                        subtitle={<span className="text-xs text-default-500">Jan 2026 - Present</span>}
                        title={
                            <p className="text-sm">
                                Associate Implementation Consultant Intern @{" "}
                                <Link size="sm" href="https://orionhealth.com/ca/" underline="always" color="foreground" isExternal>
                                    Orion Health Limited
                                </Link>
                            </p>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="flex flex-col gap-1 text-default-700">
                                <li>- Supporting design, configuration, testing, and documentation of healthcare software solutions based on project requirements and client specifications.</li>
                                <li>- Learning and participating in multiple stages of testing including System, Integration, and Performance testing for implemented solutions.</li>
                                <li>- Assisting with data extraction, conversion, and manipulation using RDBMS while maintaining technical documentation for project deliverables.</li>
                                <li>- Providing remote and onsite troubleshooting support to clients, utilizing Issue Tracking systems to analyze and resolve technical problems.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-1 text-xs">
                                <p>
                                    <span className="text-default-500">Technologies:</span>{" "}
                                    <span className="text-default-700">Java, Python, JavaScript, HTML, REST/SOAP, XML, Linux, Bash</span>
                                </p>
                                <p>
                                    <span className="text-default-500">Tools:</span>{" "}
                                    <span className="text-default-700">Git, Issue Tracking Systems, RDBMS</span>
                                </p>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap text-xs">
                                <p className="text-default-500">References:</p> 
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
                        aria-label="Jeddah International School"
                        startContent={
                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/jisLogo.png"
                            classNames={{
                                base: "bg-white"
                            }}
                        />
                        }
                        subtitle={<span className="text-xs text-default-500">May 2024 - Jan 2025</span>}
                        title={
                            <p className="text-sm">
                                Software Developer @{" "}
                                <Link size="sm" href="https://www.jischool.org" underline="always" color="foreground" isExternal>
                                    Jeddah International School
                                </Link>
                            </p>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="flex flex-col gap-1 text-default-700">
                                <li>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</li>
                                <li>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.</li>
                                <li>- Debugging and troubleshooting computer hardware and software, involving network server environments.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-1 text-xs">
                                <p>
                                    <span className="text-default-500">Technologies:</span>{" "}
                                    <span className="text-default-700">PHP, Laravel, JavaScript, MySQL, AWS</span>
                                </p>
                                <p>
                                    <span className="text-default-500">Tools:</span>{" "}
                                    <span className="text-default-700">Figma, Notion, Teams, Git</span>
                                </p>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap text-xs">
                                <p className="text-default-500">References:</p> 
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
                        aria-label="NL Eats"
                        startContent={
                        <Avatar
                            size="lg"
                            radius="lg"
                            src="/nleatsLogo.png"
                            classNames={{
                                base: "bg-white"
                            }}
                        />
                        }
                        subtitle={<span className="text-xs text-default-500">Sep 2023 - Jan 2024</span>}
                        title={
                            <p className="text-sm">
                                Software Developer @{" "}
                                <Link size="sm" href="https://www.nleats.com" underline="always" color="foreground" isExternal>
                                    NL Eats
                                </Link>
                            </p>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="flex flex-col gap-1 text-default-700">
                                <li>- Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</li>
                                <li>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.</li>
                                <li>- Debugging and troubleshooting computer hardware and software, involving network server environments.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-1 text-xs">
                                <p>
                                    <span className="text-default-500">Technologies:</span>{" "}
                                    <span className="text-default-700">React JS, React Native, MongoDB, Microsoft Azure, Firebase</span>
                                </p>
                                <p>
                                    <span className="text-default-500">Tools:</span>{" "}
                                    <span className="text-default-700">Figma, Notion, Slack</span>
                                </p>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap text-xs">
                                <p className="text-default-500">References:</p> 
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
