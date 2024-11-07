import Button, { IconWrapper } from "@/components/button";
import Container from "@/components/container";
import { HeroTitle, Hero, HeroSubtitle } from "@/components/hero";
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
          className="animate-fade-in [--animation-delay:0ms] opacity-0 translate-y-[10px]"
        >
          Linear 2022 Release – Built for scale
          <IconWrapper>→</IconWrapper>
        </Button>
        <Hero>
          <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[10px]">
            Linear is a better way <br className="hidden md:block" /> to build
            products
          </HeroTitle>
          <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[10px]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
          <Button
            href="/"
            size="medium"
            className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[10px]"
          >
            Get Started
            <IconWrapper>
              <ChevronRight />
            </IconWrapper>
          </Button>
        </Hero>
        <img src="/linear_hero.webp" alt="" className="mt-[10.8rem]" />
      </Container>
    </main>
  );
};

export default page;
