import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import bgImage from "public/bg-image-1.png";
import React from "react";

const CreateAccount = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse  h-screen overflow-y-hidden">
      <div className="flex-1 overflow-y-auto h-full w-full relative">
        <div className="hidden sm:flex">
          <Navbar />
        </div>
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-8 ">
          <div>
            <h1 className="text-bold font-bold text-lg  sm:text-2xl lg:text-3xl">
              Create Account
            </h1>
            <p className="text-sm sm:text-base text-[#CFCFCF]">
              Creating account for{" "}
              <span className="text-[#4BA3FF]">@John Doe</span>
            </p>
          </div>
          <form className="flex flex-col gap-4 md:w-[80%] lg:w-[70%] ">
            <input
              type="email"
              className=" border-b border-[#888] bg-transparent py-2 active:outline-none focus:outline-none "
              placeholder="Email"
              name="Email"
              autoComplete="off"
            />
            <input
              type="password"
              className=" border-b border-[#888] bg-transparent py-2 active:outline-none focus:outline-none active:bg-transparent focus:bg-transparent"
              autoComplete="off"
              placeholder="Password"
              name="Password"
            />
            <Button styles="">Create Account</Button>
            <p className="text-[#B7B7B7]">
              Already have an account?
              <Link
                href="/login"
                className="text-bold font-bold border-b border-[#B7B7B7]"
              >
                Log in
              </Link>
            </p>
          </form>
          <Footer/>
        </div>
      </div>
      <Image
        src={bgImage}
        alt="background image"
        className="hidden sm:block flex-1 h-full sm:object-contain md:object-cover   "
      />
    </div>
  );
};

export default CreateAccount;
