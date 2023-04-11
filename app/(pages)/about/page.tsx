"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Inter } from "next/font/google";
// import "./footer.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Box as="main" mt="20">
      <Heading>About Us</Heading>
    </Box>
  );
}
