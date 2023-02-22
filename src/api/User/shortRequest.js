import { toast } from 'react-hot-toast';
import { shortsApi } from '../../utils/ApiCall';

export const uploadShorts = async (url) => {
  const userId = localStorage.getItem('userId');
  const { data } = await shortsApi.post('/', { url, userId });
  toast.success(data.message);
  return data;
};
export const getAllShorts = async () => {
  const { data } = await shortsApi.get('/');
  return data;
};
