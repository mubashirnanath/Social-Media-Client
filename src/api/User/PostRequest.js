import toast from 'react-hot-toast';
import { postApi } from '../../utils/ApiCall';

export const AddPost = async (formData) => {
  const { data } = await postApi.post('/', formData);
  if (data.status) {
    toast.success(data.message);
  }
  return data;
};
export const GetPosts = async (Id) => {
  const { data } = await postApi.get(`/${Id}`);
  return data;
};
export const getAllPosts = async () => {
  const { data } = await postApi.get('/');
  return data;
};
export const addComment = async (id, posId, datas) => {
  const { data } = await postApi.post('/comment', {
    userId: id,
    postId: posId,
    comment: datas,
  });
  if (data.status) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};
export const getAllComments = async (postId) => {
  const { data } = await postApi.get(`/comment/${postId}`);
  return data.response;
};
export const likePost = async (postId, userId) => {
  const { data } = await postApi.post('/like', { postId, userId });
  return data.posts;
};
