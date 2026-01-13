import React from "react";
import logo from "../assets/logoo.png";
import { Link, NavLink, Outlet } from "react-router";
import { FaCar } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
    
    <div className="drawer lg:drawer-open">
      
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        
        <nav className="navbar w-full bg-base-200">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="text-lg md:text-xl font-bold text-accent px-4">
            Vehicle Management Dashboard
          </div>
        </nav>

        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            {/* Logo */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Home"
              >
                {" "}
                <img
                  className="w-16 h-16 is-drawer-close:w-6 is-drawer-close:h-6 rounded-full"
                  src={logo}
                  alt=""
                />
              </Link>
            </li>

            {/* homepage */}
            {/* <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li> */}
            {/* HR only lists */}

            <>
              {/* List item: Homepage*/}
              {/* <li>
                <NavLink
                  to="/dashboard/homepage"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>

                  <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
              </li> */}

                

              {/* List item: My Vehicles*/}
              <li>
                <NavLink
                  to="/dashboard/myVehicles"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Vehicles"
                >
                  {/* Home icon */}
                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg> */}
                  <FaCar />
                  <span className="is-drawer-close:hidden">My Vehicles</span>
                </NavLink>
              </li>

              {/* List item: My Bookings*/}
              <li>
                <NavLink
                  to="/dashboard/myBookings"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Bookings"
                >
                  <TbBrandBooking />
                  <span className="is-drawer-close:hidden">My Bookings</span>
                </NavLink>
              </li>

              {/* List item: Add vehicle*/}
              <li>
                <NavLink
                  to="/dashboard/addVehicle"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add vehicle"
                >
                 <IoMdAddCircle />
                  <span className="is-drawer-close:hidden">Add vehicle</span>
                </NavLink>
              </li>

               {/* List item: My Profile*/}
                <li>
                  <NavLink
                    to="/dashboard/myProfile"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Profile"
                  >
                    <CgProfile />
                    <span className="is-drawer-close:hidden">
                      My Profile
                    </span>
                  </NavLink>
                </li>
            </>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
