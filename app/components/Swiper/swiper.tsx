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

type Product = {
  id: number;
  logo: string;
  name: string;
  images: string[];
};

export default function Carousel({
  products,
  perView,
  setSelect
}: {
  products: Array<Product>;
  perView: number;
  setSelect: (num: number) => void;
}) {
  // console.log("Hola: ", products);
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
          delay: 5000

          // disableOnInteraction: false,
        }}>
        {products?.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <VStack p={4} alignItems={"center"} justifyContent={"center"}>
              {/* <Box> */}
              <Image
                src={product.images[0]}
                alt={product.name}
                objectFit='contain'
                width={"100px"}
                height={"150px"}
                justifyContent={"center"}
                align={"center"}
                onClick={() => setSelect(product.id)}

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
