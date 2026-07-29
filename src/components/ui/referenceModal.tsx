"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  DropdownSection,
} from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon, CallIcon } from "@hugeicons/core-free-icons";

export default function ReferenceModal({
  name,
  role,
  position,
  company,
  companyLink,
  linkedin,
}: {
  name: string;
  role: string;
  position: string;
  company: string;
  companyLink: string;
  linkedin: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Dropdown placement="bottom-start" backdrop="blur">
        <DropdownTrigger>
          <p className="underline cursor-pointer">{name}</p>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownSection aria-label="Profile & Actions">
            <DropdownItem key="profile" className="gap-2" isReadOnly>
              <p>{name}</p>
              <p>{role}</p>
            </DropdownItem>
            <DropdownItem key="description" isReadOnly>
              {position} @{" "}
              <Link
                size="sm"
                href={`https://www.${companyLink}`}
                underline="always"
                color="foreground"
                isExternal
              >
                {company}
              </Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="contact">
            <DropdownItem
              key="linkedin"
              startContent={
                <HugeiconsIcon icon={Linkedin01Icon} size={20} strokeWidth={1.5} />
              }
              isReadOnly
            >
              <Link
                underline="always"
                size="sm"
                href={`https://www.${linkedin}`}
                isExternal
              >
                {linkedin}
              </Link>
            </DropdownItem>
            <DropdownItem
              key="phone"
              startContent={
                <HugeiconsIcon icon={CallIcon} size={20} strokeWidth={1.5} />
              }
              isReadOnly
            >
              <p>Details upon request</p>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
