import React from "react";

export default function Brand() {
  return (
    <section className="bg-company py-24">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center items-center ">
          <div className="">
            <picture>
              <img src="images/brand1.png" alt="" loading="lazy" />
            </picture>
          </div>
          <div className="">
            <picture>
              <img src="images/brand2.png" alt="" loading="lazy" />
            </picture>
          </div>
          <div className="">
            <picture>
              <img src="images/brand3.png" alt="" loading="lazy" />
            </picture>
          </div>
          <div className="">
            <picture>
              <img src="images/brand4.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
