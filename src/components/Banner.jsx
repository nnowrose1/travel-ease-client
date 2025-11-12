import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
 import {motion}   from "framer-motion";

import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Your Perfect Ride Awaits",
      desc: "Book reliable and affordable vehicles for every trip — anytime, anywhere.",
      img: "https://i.ibb.co/1Y5bS3P2/sara-kurfess-x-Cm3-FGX8lb8-unsplash.jpg",
    },
    {
      id: 2,
      title: "Drive in Comfort and Style",
      desc: "Experience luxury and performance with our top-rated vehicles.",
      img: "https://i.ibb.co/nNxcgFsh/r0m0-4-fmzwsm-Pw-ECA-unsplash.jpg",
    },
    {
      id: 3,
      title: "Plan Your Perfect Road Trip",
      desc: "From city rides to cross-country adventures — we’ve got you covered.",
      img: "https://i.ibb.co/RTSG7XS3/istockphoto-1388250875-1024x1024.jpg",
    },
  ];

  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Image as background */}
            {/* <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              /> */}
               <div
              className="h-[70vh] flex flex-col justify-center items-center text-center text-white object-cover bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="max-w-xl mb-6 text-lg md:text-xl">{slide.desc}</p>
                <Link to="/allVehicles">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg shadow-lg font-semibold"
                  >
                    Explore All Vehicles
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
