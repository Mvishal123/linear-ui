"use client";

import React, { useEffect } from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import Container from "./container";
import Button from "./button";
import HamburgerIcon from "./icons/hamburger";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.classList.toggle("overflow-hidden", isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsOpen(false);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <header className="border-transparent-white fixed left-0 top-0 z-10 w-full border-b backdrop-blur-[12px]">
      <Container className="flex items-center h-nav-height">
        <Link href="/" className="mr-6">
          <Logo className="size-[1.8rem]" />
        </Link>
        <div
          className={clsx(
            "transition-[visibility]",
            isOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={clsx(
              "fixed inset-x-0 top-nav-height h-[calc(100vh-var(--nav-height))] bg-background px-8 transition-[opacity] duration-500 max-md:pt-8 md:visible md:relative md:inset-0 md:h-auto md:w-full md:bg-transparent md:px-0 md:opacity-100 md:transition-none",
              isOpen ? "opacity-100" : "opacity-0 delay-100",
            )}
          >
            <ul
              className={clsx(
                "flex h-full flex-col gap-6 md:flex-row md:items-center",
                "[&_a:hover]:text-grey [&_a]:border-transparent-white [&_a]:block [&_a]:h-nav-height [&_a]:border-b [&_a]:text-lg [&_a]:font-semibold [&_a]:transition-transform [&_a]:duration-500 md:[&_a]:inline md:[&_a]:translate-y-0 md:[&_a]:border-none md:[&_a]:text-sm [&_li]:transition-colors",
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

          <Button href="#" variant="primary" size="medium">
            Sign up
          </Button>

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
