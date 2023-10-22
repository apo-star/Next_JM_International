/** @format */

import { useRef } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { Input, Button } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { t } = useTranslation();
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        //ServiceID
        "service_j359rfl",
        //Template ID
        "template_416d50r",
        form?.current,
        // Public Key
        "_hPsUefRsIdqfy4Tt"
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <FormLabel>{t("Name")}</FormLabel>
        <Input type="string" name="Name"></Input>
        <FormLabel pt={5}>{t("Email")}</FormLabel>
        <Input type="email" name="Email" />
        <Button type="submit" value="Send" marginTop={5} colorScheme={"red"}>
          {t("Submit")}
        </Button>
      </form>
    </div>
  );
}
