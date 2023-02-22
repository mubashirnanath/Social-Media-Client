import axios from 'axios';

export const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/auth`,
  withCredentials: true,
});
export const userApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/user`,
  withCredentials: true,
});
export const postApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/post`,
  withCredentials: true,
});
export const followApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/follow`,
  withCredentials: true,
});
export const chatApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/chat`,
  withCredentials: true,
});
export const messageApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/message`,
  withCredentials: true,
});
export const shortsApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/shorts`,
  withCredentials: true,
});
export const searchApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/search`,
  withCredentials: true,
});
export const adminApi = axios.create({
  baseURL: `${process.env.REACT_APP_URL}/admin`,
  withCredentials: true,
});
export const cloudinaryApi = axios.create({
  baseURL: process.env.REACT_APP_CLOUDINARY_API,
  withCredentials: false,
});
