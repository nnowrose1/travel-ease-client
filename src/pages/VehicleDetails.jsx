import {
  FaStar,
  FaRegStar,
  FaCarSide,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
// import useAxios from "../customHooks/useAxios";
import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
// import useAxiosSecure from "../customHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../customHooks/useAuth";
import useAxios from "../customHooks/useAxios";

const VehicleDetails = () => {
  const axiosInstance = useAxios();
  const {user} = useAuth();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    axiosInstance.get(`/allVehicles/${id}`).then((data) => {
      setVehicle(data.data);
      setLoading(false);
    });
  }, [axiosInstance, id]);

  const handleBooking = () => {
    console.log(vehicle);
    const {_id, ...vehicleData} = vehicle;
    const bookVehicle= {...vehicleData, booked_by: user.email}
    axiosInstance.post("/myBookings", bookVehicle).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Vehicle booked successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="container mx-auto bg-blue-50 rounded-2xl shadow-lg overflow-hidden py-8 flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={vehicle?.image}
          className="w-full h-full object-cover rounded-2xl p-2"
        />
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-accent">
              {vehicle?.vehicle_name}
            </h1>
            <span className="text-xl font-semibold text-orange-400">
              ${vehicle?.price_per_day}/day
            </span>
          </div>

          {/* Category & Type */}
          <div className="flex flex-wrap gap-3 mb-3 text-primary text-sm">
            <span className="flex items-center gap-1">
              <FaCarSide /> {vehicle?.category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {vehicle?.categories}
            </span>
          </div>

          {/* Availability */}
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              vehicle?.availability
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {vehicle?.availability ? "Available" : "Unavailable"}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mb-3">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.round(vehicle?.avg_rating) ? (
                <FaStar key={i} />
              ) : (
                <FaRegStar key={i} />
              )
            )}
            <span className="text-primary text-sm ml-1">
              {vehicle?.avg_rating.toFixed(1)} ({vehicle?.rating_count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-accent leading-relaxed mb-4">
            {vehicle?.description}
          </p>

          {/* Location & Owner */}
          <div className="space-y-1 text-sm text-accent">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> {vehicle?.location}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-accent" />{" "}
              {vehicle?.vehicle_owner_email}
            </p>
            <p>
              Owner:{" "}
              <span className="font-medium text-accent">{vehicle?.owner}</span>
            </p>
            <p className="flex items-center gap-2 text-primary text-xs">
              <FaCalendarAlt /> Listed on:{" "}
              {new Date(vehicle?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Rent Button */}

        <button
          onClick={handleBooking}
          className={`mt-6 w-full py-2.5 rounded-full font-medium shadow-md transition-all ${
            vehicle?.availability
              ? "btn-primary"
              : "bg-gray-300 text-primary cursor-not-allowed"
          }`}
          disabled={!vehicle?.availability}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VehicleDetails;
