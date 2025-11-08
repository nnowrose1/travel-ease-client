import React from 'react';
import useAxios from '../customHooks/useAxios';

const AllVehicles = () => {
    const axiosInstance = useAxios();

    axiosInstance.get('/allVehicles')
    .then(data =>{
        console.log(data.data);
    })
    return (
        <div>
            All Vehicles
        </div>
    );
};

export default AllVehicles;