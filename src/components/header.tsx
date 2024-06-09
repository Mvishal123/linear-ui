import React from "react";
import Logo from "./icons/logo";
import Link from "next/link";
import Container from "./container";
import Button from "./button";

const Header = () => {
  return (
    <header className="h-[var(--nav-height)] fixed top-0 inset-x-0 border-b border-white_a08 backdrop-blur-[14px]">
      <Container className="flex items-center h-full">
        <Link href="/" className="mr-6">
          <Logo className="h-[1.8rem] w-[1.8rem]" />
        </Link>
        <nav>
          <ul className="flex items-center h-full [&_a]:text-sm gap-6 [&_a]:font-semibold">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
