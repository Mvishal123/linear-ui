"use client";

import clsx from "clsx";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const availableLenghts = [8, 10, 12, 14];

interface Line {
  id: string;
  direction: "to left" | "to top";
  duration: string;
  length: number;
}

const HeroImage = () => {
  const { inView, ref } = useInView({ threshold: 0.4, triggerOnce: true });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [lines, setLines] = useState<Line[] | []>([]);

  const onAnimationEndHandler = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (inView) {
      const sendLines = (interval: number) => {
        intervalRef.current = setInterval(() => {
          setLines((prev) => [
            ...prev,
            {
              id: Math.random().toString(32).substring(8),
              direction: Math.random() > 0.5 ? "to left" : "to top",
              duration: "2s",
              length:
                availableLenghts[getRandomNumber(0, availableLenghts.length)],
            },
          ]);
          console.log({ interval });
        }, interval);
      };

      sendLines(getRandomNumber(1000, 4500));

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [inView, lines]);

  return (
    <div className="relative [perspective:2000px]">
      <div
        ref={ref}
        className={clsx(
          "bg-hero-gradient border-transparent-white mt-[10.8rem] w-full rounded border",
          inView ? "animate-hero-rotate" : "",
          "before:bg-hero-glow before:absolute before:inset-0 before:-z-10 before:opacity-0 before:blur-[120px]",
          inView ? "before:animate-hero-glow" : "before:opacity-0",
        )}
        style={{
          transform: "rotateX(25deg)",
        }}
      >
        <div className="absolute inset-0 z-20">
          {lines.map((line) =>
            line.direction === "to left" ? (
              <span
                key={line.id}
                className={clsx(
                  "bg-glow-line absolute left-0 top-0 inline-block h-[1px] opacity-0",
                  inView ? `animate-glow-lines-horizontal` : "",
                )}
                style={
                  {
                    width: `${line.length}rem`,
                    "--direction": line.direction,
                    "--duration": line.duration,
                  } as CSSProperties
                }
                onAnimationEnd={() => onAnimationEndHandler(line.id)}
              ></span>
            ) : (
              <span
                key={line.id}
                className={clsx(
                  "bg-glow-line absolute right-0 top-0 block w-[1px] opacity-0",
                  inView ? "animate-glow-lines-vertical" : "",
                )}
                style={
                  {
                    height: `${line.length}rem`,
                    "--direction": line.direction,
                    "--duration": line.duration,
                  } as CSSProperties
                }
                onAnimationEnd={() => onAnimationEndHandler(line.id)}
              ></span>
            ),
          )}
        </div>
        <svg
          className={clsx(
            "absolute inset-0 [&_path]:stroke-white [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:[stroke-opacity:0.2]",
            inView && "[&_path]:animate-hero-sketch",
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>
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
