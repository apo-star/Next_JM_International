/** @format */

"use client";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
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
  useBreakpointValue
} from "@chakra-ui/react";
import Navbar from "@/app/components/Navbar/navbar";
import ContactForm from "@/app/components/ContactForm/contactForm";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { brandImages, bannerImages } from "./../../utils/assetIndex";
import { transform } from "framer-motion";
import Head from "next/head";
import "./style.css";
import TextWithLine from "@/app/components/TextDecoration/textDecoration";

const handleModal = (brand: Object, setBrand: Function, open: Function) => {
  setBrand(brand);
  open();
};
import Link from "next/link";
console.log("Bran: ", brandImages);

/**
 * Función para recortar un párrafo de texto hasta que tenga 10 palabras exactas y no termine
 * con una palabra menor a 4 caracteres.
 *@param {string} paragraph El párrafo de texto a recortar.
 *@returns {string} El párrafo de texto recortado.
 */

const trimParagraph = (paragraph: string) => {
  const words = paragraph.split(" ");

  const first10Words = words.slice(0, 10);

  if (first10Words[9]?.length < 4) {
    first10Words.pop();
  }

  const trimmedParagraph = first10Words.join(" ");

  return trimmedParagraph;
};

const brandsGrid = (onOpen: any, setBrand: Function, ownership: Boolean) => {
  return (
    <>
      {brandImages.map((brand) =>
        brand.id !== 1 ? (
          brand.owned !== ownership ? null : (
            <>
              <div className='card'>
                <div className='card-details'>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    maxH={"100px"}
                    maxW={"140px"}
                    justifyContent={"center"}
                    align={"center"}
                    objectFit={"contain"}
                  />
                  <p className='text-body'>
                    {trimParagraph(brand.description)}...
                  </p>
                </div>
                <button
                  onClick={() => handleModal(brand, setBrand, onOpen)}
                  className='card-button'>
                  More info
                </button>
              </div>
            </>
          )
        ) : null
      )}
    </>
  );
};

export default function BrandsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentBrand, setcurrentBrand] = useState({
    name: "",
    logo: "",
    description: "",
    id: 0
  });
  console.log("currentBrand", currentBrand);
  return (
    <>
      <Modal
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={onClose}>
        <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
        <ModalContent w='3500px' margin={10}>
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
                />
              </VStack>
            </Flex>
            <VStack justify={"center"} alignContent={"center"}>
              <Text textAlign={"justify"}>{currentBrand.description}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter alignContent={"center"} justifyContent={"center"}>
            <VStack justify={"center"} alignContent={"center"}>
              <Divider />
              <Link
                href={{
                  pathname: "/products",
                  query: { brandName: currentBrand.name }
                }}>
                <Button
                  // leftIcon={<EmailIcon />}
                  colorScheme='red'
                  variant='outline'
                  onClick={() => {
                    onClose();
                  }}
                  minW={"130px"}>
                  See Productsa
                </Button>
              </Link>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box>
        <Navbar isHomePage={true} />
      </Box>
      <Flex
        bgImage={bannerImages[4].image}
        bgPos={"bottom"}
        w={"full"}
        h={useBreakpointValue({ base: "30vh", sm: "30vh", lg: "50vh" })}
        backgroundSize={"cover"}
        pos={"relative"}
        marginBottom={50}
        top={55}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          pos={"relative"}>
          <Heading
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "2xl",
              md: "4xl",
              lg: "6xl",
              sm: "xl"
            })}
            maxW={800}
            textAlign={"end"}>
            Leading Brands
          </Heading>
          <div
            style={{
              borderWidth: "1px",
              width: `${"Leading Brands".length - 3}em`
            }}
          />
          <Text
            maxW={300}
            flexWrap={"initial"}
            color={"white"}
            fontWeight={30}
            lineHeight={1.2}
            fontSize={useBreakpointValue({
              base: "xl",
              md: "xl",
              lg: "xl",
              sm: "xl"
            })}
            textAlign={"center"}
            wordBreak={"break-word"}>
            Selection of High-Quality Products
          </Text>
        </VStack>
      </Flex>
      <VStack pt={10} alignItems='center' justify={"center"} padding={5}>
        <TextWithLine text='Our Family of Brands' />
        <Text as='h4' fontSize='xl' color={"rgba(1,1,1,0.4)"}>
          Under JM Internacional ownership, we deliver all you need.
        </Text>
        <Divider></Divider>
        <VStack maxWidth={"4xl"}>
          <Flex pb={20} pt={10} alignItems='center' justify={"center"} w='100%'>
            <div className='warp'>
              {brandsGrid(onOpen, setcurrentBrand, true)}
            </div>
          </Flex>
        </VStack>
      </VStack>
      <VStack alignItems='center' justify={"center"} padding={5}>
        <TextWithLine text='Our Allies' />
        <Text as='h4' fontSize='xl' color={"rgba(1,1,1,0.4)"}>
          Partners that deliver the best quality and assortment of products
        </Text>
        <Divider></Divider>
        <VStack maxWidth={"3xl"}>
          <Flex pb={20} pt={10} alignItems='center' justify={"center"} w='100%'>
            <div className='warp'>
              {brandsGrid(onOpen, setcurrentBrand, false)}
            </div>
          </Flex>
        </VStack>
      </VStack>
    </>
  );
}
