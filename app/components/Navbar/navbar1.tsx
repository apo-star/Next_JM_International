"use client";
// import "./navbar.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const currentPath = usePathname();
  const changeBackround = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    console.log("current path", currentPath);
    if (window) {
      window.addEventListener("scroll", changeBackround);
    }

    return () => {
      window.removeEventListener("scroll", changeBackround);
    };
  }, []);

  return (
    <Flex
      as="nav"
      className={active ? "navbar active" : "navbar"}
      align="center"
      justify="space-around"
    >
      <Box className="logo">
        <Link href="/">
          <Image
            src="/jm-logo-transparent-bg.png"
            alt="Brand"
            width={150}
            height={50}
            priority
          />
        </Link>
      </Box>
      <Box className="nav-elements">
        <ul>
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/brands">
              <span>Brands</span>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </Box>
      <Box className="languages">
        <ul>
          <li>
            <Image
              src="/spanish.svg"
              alt="spanish"
              width={35}
              height={35}
              priority
            />
          </li>
          <li>
            <Image
              src="/english.svg"
              alt="english"
              width={35}
              height={35}
              priority
            />
          </li>
        </ul>
      </Box>
    </Flex>
  );
}
