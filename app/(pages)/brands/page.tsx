"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Grid,
  SimpleGrid,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ContactForm from "@/app/components/ContactForm/contactForm";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { brandImages, bannerImages } from "./../../utils/assetIndex";
import { transform } from "framer-motion";
import Head from "next/head";

const handleModal = (brand: Object, setBrand: Function, open: Function) => {
  setBrand(brand);
  open();
};

const brandsGrid = (onOpen: any, setBrand: Function, ownership: Boolean) => {
  return (
    <>
      {brandImages.map((brand) =>
        brand.id !== 1 ? (
          brand.owned !== ownership ? null : (
            <>
              <Box
                onClick={() => handleModal(brand, setBrand, onOpen)}
                alignItems="center"
                justifyContent={"center"}
                w="100%"
                h="100%"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  maxH={"140px"}
                  maxW={"190px"}
                  justifyContent={"center"}
                  align={"center"}
                ></Image>
              </Box>
            </>
          )
        ) : null
      )}
    </>
  );
};

export default function BrandsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentBrand, setcurrentBrand] = useState({ name: "", logo: "" });
  return (
    <>
      <Modal
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={onClose}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent h="600px" w="3500px">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent={"center"} p={10}>
              <VStack>
                <Heading></Heading>
                <Image
                  // src={brand.logo}
                  // alt={brand.name}
                  src={currentBrand.logo}
                  alt={currentBrand.name}
                  maxH={"200px"}
                  maxW={"250px"}
                  justifyContent={"center"}
                  align={"center"}
                ></Image>
              </VStack>
            </Flex>
            <VStack pt={10} justify={"center"} alignContent={"center"}>
              <Heading>{currentBrand.name}</Heading>
              <Text>{currentBrand.description}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter alignContent={"center"} justifyContent={"center"}>
            <VStack justify={"center"} alignContent={"center"}>
              <Divider />
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="red"
                variant="outline"
                onClick={onClose}
                minW={"130px"}
              >
                See Products
              </Button>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box>
        <Navbar isHomePage={true} />
      </Box>
      <Flex
        bgImage={bannerImages[4].image}
        bgPos={"center"}
        bgSize={"cover"}
        pt={50}
        alignItems="center"
        justify={"center"}
        w="100%"
        h={useBreakpointValue({ base: "20vh", sm: "20vh", lg: "40vh" })}
      >
        <VStack w={"100%"}>
          <Heading color={"white"}>Leading Brands</Heading>
          <Text as="h4" fontSize="xl" color={"white"}>
            Selection of High-Quality Products
          </Text>
        </VStack>
      </Flex>
      <VStack pt={10} alignItems="center" justify={"center"}>
        <Heading>Our Family of Brands</Heading>
        <Text as="h4" fontSize="xl">
          Under JM Internacional ownership, we deliver all you need.
        </Text>
        <Divider></Divider>
        <Flex pb={20} pt={10} alignItems="center" justify={"center"} w="100%">
          <SimpleGrid columns={3} spacing={10}>
            {brandsGrid(onOpen, setcurrentBrand, true)}
          </SimpleGrid>
        </Flex>
      </VStack>
      <VStack alignItems="center" justify={"center"}>
        <Heading>Our Allies</Heading>
        <Text as="h4" fontSize="xl">
          Partners that deliver the best quality and assortment of products
        </Text>
        <Divider></Divider>
        <Flex pb={20} pt={10} alignItems="center" justify={"center"} w="100%">
          <SimpleGrid columns={5} spacing={10}>
            {brandsGrid(onOpen, setcurrentBrand, false)}
          </SimpleGrid>
        </Flex>
      </VStack>
    </>
  );
}
