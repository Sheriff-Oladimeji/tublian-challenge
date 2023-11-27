import React from 'react'
type FooterProps = {
  styles?: string;
  cdStyles ? : string
 
};
const Footer = ({styles, cdStyles}: FooterProps) => {
  return (
    <footer className={`absolute bottom-4 ${styles} `}>
      <div className={`hidden sm:flex items-center gap-3  text-[#B7B7B7] ${cdStyles} `}>
        <p>Privacy Policy</p>
        <p>Terms</p>
      </div>
     
    </footer>
  );
}

export default Footer