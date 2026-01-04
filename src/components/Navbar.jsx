import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../customHooks/useAuth";
import toast from "react-hot-toast";
import { FiLogIn, FiLogOut, FiUser } from "react-icons/fi";
import userImg from "../assets/user.jpg";
import logo from "../assets/logoo.png";
import Loader from "./Loader";

const Navbar = () => {
  const { user, logOut, setUser, loading } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="font-semibold text-accent">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-semibold text-accent">
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>
      <li className="font-semibold text-accent">
        <NavLink to={"/contactUs"}>Contact Us</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={"/allVehicles"}>All Vehicles</NavLink>
      </li>
      {/* {user && (
        <>
          
          <li className="font-semibold">
            <NavLink to={"/myVehicles"}>My Vehicles</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to={"/myBookings"}>My Bookings</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to={"/addVehicle"}>Add Vehicle</NavLink>
          </li>
        </>
      )} */}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged Out Successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <nav className="navbar shadow-sm  text-accent z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="text-lg md:text-2xl font-bold flex flex-col items-center md:flex-row">
          <img
            className="w-10 md:w-14 h-10 md:h-14 rounded-full font-extrabold"
            src={logo}
            alt=""
          />
          <h1>
            Lux<span className="text-orange-400">Trip</span>
          </h1>
          {/* <span className="text-orange-400">Lux</span>Trip */}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center">
        {/* Tooltip from daisyUI */}
        {/* <div
          className="tooltip mr-2"
          data-tip={user?.displayName ? user?.displayName : "User"}
        >
          {user && (
            <img
              className="h-8 md:h-12 w-8 md:w-12 rounded-full cursor-pointer"
              src={user?.photoURL ? user?.photoURL : userImg}
            ></img>
          )}
        </div> */}

        {user ? (
          <div
            className="relative group tooltip"
            data-tip={user?.displayName ? user?.displayName : "User"}
          >
            {/* Avatar Trigger */}
            <button className="focus:outline-none">
              <img
                src={user?.photoURL || userImg}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-orange-400 cursor-pointer"
              />
            </button>

            <ul
              // tabIndex={0}
              className="absolute -right-10  dropdown-content menu bg-white text-secondary rounded-xl shadow-lg w-48 mt-3 py-3 transform transition-all duration-300 origin-top 
      opacity-0 -translate-y-3 pointer-events-none group-focus-within:opacity-100
      group-focus-within:translate-y-0
      group-focus-within:pointer-events-auto
    "
            >
               <li>
                <Link
                  to="/dashboard/myProfile"
                  className="flex items-center gap-2 text-accent"
                >
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/myVehicles"
                  className="flex items-center gap-2 text-accent"
                >
                  My Vehicles
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/myBookings"
                  className="flex items-center gap-2 text-accent"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard/addVehicle"
                  className="flex items-center gap-2 text-accent"
                >
                  Add Vehicle
                </Link>
              </li>

              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-red-600"
                >
                  <FiLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link className="btn-primary" to={"/login"}>
              {" "}
              Login
            </Link>
            <Link
              className="ml-3 bg-linear-to-r from-orange-500 to-orange-300 hover:text-xl font-semibold text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        )}

        {/* theme */}

        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle ml-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
