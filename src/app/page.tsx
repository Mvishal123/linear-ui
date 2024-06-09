import Container from "@/components/container";
import { HeroTitle, Hero, HeroSubtitle } from "@/components/hero";
import React from "react";

const page = () => {
  return (
    <main>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way <br /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development.
            <br />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtitle>
        </Hero>
        <img src="/linear_hero.webp" alt="" />
      </Container>
    </main>
  );
};

export default page;
