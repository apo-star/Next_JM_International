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
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const getFilterProduct = async (info: any) => {
  const noSpaces = info.p.replace(/\s/g, "");
  const dataProductos = info.DATA.filter(
    (prod: any) => prod.brand.toUpperCase() === noSpaces.toUpperCase()
  );

  return dataProductos ?? info.DATA[0];
};

const getFilterBrand = async (info: any) => {
  const dataProductos = info.brandImages.filter(
    (prod: any) => prod.name.toUpperCase() === info.p.toUpperCase()
  );
  return dataProductos ?? info.brandImages[0];
};

export default function Products({ searchParams }: any) {
  const { t } = useTranslation();
  const state = useSelector((state: any) => state.mount);

  const [products, setProducts] = useState<any>({});
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [currentBrand, setCurrentBrand] = useState<any>({});

  useEffect(() => {
    (async () => {
      if (state?.product?.length > 0) {
        const brandInfo = await getFilterBrand({
          brandImages,
          p: state.product,
        });
        const productFilter = await getFilterProduct({
          DATA,
          p: state.product,
        });
        if (productFilter.length > 0) {
          if (state?.indexProduct?.length > 0) {
            const selectProduct = productFilter[0].products.findIndex(
              (element: any) => element.title === state.indexProduct
            );
            setSelectedProduct(selectProduct + 1 ?? 0);
          }
          if (state?.indexProduct === 0) {
            setSelectedProduct(1);
          }
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
  }, [state, state?.product, state?.indexProduct]);

  return (
    <>
      <Navbar isHomePage={false} />
      <Flex
        bgImage={"/pageEnd.jpg"}
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
        <Box justifyContent={"center"} alignItems={"center"}>
          <Box justifyContent={"center"} w={"100%"}>
            <div className="card" style={{ width: "300px" }}>
              {/* {products?.products?.length > 0 && (
                <ProductCarousel
                  products={products?.products ?? []}
                  perView={1}
                />
              )} */}
              <div className="card-content">
                {products?.products?.length > 0 && (
                  <VStack p={4} alignItems={"center"} justifyContent={"center"}>
                    <Image
                      src={
                        products?.products[selectedProduct - 1]?.images[0] ??
                        products?.products[0]?.images[0]
                      }
                      alt={
                        products?.products[selectedProduct - 1]?.images[0] ??
                        products?.products[0]?.images[0]
                      }
                      width={250}
                      height={300}
                      objectFit={"contain"}
                    />
                  </VStack>
                )}
              </div>
            </div>
          </Box>
          <Box margin={10} justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize="xl"
              maxW={"100%"}
              textAlign={"center"}
              color={"rgba(1,1,1,0.5)"}
            >
              Other products from this brand
            </Text>
            {products?.products?.length > 0 && (
              <Carousel
                products={products?.products ?? []}
                perView={3}
                setSelect={setSelectedProduct}
              />
            )}
          </Box>
        </Box>

        <VStack w={"100%"} justifyContent={"center"} alignItems={"center"}>
          {products?.products?.length > 0 && (
            <Heading textAlign={"center"}>{products?.products[selectedProduct - 1]?.title}</Heading>
          )}
          <VStack maxW={"100%"} justifyContent={"center"} alignItems={"center"}>
            {products?.products?.length > 0 && (
              <>
                <Text textAlign={"justify"} marginTop={5}>
                  {state.language && state.language == "en"
                    ? products?.products[selectedProduct - 1]?.description
                    : products?.products[selectedProduct - 1]?.descriptionES}
                </Text>
                {products?.products[selectedProduct - 1]?.replacement?.length >
                0 ? (
                  <Box style={{ marginTop: 10 }}>
                    <Text>Repuesto de: </Text>
                    <ul style={{ marginLeft: 30 }}>
                      {products?.products[selectedProduct - 1]?.replacement.map(
                        (text: string) => (
                          <li key={text} color={"red"}>
                            {text}
                          </li>
                        )
                      )}
                    </ul>   
                  </Box>
                ) : null}
              </>
            )}
            <Box w={"100%"} justifyContent={"center"}>
              {products?.products?.length > 0 && (
                <Image
                  alt="brand"
                  objectFit="contain"
                  width={"300px"}
                  height={"350px"}
                  src={products.logo}
                />
              )}
            </Box>
          </VStack>
        </VStack>
      </SimpleGrid>
      <Flex pt={10} width={"100%"} justifyContent={"center"} h={"100%"}>
        <VStack pb={20} justify={"center"} align={"center"}>
          <TextWithLine text="About The Vendor" />
          <Box maxW={"80%"}>
            <Text pt={5} textAlign={"justify"} maxW={"5xl"}>
              {state.language && state.language == "en"
                ? currentBrand?.description
                : currentBrand?.descriptionES}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}
