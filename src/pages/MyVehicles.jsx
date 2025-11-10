import React, { useEffect, useState } from "react";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import useAuth from "../customHooks/useAuth";
import Loader from "../components/Loader";
import MyVehicleCard from '../components/MyVehicleCard';
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyVehicles = () => {
  const secureInstance = useAxiosSecure();
  const { user } = useAuth();
  const [myVehicles, setMyVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
 secureInstance.get(`/myVehicles?email=${user.email}`).then((res) => {
    setMyVehicles(res.data);
    setLoading(false);
  });
  }, [secureInstance,user])
 

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
        secureInstance
          .delete(`http://localhost:3000/allVehicles/${_id}`)
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
    <div className="bg-blue-50 container mx-auto">
        <h2 className='text-accent font-bold text-3xl text-center pt-8'>
                 My Vehicles</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
        {myVehicles.map((vehicle) => (
          <MyVehicleCard  key={vehicle._id} vehicle={vehicle} handleDelete={handleDelete}></MyVehicleCard>
        ))}
      </div>
    </div>
  );
};

export default MyVehicles;
