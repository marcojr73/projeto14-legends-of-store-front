import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://legends-of-store-api.herokuapp.com'
})

export default axiosInstance;