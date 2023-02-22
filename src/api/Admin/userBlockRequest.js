import { adminApi } from '../../utils/ApiCall';

export const userBlock = async (userId) => {
  await adminApi.post('/user-block', { userId });
};
