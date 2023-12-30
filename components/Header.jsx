"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import  {Button}  from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : " bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="" />
          </Link>
          <Nav containerStyles='hidden xl:flex gap-x-12 text-white' LinkStyles='capitalize'/>
          <ScrollLink to='reservation' smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          <NavMobile containerStyles='xl:hidden' iconStyles=' text-4xl' LinkStyles='uppercase'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
