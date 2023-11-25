import React from 'react'

const Footer = () => {
  return (
    <footer className=" absolute bottom-2">
      <div className="hidden sm:flex items-center gap-3  text-[#B7B7B7]">
        <p>Privacy Policy</p>
        <p>Terms</p>
      </div>
      <div className="block sm:hidden  h-[5px] bg-[#FFF]"></div>
    </footer>
  );
}

export default Footer