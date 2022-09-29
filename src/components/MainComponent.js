import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Banner from "./banner";
import Supplier from "./supplier";
import Service from "./service";
import Company from "./company";
import Brand from "./brand";
import Blog from "./blog";
import Map from "./map";
import Footer from "./footer";
import Copyright from "./copyright";

export default function MainComponent() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
      <Company />
      <Brand />
      <Blog />
      <Map />
      <Footer />
      <Copyright />
    </>
  );
}
