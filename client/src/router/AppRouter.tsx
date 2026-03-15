import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/loading/loader";
import { useAppSelector } from "../store/hooks";
import { useAppRoutes } from ".";

const AppRouter = () => {
  const { publicRoutes, protectedRoutes } = useAppRoutes();
  const token = useAppSelector((state) => state.auth.token);
  console.log(
    useAppSelector((state) => state),
    "state",
  );

  console.log(token, "token isthere");

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          {publicRoutes.map((route) => {
            const Component = route.element;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}

          {protectedRoutes.map((route) => {
            const Component = route.element;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={token ? <Component /> : <Navigate to="/login" />}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
