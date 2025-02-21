import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateHissab from "./pages/CreateHisaab";
import Hisaab from "./pages/Hisaab";
import { useAuthStore } from "./stores/authStore";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth)
    return (
      <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
        <p className="text-2xl font-bold text-cyan-500">KhataBook</p>
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/create-hisaab"
          element={authUser ? <CreateHissab /> : <Navigate to="/login" />}
        />
        <Route
          path="/hisaab/:hissabId"
          element={authUser ? <Hisaab /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
