import clsx from "clsx";
import React from "react";

interface HamburgerIconProps {
  isOpen: boolean;
}
const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="7.5"
        width="14"
        height="1"
        rx="0.5"
        style={{
          transformOrigin: "center",
          transition: "160ms",
          transform: isOpen ? "translateY(0)" : "translateY(-3.5px)",
          rotate: isOpen ? "45deg" : "0deg",
        }}
      ></rect>
      <rect
        x="1"
        y="7.5"
        width="14"
        height="1"
        rx="0.5"
        style={{
          transformOrigin: "center",
          transition: "160ms",
          transform: isOpen ? "translateY(0)" : "translateY(3.5px)",
          rotate: isOpen ? "-45deg" : "0deg",
        }}
      ></rect>
    </svg>
  );
};

export default HamburgerIcon;
