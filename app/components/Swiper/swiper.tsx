"use client";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";

//Chakra UI imports
import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";

type Product = {
  id: number;
  logo: string;
  name: string;
};

export default function Carousel({ products }: { products: Array<Product> }) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 1,
          // disableOnInteraction: false,
        }}
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <VStack p={10} alignItems={"center"} justifyContent={"center"}>
              <Box>
                <Image
                  src={product.logo}
                  alt={product.name}
                  objectFit="contain"
                  minH={"120px"}
                  justifyContent={"center"}
                  align={"center"}
                  // mb={4}
                />
              </Box>
              <Box>
                <Text textAlign={"center"} fontSize="lg" fontWeight="bold">
                  {product.name}
                </Text>
              </Box>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
