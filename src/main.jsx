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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
        path: '/allVehicles',
        element: <AllVehicles></AllVehicles>
      },
      {
        path: '/myVehicles',
        element: <MyVehicles></MyVehicles>
      },
      {
        path:'/myBookings',
        element: <MyBookings></MyBookings>
      },
      {
        path:'/addVehicle',
        element: <AddVehicle></AddVehicle>
      }
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
