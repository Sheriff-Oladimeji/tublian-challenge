import Link from "next/link";
import React from "react";
type ButtonProps = {
  styles: string;
  children: React.ReactNode;
  onClick?: () => void;
  url?: string;
};

const button = ({ styles, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full p-2 items-center ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;
