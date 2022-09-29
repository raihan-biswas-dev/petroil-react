import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Supplier from "./components/supplier";
import Service from "./components/service";
import Company from "./components/company";
import Brand from "./components/brand";
import Blog from "./components/blog";
import Map from "./components/map";
import Footer from "./components/footer";

function App() {
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
      <Footer/>
    </>
  );
}

export default App;
