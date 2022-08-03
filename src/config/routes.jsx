import { Navigate } from "react-router-dom";

import ProtectedPage from "../pages/auth/ProtectedPage";
import * as PATHS from "../utils/paths";
import HomePage from "../pages/HomePage";
import LogIn from "../pages/auth/LogIn";
import Signup from "../pages/auth/Signup";
import Campaigns from "../pages/Campaigns";
import Countries from "../pages/Countries";
import Favorites from "../pages/Favorites";
import Achievements from "../pages/Achievements";
import CommunityPhotos from "../pages/CommunityPhotos";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: "/",
      element: <HomePage {...props} />,
    },
    {
      path: "/auth/signup",
      element: <Signup {...props} />,
    },

    {
      path: "/auth/login",
      element: <LogIn {...props} />,
    },
    {
      path: "/protected",
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to="/auth/login" replace />
      ),
    },
    {
      path: "/campaigns",
      element: <Campaigns />
    },
    {
      path: "/countries",
      element: <Countries />
    },
    {
      path: "/community",
      element: <CommunityPhotos />
    },
    {
      path: "/achievements",
      element: <Achievements />
    },
    {
      path: "/favorites",
      element: <Favorites />
    },

  ];
};


export default routes;
