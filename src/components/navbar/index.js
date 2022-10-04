import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  let [open, setOpen] = useState(false);

  let handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
    function screenResize() {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
    window.addEventListener("resize", screenResize);
  });

  return (
    <nav className="bg-primary py-7 relative">
      <div className="max-w-container mx-auto">
        <div className="md:flex items-centernpm start">
          <div className="md:w-1/5 px-2.5 md:px-0">
            <picture>
              <img src="images/logo.png" alt="logo" loading="lazy" />
            </picture>
          </div>
          <button onClick={handleOpen}>
            <FaBars className="block md:hidden absolute top-9 right-3 text-2xl text-white" />
          </button>
          {open && (
            <div className="md:w-4/5  md:flex items-center justify-end">
              <ul className="font-pop text-base font-medium text-white flex flex-col md:flex-row ml-4 md:gap-x-12 gap-y-2 md:gap-y-0">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
              <a
                className=" inline-block font-pop text-base font-medium text-white border border-white py-4 px-5 ml-4 md:ml-16 my-2"
                href="#"
              >
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
