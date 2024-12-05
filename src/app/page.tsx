"use client"
import {Chip} from "@nextui-org/chip";
import {Button} from "@nextui-org/react";
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import React from "react";

export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(["1"]);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
    <div className="h-full mt-16 mb-24 py-16 w-[75%] h-full relative">

      <div className="w-full h-full flex flex-row">
        <div className="flex-3 flex flex-col gap-8 w-full h-full">
          <div className="flex flex-col">
            <h3 className="text-sm text-default-500 italic">May 2024 - Dec 2024</h3>
            <h1 className="text-3xl font-bold">Software Engineer Intern</h1>
            <Chip size="md" radius="md" color="primary">Jeddah International School | Jeddah, Saudi Arabia</Chip>
          </div>
          <div className="flex-3 flex-col flex text-base">
            <p className="text-base">- Collaborated to create a dashboard web application to conduct reports and analysis on student and teacher data.</p>
            <p>- Developing comprehensive reports on website issues and design considerations, and implemented code solutions to address identified problems.</p>
            <p>- Debugging and troubleshooting computer hardware and software, involving network server environments.</p>
          </div>
          <div>
            <Button 
              color="primary" 
              variant="faded"
              onPress={onOpen} 
              startContent={
                <svg className="transition-colors text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#000000"} fill={"none"}>
                  <path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 7L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              References
            </Button> 
          </div>

        </div>
        <div className="flex-2 h-full w-full px-4 relative">
            
            

        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">References</ModalHeader>
              <ModalBody>
                <Accordion       
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                >
                  <AccordionItem
                    key="1"
                    aria-label="Saif Khalid"
                    startContent={
                      <Avatar
                        isBordered
                        color="primary"
                        radius="lg"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      />
                    }
                    subtitle="saif@jischool.org"
                    title="Saif Khalid"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Mercy Bo"
                    startContent={
                      <Avatar
                        isBordered
                        color="success"
                        radius="lg"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      />
                    }
                    subtitle="mercybo@jischool.org"
                    title="Mercy Bo"
                  >
                    {defaultContent}
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Imran"
                    startContent={
                      <Avatar
                        isBordered
                        color="warning"
                        radius="lg"
                        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                      />
                    }
                    subtitle="imran@jischool.org"
                    title="Imran"
                  >
                    {defaultContent}
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </div>
  );
}
