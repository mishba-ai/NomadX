import { Navigate } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes.js";
import PublicRoutes from "./PublicRoutes.js";
import Privateroutes from "../components/Publicroutes.jsx";

const routes = [
  ...PublicRoutes,
  ...PrivateRoutes,
  //private routes
  //   {
  //     element:( 
  //       localStorage.getItem("token") !== null ? (
  //         <Privateroutes />
  //       ) : (
  //         <Navigate to="/" replace />
  //       )), children:PrivateRoutes,
  //   },
  //catch all route
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
