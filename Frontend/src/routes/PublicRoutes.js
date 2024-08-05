import { Navigate, Outlet } from "react-router-dom";
import Publicroutes from "../components/Publicroutes";
import Signup from "../Pages/Auth/Signup";
import Landing from "../Pages/landing/Landing";

const PublicRoutes = [
  {
    element: <Publicroutes />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  // Redirect authenticated users trying to access public routes
  // {
  //   path: "*",
  //   element: <Navigate to="/home" replace/>,
  // }
];
 
export default PublicRoutes;
