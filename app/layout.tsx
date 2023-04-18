"use client";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { createContext } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { FloatingWhatsApp as Whatsapp } from "react-floating-whatsapp";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = createContext<{ language: number }>({ language: 0 });
  return (
    <html lang="en">
      <head />
      <context.Provider value={{ language: 0 }}>
        <CacheProvider>
          <body>
            {/* <header></header> */}
            <main>
              <ChakraProvider>
                <Navbar />
                <Flex direction="column" minH="100vh">
                  {children}
                </Flex>
                <Whatsapp
                  phoneNumber="+50762250666"
                  accountName="JM Internacional"
                />
                <Footer />
              </ChakraProvider>
            </main>
          </body>
        </CacheProvider>
      </context.Provider>
    </html>
  );
}
