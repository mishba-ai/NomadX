import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Signup from "./Pages/Auth/Signup.jsx";
import Home from "./Pages/Home/Home.jsx";
import Landing from "./Pages/landing/Landing.jsx";
import Setting from "./Pages/Setting/Setting.jsx";
import Forum from "./Pages/Forum/Forum.jsx";
import Search from "./Pages/search/search.jsx";
import Profile from "./Pages/Setting/Profile.jsx";
import Layout from "./Layout.jsx";
import Lens from "./Pages/Lens/Lens.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./Pages/Calendar/Calendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "forum",
        element: <Forum />,
      },

      {
        path: "search",
        element: <Search />,
      },
      {
        path: "lens",
        element: <Lens />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "settings",
        element: <Setting />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
