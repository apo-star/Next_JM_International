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
  useStyleConfig,
  HStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useEffect, useLayoutEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
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

  useLayoutEffect(() => {
    dispatch(mountAction.languageChange("en"));
  }, [dispatch]);

  return (
    <Box
      as="header"
      position={isHomePage ? "fixed" : "fixed"}
      w="100%"
      zIndex={10}
    >
      <Flex
        // overflowY="hidden"
        bg={!active && isHomePage ? transparentNavbar : blackNavbar}
        mb={!isHomePage ? 0 : 0}
        color={useColorModeValue("gray.600", "white")}
        className={"navTransition"}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
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
          alignItems="center"
        >
          <LinkChakra as={Link} href="/">
            <Image
              src="/jm-logo-transparent-bg-min.webp"
              alt="JM Internacional Logo"
              minW={200}
              width={200}
              height={100}
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
          display={{ base: "none", md: "inline-flex" }}
        >
          <Image
            onClick={() => {
              dispatch(mountAction.languageChange("es"));
            }}
            src="/spanish.svg"
            alt="spanish"
            width={35}
            height={35}
          />
          <Image
            onClick={() => {
              dispatch(mountAction.languageChange("en"));
            }}
            src="/english.svg"
            alt="english"
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
  const { language } = useSelector((state: any) => state.mount);

  return (
    <Stack direction={"row"} spacing={7}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {navItem?.href?.length ? (
                <LinkChakra
                  as={Link}
                  p={2}
                  href={navItem.href}
                  fontSize={"lg"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {language && language == "en"
                    ? navItem.label
                    : navItem.labelES}
                </LinkChakra>
              ) : (
                // IGNORA ESTA PORQUERIA QUE HICE AQUI
                // MUY POCO SE PODIA MODIFICAR EL LINK FEO ESE XD
                // POR ESO MEJOR HACER LAS COSAS A MANO XD
                <p
                  className="chakra-link css-1gx2l8x"
                  id="popover-trigger-:Rjl4qoqpbr5H1:"
                  aria-haspopup="dialog"
                  aria-controls="popover-content-:Rjl4qoqpbr5H1:"
                  aria-expanded="false"
                  style={{ top: -8, position: "relative" }}
                >
                  {language && language == "en"
                    ? navItem.label
                    : navItem.labelES}
                </p>
              )}
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
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

const DesktopSubNav = ({ label, href, subLabel, subLabelES }: NavItem) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: any) => state.mount);

  return (
    <Link
      href={{
        pathname: href,
      }}
      onClick={() =>
        dispatch(mountAction.updateProduct({ products: label, index: 0 }))
      }
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>
            {language && language == "en" ? subLabel : subLabelES}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const dispatch = useDispatch();
  return (
    <Stack
      bg={useColorModeValue("rgba(0,0,0,.9)", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <HStack>
        <Image
          onClick={() => {
            dispatch(mountAction.languageChange("es"));
          }}
          src="/spanish.svg"
          alt="spanish"
          width={35}
          height={35}
        />
        <Image
          onClick={() => {
            dispatch(mountAction.languageChange("en"));
          }}
          src="/english.svg"
          alt="english"
          width={35}
          height={35}
        />
      </HStack>
    </Stack>
  );
};

const MobileNavItem = ({ label, labelES, children, href }: NavItem) => {
  const { language } = useSelector((state: any) => state.mount);
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={LinkChakra}
        href={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("white", "gray.200")}>
          {language && language == "en" ? label : labelES}
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
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <LinkChakra
                key={child.label}
                as={Link}
                p={2}
                href={child.href}
                fontSize={"lg"}
                fontWeight={500}
              >
                <Text
                  color={"white"}
                  key={child.label}
                  onClick={() => {
                    dispatch(
                      mountAction.updateProduct({
                        products: child.label,
                        index: 0,
                      })
                    );
                  }}
                >
                  {/* {language && language == "en" ? child.label : child.labelES} */}
                  {child.label}
                </Text>
              </LinkChakra>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  labelES?: string;
  subLabel?: string;
  subLabelES?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    labelES: "Home",
    href: "/",
  },
  {
    label: "Brands",
    labelES: "Marcas",
    href: "/brands",
  },
  {
    label: "Products",
    labelES: "Productos",
    children: [
      {
        label: "Quantum Trux Parts",
        subLabel: "An exclusive partner",
        subLabelES: "Marca Exclusiva",
        href: "/products",
      },
      {
        label: "USA Pro",
        subLabel: "An exclusive partner",
        subLabelES: "Marca Exclusiva",
        href: "/products",
      },
      {
        label: "Eagle Parts",
        subLabel: "An exclusive partner",
        subLabelES: "Marca Exclusiva",
        href: "/products",
      },
    ],
  },
  {
    label: "About Us",
    labelES: "Nosotros",
    href: "/about",
  },
  {
    label: "Contact Us",
    labelES: "Contacto",
    href: "/contact",
  },
];

export default Navbar;
