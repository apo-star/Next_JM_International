/** @format */

"use client";
import { Inter } from "next/font/google";
import {
  Box,
  Flex,
  Heading,
  Stack,
  VStack,
  useBreakpointValue,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ContactForm from "@/app/components/ContactForm/contactForm";
// import "./footer.css";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Navbar isHomePage={false} />
      <Flex
        bgImage='/comp7H.jpg'
        bgPos={"bottom"}
        w={"full"}
        h={useBreakpointValue({ base: "30vh", sm: "30vh", lg: "50vh" })}
        backgroundSize={"cover"}
        pos={"relative"}
        marginBottom={50}
        top={55}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          pos={"relative"}>
          <Stack maxW={"xl"} align={"center"} spacing={6} pos={"relative"}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "2xl",
                md: "4xl",
                lg: "6xl",
                sm: "xl"
              })}
              maxW={800}
              textAlign={"end"}>
              Contact Us
            </Text>
            <div
              style={{
                borderWidth: "1px",
                width: `${"Contact Us".length + 1}em`
              }}
            />
            <Text
              maxW={300}
              flexWrap={"initial"}
              color={"white"}
              fontWeight={30}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "xl",
                md: "xl",
                lg: "xl",
                sm: "xl"
              })}
              textAlign={"center"}
              wordBreak={"break-word"}>
              We would Be Happy To Assist You Call Us +1 000 000 000 Email:
              XXXX@XXXXXX.com
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <SimpleGrid spacing={20} minChildWidth={200} margin={10} paddingTop={10}>
        <Box>
          <Heading textAlign={"center"}>
            We are here for you! Our team eagerly awaits your message.
          </Heading>
          <Text
            color={"rgba(1,1,1,0.4)"}
            fontWeight={200}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "xl",
              md: "2xl",
              lg: "3xl",
              sm: "xl"
            })}
            maxW={800}
            textAlign={"center"}
            margin={5}>
            Connect and let us make your wishes come true! Your step is the
            beginning of something great. Contact us now!
          </Text>
        </Box>
        <Box borderWidth={0.5} padding={5} borderRadius={10} boxShadow={"2xl"}>
          <ContactForm />
        </Box>
      </SimpleGrid>
    </>
  );
}
