"use client"
import React from "react";



import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link, DropdownSection} from "@heroui/react";
import { Call02Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export default function ReferenceModal ({name, role, position, company, companyLink, linkedin}: {name:string; role:string; position:string, company:string; companyLink:string; linkedin:string;}) {
    return (
        <div className="flex items-center gap-2">
            <Dropdown placement="bottom-start" backdrop="blur">
                <DropdownTrigger>
                    <p className="underline cursor-pointer">
                        {name}
                    </p>
                    
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem key="profile" className="gap-2 " isReadOnly>
                            <p className="font-semibold">{name}</p>
                            <p className="">{role}</p>
                        </DropdownItem>
                        <DropdownItem key="description" className="" isReadOnly>
                            {position} @ <Link size="sm" href={`https://www.${companyLink}`} underline="always" color="foreground" isExternal> {company}</Link>
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection aria-label="contact" >
                        <DropdownItem key="email" startContent={
                            <HugeiconsIcon icon={Linkedin01Icon} size={20} />
                        } isReadOnly>
                            <Link underline="always" size="sm" href={`https://www.${linkedin}`} isExternal>{linkedin}</Link>
                        </DropdownItem>
                        <DropdownItem key="phone" startContent={
                            <HugeiconsIcon icon={Call02Icon} size={20} />
                        } isReadOnly>
                            <p>Details upon request</p>
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>

        </div>
        
    )
}