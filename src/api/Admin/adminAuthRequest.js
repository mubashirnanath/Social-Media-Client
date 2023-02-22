/* eslint-disable quotes */
import { toast } from "react-hot-toast";
import { adminApi } from "../../utils/ApiCall";

export const adminLogin = async (formData) => {
  const { data } = await adminApi.post("/login", formData);
  if (data.status) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
  return data;
};
