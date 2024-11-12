import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonBaseProps extends VariantProps<typeof buttonClasses> {
  children?: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLinkProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonBaseProps & (ButtonAsButtonProps | ButtonAsLinkProps);

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "text-sm bg-radial-gradient hover:text-shadow hover:gradient-shadow [&_.icon-wrapper]:ml-2 transition-[shadow,text-shadow]",
      secondary: [
        "text-off-white bg-white/10 hover:bg-white/20 transition-colors border border-transparent-white ease-in ",
        "[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2 fade-in duration-150",
        "[&_.highlight]:bg-transparent-white [&_.highlight]:mr-2 [&_.highlight]:px-2 py-1 [&_.highlight]:rounded-full",
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

export const Hightlight = ({children}: {children: React.ReactNode}) => (
  <span className="highlight">{children}</span>
)

const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className });
  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;


