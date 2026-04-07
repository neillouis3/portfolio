"use client"
import React, { useRef, useEffect } from "react";
import ReferenceModal from "./referenceModal";
import {Link, Accordion, AccordionItem, Avatar, Chip, Card, CardBody} from "@heroui/react";
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
        <Card ref={contentRef} className="w-full shadow-lg">
            <CardBody className="p-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                    <p className="text-default-500 text-sm">Professional work history</p>
                </div>
                
                <Accordion 
                    selectedKeys={selectedKeys}
                    variant="splitted"
                    onSelectionChange={setSelectedKeys}
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
                        subtitle={<Chip size="sm" variant="flat" color="success">Jan 2026 - Present</Chip>}
                        title={
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold">Associate Implementation Consultant Intern</p>
                                <Link size="sm" href="https://orionhealth.com/ca/" underline="hover" color="foreground" isExternal>
                                    Orion Health Limited
                                </Link>
                            </div>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Supporting design, configuration, testing, and documentation of healthcare software solutions based on project requirements and client specifications.</li>
                                <li>Learning and participating in multiple stages of testing including System, Integration, and Performance testing for implemented solutions.</li>
                                <li>Assisting with data extraction, conversion, and manipulation using RDBMS while maintaining technical documentation for project deliverables.</li>
                                <li>Providing remote and onsite troubleshooting support to clients, utilizing Issue Tracking systems to analyze and resolve technical problems.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-2">
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Technologies:</span>
                                    {["Java", "Python", "JavaScript", "HTML", "REST/SOAP", "XML", "Linux", "Bash"].map(tech => (
                                        <Chip key={tech} size="sm" variant="flat" color="primary">{tech}</Chip>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Tools:</span>
                                    {["Git", "Issue Tracking Systems", "RDBMS"].map(tool => (
                                        <Chip key={tool} size="sm" variant="flat" color="default">{tool}</Chip>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap">
                                <p className="text-xs text-default-500">References:</p> 
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
                        subtitle={<Chip size="sm" variant="flat" color="default">May 2024 - Jan 2025</Chip>}
                        title={
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold">Software Developer</p>
                                <Link size="sm" href="https://www.jischool.org" underline="hover" color="foreground" isExternal>
                                    Jeddah International School
                                </Link>
                            </div>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</li>
                                <li>Developing comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.</li>
                                <li>Debugging and troubleshooting computer hardware and software, involving network server environments.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-2">
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Technologies:</span>
                                    {["PHP", "Laravel", "Javascript", "MySQL", "AWS"].map(tech => (
                                        <Chip key={tech} size="sm" variant="flat" color="primary">{tech}</Chip>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Tools:</span>
                                    {["Figma", "Notion", "Teams", "Git"].map(tool => (
                                        <Chip key={tool} size="sm" variant="flat" color="default">{tool}</Chip>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap">
                                <p className="text-xs text-default-500">References:</p> 
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
                        subtitle={<Chip size="sm" variant="flat" color="default">Sep 2023 - Jan 2024</Chip>}
                        title={
                            <div className="flex flex-col gap-1">
                                <p className="text-md font-semibold">Software Developer</p>
                                <Link size="sm" href="https://www.nleats.com" underline="hover" color="foreground" isExternal>
                                    NL Eats
                                </Link>
                            </div>
                        }
                    >
                        <div className="lg:pl-16 flex flex-col gap-4 text-sm">
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Collaborating to create a dashboard web application to conduct reports and analysis on student and teacher data.</li>
                                <li>Developing comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.</li>
                                <li>Debugging and troubleshooting computer hardware and software, involving network server environments.</li>
                            </ul>
                            <div className="max-lg:hidden flex flex-col gap-2">
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Technologies:</span>
                                    {["React JS", "React Native", "MongoDB", "Microsoft Azure", "Firebase"].map(tech => (
                                        <Chip key={tech} size="sm" variant="flat" color="primary">{tech}</Chip>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-default-500 text-xs">Tools:</span>
                                    {["Figma", "Notion", "Slack"].map(tool => (
                                        <Chip key={tool} size="sm" variant="flat" color="default">{tool}</Chip>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-row gap-2 items-center flex-wrap">
                                <p className="text-xs text-default-500">References:</p> 
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
            </CardBody>
        </Card>
    )
}
