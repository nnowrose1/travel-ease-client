import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "./Loader";

const VehicleCard = ({ vehicle }) => {
  const { vehicle_name,image, category, availability, avg_rating, rating_count, _id } =
    vehicle;

  const available = availability ? "Available" : "Unavailable";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
      <img src={image} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {vehicle_name}
        </h2>

        <p className="text-sm text-gray-500 mb-2">{category}</p>

        <div
          className={`text-sm font-medium mb-3 ${
            availability ? "text-green-600" : "text-red-500"
          }`}
        >
          {available}
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              size={18}
              fill={index < Math.round(avg_rating) ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
          <span className="text-gray-700 text-sm ml-1 font-medium">
            {avg_rating.toFixed(1)} ({rating_count})
          </span>
        </div>
        <Link to={`/vehicle/${_id}`}>
          {" "}
          <button className="btn btn-primary w-full">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
