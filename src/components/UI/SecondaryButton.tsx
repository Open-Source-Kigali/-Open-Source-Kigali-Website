import { NavLink } from "react-router";
import React from "react";

type SecondaryButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const SecondaryButton = ({
  to,
  children,
  className = "",
}: SecondaryButtonProps) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex items-center justify-center gap-2 text-sm sm:text-base px-5 py-2.5 md:px-7 md:py-3 bg-transparent hover:bg-primary-colour text-blue-500 hover:text-white border border-blue-500 hover:scale-[1.05] hover:shadow-lg font-semibold rounded-full transition ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default SecondaryButton;
