import { chatApi } from '../../utils/ApiCall';

export const userChats = (id) => chatApi.get(`/${id}`);
