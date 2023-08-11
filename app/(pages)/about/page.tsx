/** @format */

"use client";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar/navbar";
import "./page.css";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Divider,
  HStack,
  Image,
} from "@chakra-ui/react";
import { brandImages } from "./../../utils/assetIndex";
import TextWithLine from "@/app/components/TextDecoration/textDecoration";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Navbar isHomePage={true} />
      <Flex
        bgImage="/pageEnd.webp"
        bgPos={"bottom"}
        w={"full"}
        h={useBreakpointValue({ base: "20vh", sm: "20vh", lg: "40vh" })}
        backgroundSize={"cover"}
        pos={"relative"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          pos={"relative"}
        >
          <Stack
            maxW={"xl"}
            align={"flex-start"}
            spacing={6}
            pos={"relative"}
            alignItems="center"
            justify={"center"}
          >
            <Heading
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "2xl",
                md: "3xl",
                lg: "5xl",
                sm: "xl",
              })}
              maxW={800}
            >
              About Us
            </Heading>
            <div
              style={{
                borderWidth: "1px",
                width: `${"About us".length - 1}em`,
              }}
            />
            <Text
              color={"white"}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "2xl",
                md: "2xl",
                lg: "xl",
                sm: "xl",
              })}
              maxW={800}
            >
              Why we are your best option
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Flex w={"full"} justify={"center"} align={"center"}>
        <VStack w={"full"}>
          <HStack p={20} spacing={20} justify={"center"} w={"full"}>
            <VStack maxW={"3xl"} spacing={"6"}>
            <TextWithLine text='Our Motivation' />
              <Divider />
              <Text
                fontSize="xl"
                textAlign={"justify"}
                color={"rgba(1,1,1,0.8)"}
              >
                The truck spare parts and accessories market is becoming more{" "}
                <b>demanding and competitive</b> every day to win the preference
                of mechanics, which is why parts distributors look for reliable
                suppliers with good quality products. So the <b>mechanic</b>{" "}
                notices the difference and appreciates it.
              </Text>
            </VStack>
            <VStack>
              <Image
                borderRadius="180px"
                maxH={"400px"}
                minW={"700px"}
                objectFit="contain"
                alt="Contact Us"
                src={"/comp1H.jpg"}
                className="displayImage"
              />
            </VStack>
          </HStack>
          <HStack spacing={20} pt={8} justify={"center"}>
            <VStack>
              <Image
                borderRadius="180px"
                maxH={"400px"}
                minW={"700px"}
                objectFit="contain"
                alt="Contact Us"
                src={"/comp7H.jpg"}
                className="displayImage"
              />
            </VStack>
            <VStack maxW={"3xl"} spacing={"6"} p={20}>
              <TextWithLine text="Our Proposal" />
              <Divider />
              <Text
                fontSize="xl"
                textAlign={"justify"}
                color={"rgba(1,1,1,0.8)"}
              >
                With more than 15 years of experience in the distribution of
                quality products, JM Internacional offers excellence in spare
                parts and accessories manufactured by suppliers with a quality
                management system certified under the ISO/TS 16949 certification
                standard that supports our guarantee that allows us to be
                present throughout Latin America and the Caribbean with our star
                brands:
              </Text>
              <HStack>
                <Image src={brandImages[2].logo}></Image>
                <Image src={brandImages[1].logo}></Image>
                <Image src={brandImages[3].logo}></Image>
              </HStack>
            </VStack>
          </HStack>
          <HStack
            spacing={20}
            p={20}
            justify={"center"}
            w={"full"}
            bgColor={"rgba(0,0,0,.8)"}
          >
            <VStack maxW={"4xl"} spacing={"6"}>
              <Heading size={"2xl"} color={"white"}>
                We Are Your Ally
              </Heading>
              <Divider />
              <Text fontSize="xl" textAlign={"justify"} color={"white"}>
                Given the above, by marketing our products, you eliminate
                complaints and claims, generating the trust and loyalty of the
                mechanics. But, JM Internacional gives you much more: product
                guarantee, more than 2,000 products in our warehouses available
                for immediate dispatch and launch of new products every month,
                all certified by our quality. We are located in Panama, which
                allows us to have frequent departures of land and sea cargo to
                all of Latin America and the Caribbean. In these times timely
                communication is vital. So we have these tools for our products:
                Website with online catalogs, social networks. Staying one step
                ahead of the rest is easy, just check out our total quality. JM
                International is your best option.
              </Text>
              <Image src={brandImages[0].logo} alt={brandImages[0].name} />
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}
