import React from "react";
import LatestVehicles from "../components/LatestVehicles";
import { CiStar } from "react-icons/ci";
import { FaStarOfLife } from "react-icons/fa";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Marquee from "react-fast-marquee";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="bg-blue-50">
      <Banner></Banner>
      <LatestVehicles></LatestVehicles>

      <WhyChooseUs></WhyChooseUs>

      {/* customer testimonial section */}
   <section className="bg-blue-50 py-12 px-4 text-accent text-center">
      <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-accent mb-8">
        What Our <span className="text-orange-400">Customers</span> Say
      </h2>
       
      <Marquee pauseOnHover={true} speed={50}>
        <Testimonials></Testimonials>
      </Marquee>
      </section>
    </div>
  );
};

export default Home;
