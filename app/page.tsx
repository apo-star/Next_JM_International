/** @format */

"use client";

import { useEffect, useRef, useState } from "react";

// Components imports
import BrandCarousel from "./components/Swiper/brandSwiper";
import {
  Container,
  Image,
  SimpleGrid,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar/navbar";

//reCaptcha API Key 6Lfab5olAAAAAA0wH9-1vXhWsfGg_FKR-FyhN64NX

//Fonts import
import { Inter } from "next/font/google";

//Chakra UI imports
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Divider,
  Stack,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";

import FormModal from "./components/Modal/modal";
import ContactForm from "./components/ContactForm/contactForm";
import { brandImages, featuredProdcuts } from "./utils/assetIndex";
import ProductCarousel from "./components/Swiper/productSwiper";
import TextWithLine from "./components/TextDecoration/textDecoration";
import { getTranslation } from "./utils/utils";
import { useTranslation } from "./hooks/useTranslation";
import "./styles.home.css";

const inter = Inter({ subsets: ["latin"] });
const brands = [
  { id: 1, name: "Eagle Parts", logo: "/eaglePartsLogo.webp" },
  { id: 2, name: "Quantum Trux Parts", logo: "/quantumTruxPartsLogo.webp" },
  { id: 3, name: "USA PRO", logo: "/usaProLogo.webp" },
  { id: 4, name: "JM Internacional", logo: "/jm-logo-transparent-bg-min.webp" },
  { id: 5, name: "Brand 5", logo: "/eaglePartsLogo.webp" },
  { id: 6, name: "Brand 6", logo: "/quantumTruxPartsLogo.webp" },
  { id: 7, name: "Brand 7", logo: "/usaProLogo.webp" },
];

export default function Home() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const [modalToggle, setModalToggle] = useState(false);
  const { t } = useTranslation();

  const handleModalToggle = (state: boolean) => {
    setModalToggle(state);
  };

  const value = useBreakpointValue({
    sm: 2,
    xl: 3,
    l: 4,
    md: 5,
  });

  const display = () => {
    let active = false;
    if (value === 2) {
      active = true;
    } else if (value === undefined) {
      active = true;
    }
    return active;
  };
  return (
    <Box w={"100%"} padding={0} margin={0}>
      <Navbar isHomePage={true} />
      <Box w={"full"}>
        <Box pos={"relative"} h={"60vh"} overflow={"hidden"}>
          <Box
            as="video"
            autoPlay
            loop
            muted
            playsInline
            src="/homePageBanner.mp4"
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          />
          <Flex
            pos="absolute"
            alignItems="center"
            justifyContent="center"
            w={"full"}
            h={"65vh"}
            top={0}
            bottom={0}
            right={0}
            left={0}
          >
            <VStack
              w={"full"}
              h={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
              <VStack
                maxW={"2xl"}
                align={"center"}
                justifyContent={"center"}
                spacing={6}
              >
                <Text
                  textAlign={"center"}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={useBreakpointValue({
                    base: "3xl",
                    md: "4xl",
                  })}
                >
                  {t("TITLE_HOME")}
                </Text>
                <Button
                  bg={"#ED1C24"}
                  size={"lg"}
                  rounded={"2xl"}
                  color={"white"}
                  _hover={{ bg: "white", color: "#ED1C24" }}
                  onClick={() => {
                    // Add your contact page route or any specific action
                    handleModalToggle(!modalToggle);
                  }}
                >
                  {t("CONTACT")}
                </Button>
              </VStack>
            </VStack>
          </Flex>
        </Box>
        {/* <VStack alignItems="center" w="100%"> */}
        {/* Brands Section */}
        <Flex pb={20} pt={10} alignItems="center" justify={"center"} w="100%">
          <VStack spacing={4} w={"75%"}>
            <TextWithLine text={t("Our_Brands")} />
            <Text as="h4" fontSize="xl" color={"rgba(1,1,1,0.5)"}>
              {t("TOP_TIER")}
            </Text>
            {/* <HStack spacing={10} wrap="wrap" justifyContent="center" mt={5}> */}
            <Box
              maxW={useBreakpointValue({
                base: "container.ls",
                sm: "container.sm",
                xl: "container.xl",
                md: "container.md",
              })}
            >
              <BrandCarousel
                brands={brandImages}
                perView={
                  useBreakpointValue({
                    base: 1,
                    sm: 1,
                    xl: 5,
                    l: 5,
                    md: 3,
                  }) ?? 1
                }
              />
            </Box>
            {/* {brands.map((brand) => (
                <Link key={brand.id} onClick={() => {}}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    boxSize="200px"
                    objectFit="contain"
                    // Add hover styles and animation here
                  />
                </Link>
              ))} */}
            {/* </HStack> */}
          </VStack>
        </Flex>
        {/* Presentation */}
        <VStack
          pb={20}
          pt={10}
          bg={"#ED1C24"}
          w="100%"
          as="div"
          justify="center"
          spacing={8}
          padding={3}
        >
          <Heading color={"white"} as="h1" size="2xl" textAlign={"center"}>
            {t("TRAILER_TRUK")}
          </Heading>
          <Divider maxWidth={500} />
          <Text color={"white"} maxW={"xl"} fontSize="xl" textAlign="center">
            {t("TRAILER_TRUNK_CONTENT")}
          </Text>
          <Button
            size="lg"
            colorScheme="whiteAlpha"
            _hover={{ bg: "white", color: "#ED1C24" }}
            onClick={() => {
              // Add your contact page route or any specific action
              handleModalToggle(!modalToggle);
            }}
          >
            {t("CONTACT")}
          </Button>
        </VStack>
        {/* Featured Products Section */}
        <Flex w={"100%"} justify={"center"}>
          <VStack py={6} w="75%">
            <TextWithLine text={t("About_Vendor")} />
            <Text
              fontSize="xl"
              maxW={"md"}
              textAlign={"center"}
              color={"rgba(1,1,1,0.5)"}
            >
              {t("Vast_Assortment")}
            </Text>
            <SimpleGrid
              spacing={20}
              minChildWidth={200}
              margin={10}
              paddingTop={10}
              alignItems={"center"}
            >
              <Box minW={"container.xs"} maxW="container.lg">
                <StatGroup>
                  <HStack w={"lg"} spacing={8}>
                    <Stat>
                      <StatLabel fontSize={"2xl"}>{t("Products")}</StatLabel>
                      <HStack>
                        <StatArrow type="increase" />
                        <StatNumber>150,000</StatNumber>
                      </HStack>
                      <StatHelpText>{t("Currently_Available")}</StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel fontSize={"2xl"}>{t("Brands")}</StatLabel>
                      <HStack>
                        <StatNumber>7</StatNumber>
                      </HStack>
                      <StatHelpText>{t("Quality_Driven")}</StatHelpText>
                    </Stat>
                  </HStack>
                </StatGroup>
              </Box>
              <Box maxW="container.md">
                <ProductCarousel
                  products={featuredProdcuts}
                  perView={useBreakpointValue({
                    base: 1,
                    sm: 1,
                    xl: 3,
                    l: 3,
                    md: 1,
                  }) ?? 1}
                />
              </Box>
            </SimpleGrid>
          </VStack>
        </Flex>
        {/* Catalog Section */}
        <Divider></Divider>
        <Flex bg={"#B3B3B3"} justify="center" py={6} padding={10}>
          <VStack>
            <Box padding={5} maxW={"80%"}>
              <TextWithLine
                undecorate={display()}
                color="#ED1C24"
                lineColor="black"
                text={t("Review")}
              />
              <Text
                maxWidth={"90%"}
                fontSize="xl"
                maxW={"md"}
                textAlign={"center"}
                color={"rgba(1,1,1,0.5)"}
              >
                {t("Need_Clients")}
              </Text>
            </Box>

            <div className="row-card">
              <Image
                boxSize="300px"
                objectFit="contain"
                alt="Contact Us"
                src={"/quantumCatalogo2022.jpg"}
                margin={10}
              />
              <Image
                boxSize="300px"
                objectFit="contain"
                alt="Contact Us"
                src={"/eagCatalogo2022.jpg"}
                margin={10}
              />
            </div>
          </VStack>
        </Flex>
        {/* Contact Us Section */}
        <HStack
          justifyContent={"center"}
          alignItems={"center"}
          bgImage={"/white-red-arrow.png"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPos={"right"}
          bgColor={"#b3b3b3"}
        >
          <Image
            className="image-contact"
            boxSize="500px"
            w={"650px"}
            h={"500px"}
            objectFit="cover"
            alt="Contact Us"
            borderRadius={10}
            src={"/comp4H.jpg"}
          />
          <VStack dir="row" maxW={"90%"}>
            {/* <div style={{ backgroundColor: "#fff", justifyContent: "center" }}> */}
            {/* <Flex justifyContent="center"> */}
            <Box bg={"#fff"} p={20} borderRadius={"50px"} margin={10}>
              <Heading zIndex={1}>{t("CONTACT")}</Heading>
              {/* <Spacer/> */}
              <ContactForm />
            </Box>
            {/* </Flex> */}
            {/* </div> */}
          </VStack>
        </HStack>

        <Box
          // ref={ref}
          h={"350px"}
          w={"100%"}
          pos={"sticky"}
          bg="white"
          // bgPosition
          overflow="hidden"
          bgPos={"bottom"}
          bgImage={"/pageEnd.jpg"}
        >
          {/* <Image alt='pageEnd' src='/pageEnd.jpg' />
           */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage="linear-gradient(to top, rgba(255,255,255,.2), rgba(255,255,255,1))"
            // bgSize="cover"
            // bgPosition="bottom"
          />{" "}
        </Box>
        {/* </VStack> */}
        {/* </VStack> */}
        {/*Form Modal */}
        <FormModal open={modalToggle} setOpen={handleModalToggle} />
      </Box>
    </Box>
  );
}
