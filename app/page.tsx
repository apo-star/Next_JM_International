"use client";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  Container,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box position={"static"} pos={"relative"} boxSize={"full"}>
      <Heading pos="absolute" zIndex={1}>
        Best Brands For You
      </Heading>
      <Box
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
      ></Box>
      <Flex justify="center">
        <Heading zIndex={1}>Fleet of automotive offerings</Heading>
      </Flex>
      <Flex justify="center">
        <Heading zIndex={1}>Our Family of Brands</Heading>
      </Flex>
      <Flex justify="center">
        <Heading zIndex={1}>Exclusive Partners</Heading>
      </Flex>
      <Flex justify="center">
        <Heading zIndex={1}>New Products</Heading>
      </Flex>
    </Box>
  );
}
