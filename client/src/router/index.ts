import { useProtectedRoutes } from "./protectedRoutes";
import { usePublicRoutes } from "./publicRoutes";

export const useAppRoutes = () => {
  const publicRoutes = usePublicRoutes();
  const protectedRoutes = useProtectedRoutes();

  return {
    publicRoutes,
    protectedRoutes,
  };
};
