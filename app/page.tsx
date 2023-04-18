"use client";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
// import "swiper/css/navigation";

//reCaptcha API Key 6Lfab5olAAAAAA0wH9-1vXhWsfGg_KR-FyhN64NX

//Fonts import
import { Inter } from "next/font/google";

//Chakra UI imports
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Container,
  VStack,
  HStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const brands = [
  { id: 1, name: "Eagle Parts", logo: "/eaglePartsLogo.png" },
  { id: 2, name: "Quantum Trux Parts", logo: "/quantumTruxPartsLogo.png" },
  { id: 3, name: "USA PRO", logo: "/usaProLogo.png" },
  { id: 4, name: "JM Internacional", logo: "/jm-logo-transparent-bg.png" },
  { id: 5, name: "Brand 5", logo: "/eaglePartsLogo.png" },
  { id: 6, name: "Brand 6", logo: "/quantumTruxPartsLogo.png" },
  { id: 7, name: "Brand 7", logo: "/usaProLogo.png" },
];

export default function Home() {
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <Flex direction="column">
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
        <VStack
          w="100%"
          border="2px"
          as="div"
          bgImage="url('/wave-haikei-top.png')"
          justify="center"
          bgRepeat="repeat-x"
        >
          <Heading mt={10} as="h1" size="2xl">
            Trailer Truck Parts Wholesale
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Your one-stop solution for high-quality trailer truck parts at
            competitive prices. Discover our wide range of parts and benefit
            from our exceptional customer service.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            onClick={() => {
              // Add your contact page route or any specific action
              alert("Contact Us button clicked");
            }}
          >
            Contact Us
          </Button>
        </VStack>
        <Box mt={10}>
          <VStack spacing={6} alignItems="center" w="100%">
            <Heading as="h2" size="xl">
              Our Brands
            </Heading>
            <HStack spacing={10} wrap="wrap" justifyContent="center" mt={5}>
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  onClick={() => {
                    console.log(`Clicked on ${brand.name}`);
                  }}
                >
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
        </Box>
        <VStack spacing={6} alignItems="center" w="100%" py={6} bg={bg}>
          <Heading as="h2" size="xl">
            Featured Products
          </Heading>
          <Box width="100%" maxW="container.lg">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              slidesPerGroup={3}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <Box p={4} textAlign="center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      boxSize="200px"
                      objectFit="contain"
                      mb={4}
                    />
                    <Text fontSize="lg" fontWeight="bold">
                      {brand.name}
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </VStack>
        <Flex justify="center">
          <Heading zIndex={1}>Our Family of Brands</Heading>
        </Flex>
        <Flex justify="center">
          <Heading zIndex={1}>Exclusive Partners</Heading>
        </Flex>
        <Flex
          bgImage="url('/stacked-steps-haikei-bottom.png')"
          bgSize={"contain"}
          justify="center"
        >
          <Heading zIndex={1}>New Products</Heading>
        </Flex>
      </VStack>
    </Flex>
  );
}
