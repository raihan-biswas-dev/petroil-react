import React from "react";

function Banner() {
  return (
    <div className="" style={{ background: "url(images/banner.png)" }}>
      <div className="h-full w-full bg-darkLight p-8 md:py-64">
        <div className="max-w-container mx-auto">
          <h1 className="font-bold  text-[64px] w-[842px] text-white font-pop">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            className=" inline-block font-pop text-base font-medium text-white bg-primary py-4 px-5"
            href="#"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
