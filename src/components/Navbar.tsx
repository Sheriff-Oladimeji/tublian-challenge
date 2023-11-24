"use client";
import React from "react";
import Tublian from "public/Tublian.png";
import logo from "public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  id: number;
  title: string;
  url: string;
}
const navLinks: NavLink[] = [
  {
    id: 1,
    title: "1: Get Started",
    url: "/get-started",
  },
  {
    id: 2,
    title: "2: Create Account",
    url: "/create-account",
  },
  {
    id: 3,
    title: "3: Account Setup",
    url: "/account-setup",
  },
  {
    id: 4,
    title: "4: Payment",
    url: "/payment",
  },
];
const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="flex justify-between gap-6 flex-col sm:flex-row flex-wrap w-[90%] lg:w-[80%] mx-auto my-6">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" />
        <Image src={Tublian} alt="tublian" />
      </div>

      <div className="flex gap-4 items-center  flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`text-sm font-semibold  text-[#696969] ${
              path == link.url ? "gradient-text" : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
