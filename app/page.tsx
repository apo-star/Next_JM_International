"use client";

import { useEffect, useRef, useState } from "react";

// Components imports
import Carousel from "./components/Swiper/swiper";
import {
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
import { useParallax, Parallax, ParallaxBanner } from "react-scroll-parallax";

//reCaptcha API Key 6Lfab5olAAAAAA0wH9-1vXhWsfGg_KR-FyhN64NX

//Fonts import
import { Inter } from "next/font/google";

//Chakra UI imports
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Container,
  VStack,
  HStack,
  Link,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

import FormModal from "./components/Modal/modal";
import ContactForm from "./components/ContactForm/contactForm";

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
  // const boxRef = useRef(null);
  // const { ref } = useParallax({ speed: 10 });

  const handleModalToggle = (state: boolean) => {
    setModalToggle(state);
  };
  return (
    <>
      <Navbar isHomePage={true} />
      <VStack spacing={0} width={"100%"}>
        {/* Hero */}
        <Flex
          as="video"
          autoPlay
          loop
          muted
          src="/homePageBanner.mp4"
          objectFit="cover"
          sx={{ aspectRatio: "16/9" }}
          // pos="absolute"
          zIndex={-1}
          w={"100%"}
          h={"700px"}
        >
          {/* <Heading pos="relative" zIndex={1}>
            Best Brands For You
          </Heading> */}
          {/* <Flex /> */}
        </Flex>
        {/* <VStack alignItems="center" w="100%"> */}
        {/* Brands Section */}
        <Flex pb={20} pt={10} alignItems="center" justify={"center"} w="100%">
          <VStack spacing={4} w={"75%"}>
            <Heading as="h3" size="2xl">
              Our Brands
            </Heading>
            <Text as="h4" fontSize="xl">
              Top-tier parts for your company
            </Text>

            {/* <HStack spacing={10} wrap="wrap" justifyContent="center" mt={5}> */}
            <Box maxW="container.xl">
              <Carousel products={brands} perView={5} />
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
            competitive prices. Discover our wide range of parts and benefit
            from our exceptional customer service.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
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
            <Heading as="h2" size="xl">
              Featured Products
            </Heading>
            <HStack w="75%" dir="row" alignItems={"center"} justify={"center"}>
              <Box minW={"container.xs"} maxW="container.lg">
                <StatGroup>
                  <Stat>
                    <StatLabel>Sent</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Box>
              <Spacer />
              <Box maxW="container.md">
                <Carousel products={brands} perView={3} />
              </Box>
            </HStack>
          </VStack>
        </Flex>
        {/*Catalog Section*/}
        <Flex bg={"#b3b3b3"} justify="center">
          <Heading zIndex={1}>Catalogs</Heading>
        </Flex>
        {/* Contact Us Section */}
        <VStack w="100%">
          <Heading mt={8} zIndex={1}>
            Contact Us
          </Heading>
          <HStack w="75%">
            <Flex>
              <Image
                boxSize="300px"
                objectFit="contain"
                alt="Contact Us"
                src={"/salesman-min-min.webp"}
              />
            </Flex>
            <Spacer />
            <Flex>
              <ContactForm />
            </Flex>
          </HStack>
        </VStack>
        <Box
          // ref={ref}
          h={"500px"}
          w={"100%"}
          pos={"relative"}
          bg="white"
          // overflow="hidden"
        >
          <ParallaxBanner
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
            layers={[{ image: "/pageEnd.jpg", speed: 20 }]}
          />
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
      </VStack>
      {/*Form Modal */}
      <FormModal open={modalToggle} setOpen={handleModalToggle} />
    </>
  );
}
