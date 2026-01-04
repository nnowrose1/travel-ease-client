import React, { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";
import Loader from "../components/Loader";
import MyVehicleCard from '../components/MyVehicleCard';
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import useAxios from "../customHooks/useAxios";

const MyVehicles = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [myVehicles, setMyVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user);
  

  useEffect(()=>{
 axiosInstance.get(`/myVehicles?email=${user?.email}`).then((res) => {
    setMyVehicles(res.data);
    setLoading(false);
  });
  }, [axiosInstance,user])
 

   const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/allVehicles/${_id}`)
          .then(() => {
            const remainingVehicles = myVehicles.filter((v) => v._id !== _id);
            setMyVehicles(remainingVehicles);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Vehicle has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-blue-50 rounded-lg">
      <div className="container mx-auto shadow-lg rounded-2xl p-8">
        <h2 data-aos="fade-right" className='text-accent font-bold text-3xl text-center pt-8'>
                 My Vehicles</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-8">
        {myVehicles.map((vehicle, index) => (
          <MyVehicleCard  key={vehicle._id} index={index} vehicle={vehicle} handleDelete={handleDelete}></MyVehicleCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default MyVehicles;
