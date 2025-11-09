import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const secureInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // set token in the header for all the API call using axiosSecure hook
  //   add request interceptor
  useEffect(() => {
 const requestInterceptor =secureInstance.interceptors.request.use(
      (config) => {
        const token = user.accessToken;
        if (token) {
config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
      } );
    //response interceptor
    const responseInterceptor = secureInstance.interceptors.response.use(
      (res) => {return res;},(err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          console.log("Log out the user for bad request");
        }
        logOut().then(() => {
          navigate("/login");
        });
      }
    );
    return () => {
secureInstance.interceptors.request.eject(requestInterceptor);
secureInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);


  return secureInstance;
};
export default useAxiosSecure;

