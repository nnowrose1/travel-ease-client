import React from "react";



const MyBookingCard = ({ booking }) => {
  const { vehicle_name, image, category, price_per_day, location } =
    booking || {};
   

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Vehicle Image */}
        <img
          src={image}
          alt={vehicle_name}
          className="w-full sm:w-48 h-40 object-cover rounded-2xl p-2"
        />

        {/* Vehicle Info */}
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-semibold text-accent">{vehicle_name}</h2>
          <p className="text-sm text-primary">{category}</p>
          <p className="text-accent">
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p >
            <span className="font-semibold dark:text-primary">Price/Day:</span> <span className=" text-orange-400"> ${price_per_day}</span>
          </p>

           {/* <p className="text-sm text-orange-400 mt-2">
          Added {getAddTime(createdAt)}
        </p> */}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn bg-linear-to-r from-orange-500 to-orange-300 hover:text-xl font-semibold text-white   py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default MyBookingCard;
