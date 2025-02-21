import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: false,
  isSigning: false,
  isLogining: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/users/auth/check");
      console.log(res);
      set({ authUser: res.data });
    } catch (error) {
      toast.success("Login To Use!");
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigning: true });
    try {
      const res = await axiosInstance.post("/users/auth/signup", data);
      set({ authUser: res.data });
      toast.success("User created successfully");
    } catch (error) {
      toast.error(error.message);
      set({ authUser: null });
    } finally {
      set({ isSigning: false });
    }
  },

  login: async (data) => {
    set({ isLogining: true });
    try {
      const res = await axiosInstance.post("/users/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged In successfully");
    } catch (error) {
      toast.error(error.message);
      set({ authUser: null });
    } finally {
      set({ isLogining: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.get("/users/auth/logout");
      set({ authUser: null });
    } catch (error) {
      toast.error(error.message);
    }
  },
}));
