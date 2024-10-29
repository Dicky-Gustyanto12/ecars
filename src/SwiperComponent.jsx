import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import gambar Play dan Pause
import playIcon from "./assets/play.png";
import pauseIcon from "./assets/pause.png";

// Import banner
import banner1 from "./assets/banner/banner1.png";
import banner2 from "./assets/banner/banner2.png";
import banner3 from "./assets/banner/banner3.png";
import banner4 from "./assets/banner/banner4.png";

export default function App() {
  const progressCircle = useRef(null);
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
  };

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        speed={700}
        loop={true}
        className="mySwiper"
      >
        {/* Banner1 */}
        <SwiperSlide className="relative flex-col lg:flex-none">
          {/* Gambar Banner */}
          <img
            src={banner1}
            alt="Banner 1"
            className="object-cover w-full brightness-75"
          />

          {/* Kartu yang di-overlay di atas gambar */}
          <div className="hidden md:absolute md:z-10 md:h-[215px] md:block md:bg-white md:rounded-sm md:left-32 md:top-10 md:w-80 md:shadow-lg md:opacity-80">
            <div className="py-3 px-7">
              <h2 className="mt-4 mb-2 text-2xl font-extrabold text-left text-blue-900 uppercase">
                NISSAN SILVIA S15
              </h2>
              <p className="mb-5 text-sm font-normal text-left ">
                Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
                pengalaman berkendara yang dinamis.
              </p>
              <button className="font-normal p-2 text-sm btn text-white bg-gray-800 rounded-sm -ml-[162px]">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className=" h-52 contents md:hidden">
            <h2 className="pt-5 mb-2 text-2xl font-bold text-blue-900">
              NISSAN SILVIA S15
            </h2>
            <p className="px-10 mb-2 text-sm">
              Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
              pengalaman berkendara yang dinamis.
            </p>
            <button className="mt-2 mb-10 font-normal text-center bg-gray-800 border-none rounded-sm btn btn-primary btn-sm hover:bg-gray-500">
              <span className="text-sm text-white">Selengkapnya</span>
            </button>
          </div>
        </SwiperSlide>
        {/* Banner 1 End */}

        {/* Banner2 */}
        <SwiperSlide className="relative flex-col lg:flex-none lg:h-full">
          {/* Gambar Banner */}
          <img
            src={banner2}
            alt="Banner 2"
            className="object-cover w-full h-full brightness-75"
          />

          {/* Kartu yang di-overlay di atas gambar */}
          <div className="hidden md:absolute md:z-10 md:h-[215px] md:block md:bg-white md:rounded-sm md:left-32 md:top-10 md:w-80 md:shadow-lg md:opacity-80">
            <div className="py-3 px-7">
              <h2 className="mt-4 mb-2 text-2xl font-extrabold text-left text-blue-900 uppercase">
                AUDI A3 TDI
              </h2>
              <p className="mb-5 text-sm font-normal text-left ">
                Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
                pengalaman berkendara yang dinamis.
              </p>
              <button className="font-normal btn p-2 text-sm text-white bg-gray-800 rounded-sm -ml-[162px]">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className=" h-52 contents md:hidden">
            <h2 className="pt-5 mb-2 text-2xl font-bold text-blue-900">
              AUDI A3 TDI
            </h2>
            <p className="px-10 mb-2 text-sm">
              Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
              pengalaman berkendara yang dinamis.
            </p>
            <button className="mt-2 mb-10 font-normal text-center bg-gray-800 border-none rounded-sm btn btn-primary btn-sm hover:bg-gray-500">
              <span className="text-sm text-white ">Selengkapnya</span>
            </button>
          </div>
        </SwiperSlide>
        {/* Banner 2 End */}

        {/* Banner3 */}
        <SwiperSlide className="relative flex-col lg:flex-none lg:h-full">
          {/* Gambar Banner */}
          <img
            src={banner3}
            alt="Banner 3"
            className="object-cover w-full h-full brightness-75"
          />

          {/* Kartu yang di-overlay di atas gambar */}
          <div className="hidden md:absolute md:z-10 md:h-[215px] md:block md:bg-white md:rounded-sm md:left-32 md:top-10 md:w-80 md:shadow-lg md:opacity-80">
            <div className="py-3 px-7">
              <h2 className="mt-4 mb-2 text-2xl font-extrabold text-left text-blue-900 uppercase">
                FORD MUSTANG V8
              </h2>
              <p className="mb-5 text-sm font-normal text-left ">
                Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
                pengalaman berkendara yang dinamis.
              </p>
              <button className="font-normal btn p-2 text-sm text-white bg-gray-800 rounded-sm -ml-[162px]">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className=" h-52 contents md:hidden">
            <h2 className="pt-5 mb-2 text-2xl font-bold text-blue-900">
              FORD MUSTANG V8
            </h2>
            <p className="px-10 mb-2 text-sm">
              Mobil ini dirancang khusus untuk performa tinggi, kecepatan, dan
              pengalaman berkendara yang dinamis.
            </p>
            <button className="mt-2 font-normal text-center bg-gray-800 border-none rounded-sm btn mb-14 btn-primary btn-sm hover:bg-gray-500">
              <span className="text-sm text-white">Selengkapnya</span>
            </button>
          </div>
        </SwiperSlide>
        {/* Banner 3 End */}

        {/* Lingkaran animasi dengan tombol Play/Pause */}
        <div
          className="relative z-20 flex items-center justify-center autoplay-progress"
          slot="container-end"
          onClick={toggleAutoplay}
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute progress-circle"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              style={{
                strokeDasharray: 126,
                strokeDashoffset: "calc(126 * var(--progress))",
                transition: "stroke-dashoffset 0.25s linear",
              }}
            />
          </svg>
          {/* Gambar Play/Pause dengan ukuran diatur langsung */}
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt={isPlaying ? "Pause" : "Play"}
            style={{ width: "15px", height: "15px" }} // Atur ukuran langsung di sini
            className="relative z-10"
          />
        </div>
      </Swiper>
    </>
  );
}
