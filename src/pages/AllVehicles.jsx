import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import VehicleCard from "../components/VehicleCard";
import Loader from '../components/Loader';
import { motion } from "framer-motion";

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('');

  useEffect(() => {
    axiosInstance.get("/allVehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });


  }, [axiosInstance]);

//   axiosInstance.get("/allVehicles").then((data) => {
//     setVehicles(data.data);
//   });

const handleSort = (e) => {
  const value = e.target.value;
  setSort(value);
  sortedVehicles(value);
}

const sortedVehicles = (sort) => {
  setLoading(true);
 axiosInstance.get(`/vehicles/sort?sort=${sort}`).then((data) => {
      setVehicles(data.data);
      setLoading(false)
    })

}
  if(loading){
    return <Loader></Loader>
  }
  return (
    <div className="bg-blue-50 container mx-auto">
  <motion.h1
        className="text-accent font-bold text-3xl text-center pt-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        All Vehicles
      </motion.h1>
        {/* Sort */}
      <div className="pt-4 pb-2 flex justify-end pr-10">
        <select
          value={sort}
          onChange={handleSort}
          className="border px-2 py-1 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="priceAsc">Price Low → High</option>
          <option value="priceDesc">Price High → Low</option>
        </select>
      </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 ">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={vehicle._id}   index={index}
       vehicle={vehicle}></VehicleCard>
      ))}
    </div>
    </div>
  );
};

export default AllVehicles;
