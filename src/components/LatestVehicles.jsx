import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import Loader from "./Loader";
import VehicleCard from "./VehicleCard";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestVehicles = () => {
  const axiosInstance = useAxios();
  const [latestVehicles, setLatestVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    axiosInstance.get("/latestVehicles").then((data) => {
      setLatestVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
     <section className="pt-8 bg-blue-50">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 text-center">
           <span className="text-orange-400">Latest</span> Vehicles
        </h2>
        <p  className="text-accent max-w-2xl mx-auto mb-8">
         Discover our newest additions — from sleek sedans to powerful SUVs, each vehicle is carefully selected to ensure comfort, safety, and style. Whether you’re planning a weekend getaway or a business trip, our latest rides are ready to make your journey smooth and memorable.
        </p>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {latestVehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
      ))}
    </div>
      </div>
    </section>
  );
};

export default LatestVehicles;
