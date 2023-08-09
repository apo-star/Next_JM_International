/** @format */

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
  useBreakpointValue
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ProductCarousel from "@/app/components/Swiper/productSwiper";
import Carousel from "@/app/components/Swiper/swiper";
import { useState, useEffect } from "react";
import {
  brandImages,
  products as DATA,
  bannerImages
} from "./../../utils/assetIndex";
// import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

const getFilterProduct = async (info: {
  DATA: [
    {
      brand: string;
      logo: string;
      id: number;
      products: {
        id: number;
        title: string;
        images: string[];
        description: string;
      };
    }
  ];
  brandName: string;
}) => {
  const noSpaces = info.brandName.replace(/\s/g, "");
  const dataProductos = info.DATA.filter(
    (prod) => prod.brand.toUpperCase() === noSpaces.toUpperCase()
  );

  return dataProductos ?? info.DATA[0];
};

const getFilterBrand = async (info: any) => {
  const dataProductos = info.brandImages.filter(
    (prod: any) => prod.name.toUpperCase() === info.brandName.toUpperCase()
  );

  return dataProductos ?? info.brandImages[0];
};

// interface prod{
//   product: [
//     {
//       brand: string;
//       logo: string;
//       id: number;
//       products: {
//         id: number;
//         title: string;
//         images: string[];
//         description: string;
//       };
//     }
//   ];
// }

export default function Products({ searchParams }: any) {
  const brandName = searchParams?.brandName;
  const [brand] = useState(brandName);
  const [products, setProducts] = useState<any>({});
  const [selectedProduct, setselectedProduct] = useState(1);
  const [currentBrand, setCurrentBrand] = useState({});

  useEffect(() => {
    (async () => {
      const brandInfo = await getFilterBrand({ brandImages, brandName });
      const productFilter = await getFilterProduct({ DATA, brandName });
      if (productFilter.length > 0) {
        setProducts(productFilter[0]);
      }
      if (brandInfo.length > 0) {
        setCurrentBrand(brandInfo[0]);
      }
    })();
    return () => {};
  }, []);

  // console.log("products", products);
  // console.log("selectedProduct", selectedProduct);
  // console.log("Current: ", currentBrand);
  return (
    <>
      <Navbar isHomePage={false} />
      <Flex
        bgImage={"/pageEnd.webp"}
        bgPos={"center"}
        bgSize={"cover"}
        // bgColor={"red"}
        pt={50}
        alignItems='center'
        justify={"center"}
        w='100%'
        h={useBreakpointValue({ base: "20vh", sm: "20vh", lg: "40vh" })}>
        <VStack w={"100%"}>
          <Heading color={"white"}>Products</Heading>
          <Text as='h4' fontSize='xl' color={"white"}>
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
              borderColor={"gray.300"}>
              {products?.products?.length > 0 && (
                <ProductCarousel
                  products={products?.products ?? []}
                  perView={1}
                />
              )}
            </Box>
            <Box maxW='container.md'>
              <Text justifyContent={"center"} textAlign={"center"}>
                Other products from this brand
              </Text>
              {products?.products?.length > 0 && (
                <Carousel
                  products={products?.products ?? []}
                  perView={3}
                  setSelect={setselectedProduct}
                />
              )}
            </Box>
          </VStack>
          <Center
            flex={1}
            justifyContent={"center"}
            alignContent={"center"}
            height='300px'>
            <Divider orientation='vertical' />
          </Center>
          <VStack flex={1}>
            {products?.products?.length > 0 && (
              <Heading>{products?.products[selectedProduct]?.title}</Heading>
            )}
            <Box maxW={"50%"} justifyContent={"center"} alignContent={"center"}>
              {products?.products?.length > 0 && (
                <Text textAlign={"center"}>
                  {products?.products[selectedProduct]?.description}
                </Text>
              )}
            </Box>
            {products?.products?.length > 0 && (
              <Image alt='brand' src={products.logo}></Image>
            )}
          </VStack>
        </HStack>
      </Flex>
      <Flex pt={10} width={"100%"} justifyContent={"center"} h={"100%"}>
        <VStack pb={20} justify={"center"} align={"center"}>
          <Heading>About The Vendor</Heading>
          <Box maxW={"50%"}>
            <Text pt={5} textAlign={"justify"}>
              {currentBrand.description}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
