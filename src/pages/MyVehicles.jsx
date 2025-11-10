import React, { useEffect, useState } from "react";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import useAuth from "../customHooks/useAuth";
import Loader from "../components/Loader";
import MyVehicleCard from '../components/MyVehicleCard';

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
 

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-blue-50 container mx-auto">
        <h2 className='text-accent font-bold text-3xl text-center pt-8'>
                 My Vehicles</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
        {myVehicles.map((vehicle) => (
          <MyVehicleCard  key={vehicle._id} vehicle={vehicle}></MyVehicleCard>
        ))}
      </div>
    </div>
  );
};

export default MyVehicles;
