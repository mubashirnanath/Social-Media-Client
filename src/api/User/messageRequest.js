import { messageApi } from '../../utils/ApiCall';

export const getMessages = (id) => messageApi.get(`/${id}`);
export const addMessage = (data) => messageApi.post('/', data);
