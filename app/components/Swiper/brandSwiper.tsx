/** @format */

"use client";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay
} from "swiper";
import "swiper/swiper-bundle.min.css";

//Chakra UI imports
import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";

type Brand = {
  id: number;
  name: string;
  logo: string;
};

export default function BrandCarousel({
  brands,
  perView
}: {
  brands: Array<Brand>;
  perView: number;
}) {
  return (
    <Box maxW={"100vw"}>
      <Swiper
        spaceBetween={10}
        slidesPerView={perView}
        slidesPerGroup={perView}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500
          // disableOnInteraction: false,
        }}>
        {brands.map((brand: Brand) =>
          brand.id === 1 ? null : (
            <SwiperSlide key={brand.id}>
              <VStack p={4} alignItems={"center"} justifyContent={"center"}>
                {/* <Box> */}
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  // objectFit="fill"
                  minH={"100px"}
                  minW={"150px"}
                  maxW={"170px"}
                  maxH={"100px"}
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
          )
        )}
      </Swiper>
    </Box>
  );
}
