"use client";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar/navbar";
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
          <Stack maxW={"xl"} align={"flex-start"} spacing={6} pos={"relative"}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({
                base: "2xl",
                md: "4xl",
                lg: "6xl",
                sm: "xl",
              })}
              maxW={800}
            >
              About Us
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Flex w={"full"} p={4} justify={"center"} align={"center"}>
        <VStack>
          <VStack maxW={"5xl"} spacing={"6"}>
            <Heading size={"3xl"}>Our Motivation</Heading>
            <Divider />
            <Text fontSize="xl" textAlign={"center"}>
              The truck spare parts and accessories market is becoming more{" "}
              <b>demanding and competitive</b> every day to win the preference
              of mechanics, which is why parts distributors look for reliable
              suppliers with good quality products. So the <b>mechanic</b>{" "}
              notices the difference and appreciates it.
            </Text>
          </VStack>
          <VStack>
            <Image
              borderRadius="10px"
              maxH={"400px"}
              minW={"700px"}
              objectFit="contain"
              alt="Contact Us"
              src={"/comp1H.jpg"}
            />
          </VStack>
          <VStack maxW={"5xl"} spacing={"6"}>
            <Heading size={"3xl"}>Our Proposal</Heading>
            <Divider />
            <Text fontSize="xl" textAlign={"center"}>
              With more than 15 years of experience in the distribution of
              quality products, JM Internacional offers excellence in spare
              parts and accessories manufactured by suppliers with a quality
              management system certified under the ISO/TS 16949 certification
              standard that supports our guarantee that allows us to be present
              throughout Latin America and the Caribbean with our star brands: •
              QUANTUM Trux Parts • EAGLE Chassis Parts • USA Pro
            </Text>
          </VStack>
          <VStack>
            <Image
              borderRadius="10px"
              maxH={"400px"}
              minW={"700px"}
              objectFit="contain"
              alt="Contact Us"
              src={"/comp7H.jpg"}
            />
          </VStack>
          <VStack maxW={"5xl"} spacing={"6"}>
            <Heading size={"3xl"}>We Are Your Ally</Heading>
            <Divider />
            <Text fontSize="xl" textAlign={"center"}>
              Given the above, by marketing our products, you eliminate
              complaints and claims, generating the trust and loyalty of the
              mechanics. But, JM Internacional gives you much more: product
              guarantee, more than 2,000 products in our warehouses available
              for immediate dispatch and launch of new products every month, all
              certified by our quality. We are located in Panama, which allows
              us to have frequent departures of land and sea cargo to all of
              Latin America and the Caribbean. In these times timely
              communication is vital. So we have these tools for our products:
              Website with online catalogs, social networks. Staying one step
              ahead of the rest is easy, just check out our total quality. JM
              International is your best option.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}
