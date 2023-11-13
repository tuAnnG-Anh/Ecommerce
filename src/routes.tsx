import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@configs/route";
import { Fragment } from "react";
// import DefaultLayout from "@components/Layouts/DefaultLayout";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
