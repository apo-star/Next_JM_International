"use client";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";

//Chakra UI imports
import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";

type Product = {
  id: number;
  title: string;
  images: Array<string>;
  description: string;
};

export default function ProductCarousel({
  products,
  perView,
}: {
  products: Array<Product>;
  perView: number;
}) {
    console.log("products", products)
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={perView}
        slidesPerGroup={perView}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: false,
        }}
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <VStack p={4} alignItems={"center"} justifyContent={"center"}>
              {/* <Box> */}
              <Image
                src={product.images[0]}
                alt={product.title}
                // objectFit="fill"
                minH={"100px"}
                minW={"150px"}
                maxW={"270px"}
                maxH={"300px"}
                justifyContent={"center"}
                align={"center"}
                // mb={4}
              />
              {/* </Box> */}
              {/* <Box>
                <Text textAlign={"center"} fontSize="lg" fontWeight="bold">
                  {product.name}
                </Text>
              </Box> */}
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
