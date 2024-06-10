"use client";

import React from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import Container from "./container";
import Button from "./button";
import HamburgerIcon from "./icons/hamburger";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <header className="h-nav-height fixed top-0 inset-x-0 border-b border-white_a08 backdrop-blur-[14px]">
      <Container className="flex items-center h-full">
        <Link href="/" className="mr-6">
          <Logo className="h-[1.8rem] w-[1.8rem]" />
        </Link>
        <nav
          className={clsx(
            "md:block",
            isOpen
              ? "fixed md:relative top-nav-height md:inset-0 max-md:pt-8 px-8 h-[calc(100vh-var(--nav-height))] md:h-auto max-md:bg-background max-md:w-full"
              : "hidden"
          )}
        >
          <ul
            className={clsx(
              "flex flex-col md:flex-row md:items-center h-full gap-6",
              "[&_a]:text-lg md:[&_a]:text-sm [&_a]:font-semibold [&_a]:h-nav-height [&_a]:border-b [&_a]:block md:[&_a]:inline [&_a]:border-white_a08 md:[&_a]:border-none",
              isOpen && "overflow-auto"
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className={clsx("block md:hidden lg:block")}>
              <Link href="#">Customers</Link>
            </li>
            <li className={clsx("block md:hidden lg:block")}>
              <Link href="#">Changelog</Link>
            </li>
            <li className={clsx("block md:hidden lg:block")}>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto h-full flex gap-6 items-center">
          <Link href="#" className="text-sm">
            Login
          </Link>
          <Link href="#" className="text-sm">
            <Button href="#">Sign up</Button>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">menu icon</span>
            <HamburgerIcon />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
