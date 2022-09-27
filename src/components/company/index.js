import React from "react";

export default function Company() {
  return (
    <section className="py-32 bg-companybg">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-3/12 bg-primary py-[90px] px-[50px]">
            <h2 className="font-pop font-bold text-3xl leading-[54px] text-white">
              Learn more about our company
            </h2>
          </div>
          <div
            className="w-9/12 flex justify-center items-center"
            style={{ background: "url(images/company.png)" }}
          >
            <a
              className=" inline-block font-pop text-base font-medium text-primary bg-white border-white hover:bg-primary hover:text-white ease-linear duration-300 py-4 px-5 mt-5"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
