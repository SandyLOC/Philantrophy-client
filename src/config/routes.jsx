import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/auth/LogIn";
import Signup from "../pages/auth/Signup";
import ProtectedPage from "../pages/auth/ProtectedPage";
import Campaigns from "../pages/Campaigns";
import * as PATHS from "../utils/paths";

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
      element: <Login {...props} />,
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
    }
  ];
};

export default routes;
