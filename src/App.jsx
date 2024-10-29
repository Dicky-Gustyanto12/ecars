import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import OtherProducts from "./OtherProducts";
import SwiperComponent from "./SwiperComponent";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <div>
        <Navbar />
      </div>

      {/* Carousel Swiper Section */}
      <div className="w-full h-full">
        <SwiperComponent />
      </div>

      {/* Katalog Section */}
      <div>
        <OtherProducts />
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
