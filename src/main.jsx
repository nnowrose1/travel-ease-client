import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layouts/Root.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AllVehicles from "./pages/AllVehicles.jsx";
import MyVehicles from "./pages/MyVehicles.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import AddVehicle from "./pages/AddVehicle.jsx";
import VehicleDetails from "./pages/VehicleDetails.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import UpdateVehicle from "./pages/UpdateVehicle.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loader from "./components/Loader.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import MyProfile from "./pages/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allVehicles",
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/vehicle/:id",
        element: <VehicleDetails></VehicleDetails>,
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loader></Loader>,
    children: [
       {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "myVehicles",
        element: <MyVehicles></MyVehicles>,
      },
      {
        path: "myBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "addVehicle",
        element: <AddVehicle></AddVehicle>,
      },
      {
        path: "updateVehicle/:id",
        element: <UpdateVehicle></UpdateVehicle>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
