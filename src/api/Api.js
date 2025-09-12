import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URI;

export const fetchHostelActive = async () => {
  const response = await axios.get(`${API}/hostels/active`);
  return response.data; 
};


export const fetchAHostel = async (id) => {
  const response = await axios.get(`${API}/hostels/${id}`);
  return response.data; 
};


export const fetchAHostelRoom  = async (id) => {
  const response = await axios.get(`${API}/rooms/hostels/${id}`);
  return response.data; 
};


export const fetchAHostelReviews  = async (id) => {
  const response = await axios.get(`${API}/reviews/rooms/${id}`);
  return response.data; 
};


export const postAHostelReviews  = async (data) => {
  const response = await axios.post(`${API}/reviews`, {data});
  return response; 
};

export const postAHostelRating  = async (id, data) => {
  const response = await axios.put(`${API}/hostels/ratings/${id}`, {data});
  return response; 
};


export const fetchAHostelBookings  = async (id) => {
  const response = await axios.get(`${API}/bookings/user/${id}`);
  return response.data; 
};


export const postAHostelBooking  = async (data) => {
  const response = await axios.post(`${API}/bookings`, {data});
  return response; 
};



export const userSignup  = async (data) => {
  const response = await axios.post(`${API}/users`, {data});
  return response; 
};

export const userSignin  = async (data) => {
  const response = await axios.post(`${API}/users/login`, {data});
  return response; 
};

export const userOtp  = async (data) => {
  const response = await axios.post(`${API}/users/otp`, {data});
  return response; 
};

export const fetchAUser  = async (id) => {
  const response = await axios.get(`${API}/users/${id}`);
  return response.data; 
};


export const updateAUser = async (id, formData) => {
  const response = await axios.put(`${API}/users/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

