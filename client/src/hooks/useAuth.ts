import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setCredentials, logout } from "../store/slices/authSlice";

export const useAuth = () => {
  const token = useAppSelector((state) => state.auth.token);
  const role = useAppSelector((state) => state.auth.userRole);
  const dispatch = useAppDispatch();

  const login = (token: string, role: string) => {
    dispatch(setCredentials({ token, role }));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return { token, role, login, logoutUser };
};
