import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroHeadingProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroHeadingProps) => (
  <h1 className="text-gradient text-6xl md:text-8xl my-6">{children}</h1>
);

export const HeroSubtitle = ({ children }: HeroHeadingProps) => (
  <p className="md:text-xl mb-12 text-lg text-secondary-text">{children}</p>
);

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
