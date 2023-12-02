import React from 'react'
import Tublian from "public/Tublian.png";
import logo from "public/logo.png";
import Image from "next/image";
import closeIcon from "public/close.png"
import usePaymentStore from '@/state/paymentStore';

interface Props {
  setClick?: () => void;
}

const PaymentModal = ({ setClick }: Props) => {
  const {item} = usePaymentStore()
  return (
    <div className="fixed inset-0 top-1/2 -translate-y-1/2 z-50 bg-card-bg w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%]   mx-auto transition-all duration-500 ease-in-out rounded-xl p-4 flex flex-col gap-4 shadow-xl  h-[95%]  md:max-h-screen ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" />
          <Image src={Tublian} alt="tublian" />
        </div>
        <Image
          src={closeIcon}
          alt="close icon"
          onClick={setClick}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-[#292929] px-4 py-1 rounded-md border border-[#414141]">
        <div className="flex items-center justify-between">
          <h3>{item?.duration === "month" ? "Monthly Plan" : "Yearly Plan"}</h3>
          <p onClick={setClick} className="text-[#FDD649]">
            Change Plan
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span
            className={`rounded-xl px-2 py-1 text-sm w-max ${
              item?.id === 1
                ? "bg-[#B29BF3]"
                : item?.id === 2
                ? "bg-[#79BBFF]"
                : "bg-[#22BFD6]"
            }`}
          >
            {item?.type}
          </span>
          <div className="flex justify-between items-center">
            <h4>Total:</h4>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-bold">
                {item?.id === 1 || item?.id === 2 ? (
                  <>
                    <small className="text-[#B7B7B7] text-sm sm:text-lg">
                      USD
                    </small>
                    {item?.price}
                    <span className="text-sm sm:text-lg font-medium text-[#B7B7B7] capitalize">
                      /{item?.duration}
                    </span>
                  </>
                ) : (
                  <>{item?.price}</>
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal