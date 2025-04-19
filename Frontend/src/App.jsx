import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";
import { axiosInstance } from "./lib/axios";
import { useAuthStore } from "./store/useAuthStore";
import {Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import {useThemeStore} from "./store/useThemeStore"
// import './App.css'
const App = () => {
  const { authUser, checkAuth , isCheckingAuth ,onlineUsers} = useAuthStore();
  const {theme} = useThemeStore();
  console.log(onlineUsers);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);

  if(isCheckingAuth && !authUser){
    return(
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />       
      </div>
    )
  }

  return (
    <div data-theme = {theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" /> }/>
        <Route path="/login" element={!authUser ?<LoginPage /> :<Navigate to="/" />} />
        <Route path="/signup" element={!authUser ?<SignUpPage />:<Navigate to="/" />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={authUser ?<ProfilePage />: <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
