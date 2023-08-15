/** @format */

"use Client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Spacer,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Link as LinkChakra,
  useStyleConfig
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { mountAction } from "@/app/store/store";

const Navbar = ({ isHomePage }: { isHomePage: Boolean }) => {
  const [active, setActive] = useState(false);
  const changeBackround = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  //Nabar styles constants
  const blackNavbar = [useColorModeValue("black", "gray.800")];

  const transparentNavbar = "transparent";

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", changeBackround);
    }

    return () => {
      window.removeEventListener("scroll", changeBackround);
    };
  }, []);

  const { isOpen, onToggle } = useDisclosure();
  const customStyle = useStyleConfig("Flex", {});

  const dispatch = useDispatch();

  return (
    <Box
      as='header'
      position={isHomePage ? "fixed" : "fixed"}
      w='100%'
      zIndex={10}>
      <Flex
        // overflowY="hidden"
        bg={!active && isHomePage ? transparentNavbar : blackNavbar}
        mb={!isHomePage ? 0 : 0}
        color={useColorModeValue("gray.600", "white")}
        className={"navTransition"}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color={"white"} w={3} h={3} />
              ) : (
                <HamburgerIcon color={"white"} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Spacer />
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems='center'>
          <LinkChakra as={Link} href='/'>
            <Image
              src='/jm-logo-transparent-bg-min.webp'
              alt='Brand'
              width={150}
              height={50}
            />
          </LinkChakra>
          <Spacer />
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
        <Spacer />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          display={{ base: "none", md: "inline-flex" }}>
          <Image
            onClick={() => {
              dispatch(mountAction.languageChange("es"));
            }}
            src='/spanish.svg'
            alt='spanish'
            width={35}
            height={35}
          />
          <Image
            onClick={() => {
              dispatch(mountAction.languageChange("en"));

              // setLanguage("en");
            }}
            src='/english.svg'
            alt='english'
            width={35}
            height={35}
          />
        </Stack>
        <Spacer />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("red", "red");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={7}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <LinkChakra
                as={Link}
                p={2}
                href={navItem.href}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor
                }}>
                {navItem.label}
              </LinkChakra>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={{
        pathname: href,
        query: { brandName: label }
      }}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}>
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={LinkChakra}
        href={href ?? "/"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none"
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <LinkChakra as={Link} key={child.label} py={2} href={child.href}>
                {child.label}
              </LinkChakra>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Brands",
    href: "/brands"
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Quantum Trux Parts",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "USA Pro",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "Eagle Parts",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "GoodYear",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "GRC",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "Firestone",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "Wuhlermann",
        subLabel: "An exclusive partner",
        href: "/products"
      },
      {
        label: "Sampa",
        subLabel: "An exclusive partner",
        href: "/products"
      }
    ]
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
];

export default Navbar;
