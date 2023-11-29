"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/button";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import tick from "public/tick-circle.svg";
import tickGreen from "public/tick-green.svg";
import { monthlyPricing, yearlyPricing } from "@/data/pricing";
import PaymentModal from "@/components/PaymentModal";
const PaymentPage = () => {
  const [selected, setSelected] = useState<number>();
  const [pricingData, setPricingData] = useState(monthlyPricing);
  const [duration, setDuration] = useState("/Month");
  const [selectedButton, setSelectedButton] = useState<string>("monthly");
  //  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false)
}
  const changeToYearly = () => {
    setPricingData(yearlyPricing);
    setDuration("/Year");
    setSelectedButton("yearly");
  };
  const changeToMonthly = () => {
    setPricingData(monthlyPricing);
    setDuration("/Month");
    setSelectedButton("monthly");
  };

  const handleOptionSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="  w-full relative bg-[#121212]">
      {openModal && <PaymentModal />}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-[2px]"
          onClick={closeModal}
        />
      )}
      <div className="hidden sm:flex">
        <Navbar />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4    ">
        <div className="flex flex-col gap-2">
          <h1 className="text-bold font-bold text-lg  sm:text-2xl lg:text-3xl text-center">
            Payment Plan
          </h1>
          <p className="text-sm sm:text-base text-[#CFCFCF] max-w-md text-center mx-auto">
            We will customize your experience based on your option.
          </p>
        </div>
        <div className="bg-card-bg text-[#CFCFCF] flex   w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-auto gap-2 rounded-lg p-1">
          <button
            className={`py-2  text-center  rounded-md  flex-1 px-4 ${
              selectedButton === "monthly" ? "gradient-bg text-[#FEFEFE]" : ""
            }`}
            onClick={changeToMonthly}
          >
            Monthly
          </button>
          <button
            className={`py-2  text-center  rounded-md  flex-1 flex gap-2 items-center px-4  ${
              selectedButton === "yearly" ? "gradient-bg text-[#FEFEFE] " : ""
            }`}
            onClick={changeToYearly}
          >
            Annually
            <span className="bg-[#445742] text-[#76F368] text-xs rounded-full px-1">
              20% Off
            </span>
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full mx-auto  text-[#FEFEFE]">
          {pricingData.map((data) => (
            <div
              key={data.id}
              className={`bg-card-bg flex flex-col gap-3  px-4  py-4  h-full relative cursor-pointer   sm:max-h-[700px] ${
                selected === data.id ? "gradient-border" : "rounded-xl"
              }`}
              onClick={() => handleOptionSelect(data.id)}
            >
              <span
                className={`rounded-xl px-3 py-1 text-sm w-max ${
                  data.id === 1
                    ? "bg-[#B29BF3]"
                    : data.id === 2
                    ? "bg-[#79BBFF]"
                    : "bg-[#22BFD6]"
                }`}
              >
                {data.type}
              </span>
              <h1 className="text-3xl font-bold text-bold">
                {data.price}
                {data.id < 3 && (
                  <s className="text-lg font-medium text-[#B7B7B7]">
                    {duration}
                  </s>
                )}
              </h1>

              <ul className="flex flex-col gap-3 mb-14 ">
                <h4 className="text-[#B7B7B7] font-medium text-xl ">
                  Features:
                </h4>
                {data.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-1 ">
                    <Image src={tickGreen} alt="tick" /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                styles={`w-[90%] absolute bottom-4 mx-auto left-[5%] ${
                  data.id === 3 ? "gradient-bg text-[#FEFEFE]" : ""
                } 
                  `}
                setClick={handleClick}
              >
                Subscribe
              </Button>
              <Image
                src={tick}
                alt="tick"
                className={` ${
                  selected === data.id
                    ? "flex absolute top-4 right-2"
                    : "hidden"
                }  `}
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
