import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://luxtrip-api.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};
export default useAxios;
