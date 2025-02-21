import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../libs/axios";

export const useHisaabStore = create((set) => ({
  hisaabs: [],
  selectedHisaab: null,
  isHisaabFetching: false,
  isHisaabCreating: false,
  isHisaabUpdating: false,
  isHisaabDeleting: false,

  setSelectedHisaab: (hisaab) => set({ selectedHisaab: hisaab }),

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
      set({ selectedHisaab: null });
      toast.success("Hisaab deleted");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isHisaabDeleting: true });
    }
  },

  getHisaab: async (hisaabId) => {
    try {
      const res = await axiosInstance.get(`/hisaabs/${hisaabId}`);
      toast.success(res.data);
      set({ selectedHisaab: res.data });
    } catch (error) {
      toast.error(error.message);
    }
  },

  updateHisaab: async (hisaabId, data) => {
    set({ isHisaabUpdating: true });
    try {
      await axiosInstance.put(`/hisaabs/update/${hisaabId}`, data);
      toast.success("Hisaab updated");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isHisaabUpdating: false });
    }
  },
}));
