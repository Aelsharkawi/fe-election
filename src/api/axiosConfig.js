import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://FES:8080',
});

export default axiosInstance;
