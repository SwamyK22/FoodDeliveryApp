import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://naveensutar.github.io/',
  timeout: 5000,
  timeoutErrorMessage: 'Try after some time',
});


export default axiosInstance;