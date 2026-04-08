"use client"
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
import { GithubIcon, InstagramIcon, Linkedin01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ContactModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();


  const handleOpen = () => {

    onOpen();
  };


  return (
    <div>
      <div className="flex flex-wrap gap-3">

        <Button
          key="resume"
          className="capitalize"
          size="sm" 
          color="primary"
          onPress={() => handleOpen()}
        >
          Contact me
        </Button>
      </div>
      <Modal backdrop="blur" size="md" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Connect with me</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex flex-col gap-2 ">
                  <p>Send me an email on</p>
                  <Snippet symbol="@" size="sm" className="max-md:hidden">neil03.castillon@gmail.com</Snippet>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <p>Check me out on</p>
                  <div className="flex flex-row gap-4">
                    <a href="https://www.instagram.com/neillouis3" target="_blank">
                      <HugeiconsIcon icon={InstagramIcon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
                      </a>
                      <a href="https://www.linkedin.com/in/neillouis3" target="_blank">
                      <HugeiconsIcon icon={Linkedin01Icon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
                      </a>
                      <a href="https://www.github.com/neillouis3" target="_blank">
                      <HugeiconsIcon icon={GithubIcon} size={24} className="transition-colors text-foreground dark:text-darkforeground" />
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
    </div>
      
    
  );
}
