import { useLazyComponent } from "../hooks/useLazyComponent";

export const useRoutesConfig = () => {
  const Login = useLazyComponent(() => import("../pages/Login"));
  const Register = useLazyComponent(() => import("../pages/Register"));
  const Dashboard = useLazyComponent(() => import("../pages/Dashboard"));

  return [
    {
      path: "/login",
      element: Login,
      public: true,
    },
    {
      path: "/register",
      element: Register,
      public: true,
    },
    {
      path: "/dashboard",
      element: Dashboard,
      public: false,
    },
  ];
};
