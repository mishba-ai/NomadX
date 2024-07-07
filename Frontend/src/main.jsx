import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./Pages/Auth/Signup.jsx";
import Community from "./Pages/Community.jsx";
import Home from "./Pages/Home.jsx";
import Landing from "./Pages/Landing.jsx";
// import Setting from "./Pages/Setting.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  // {
  //   path: "forum",
  //   element: <Forum />,
  // },
  {
    path: "landingpage",
    element: <Landing />,
  },
  // {
  //   path: "setting",
  //   element: <Setting />,
  // },
  {
    path: "community",
    element: <Community />,
  },
  {
    path:"signup",
    element:<Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
