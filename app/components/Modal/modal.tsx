import {
  Button,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
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
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ContactForm />
          </ModalBody>

          <ModalFooter alignContent={"center"} justifyContent={"center"}>
            <VStack justify={"center"} alignContent={"center"}>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="red"
                variant="outline"
                onClick={onClose}
                minW={"130px"}
              >
                Send
              </Button>
              <Divider />
              <Text>Or contact us directly.</Text>
              <Button
                leftIcon={<PhoneIcon />}
                colorScheme="whatsapp"
                size={"md"}
              >
                Whatsapp
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormModal;
