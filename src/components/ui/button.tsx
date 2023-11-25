import Link from "next/link";
import React from "react";
type ButtonProps = {
  styles: string;
  children: React.ReactNode;
  handleClick?: () => void;
 
};

const Button = ({ styles, children,handleClick}: ButtonProps) => {
  return (
    <button
      className={`rounded-full p-2 items-center font-medium text-base text-[#121212] ${styles} bg-[#FDD649]`}
      onClick={handleClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
