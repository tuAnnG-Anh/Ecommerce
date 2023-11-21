import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@configs/route";
import { Fragment } from "react";
import { useAuthStore } from "./store/auth";
import { LoginPage } from "./pages/Login";

function AppRoutes() {
  const checkLogged = useAuthStore((state) => state.userLogged);
  // console.log(checkLogged.isAdmin);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
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
              element={
                !!checkLogged && checkLogged?.isAdmin ? (
                  element
                ) : (
                  <Navigate to={"login"} />
                )
              }
            />
          );
        })}
        <Route key={"login"} path={"/login"} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
