import { forwardRef } from "react";
import { Link }       from "react-router";
import { cn }         from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "donate";
export type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick?:   React.MouseEventHandler<HTMLElement>;
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  loading?:   boolean;
  icon?:      React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  href?:      string;
  external?:  boolean;
  /** Internal route. Renders a router Link instead of an anchor. */
  to?:        string;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary:   "bg-[#2b7fff] hover:bg-[#1a6fef] text-white border-transparent",
  secondary: "bg-transparent hover:bg-[#2b7fff] hover:text-white text-[#2b7fff] border-[#c5d9ff] hover:border-[#2b7fff]",
  ghost:     "bg-transparent hover:bg-white/10 text-white/70 hover:text-white border-white/20 hover:border-white/40",
  dark:      "bg-gray-900 hover:bg-gray-700 text-white border-transparent",
  donate:    "bg-[#f4cd03] hover:bg-[#d9b703] text-gray-900 border-transparent",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = "primary",
      size      = "md",
      loading   = false,
      icon,
      iconRight,
      fullWidth = false,
      children,
      className,
      disabled,
      href,
      external,
      to,
      ...props
    },
    ref
  ) => {
    const base = cn(
      "inline-flex items-center justify-center font-bold rounded-full border",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      VARIANTS[variant],
      SIZES[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {loading
          ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          : icon}
        {children}
        {!loading && iconRight}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={base} onClick={props.onClick}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          className={base}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={base}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";