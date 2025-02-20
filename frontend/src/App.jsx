import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateHissab from "./pages/CreateHisaab";
import Hisaab from "./pages/Hisaab";



function App() {

  const authUser = true;
  return (
    <>
      <Navbar/>
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
          path="/hisaab"
          element={authUser ? <Hisaab /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
