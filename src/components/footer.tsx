import React from "react";
import Container from "./container";
import Link from "next/link";
import Logo from "./icons/logo";
import { Twitter } from "./icons/socials";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-transparent-white mt-12 border-t">
      <Container>
        <div className="flex flex-col justify-between py-[5.6rem] text-sm lg:flex-row">
          <div className="flex w-full flex-row justify-between lg:mr-auto lg:w-auto lg:flex-col">
            <div className="flex items-center gap-1 text-tertiary-text">
              <Logo /> <span>- Designed Wordwide</span>
            </div>
            <div className="flex items-center gap-6">
              <Twitter />
              <Twitter />
              <Twitter />
              <Twitter />
            </div>
          </div>
          <div className="flex flex-wrap lg:ml-auto">
            {footerLinks.map((section, i) => (
              <div
                className="mt-10 flex min-w-[50%] flex-col md:min-w-[18rem] lg:mt-0"
                key={i}
              >
                <h3 className="mb-3 font-medium text-secondary-text">
                  {section.title}
                </h3>
                <ul className="">
                  {section.links.map((link, index) => (
                    <li
                      className="[&_a]:transition-colors [&_a]:last:mb-0 [&_a]:hover:text-white"
                      key={index}
                    >
                      <Link
                        href={link.href}
                        className="mb-3 block text-tertiary-text"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
