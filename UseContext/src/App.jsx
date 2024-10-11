
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { UserProvider } from './ContextApi';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </>
    )
  );
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App
