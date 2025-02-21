import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../libs/axios";

export const useHisaabStore = create((set) => ({
  hisaabs: [],
  isHisaabFetching: false,
  isHisaabCreating: false,
  isHisaabDeleting: false,

  getAllHisaabs: async () => {
    set({ isHisaabFetching: true });
    try {
      const res = await axiosInstance.get("/hisaabs");
      set({ hisaabs: res.data });
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isHisaabFetching: false });
    }
  },

  createHisaab: async (data) => {
    set({ isHisaabCreating: true });
    try {
      const res = await axiosInstance.post("/hisaabs/create", data);
      toast.success("Hisaab created");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isHisaabCreating: false });
    }
  },

  deleteHisaab: async (hisaabId) => {
    set({ isHisaabDeleting: true });
    try {
      const res = await axiosInstance.delete(`/hisaabs/delete/${hisaabId}`);
      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isHisaabDeleting: false });
    }
  },
}));
