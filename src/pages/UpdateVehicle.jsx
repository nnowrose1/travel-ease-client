import React, { useEffect } from "react";
import useAuth from "../customHooks/useAuth";
// import useAxiosSecure from "../customHooks/useAxiosSecure";
import useAxios from "../customHooks/useAxios";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";
import Loader from '../components/Loader';

const UpdateVehicle = () => {
  const { user } = useAuth();
  const { id } = useParams();
  // const secureInstance = useAxiosSecure();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [category, setCategory] = useState(" ");
  const [categories, setCategories] = useState(' ');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axiosInstance.get("/allVehicles").then((data) => {
    const vehicles = data.data;
    const currentVehicle = vehicles.find((v) => v._id == id);
    setVehicle(currentVehicle);
    setLoading(false);
    setCategory(currentVehicle.category);
    setCategories(currentVehicle.categories)
  });
  }, [axiosInstance, id])


  const handleSubmit = (e) => {
    e.preventDefault();
    const vehicle_name = e.target.vehicle_name.value;
    const category = e.target.category.value;
    const owner = e.target.owner.value;
    const price_per_day = e.target.price_per_day.value;
    const location = e.target.location.value;
    const checkbox = e.target.availability.checked;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const categories = e.target.categories.value;
    const vehicle_owner_email = e.target.vehicle_owner_email.value;

    const newVehicle = {
      vehicle_name,
      owner,
      category,
      price_per_day,
      location,
      availability: checkbox,
      description,
      image,
      categories,
      vehicle_owner_email,
    };

    axiosInstance.patch(`/allVehicles/${id}`, newVehicle).then(() => {
      // secureInstance.get(`/allVehicles/${id}`).then((res) => {
      //   setVehicle(res.data);
      // });
      // setVehicle(newVehicle);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Vehicle info updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();

      navigate("/myVehicles");
    });
  };

  if(loading){
    return <Loader></Loader>
  }
  return (
    <div className="container mx-auto bg-blue-50 shadow-lg rounded-2xl p-8 pt-8">
      <h2 className="text-accent font-bold text-3xl text-center mb-6">
        Update Vehicle
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
            defaultValue={vehicle?.vehicle_name}
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Owner Name
          </label>
          <input
            type="text"
            name="owner"
            defaultValue={vehicle?.owner}
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category */}
        {vehicle && (
          <div>
            <label className="block font-medium text-accent mb-1">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-orange-400 dark:text-primary dark:bg-accent rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
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
        )}
        {/* Price per Day */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Price Per Day ($)
          </label>
          <input
            type="number"
            name="price_per_day"
            defaultValue={vehicle?.price_per_day}
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-accent mb-1">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={vehicle?.location}
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            checked={vehicle?.availability || false}
            onChange={(e) => setVehicle((previous) => ({...previous, availability: e.target.checked}))
          }
            className="w-4 h-4 text-orange-400 focus:ring-orange-400"
          />
          <label className="text-accent">Available</label>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={vehicle?.description}
            rows="4"
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Cover Image URL */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={vehicle?.image}
            className="w-full border border-orange-400 dark:text-primary rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-medium text-accent mb-1">
            Categories
          </label>
          <select
            name="categories"
             value={categories}
              onChange={(e) => setCategories(e.target.value)}
            className="w-full border border-orange-400 dark:text-primary dark:bg-accent rounded-lg p-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Categories</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        {/* User Email (read-only) */}
        <div>
          <label className="block font-medium text-accent mb-1">
            User Email
          </label>
          <input
            type="email"
            name="vehicle_owner_email"
            defaultValue={user?.email}
            readOnly
            className="w-full border border-orange-400 rounded-lg p-2 bg-gray-100 text-primary cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateVehicle;
