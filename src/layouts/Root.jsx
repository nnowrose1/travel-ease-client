import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {

     useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      // once: true,     // Animate only once
      easing: "ease-in-out", 
    });
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

          <Toaster />
        </div>
    );
};

export default Root;