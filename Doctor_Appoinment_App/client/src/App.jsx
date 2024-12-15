import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinners from "./components/Spinners";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Layout from "./components/Layout";
import ApplyDoctors from "./pages/ApplyDoctors";
import Notification from "./pages/Notification";

function App() {
  const { loading } = useSelector((state) => state.alert);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinners />
        ) : (
          <Routes>

            <Route
               path="/"
               element={
                <ProtectedRoute>
                  <Layout/>
                </ProtectedRoute>
              }
            >

              <Route
                path="/"
                element={                 
                    <Home />               
                }
              />

              <Route
                path="/apply-doctor"
                element={            
                    <ApplyDoctors />           
                }
              />

              <Route
                path="/notification"
                element={
                  <ProtectedRoute>
                    <Notification/>
                  </ProtectedRoute>
                }
              />
            
            </Route>

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
