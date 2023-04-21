"use client";
import { Inter } from "next/font/google";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
// import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <>
      <Navbar isHomePage={false} />
      <Box as="main" mt="20">
        <Heading>Contact Us</Heading>
      </Box>
    </>
  );
}
