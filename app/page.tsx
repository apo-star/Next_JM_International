"use client";

import { useEffect, useRef, useState } from "react";

// Components imports
import Carousel from "./components/Swiper/swiper";
import BrandCarousel from "./components/Swiper/brandSwiper";
import {
  Container,
  Image,
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

  const handleModalToggle = (state: boolean) => {
    setModalToggle(state);
  };
  return (
    <>
      <Navbar isHomePage={true} />
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
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                International Authorized Distributor of Top-Notch Engineered
                Parts
              </Text>
              <Button
                bg={"red"}
                size={"lg"}
                rounded={"2xl"}
                color={"white"}
                _hover={{ bg: "white", color: "red" }}
                onClick={() => {
                  // Add your contact page route or any specific action
                  handleModalToggle(!modalToggle);
                }}
              >
                Contact Us
              </Button>
            </VStack>
          </VStack>
        </Flex>
      </Box>
      {/* <VStack alignItems="center" w="100%"> */}
      {/* Brands Section */}
      <Flex pb={20} pt={10} alignItems="center" justify={"center"} w="100%">
        <VStack spacing={4} w={"75%"}>
          <Heading as="h3" size="2xl">
            Our Brands
          </Heading>
          <Text as="h4" fontSize="xl" color={"rgba(1,1,1,0.4)"}>
            Top-tier parts for your company
          </Text>

          {/* <HStack spacing={10} wrap="wrap" justifyContent="center" mt={5}> */}
          <Box maxW="container.xl">
            <BrandCarousel brands={brandImages} perView={5} />
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
        bg={"rgba(220, 28, 36,1)"}
        w="100%"
        as="div"
        justify="center"
        spacing={8}
      >
        <Heading color={"white"} as="h1" size="2xl">
          Trailer Truck Parts Wholesale
        </Heading>
        <Divider maxWidth={500} />
        <Text color={"white"} maxW={800} fontSize="xl" textAlign="center">
          Your one-stop solution for high-quality trailer truck parts at
          competitive prices. Discover our wide range of parts and benefit from
          our exceptional customer service.
        </Text>
        <Button
          size="lg"
          colorScheme="whiteAlpha"
          _hover={{ bg: "white", color: "red" }}
          onClick={() => {
            // Add your contact page route or any specific action
            handleModalToggle(!modalToggle);
          }}
        >
          Contact Us
        </Button>
      </VStack>
      {/* Featured Products Section */}
      <Flex w={"100%"} justify={"center"}>
        <VStack py={6} w="75%">
          <Heading p={4} as="h2" size="xl">
            Featured Products
          </Heading>
          <Text fontSize="xl" textAlign={"justify"} color={"rgba(1,1,1,0.8)"}>
            Vast assortment of up-to-date generation parts for your business
          </Text>
          <HStack w="75%" dir="row" alignItems={"center"} justify={"center"}>
            <Box minW={"container.xs"} maxW="container.lg">
              <StatGroup>
                <HStack w={"lg"} spacing={8}>
                  <Stat>
                    <StatLabel fontSize={"2xl"}>Products</StatLabel>
                    <HStack>
                      <StatArrow type="increase" />
                      <StatNumber>150,000</StatNumber>
                    </HStack>
                    <StatHelpText>Currently Available</StatHelpText>
                  </Stat>
                  <Stat>
                    <StatLabel fontSize={"2xl"}>Brands</StatLabel>
                    <HStack>
                      <StatNumber>7</StatNumber>
                    </HStack>
                    <StatHelpText>Quality Driven</StatHelpText>
                  </Stat>
                </HStack>
              </StatGroup>
            </Box>
            <Spacer />
            <Box maxW="container.md">
              <ProductCarousel products={featuredProdcuts} perView={3} />
            </Box>
          </HStack>
        </VStack>
      </Flex>
      {/* Catalog Section */}
      <Divider></Divider>
      <Flex bg={"#FFF"} justify="center" py={6}>
        <VStack>
          <Heading p={10} zIndex={1}>
            Catalogs
          </Heading>
          <HStack>
            <Image
              boxSize="300px"
              objectFit="contain"
              alt="Contact Us"
              src={"/quantumCatalogo2022.jpg"}
            ></Image>
            <Image
              boxSize="300px"
              objectFit="contain"
              alt="Contact Us"
              src={"/eagCatalogo2022.jpg"}
            ></Image>
          </HStack>
        </VStack>
      </Flex>
      {/* Contact Us Section */}
      <HStack
        w="100%"
        bgImage={"/white-red-arrow.png"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"right"}
        bgColor={"#b3b3b3"}
      >
        <Image
          boxSize="500px"
          w={"650px"}
          h={"500px"}
          objectFit="cover"
          alt="Contact Us"
          src={"/comp4H.jpg"}
        />
        <VStack dir="row" w={"50%"}>
          {/* <div style={{ backgroundColor: "#fff", justifyContent: "center" }}> */}
          {/* <Flex justifyContent="center"> */}
          <Box bg={"#fff"} p={20} marginLeft={-60} borderRadius={"50px"}>
            <Heading zIndex={1}>Contact Us</Heading>
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
        {/* <Image alt="pageEnd" src="/pageEnd.jpg" /> */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="linear-gradient(to top, rgba(255,255,255,.2), rgba(255,255,255,1))"
          // bgSize="cover"
          // bgPosition="bottom"
        />
      </Box>
      {/* </VStack> */}
      {/* </VStack> */}
      {/*Form Modal */}
      <FormModal open={modalToggle} setOpen={handleModalToggle} />
    </>
  );
}
