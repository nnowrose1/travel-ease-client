import React from 'react';
import LatestVehicles from '../components/LatestVehicles';
import { CiStar } from 'react-icons/ci';
import { FaStarOfLife } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='bg-blue-50'>
            <div className='flex gap-2 justify-center items-center relative'>
            <span className='text-orange-400 '><FaStarOfLife ></FaStarOfLife></span>
            <h2 className='text-accent font-bold text-3xl text-center pt-8'>
                 Latest Vehicles</h2>
                 <span className='text-orange-400'><FaStarOfLife></FaStarOfLife></span>
                 </div>
           <LatestVehicles></LatestVehicles>
        </div>
    );
};

export default Home;