import clsx from "clsx";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("max-w-[120rem] mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
