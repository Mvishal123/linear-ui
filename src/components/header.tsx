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
    <header className="fixed inset-x-0 top-0 h-nav-height border-b border-white_a08 backdrop-blur-[14px]">
      <Container className="flex h-full items-center">
        <Link href="/" className="mr-6">
          <Logo className="h-[1.8rem] w-[1.8rem]" />
        </Link>
        <div
          className={clsx(
            "transition-[visibility]",
            isOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={clsx(
              "md:bg-transparent fixed inset-x-0 top-nav-height h-[calc(100vh-var(--nav-height))] bg-background px-8 transition-[opacity] duration-500 max-md:pt-8 md:visible md:relative md:inset-0 md:h-auto md:w-full md:px-0 md:opacity-100 md:transition-none",
              isOpen ? "opacity-100" : "opacity-0 delay-100",
            )}
          >
            <ul
              className={clsx(
                "flex h-full flex-col gap-6 md:flex-row md:items-center",
                "[&_a]:block [&_a]:h-nav-height [&_a]:border-b [&_a]:border-white_a08 [&_a]:text-lg [&_a]:font-semibold [&_a]:transition-transform [&_a]:duration-500 md:[&_a]:inline md:[&_a]:translate-y-0 md:[&_a]:border-none md:[&_a]:text-sm",
                isOpen ? "[&_a]:translate-y-0" : "[&_a]:translate-y-10",
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
        </div>
        <div className="ml-auto flex h-full items-center gap-6">
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
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
