import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "./Loader";

const VehicleCard = ({ vehicle }) => {
  const { _id } = vehicle;

  const available = vehicle?.availability ? "Available" : "Unavailable";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
      <img src={vehicle?.image} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h2 className="text-lg font-semibold text-accent mb-1">
          {vehicle?.vehicle_name}
        </h2>

        <p className="text-sm text-primary mb-2">{vehicle?.category}</p>

        <div
          className={`text-sm font-medium mb-3 ${
            vehicle?.availability ? "text-green-600" : "text-red-500"
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
              fill={index < Math.round(vehicle?.avg_rating) ? "#facc15" : "none"}
              stroke="#facc15"
            />
          ))}
          <span className="text-accent text-sm ml-1 font-medium">
            {vehicle?.avg_rating} ({vehicle?.rating_count})
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
