import React from "react";
import Button, { IconWrapper } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import ChevronRight from "../icons/chevon-right";
import HeroImage from "../hero-image";

const HomePageHero = () => {
  return (
    <>
      <Button
        href="/"
        size="small"
        variant="secondary"
        className="translate-y-[10px] animate-fade-in opacity-0 [--animation-delay:0ms]"
      >
        Linear 2022 Release – Built for scale
        <IconWrapper>→</IconWrapper>
      </Button>
      <Hero>
        <HeroTitle className="translate-y-[10px] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle className="translate-y-[10px] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Meet the new standard for modern software development.
          <br className="hidden md:block" />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button
          href="/"
          size="large"
          className="translate-y-[10px] animate-fade-in opacity-0 [--animation-delay:600ms]"
        >
          Get Started
          <IconWrapper>
            <ChevronRight />
          </IconWrapper>
        </Button>
      </Hero>
      <HeroImage />
    </>
  );
};

export default HomePageHero;