import { useLazyComponent } from "../hooks/useLazyComponent";
import { AppRoute } from "./routeTypes";

export const usePublicRoutes = (): AppRoute[] => {
  const Login = useLazyComponent(() => import("../pages/Login"));
  const Register = useLazyComponent(() => import("../pages/Register"));

  return [
    {
      path: "/login",
      element: Login,
    },
    {
      path: "/register",
      element: Register,
    },
  ];
};
