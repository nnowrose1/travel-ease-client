import React, { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import VehicleCard from "../components/VehicleCard";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const AllVehicles = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    setLoading(true);
    const url = sort ? `/vehicles/sort?sort=${sort}` : "/allVehicles";
    axiosInstance.get(url).then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance, sort]);

  const categories = [...new Set(vehicles.map((v) => v.category))];

  //filter based on search and filter
  const filteredVehicles = vehicles
    .filter((vehicle) =>
      vehicle.vehicle_name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((vehicle) => (category ? vehicle.category === category : true))
    .filter((v) =>
      priceRange === "low"
        ? v.price_per_day < 50
        : priceRange === "mid"
        ? v.price_per_day >= 50 && v.price_per_day <= 100
        : priceRange === "high"
        ? v.price_per_day > 100
        : true
    );

  const totalPages = Math.ceil(filteredVehicles.length / limit);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  //   axiosInstance.get("/allVehicles").then((data) => {
  //     setVehicles(data.data);
  //   });

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
    // sortedVehicles(value);
  };

  // const sortedVehicles = (sort) => {
  //   setLoading(true);
  //  axiosInstance.get(`/vehicles/sort?sort=${sort}`).then((data) => {
  //       setVehicles(data.data);
  //       setLoading(false)
  //     })

  // }
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-blue-50 mt-18.5">
      <div className="container mx-auto">
        <motion.h1
          className="text-accent font-bold text-3xl text-center pt-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          Explore All Our Vehicles
        </motion.h1>

        {/* search and filter */}

        <div className="flex flex-wrap gap-4 justify-between items-center py-4 px-4">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-3 py-2 rounded w-full md:w-64 dark:bg-primary dark:text-accent"
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-2 py-2 rounded dark:bg-primary dark:text-accent"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
              setCurrentPage(1);
            }}
            className="border px-2 py-2 rounded dark:bg-primary dark:text-accent"
          >
            <option value="">All Prices</option>
            <option value="low">Below $50</option>
            <option value="mid">$50 – $100</option>
            <option value="high">Above $100</option>
          </select>

          {/* Sort */}
          {/* <div className="pt-4 pb-2 flex justify-end pr-10"> */}
          <select
            value={sort}
            onChange={handleSort}
            className="border px-2 py-1 rounded dark:bg-primary dark:text-accent"
          >
            <option value="">Sort by Price</option>
            <option value="priceAsc">Price Low → High</option>
            <option value="priceDesc">Price High → Low</option>
          </select>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8 ">
          {paginatedVehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle._id}
              index={index}
              vehicle={vehicle}
            ></VehicleCard>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 py-8">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn"
          >
            Prev
          </button>
        )}
        {/* i 0 theke start hoy. page number jaate 1 theke start hoy ejonno i +1 */}
        {[...Array(totalPages).keys()].map((i) => (
          <button
            onClick={() => setCurrentPage(i + 1)}
            className={`btn ${i + 1 === currentPage && "btn-primary"}`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllVehicles;
