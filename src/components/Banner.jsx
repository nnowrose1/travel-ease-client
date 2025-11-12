import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
  import {motion}   from "framer-motion";
  import Aos from "aos";

import { Link } from "react-router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
   const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/Ng8jgzZn/kenny-eliason-y-Dekvy-Z52d-U-unsplash.jpg",
      title: "Your Perfect Ride Awaits",
      desc: "Book reliable and affordable vehicles for every trip — anytime, anywhere.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/nNxcgFsh/r0m0-4-fmzwsm-Pw-ECA-unsplash.jpg",
      title: "Drive in Comfort and Style",
     desc: "Experience luxury and performance with our top-rated vehicles.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/XNQqp0p/family-summer-forest-by-open-trunk.jpg",
      title: "Plan Your Perfect Road Trip",
       desc: "From city rides to cross-country adventures — we’ve got you covered.",
    },
  ];

  return (
    <div className="relative w-full">
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
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className=" mySwiper"
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
              className="h-[70vh] flex flex-col justify-center items-center text-center text-black object-cover bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* Overlay
              <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

              {/* Text content */}
               <div
                className="text-center text-white px-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p
                  data-aos="fade-in"
                  data-aos-delay="400"
                  className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                >
                  {slide.desc}
                </p>
                <Link to="/allVehicles">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg shadow-lg font-semibold text-white"
                  >
                    Explore All Vehicles
                  </motion.button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
