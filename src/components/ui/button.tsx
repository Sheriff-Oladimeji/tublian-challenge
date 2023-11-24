import Link from "next/link";
import React from "react";
type ButtonProps = {
  styles: string;
  children: React.ReactNode;
  onClick?: () => void;
 
};

const Button = ({ styles, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full p-2 items-center w-full font-medium text-base text-[#121212] ${styles} bg-[#FDD649]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
