"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Button from '@/components/ui/button';
import React, { useState } from 'react'

const AccountSetupPage = () => {
  const [selectOption, setSelectOption] = useState<boolean>(false)

  const handleOptionSelect = () => {
    setSelectOption(!selectOption)
  }
  return (
    <div className=" overflow-y-auto h-full min-h-screen w-full relative bg-[#121212]">
      <div className="hidden sm:flex">
        <Navbar />
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-8 text-center ">
        <div className='flex flex-col gap-6'>
          <h1 className="text-bold font-bold text-lg  sm:text-2xl lg:text-3xl">
            How are you planning to use Tublian?
          </h1>
          <p className="text-sm sm:text-base text-[#CFCFCF] max-w-md text-center mx-auto">
            We will customize your experience based on your option.
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default AccountSetupPage