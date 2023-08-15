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
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ProductCarousel from "@/app/components/Swiper/productSwiper";
import Carousel from "@/app/components/Swiper/swiper";
import { useState, useEffect } from "react";
import {
  brandImages,
  products as DATA,
  bannerImages,
} from "./../../utils/assetIndex";
import TextWithLine from "@/app/components/TextDecoration/textDecoration";
import "./style.css";
import { useTranslation } from "@/app/hooks/useTranslation";

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

export default function Products({ searchParams }: any) {
  const brandName = searchParams?.brandName;
  const { t } = useTranslation();

  const [brand] = useState(brandName);
  const [products, setProducts] = useState<any>({});
  const [selectedProduct, setselectedProduct] = useState(1);
  const [currentBrand, setCurrentBrand] = useState({});

  useEffect(() => {
    (async () => {
      if (brandName?.length > 0) {
        const brandInfo = await getFilterBrand({ brandImages, brandName });
        const productFilter = await getFilterProduct({ DATA, brandName });
        if (productFilter.length > 0) {
          setProducts(productFilter[0]);
        }
        if (brandInfo.length > 0) {
          setCurrentBrand(brandInfo[0]);
        }
      } else {
        setProducts(DATA[0]);
        setCurrentBrand(brandImages[1]);
      }
    })();
    return () => {};
  }, [searchParams]);
  // console.log("products", products);
  // console.log("selectedProduct", selectedProduct);
  // console.log("Current: ", currentBrand);
  return (
    <>
      <Navbar isHomePage={false} />
      <Flex
        bgImage={"/pageEnd.webp"}
        bgPos={"bottom"}
        w={"full"}
        h={useBreakpointValue({ base: "30vh", sm: "30vh", lg: "50vh" })}
        backgroundSize={"cover"}
        pos={"relative"}
        marginBottom={50}
        top={55}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          pos={"relative"}
        >
          <Heading
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
            textAlign={"end"}
          >
            Products
          </Heading>
          <div
            style={{
              borderWidth: "1px",
              width: `${"Products".length}em`,
            }}
          />
          <Text
            maxW={300}
            flexWrap={"initial"}
            color={"white"}
            fontWeight={30}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "xl",
              md: "xl",
              lg: "xl",
              sm: "xl",
            })}
            textAlign={"center"}
            wordBreak={"break-word"}
          >
            Selection of High-Quality Partners
          </Text>
        </VStack>
      </Flex>
      <SimpleGrid
        spacing={20}
        minChildWidth={200}
        margin={10}
        paddingTop={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box marginLeft={10} justifyContent={"center"} alignItems={"center"}>
          <Box justifyContent={"center"} w={"100%"}>
            <div className="card" style={{ width: "300px" }}>
              {products?.products?.length > 0 && (
                <ProductCarousel
                  products={products?.products ?? []}
                  perView={1}
                />
              )}
            </div>
          </Box>

          <Box justifyContent={"center"} w={"100%"}>
            {/* <Text justifyContent={"center"} textAlign={"center"}>
              Other products from this brand
            </Text> */}
            <Text
            fontSize="xl"
            maxW={"md"}
            textAlign={"center"}
            color={"rgba(1,1,1,0.5)"}
          >
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
        </Box>

        <Box w={"100%"} justifyContent={"center"} marginLeft={10}>
          {products?.products?.length > 0 && (
            <Heading>{products?.products[selectedProduct]?.title}</Heading>
          )}
          <Box maxW={"80%"} justifyContent={"center"} alignItems={"center"}>
            {products?.products?.length > 0 && (
              <Text textAlign={"left"}>
                {products?.products[selectedProduct]?.description}
              </Text>
            )}
            <Box w={"100%"} justifyContent={"center"}>
              {products?.products?.length > 0 && (
                <Image
                  alt="brand"
                  objectFit="contain"
                  width={"150px"}
                  height={"200px"}
                  src={products.logo}
                ></Image>
              )}
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
      <Flex pt={10} width={"100%"} justifyContent={"center"} h={"100%"}>
        <VStack pb={20} justify={"center"} align={"center"}>
          <TextWithLine text="About The Vendor" />
          <Box maxW={"80%"}>
            <Text pt={5} textAlign={"justify"} maxW={"5xl"}>
              {currentBrand.description}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
