"use client";
import { Inter } from "next/font/google";
import {
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ProductCarousel from "@/app/components/Swiper/productSwiper";
import Carousel from "@/app/components/Swiper/swiper";
import { useState, useEffect } from "react";
import { brandImages, products, bannerImages } from "./../../utils/assetIndex";
// import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  const [brand, setbrand] = useState(1);
  const [product, setproduct] = useState(1);
  const [selectedProduct, setselectedProduct] = useState(1);
  console.log(products[brand].products);
  // useEffect(() => {
  //   setproduct();

  //   return () => {
  // "/pageEnd.webp"
  //   }
  // }, [])

  return (
    <>
      <Navbar isHomePage={false} />
      <Flex
        bgImage={"/pageEnd.webp"}
        bgPos={"center"}
        bgSize={"cover"}
        // bgColor={"red"}
        pt={50}
        alignItems="center"
        justify={"center"}
        w="100%"
        h={useBreakpointValue({ base: "20vh", sm: "20vh", lg: "40vh" })}
      >
        <VStack w={"100%"}>
          <Heading color={"white"}>Products</Heading>
          <Text as="h4" fontSize="xl" color={"white"}>
            Selection of High-Quality Partners
          </Text>
        </VStack>
      </Flex>
      <Flex pt={10} width={"100%"} justifyContent={"center"} h={"100%"}>
        <HStack width={"70%"} h={"100%"} justifyContent={"center"}>
          <VStack flex={1} maxW={400}>
            <Box
              maxW={"100%"}
              borderWidth={2}
              borderRadius={8}
              borderColor={"gray.300"}
            >
              <ProductCarousel
                products={products[brand].products}
                perView={1}
              ></ProductCarousel>
            </Box>
            <Box maxW="container.md">
              <Text justifyContent={"center"} textAlign={"center"}>
                Other products from this brand
              </Text>
              <Carousel
                products={products[brand].products}
                perView={3}
              ></Carousel>
            </Box>
          </VStack>
          <Center
            flex={1}
            justifyContent={"center"}
            alignContent={"center"}
            height="300px"
          >
            <Divider orientation="vertical" />
          </Center>
          <VStack flex={1}>
            <Heading>{products[brand].products[selectedProduct].title}</Heading>
            <Box maxW={"50%"} justifyContent={"center"} alignContent={"center"}>
              <Text textAlign={"center"}>
                {products[brand].products[selectedProduct].description}
              </Text>
            </Box>
            <Image alt="brand" src={products[brand].logo}></Image>
          </VStack>
        </HStack>
      </Flex>
      <Flex pt={10} width={"100%"} justifyContent={"center"} h={"100%"}>
        <VStack pb={20} justify={"center"} align={"center"}>
          <Heading>About The Vendor</Heading>
          <Box maxW={"50%"}>
            <Text pt={5} textAlign={"justify"}>
              {brandImages[brand].description}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
