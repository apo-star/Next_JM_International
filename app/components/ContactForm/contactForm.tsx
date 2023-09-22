/** @format */

import { useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t } = useTranslation();
  const form : any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form?.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <FormLabel>{t("Name")}</FormLabel>
        <Input type="string" name="Name"></Input>
        <FormLabel pt={5}>{t("Email")}</FormLabel>
        <Input type="email" name="Email" />
        <Button type="submit" value="Send" marginTop={5} colorScheme={"red"}>
          {t("Submit")}
        </Button>
      </form>
    </>
  );
}
