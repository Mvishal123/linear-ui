"use client";

import clsx from "clsx";
import { useInView } from "react-intersection-observer";

const HeroImage = () => {
  const { inView, ref } = useInView({ threshold: 0.4, triggerOnce: true });
  console.log(inView);

  return (
    <div className="relative [perspective:2000px]">
      <div
        ref={ref}
        className={clsx(
          "bg-hero-gradient border-transparent-white mt-[10.8rem] w-full rounded border",
          inView ? "animate-hero-rotate" : "",
          "before:bg-hero-glow before:absolute before:inset-0 before:-z-10 before:blur-[120px] before:opacity-0",
          inView ? "before:animate-hero-glow" : "before:opacity-0",
        )}
        style={{
          transform: "rotateX(25deg)",
        }}
      >
        <img
          src="/linear_hero.webp"
          alt=""
          className={clsx(
            "rounded opacity-0",
            inView ? "animate-hero-image" : "opacity: 0",
          )}
        />
      </div>
    </div>
  );
};

export default HeroImage;
