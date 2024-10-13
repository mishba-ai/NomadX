// routes.js
import Signup from "../Pages/Auth/Signup.jsx";
import Signin from "../Pages/Auth/Signin.jsx";
import Home from "../Pages/Home/Home.jsx";
import Landing from "../Pages/landing/Landing.jsx";
import Setting from "../Pages/Setting/Setting.jsx";
import Forum from "../Pages/Forum/Forum.jsx";
import Search from "../Pages/search/Search.jsx";
import Profile from "../Pages/Setting/Profile.jsx";
import Layout from "../Layout.jsx";
import Lens from "../Pages/Lens/Lens.jsx";
import About from "../components/settings/Profile/About.jsx";
import Contact from "../components/settings/Profile/Contact.jsx";
import Discussion from "../components/settings/Profile/Discussion.jsx";
import Travel from "../components/settings/Profile/Travel.jsx";
import Password from "../Pages/Setting/Password.jsx";
import Calendar from "../Pages/Calendar/TravelCalendar.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Notfound from "../Pages/Notfound.jsx";
import Theme from "../Pages/Setting/Theme.jsx";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "signup", element: <Signup /> },
  { path: "signin", element: <Signin /> },
  { path: "*", element: <Notfound /> },
  {
    element: (
      <PrivateRoutes>
        <Layout />
      </PrivateRoutes>
    ),
    children: [
      { path: "home", element: <Home /> },
      { path: "forum", element: <Forum /> },
      { path: "search", element: <Search /> },
      { path: "lens", element: <Lens /> },
      { path: "calendar", element: <Calendar /> },
      {
        path: "settings",
        element: <Setting />,
        children: [
          { index: true, element: <Profile /> },
          {
            path: "profile",
            element: <Profile />,
            children: [
              { index: true, element: <Contact /> },
              { path: "about", element: <About /> },
              { path: "contact", element: <Contact /> },
              { path: "discussion", element: <Discussion /> },
              { path: "travel", element: <Travel /> },
            ],
          },
          { path: "password", element: <Password /> },
          { path: "theme", element: <Theme /> },
        ],
      },
    ],
  },
];

export default routes;
