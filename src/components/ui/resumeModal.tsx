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
} from "@heroui/react";

export default function ResumeModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <>
      <Button size="md" variant="bordered" onPress={onOpen}>
        View resume
      </Button>
      <Modal backdrop="blur" size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Resume</ModalHeader>
            <ModalBody>
            <embed
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-[70vh]"
              style={{ border: 'none' }}
            ></embed>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" size="md" onPress={handleDownload}>
                Download
              </Button>
            </ModalFooter>
          </>
        )}
        </ModalContent>
      </Modal>
    </>
  );
}
