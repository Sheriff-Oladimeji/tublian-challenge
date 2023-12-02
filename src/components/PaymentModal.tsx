import React from 'react'
import Tublian from "public/Tublian.png";
import logo from "public/logo.png";
import Image from "next/image";
import closeIcon from "public/close.png"

interface Props {
  setClick?: () => void;
}

const PaymentModal = ({setClick}: Props) => {
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
      <div>

      </div>
    </div>
  );
}

export default PaymentModal