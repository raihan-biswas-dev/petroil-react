import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BiEnvelope, BiLocationPlus } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="w-full h-full bg-footerbg py-16">
      <div className="flex max-w-container mx-auto">
        <div className=" w-[30%]">
          <picture>
            <img src="images/footer-logo.png" alt="logo" loading="lazy" />
          </picture>
          <div className="flex flex-col mt-7">
            <ul>
              <li className="font-regular text-white text-sm pb-3.5">
                <BiEnvelope className="inline-block" /> mail@yourcompany.com
              </li>
              <li className="font-regular text-white text-sm pb-3.5">
                <FiPhone className="inline-block" />
                +896 120 5889 (Toll free)
              </li>
              <li className="font-regular  text-white text-sm pb-3.5">
                <BiLocationPlus className="inline-block" />
                101 Baker Street, New York, USA, 12345
              </li>
            </ul>
            <ul>
              <div className="w-2/4 flex gap-3">
                <div className=" rounded-full p-2  bg-primary">
                  <FaFacebookF className="text-white" />
                </div>
                <div className=" rounded-full p-2  bg-primary">
                  <SiTwitter className="text-white" />
                </div>
                <div className=" rounded-full p-2  bg-primary">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className=" rounded-full p-2  bg-primary">
                  <BsInstagram className="text-white" />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="w-1/5">
          <h4 className="font-pop font-bold text-base text-white mt-8">
            Company
          </h4>
          <ul>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Service
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/5">
          <h4 className="font-pop font-bold text-base text-white mt-8">
            Others
          </h4>
          <ul>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                className="font-pop text-white text-xs font-normal	mb-4"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-[30%]">
          <h4 className="font-pop font-bold text-base text-white mt-8 mb-5">
            Certificate
          </h4>
          <div className="flex gap-8 justify-between">
            <div className="bg-white py-2 px-3 rounded-md">
              <h3 className="font-pop font-bold text-2xl text-[#008AD8]">
                ISO 88
              </h3>
              <p className="font-pop font-medium text-[8px] text-[#008AD8]">
                Environmentally Safe
              </p>
            </div>
            <div className="bg-white py-2 px-3 rounded-md">
              <h3 className="font-pop font-bold text-2xl text-[#980077]">
                Liquid <span className="text-[#009818]">Green</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
