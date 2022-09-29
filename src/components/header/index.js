import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-black py-4 border-b-2 border-yellowborder">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-2/4 flex">
            <p className="font-pop text-base text-white	font-normal	relative pl-6 after:absolute after:right-[-18px] after:top-0 after:w-0.5 after:h-full after:content-[''] after:bg-afterborder">
              <AiOutlineMail className="absolute left-1.5 top-1" />{" "}
              mail@yourcompany.com
            </p>
            <p className="font-pop text-base text-white	font-normal	relative pl-6 ml-6">
              <FiPhone className="absolute left-1.5 top-1" /> +896 120 5889
              (Toll free)
            </p>
          </div>
          <div className="w-2/4 flex justify-end gap-x-5">
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
