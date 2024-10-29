import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import OtherProducts from "./OtherProducts";
import SwiperComponent from "./SwiperComponent";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      {/* <div className="w-full sm:bg-slate-400 h-[53rem] ">
        <Banner />
      </div> */}

      <div className="w-full h-full">
        <SwiperComponent />
      </div>

      {/* Container Section */}
      <div className="container"></div>

      {/* Produk Lainnya Section */}
      <OtherProducts />

      <Footer />
    </>
  );
}

export default App;
