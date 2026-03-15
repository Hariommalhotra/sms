import { useLazyComponent } from "../hooks/useLazyComponent";
import { AppRoute } from "./routeTypes";
export const useProtectedRoutes = (): AppRoute[] => {
  const Dashboard = useLazyComponent(() => import("../pages/Dashboard"));

  return [
    {
      path: "/dashboard",
      element: Dashboard,
    },
  ];
};
