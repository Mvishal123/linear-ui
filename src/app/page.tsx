import Button, { IconWrapper } from "@/components/button";
import Companies from "@/components/companies";
import Container from "@/components/container";
import { HeroTitle, Hero, HeroSubtitle } from "@/components/hero";
import HeroImage from "@/components/hero-image";
import ChevronRight from "@/components/icons/chevon-right";
import HomePageHero from "@/components/sections/homepage-hero";
import Stars from "@/components/stars";
import clsx from "clsx";
import React from "react";

const page = () => {
  return (
    <main>
      <Container className="pb-[16.4rem] pt-[6.4rem] text-center md:pb-[25.6rem]">
        <HomePageHero />
      </Container>
      <Container>
        <Companies />
      </Container>
      <div
        className={clsx(
          "relative z-[-1] -my-[12.8rem] h-[60rem] overflow-hidden after:absolute after:opacity-65 after:inset-0 after:bg-radial-faded [--color:#7877C6] after:blur-[20rem] after:stars-mask after:z-[-1] stars-mask",
          "before:bg-background before:absolute before:-left-1/2 before:top-1/2 before:h-[140%] before:w-[200%] before:rounded-[50%] before:border before:border-[rgba(120,_119,_198,_0.4)]",
        )}
      >
        <Stars />
      </div>
    </main>
  );
};

export default page;
