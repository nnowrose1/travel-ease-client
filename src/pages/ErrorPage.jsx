import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import errorIcon from "../assets/error-404.png";
import {motion } from "framer-motion"

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full text-center p-20 bg-blue-50">
      <img className="mx-auto" src={errorIcon} alt="" />
      <h2 className="font-semibold text-5xl text-accent mt-4">
        Oops, page not found!
      </h2>
      <p className="text-primary text-xl mt-2 mb-4">
        The page you are looking for is not available.
      </p>
      {/* button a click korle ek step back a jabe */}
      <motion.button
  whileHover={{ scale: 1.5 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300 }}
  onClick={() => navigate(-1)}
  className="btn btn-primary px-10"
>
  Go Back!
</motion.button>
    </div>
  );
};

export default ErrorPage;
