import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import Login from "./views/auth/Login";
import Dashboard from "./views/dashboard/Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./helper/config";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [userName, setuserName] = useState("");


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/checkAuth`, {  withCredentials: true });
          if (response.data.message == "User is authenticated") {
            const name = localStorage.getItem("loggedIn");
            setuserName(name);
          } else {
            localStorage.removeItem("loggedIn");  
          }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("loggedIn");
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={userName}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
