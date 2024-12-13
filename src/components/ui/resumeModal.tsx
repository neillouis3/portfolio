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
} from "@nextui-org/react";

export default function ResumeModal() {
  const {isOpen, onOpen, onClose} = useDisclosure();


  const handleOpen = () => {

    onOpen();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your PDF
    link.download = "resume.pdf"; // Optional: File name for download
    link.click();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">

          <Button
            key="resume"
            className="capitalize"
            color="default" size="sm" variant="ghost"
            onPress={() => handleOpen()}
          >
            View resume
          </Button>
      </div>
      <Modal backdrop="blur" size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Resume</ModalHeader>
              <ModalBody>
              <embed
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                width="100%"
                height="517.5"
                style={{ border: 'none' }}
              ></embed>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleDownload}>
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
