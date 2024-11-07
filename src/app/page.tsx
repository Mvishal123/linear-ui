import Button, { IconWrapper } from "@/components/button";
import Container from "@/components/container";
import { HeroTitle, Hero, HeroSubtitle } from "@/components/hero";
import HeroImage from "@/components/hero-image";
import ChevronRight from "@/components/icons/chevon-right";
import React from "react";

const page = () => {
  return (
    <main>
      <Container className="py-[6.4rem] text-center">
        <Button
          href="/"
          size="small"
          variant="secondary"
          className="animate-fade-in translate-y-[10px] opacity-0 [--animation-delay:0ms]"
        >
          Linear 2022 Release – Built for scale
          <IconWrapper>→</IconWrapper>
        </Button>
        <Hero>
          <HeroTitle className="animate-fade-in translate-y-[10px] opacity-0 [--animation-delay:200ms]">
            Linear is a better way <br className="hidden md:block" /> to build
            products
          </HeroTitle>
          <HeroSubtitle className="animate-fade-in translate-y-[10px] opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
          <Button
            href="/"
            size="large"
            className="animate-fade-in translate-y-[10px] opacity-0 [--animation-delay:600ms]"
          >
            Get Started
            <IconWrapper>
              <ChevronRight />
            </IconWrapper>
          </Button>
        </Hero>
        <HeroImage />
      </Container>
    </main>
  );
};

export default page;
