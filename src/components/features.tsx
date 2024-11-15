"use client";

import React from "react";
import Container from "./container";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

type FeatureProps = {
  children: React.ReactNode;
  featureColor: string;
  featureColorDark: string;
};

export const Features = ({
  children,
  featureColor,
  featureColorDark,
}: FeatureProps) => {
  const { inView, ref } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={clsx(
        "relative mt-[12.8rem] md:mt-[25.2rem]",
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.5),transparent) relative flex flex-col items-center overflow-x-clip after:pointer-events-none after:absolute after:inset-0",
        "before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:-translate-y-[65%] before:rotate-180 before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)]",
        inView
          ? "in-view before:scale-[200%] before:opacity-100"
          : "scale-60 before:opacity-40",
      )}
      style={
        {
          "--feature-color": featureColor,
          "--feature-color-dark": featureColorDark,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

type FeatureMainProps = {
  heading: React.ReactNode;
  image: string;
  subheading: string;
  imageSize: "small" | "big";
};
const FeatureMain = ({
  image,
  subheading,
  heading,
  imageSize,
}: FeatureMainProps) => {
  return (
    <>
      <div
        className={clsx(
          "w-full px-8",
          "relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]",
        )}
      >
        <h2
          className={clsx(
            "text-gradient mb-10 text-center text-6xl md:text-8xl",
            "translate-y-[40%] transition-transform duration-700 ease-in-out [.in-view_&]:translate-y-0",
          )}
        >
          {heading}
        </h2>
        <div
          className={clsx(
            "relative z-10 mx-auto rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask-composite:xor] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.1)] after:[mask:linear-gradient(black,transparent)]",
            imageSize === "big" ? "max-w-[110rem]" : "max-w-[74rem]",
          )}
        >
          <img
            src={image}
            alt="feature-image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <Container className="mx-auto w-[78rem] max-w-[90%] px-8 text-center">
        <p className="my-16 mx-auto text-2xl leading-tight text-white md:w-[80%] md:text-4xl">
          {subheading}
        </p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container className="mb-16 grid grid-cols-1 place-items-center gap-9 text-sm text-secondary-text sm:grid-cols-2 md:mb-[14rem] md:grid-cols-3 md:text-md [&_svg]:mr-[6px] [&_svg]:fill-white [&_svg]:md:mb-[4px] [&_svg]:md:inline">
      {features.map(({ title, text, icon: Icon }) => (
        <div key={title} className="w-full max-w-[25.6rem]">
          <Icon />
          <span className="text-white">{title}</span> {text}
        </div>
      ))}
    </Container>
  );
};

type FeatureCardsProps = {
  features: {
    image: string;
    imageClassName: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ image, imageClassName, title, text }) => (
          <div
            key={title}
            className={clsx(
              "relative aspect-[1.1/1] w-full overflow-hidden rounded-2xl border-[1px] border-transparent-white px-8 py-6 md:rounded-[4.8rem] md:p-14",
              "bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)]",
            )}
          >
            <h3 className="text-2xl">{title}</h3>
            <p className="max-w-[31rem] text-md text-secondary-text">{text}</p>
            <img
              src={image}
              alt={title + "-image"}
              className={clsx("absolute w-[200%] max-w-none", imageClassName)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

Features.Main = FeatureMain;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
