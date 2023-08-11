/** @format */

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
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type='string'></Input>
      <FormLabel pt={5}>Email address</FormLabel>
      <Input type='email' />
      <Button marginTop={5} colorScheme={"red"}>
        Submit
      </Button>
    </FormControl>
  );
}
