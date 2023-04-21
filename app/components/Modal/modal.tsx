import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ContactForm from "../ContactForm/contactForm";
import { useEffect, useState } from "react";

const FormModal = (props: { setOpen: Function; open: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    props.setOpen(false);
    if (props.open) {
      onOpen();
      props.setOpen(true);
    } else {
      //   onClose();
      props.setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={props.setOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModal;
