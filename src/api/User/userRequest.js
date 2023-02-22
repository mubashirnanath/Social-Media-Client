import toast from 'react-hot-toast';
import { userApi, cloudinaryApi } from '../../utils/ApiCall';

export const getUserDetails = async (userId) => {
  const { data } = await userApi.get(`/${userId}`);
  return data;
};
export const getAllUsers = async () => {
  const { data } = await userApi.get('/');
  return data.users;
};
export const uploadProfile = async (formData) => {
  const response = await cloudinaryApi.post('/upload', formData);
  if (response) {
    const imageUrl = response.data.secure_url;
    return imageUrl;
  }
  return true;
};
export const uploadCover = async (formData) => {
  const response = await cloudinaryApi.post('/upload', formData);
  if (response) {
    const imageUrl = response.data.secure_url;
    return imageUrl;
  }
  return true;
};
export const editProfile = async (formData) => {
  const response = await userApi.put('/profile', formData);
  if (response) {
    toast.success(response.data.message);
    return response;
  }
  return true;
};
export const getLink = async () => {
  const userId = localStorage.getItem('userId');
  const url = `${process.env.REACT_APP_QRCODE_URL}/user-profile/${userId}`;
  const { data } = await userApi.post('/qrcode', { url });
  return data;
};
// export const getUserAllDetails = async (id) => {
//   const { data } = await userApi.post("/get-all-details", { userId: id });
//   return data;
// };
