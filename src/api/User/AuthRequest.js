import toast from 'react-hot-toast';
import { authApi } from '../../utils/ApiCall';

export const signUp = async (formData) => {
  const { data } = await authApi.post('/signup', formData);
  if (data.status) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};
export const googleLogin = async (formData) => {
  const { data } = await authApi.post('/google-login', formData);
  if (data.status) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};
export const login = async (formData) => {
  const { data } = await authApi.post('/login', formData);
  if (data.status) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};

export const ChangePassword = async (formData) => {
  const { data } = await authApi.post('/change-password', formData);
  if (data.status) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};
