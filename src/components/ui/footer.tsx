import { Snippet } from "@heroui/snippet";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Linkedin01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons";

const iconClass =
  "transition-colors text-foreground dark:text-darkforeground hover:opacity-70";

export default function Footer() {
  return (
    <div className="bg-white/70 dark:bg-darkback_ground/70 backdrop-blur-sm w-full h-fit bottom-0 z-14 fixed justify-center items-center flex max-lg:hidden t-8 pb-12 pt-4">
      <div className="w-[60%] flex flex-row justify-start items-center">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Snippet symbol="@" size="md" className="max-md:hidden">
            neil03.castillon@gmail.com
          </Snippet>
          <a
            href="https://www.instagram.com/neillouis3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={iconClass}
          >
            <HugeiconsIcon icon={InstagramIcon} size={24} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/neillouis3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconClass}
          >
            <HugeiconsIcon icon={Linkedin01Icon} size={24} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.github.com/neillouis3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconClass}
          >
            <HugeiconsIcon icon={Github01Icon} size={24} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
