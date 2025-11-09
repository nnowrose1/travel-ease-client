import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import Loader from "./Loader";
import VehicleCard from "./VehicleCard";

const LatestVehicles = () => {
  const axiosInstance = useAxios();
  const [latestVehicles, setLatestVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
      {latestVehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
      ))}
    </div>
  );
};

export default LatestVehicles;
