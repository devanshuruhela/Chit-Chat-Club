import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

//endpoints

export const sendOtp =(data)=> api.post('/api/send-otp',data);


export default api;