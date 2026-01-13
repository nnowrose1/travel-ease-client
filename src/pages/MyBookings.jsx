import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../customHooks/useAxiosSecure";
import VehicleCard from '../components/VehicleCard'
import useAuth from "../customHooks/useAuth";
import MyBookingCard from "../components/MyBookingCard";
import Loader from "../components/Loader";
import useAxios from "../customHooks/useAxios";

const MyBookings = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/myBookings?email=${user.email}`).then((data) => {
       console.log("API response:", data.data);
    console.log("Is array:", Array.isArray(data.data));
      setMyBookings(data.data);
      setLoading(false);
    });
  }, [axiosInstance, user]);

  // console.log(myBookings.length);
  
  
  if(loading){
    return <Loader></Loader>;
  }
  return (
     <div className="bg-blue-50 rounded-lg">
      <div className="container mx-auto shadow-lg rounded-2xl p-8">
        <h2 className='text-accent font-bold text-3xl text-center pt-8'>
                 My Bookings</h2>
    {!myBookings || myBookings.length == 0 ? <p className="max-w-3xl mx-auto font-semibold text-xl text-center py-6 text-primary">You have no bookings</p> :

    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8">
     
     { myBookings.map((booking) => (
        <MyBookingCard key={booking._id} booking ={booking}> </MyBookingCard>
      ))}
    </div>
}
    </div>
     </div>
  );
};

export default MyBookings;
