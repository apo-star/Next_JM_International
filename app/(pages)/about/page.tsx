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
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { brandImages } from "./../../utils/assetIndex";
import TextWithLine from "@/app/components/TextDecoration/textDecoration";
import { useTranslation } from "@/app/hooks/useTranslation";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { t } = useTranslation();

  return (
    <Box alignItems={"center"}>
      <Navbar isHomePage={true} />
      <Flex
        bgPos={"bottom"}
        w={"full"}
        h={useBreakpointValue({ base: "35vh", sm: "35vh", lg: "50vh" })}
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
      <Box width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <div className="container2">
            <TextWithLine text="Our Motivation" undecorate />
            <Divider />
            <Text fontSize="xl" textAlign={"justify"} color={"rgba(1,1,1,0.8)"}>
              The truck spare parts and accessories market is becoming more{" "}
              <b>demanding and competitive</b> every day to win the preference
              of mechanics, which is why parts distributors look for reliable
              suppliers with good quality products. So the <b>mechanic</b>{" "}
              notices the difference and appreciates it.
            </Text>
          </div>
          <Box>
            <Image
              borderRadius="180px"
              maxH={"400px"}
              minW={"360px"}
              objectFit="contain"
              alt="Contact Us"
              src={"/comp1H.jpg"}
              className="displayImage"
            />
          </Box>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <VStack className="img">
            <Image
              borderRadius="180px"
              maxH={"400px"}
              minW={"360px"}
              objectFit="contain"
              alt="Contact Us"
              src={"/comp2H.jpg"}
              className="displayImage"
            />
          </VStack>
          <div className="container2">
            <TextWithLine text="Our Proposal" undecorate />
            <Divider />
            <Text fontSize="xl" textAlign={"justify"} color={"rgba(1,1,1,0.8)"}>
              {t("ABOUT_SECOND")}
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Image
                src={brandImages[2].logo}
                alt={brandImages[2].description}
                maxWidth={"150px"}
                maxHeight={"120px"}
                margin={3}
              />
              <Image
                src={brandImages[1].logo}
                alt={brandImages[2].description}
                maxWidth={"150px"}
                maxHeight={"120px"}
                margin={3}
              />
              <Image
                src={brandImages[3].logo}
                alt={brandImages[2].description}
                maxWidth={"150px"}
                maxHeight={"120px"}
                margin={3}
              />
            </div>
          </div>
        </div>

        <HStack
          spacing={20}
          justify={"center"}
          w={"full"}
          bgColor={"rgba(0,0,0,.8)"}
        >
          <VStack spacing={"6"} padding={10}>
            <Heading size={"2xl"} color={"white"}>
              We Are Your Ally
            </Heading>
            <Divider />
            <Text fontSize="xl" textAlign={"justify"} color={"white"}>
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
            <Image
              maxH={"300px"}
              src={brandImages[0].logo}
              alt={brandImages[0].name}
            />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
