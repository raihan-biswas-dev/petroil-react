import React from "react";

export default function Service() {
  return (
    <section className="mt-7">
      <div className="flex flex-wrap">
        <div className="flex flex-col justify-center items-center w-2/4">
          <h3 className="font-pop font-bold text-[64px]">Our Services</h3>
          <p className="font-pop font-medium text-bases w-[405px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div
          className="w-2/4 py-36 relative"
          style={{
            background: "url(images/service1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-start justify-center absolute h-full w-full bg-darkLight left-0 top-0 py-36 pl-8">
            <h4 className="font-pop font-bold text-4xl text-white ">
              Modern natural oil and gas refineries.
            </h4>
            <a
              className=" inline-block font-pop text-base font-medium text-white bg-primary py-4 px-5 mt-5"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-2/4 py-36 relative"
          style={{
            background: "url(images/service2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-start justify-center absolute h-full w-full bg-darkLight left-0 top-0 py-36 pl-8">
            <h4 className="font-pop font-bold text-4xl text-white ">
              Supply of national industries.
            </h4>
            <a
              className=" inline-block font-pop text-base font-medium text-white bg-primary py-4 px-5 mt-5"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="w-2/4 py-36 relative"
          style={{
            background: "url(images/service3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-start justify-center absolute h-full w-full bg-darkLight left-0 top-0 py-36 pl-8">
            <h4 className="font-pop font-bold text-4xl text-white ">
              National fuel distribution and supply.
            </h4>
            <a
              className=" inline-block font-pop text-base font-medium text-white bg-primary py-4 px-5 mt-5"
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
