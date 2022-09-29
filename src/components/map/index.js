import React from "react";

export default function Map() {
  return (
    <section>
      <div
        className="h-full w-full py-[225px]"
        style={{ background: "url(images/maps.png)" }}
      ></div>
      <div className="bg-primary w-full py-12 border-b-2 border-b-2 border-yellowborder">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-9/12 flex ">
              <h3 className="font-pop font-bold text-4xl text-white">
                Want to join as member branch in your area?
              </h3>
            </div>
            <div className="w-3-12">
              <a
                className=" inline-block font-pop text-base border-2 border-white font-semibold text-white bg-primary py-4 px-5"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
