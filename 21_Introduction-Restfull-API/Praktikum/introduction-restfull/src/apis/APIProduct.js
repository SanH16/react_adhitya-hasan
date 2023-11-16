import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIProduct = {
  getProducts: async () => {
    try {
      const result = await axiosInstance.get("products");
      return result.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        const {
          data: { error },
        } = err.response;
        throw new AxiosError(error);
      }
      throw new Error(err);
    }
  },
};
