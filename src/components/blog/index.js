import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Blog() {
  return (
    <section className=" bg-companybg py-32">
      <div className="max-w-container mx-auto ">
        <div className="flex justify-between">
          <div
            className="w-[339px] flex flex-col"
            style={{ background: "url(images/blog1.png)no-repeat" }}
          >
            <div className="h-full w-full bg-darkLight">
              <h4 className="font-pop font-bold text-2xl leading-9 pt-14 text-white py[75px] px-11">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="my-[75px] mx-11 inline-block font-pop text-base font-medium text-white bg-slate-400 hover:bg-primary hover:text-white ease-linear duration-300 py-4 px-5 mt-5"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="w-[339px] flex flex-col"
            style={{ background: "url(images/blog2.png)no-repeat" }}
          >
            <div className="h-full w-full bg-darkLight">
              <h4 className="font-pop font-bold text-2xl leading-9 pt-14 text-white py[75px] px-11">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="my-[75px] mx-11 inline-block font-pop text-base font-medium text-white bg-slate-400 hover:bg-primary hover:text-white ease-linear duration-300 py-4 px-5 mt-5"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div
            className="w-[339px] flex flex-col"
            style={{ background: "url(images/blog3.png)no-repeat" }}
          >
            <div className="h-full w-full bg-darkLight">
              <h4 className="font-pop font-bold text-2xl leading-9 pt-14 text-white py[75px] px-11">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                className="my-[75px] mx-11 inline-block font-pop text-base font-medium text-white bg-slate-400 hover:bg-primary hover:text-white ease-linear duration-300 py-4 px-5 mt-5"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <h4 className=" flex justify-end items-center font-pop font-bold text-base mt-7">
          MORE FROM THE BLLOG <BsArrowRightShort />
        </h4>
      </div>
    </section>
  );
}
