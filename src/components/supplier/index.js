import React from "react";

function Supplier() {
  return (
    <section className="mt-[80px]">
      <div className="max-w-container mx-auto px-2.5 md:px-0">
        <div className="md:flex justify-between items-center">
          <div className="max-w-[289px]">
            <h2 className="font-pop font-bold text-[30px] md:text-5xl md:leading-[72px]">
              The biggest supplier on the country
            </h2>
          </div>
          <div className="max-w-[651px]">
            <p className="font-pop font-medium text-base text-para">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-2.5 md:px-0 mt-[80px] flex-col sml:flex-row flex-wrap  md:flex-nowrap md:justify-between ">
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier1.png"
              alt="supplier"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier2.png"
              alt="supplier"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier3.png"
              alt="supplier"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="sml:w-2/4 md:w-auto">
          <picture>
            <img
              className="w-full"
              src="images/supplier4.png"
              alt="supplier"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Supplier;
