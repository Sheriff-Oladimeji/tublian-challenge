import Link from "next/link";
import React from "react";
type ButtonProps = {
  styles: string;
  children: React.ReactNode;
  setClick?: () => void;
 
};

const Button = ({ styles, children,setClick}: ButtonProps) => {
  return (
    <button
      className={`rounded-full p-2 items-center font-medium text-base text-[#121212] ${styles} bg-[#FDD649]`}
      onClick={setClick}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
