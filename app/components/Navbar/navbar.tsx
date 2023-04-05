"use client";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const changeBackround = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    }
    else{
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeBackround);
  return (
    <>
      <nav className={active ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Image
              src="/jm-logo-transparent-bg.png"
              alt="Brand"
              width={200}
              height={50}
              priority
            />
          </div>
          <div className="nav-elements">
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
          </div>
          <div className="languages">
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
          </div>
        </div>
      </nav>
    </>
  );
}
