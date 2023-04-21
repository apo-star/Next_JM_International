"use client";
import { Box } from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";

export default function BrandsPage() {
  return (
    <>
      <Navbar isHomePage={false} />
      <Box as="main" mt="20">
        <h1>Brands</h1>
        <ul>
          <li>Garret</li>
          <li>Bendix</li>
          <li>GoodYear</li>
          <li>Mack Trucks</li>
          <li>Triseal</li>
          <li>PAI Industries</li>
          <li>Quantum</li>
        </ul>
      </Box>
    </>
  );
}
