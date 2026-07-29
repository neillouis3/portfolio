"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Snippet,
} from "@heroui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Linkedin01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons";

const iconClass =
  "transition-colors text-foreground dark:text-darkforeground hover:opacity-70";

export default function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button color="primary" size="md" onPress={onOpen}>
        Contact me
      </Button>
      <Modal backdrop="blur" size="md" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Connect with me
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex flex-col gap-2">
                    <p>Send me an email on</p>
                    <Snippet symbol="@" size="md" className="max-md:hidden">
                      neil03.castillon@gmail.com
                    </Snippet>
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <p>Check me out on</p>
                    <div className="flex flex-row gap-4 items-center">
                      <a
                        href="https://www.instagram.com/neillouis3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={iconClass}
                      >
                        <HugeiconsIcon
                          icon={InstagramIcon}
                          size={24}
                          strokeWidth={1.5}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/neillouis3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={iconClass}
                      >
                        <HugeiconsIcon
                          icon={Linkedin01Icon}
                          size={24}
                          strokeWidth={1.5}
                        />
                      </a>
                      <a
                        href="https://www.github.com/neillouis3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={iconClass}
                      >
                        <HugeiconsIcon
                          icon={Github01Icon}
                          size={24}
                          strokeWidth={1.5}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
