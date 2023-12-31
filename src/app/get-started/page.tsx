import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import bgImage from "public/bg-image.png";
import React from "react";

const GetStarted = () => {
  return (
    <div className="flex flex-col sm:flex-row-reverse  h-screen overflow-y-hidden m-0">
      <div className="flex-1 overflow-y-auto h-full w-full relative bg-[#121212]">
        <div className="hidden sm:flex">
          <Navbar />
        </div>
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-8 ">
          <div>
            <h1 className="text-bold font-bold text-lg  sm:text-2xl lg:text-3xl">
              Get Started
            </h1>
            <p className="text-sm sm:text-base text-[#CFCFCF]">
              Start recruiting streetcred developers, Today!!
            </p>
          </div>
          <form className="flex flex-col gap-4 md:w-[80%] lg:w-[70%] ">
            <input
              type="text"
              className=" border-b border-[#888] bg-transparent py-2 active:outline-none focus:outline-none "
              placeholder="First Name"
              name="firstName"
            />
            <input
              type="text"
              className=" border-b border-[#888] bg-transparent py-2 active:outline-none focus:outline-none "
              placeholder="Last Name"
              name="LastName"
            />
            <Button styles="">Proceed</Button>
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
          <Footer />
        </div>
      </div>
      <Image
        src={bgImage}
        alt="background image"
        className="hidden sm:block flex-1 h-full w-full sm:object-contain md:object-cover  "
      />
    </div>
  );
};

export default GetStarted;
