import clsx from "clsx";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroHeadingProps) => (
  <h1 className={clsx("text-gradient my-6 text-6xl md:text-8xl", className)}>
    {children}
  </h1>
);

export const HeroSubtitle = ({ children, className }: HeroHeadingProps) => (
  <p
    className={clsx("mb-12 text-lg text-secondary-text md:text-xl", className)}
  >
    {children}
  </p>
);

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
