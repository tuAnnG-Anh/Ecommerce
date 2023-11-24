import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "@configs/route";
import { Fragment } from "react";
import { useAuthStore } from "./store/auth";
import { LoginPage } from "./pages/Auth/Login";
import { RegisterPage } from "./pages/Auth/Register";

function AppRoutes() {
  const checkLogged = useAuthStore((state) => state.userLogged);
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes?.map((route, index) => {
          const Page = route.page;
          let Layout = route.layout;
          route.layout ? (Layout = route.layout) : (Layout = Fragment);
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {privateRoutes?.map((route, index) => {
          const Page = route.page;
          let Layout = route.layout;
          route.layout ? (Layout = route.layout) : (Layout = Fragment);
          const element = (
            <Layout>
              <Page />
            </Layout>
          );
          return (
            <Route
              key={index}
              path={route.path}
              element={checkLogged?.isAdmin ? element : <Navigate to={"/"} />}
            />
          );
        })}
        <Route key={"login"} path={"/login"} element={<LoginPage />} />
        <Route key={"register"} path={"/register"} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
