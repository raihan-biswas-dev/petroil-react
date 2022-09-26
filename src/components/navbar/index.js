import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-primary py-7">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-1/5">
            <picture>
              <img src="images/logo.png" alt="logo" loading="lazy" />
            </picture>
          </div>
          <div className="w-4/5 flex items-center justify-center">
            <ul className="font-pop text-base font-medium text-white flex  gap-x-12">
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
              className=" inline-block font-pop text-base font-medium text-white border border-white py-4 px-5 ml-16"
              href="#"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
