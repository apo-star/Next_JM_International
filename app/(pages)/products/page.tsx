"use client";
import { Inter } from "next/font/google";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
// import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  return (
    <>
      <Navbar isHomePage={false} />
      <Box as="main" mt="20">
        <Heading>Products</Heading>
      </Box>
    </>
  );
}
