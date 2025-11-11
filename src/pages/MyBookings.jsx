import React, { useEffect, useState } from "react";
import useAxiosSecure from "../customHooks/useAxiosSecure";
import VehicleCard from '../components/VehicleCard'
import useAuth from "../customHooks/useAuth";

const MyBookings = () => {
  const secureInstance = useAxiosSecure();
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    secureInstance.get(`/myBookings?email=${user.email}`).then((data) => {
      setMyBookings(data.data);
    });
  }, [secureInstance, user]);
  console.log(myBookings);
  return (
     <div className="bg-blue-50 container mx-auto">
        <h2 className='text-accent font-bold text-3xl text-center pt-8'>
                 My Bookings</h2>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
      {myBookings.map((vehicle) => (
        <VehicleCard vehicle={vehicle}></VehicleCard>
      ))}
    </div>
     </div>
  );
};

export default MyBookings;
