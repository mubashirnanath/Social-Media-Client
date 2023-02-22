import { searchApi } from '../../utils/ApiCall';

export const searchUsers = async (value) => {
  const { data } = await searchApi.post('/search-users', { value });
  return data;
};
