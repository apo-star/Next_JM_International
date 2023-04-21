"use client";

import { useState } from "react";

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
import { SP } from "next/dist/shared/lib/utils";

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
      <Flex direction="column">
        {/* Hero */}
        <Box boxSize={"full"}>
          <Heading pos="absolute" zIndex={1}>
            Best Brands For You
          </Heading>
          <Flex
            as="video"
            autoPlay
            loop
            muted
            src="/homePageBanner.mp4"
            objectFit="contain"
            sx={{
              aspectRatio: "16/9",
            }}
            pos="relative"
            overflow="hidden"
            zIndex={-1}
          ></Flex>
        </Box>
        <VStack alignItems="center" w="100%">
          {/* Presentation */}
          <VStack w="100%" as="div" justify="center" spacing={8}>
            <Heading as="h1" size="2xl">
              Trailer Truck Parts Wholesale
            </Heading>
            <Divider
              maxWidth={500}
              // colorScheme="red"
              // borderRadius="lg"
              // variant="thick"
              // size="md"
              // orientation="horizontal"
            />
            <Text maxW={800} fontSize="xl" textAlign="center">
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
          {/* Brands Section */}
          <Flex py={6} bg={bg} alignItems="center" justify={"center"} w="100%">
            <VStack w={"75%"}>
              <Heading as="h2" size="xl">
                Our Brands
              </Heading>
              <HStack spacing={10} wrap="wrap" justifyContent="center" mt={5}>
                {brands.map((brand) => (
                  <Link key={brand.id} onClick={() => {}}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      boxSize="200px"
                      objectFit="contain"
                      // Add hover styles and animation here
                    />
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Flex>
          {/* Featured Products Section */}
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
                <Carousel products={brands} />
              </Box>
            </HStack>
          </VStack>
          {/* Contact Us Section */}
          <VStack bg={bg} w="100%">
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
          <Flex justify="center">
            <Heading zIndex={1}>Catalogs</Heading>
          </Flex>
        </VStack>
      </Flex>
      {/*Form Modal */}
      <FormModal open={modalToggle} setOpen={handleModalToggle} />
    </>
  );
}
