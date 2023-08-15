/** @format */

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
  Button
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from "@chakra-ui/react";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel>{t("Name")}</FormLabel>
      <Input type='string'></Input>
      <FormLabel pt={5}>{t("Email")}</FormLabel>
      <Input type='email' />
      <Button marginTop={5} colorScheme={"red"}>
        {t("Submit")}
      </Button>
    </FormControl>
  );
}
