import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("rounded-lg inline-flex items-center", {
  variants: {
    variant: {
      primary: "text-sm bg-brand hover:brightness-[115%]",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-3 h-8",
      large: "text-md px-6 h-12",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = ({ children }: ButtonProps) => {
  return <div className={buttonClasses()}>{children}</div>;
};

export default Button;
