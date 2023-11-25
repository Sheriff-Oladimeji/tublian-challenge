"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/button";
import setupData from "@/data/setup";
import Image from "next/image";
import React, { useState } from "react";
import tick from "public/tick-circle.svg";

const AccountSetupPage = () => {
  const [selected, setSelected] = useState<number>();

  const handleOptionSelect = (id: number) => {
    setSelected(id);
  };
  return (
    <div className=" overflow-y-auto h-full min-h-screen w-full relative bg-[#121212]">
      <div className="hidden sm:flex">
        <Navbar />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4 text-center ">
        <div className="flex flex-col gap-2">
          <h1 className="text-bold font-bold text-lg  sm:text-2xl lg:text-3xl">
            How are you planning to use Tublian?
          </h1>
          <p className="text-sm sm:text-base text-[#CFCFCF] max-w-md text-center mx-auto">
            We will customize your experience based on your option.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto mt-4">
          {setupData.map((data) => (
            <div
              key={data.id}
              className={`bg-card-bg flex flex-row sm:flex-col gap-2  sm:gap-4 items-center px-3  py-8 w-full h-full relative cursor-pointer ${
                selected === data.id ? "gradient-border" : "rounded-xl"
              }`}
              onClick={() => handleOptionSelect(data.id)}
            >
              <Image
                src={data.image}
                alt={data.title}
                className="w-[20%]  sm:w-[60%] sm:h-[60%]"
              />
              <div className="max-w-xs sm:max-w-sm">
                <h3 className="text-lg sm:text-xl text-[#FEFEFE]">
                  {data.title}
                </h3>
                <p className="text-sm sm:text-base text-[#CFCFCF]  ">
                  {data.description}
                </p>
              </div>

              <Image
                src={tick}
                alt="tick"
                className={` ${
                  selected === data.id
                    ? "flex sm:absolute sm:top-4 right-2"
                    : "hidden"
                }  `}
              />
            </div>
          ))}
        </div>

        <Button styles="w-full sm:w-[50%] md:w-[40%] lg:w-[30%] mx-auto">Next</Button>

        <Footer styles="w-[30%]  left-[40%]" />
      </div>
    </div>
  );
};

export default AccountSetupPage;
