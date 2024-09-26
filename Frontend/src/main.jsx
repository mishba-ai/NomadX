import React , {Suspense} from "react";
import { createRoot } from "react-dom/client";
import { Navigate } from "react-router-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/signin" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Navigate to="/signup" />;
}

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={"loading"}> 
    <RouterProvider router={router} />
    </Suspense>  
  </React.StrictMode>
);
