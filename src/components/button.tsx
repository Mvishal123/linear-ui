import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "text-sm bg-radial-gradient hover:text-shadow hover:gradient-shadow [&_.icon-wrapper]:ml-2 transition-[shadow,text-shadow]",
      secondary: [
        "text-off-white bg-white/10 hover:bg-white/20 transition-colors border border-transparent-white ease-in ",
        "[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2 fade-in duration-150",
      ],
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

export const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="icon-wrapper">{children}</span>
);

const Button = ({ children, variant, size, href, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(buttonClasses({ variant, size }), className)}
    >
      {children}
    </Link>
  );
};

export default Button;
