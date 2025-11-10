import React from "react";
import useAuth from "../customHooks/useAuth";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddVehicle = () => {
  const { user } = useAuth();
  const secureInstance = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicle_name = e.target.vehicle_name.value;
    const category = e.target.category.value;
    const owner = e.target.owner.value;
    const price_per_day = e.target.price_per_day.value;
    const location = e.target.location.value;
    const availability = e.target.availability.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const rating_star = e.target.rating_star.value;
    const avg_rating = e.target.avg_rating.value;
    const rating_count = e.target.rating_count.value;
    const vehicle_owner_email = e.target.vehicle_owner_email.value;
    const newVehicle = {
      vehicle_name,
      owner,
      category,
      price_per_day,
      location,
      availability,
      description,
      image,
      rating_star,
      rating_count,
      avg_rating,
      vehicle_owner_email,
    };

    secureInstance.post("/allVehicles", newVehicle).then(() => {
      Swal.fire({
        position: "top-middle",
        icon: "success",
        title: "Your vehicle has been added!",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    });
  };
  return (
    <div className="container mx-auto bg-blue-50 shadow-lg rounded-2xl p-8 pt-8">
      <h2 className="text-accent font-bold text-3xl text-center mb-6">
        Add a Vehicle
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Vehicle Name */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Vehicle Name
          </label>
          <input
            type="text"
            name="vehicle_name"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Owner Name
          </label>
          <input
            type="text"
            name="owner"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Category</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Van">Van</option>
            <option value="Truck">Truck</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convertible">Convertible</option>
          </select>
        </div>

        {/* Price per Day */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Price Per Day ($)
          </label>
          <input
            type="number"
            name="price_per_day"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
          />
          <label className="text-gray-700">Available</label>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Cover Image URL */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="image"
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* Rating Star */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Rating Star (⭐)
          </label>
          <input
            type="text"
            name="rating_star"
            placeholder="e.g., ⭐⭐⭐⭐"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Average Rating */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Average Rating
          </label>
          <input
            type="number"
            step="0.1"
            name="avg_rating"
            placeholder="e.g., 4.5"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Rating Count */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Rating Count
          </label>
          <input
            type="number"
            name="rating_count"
            placeholder="e.g., 128"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* User Email (read-only) */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            User Email
          </label>
          <input
            type="email"
            name="vehicle_owner_email"
            defaultValue={user.email}
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100 text-primary cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full btn-primary">
          Add Vehicle
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;
