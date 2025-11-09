import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import VehicleCard from "../components/VehicleCard";
import Loader from '../components/Loader';

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/allVehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

//   axiosInstance.get("/allVehicles").then((data) => {
//     setVehicles(data.data);
//   });
  if(loading){
    return <Loader></Loader>
  }
  return (
    <div className="bg-blue-50">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
      ))}
    </div>
    </div>
  );
};

export default AllVehicles;
