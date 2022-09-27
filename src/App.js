import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Supplier from "./components/supplier";
import Service from "./components/service";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
    </>
  );
}

export default App;
