import { followApi } from '../../utils/ApiCall';

export const follow = async (currId, userId) => {
  const { data } = await followApi.post('/', { currId, userId });
  return data;
};
export const getFollowers = async (userId) => {
  const { data } = await followApi.get(`/followers ${userId}`);
  return data;
};
export const getFollowings = async (userId) => {
  const { data } = await followApi.get(`/get-followings ${userId}`);
  return data;
};
