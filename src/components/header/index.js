import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-black py-4 border-b-2 border-yellowborder">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="md:flex">
          <div className="w-full md:w-2/4 md:flex  ">
            <p className="font-pop text-base text-white	font-normal	relative pl-6 after:absolute after:right-[-18px] after:top-0 after:w-0.5 after:h-full after:content-[''] md:after:bg-afterborder mb-2.5 md:mb-0">
              <AiOutlineMail className="absolute left-1.5 top-1" />
              mail@yourcompany.com
            </p>
            <p className="font-pop text-base text-white	font-normal	relative pl-6 md:ml-6 mb-2.5 md:mb-0">
              <FiPhone className="absolute left-1.5 top-1" /> +896 120 5889(Toll
              free)
            </p>
          </div>
          <div className="w-full md:w-2/4 flex  md:justify-end gap-x-4 md:gap-x-5 pl-1">
            <FaFacebookF className="text-white hover:text-primary ease-in duration-300" />
            <SiTwitter className="text-white hover:text-primary ease-in duration-300" />
            <FaLinkedinIn className="text-white hover:text-primary ease-in duration-300" />
            <BsInstagram className="text-white hover:text-primary ease-in duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
