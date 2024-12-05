"use client"
import React from "react";
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

export default function ReferenceModal () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">References</ModalHeader>
                    <ModalBody>
                        <Accordion       
                            defaultExpandedKeys={["2"]}
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
    )
}