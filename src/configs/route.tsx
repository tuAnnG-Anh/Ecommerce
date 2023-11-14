import HomePage from "@pages/Home";
// import Order from "@pages/Order";
// import Product from "@pages/Product";
// import NotFound from "@pages/NotFound";
import DefaultLayout from "@components/Layouts/DefaultLayout";
import { DetailPage } from "@/pages/Detail";
import { Dashboard } from "@/pages/Admin/screens/Dashboard";
import { AdminLayout } from "@/pages/Admin/Layout";
import NotFound from "@/pages/NotFound";
import { AdminUser } from "@/pages/Admin/screens/User";
import { AdminProduct } from "@/pages/Admin/screens/Product";
import { AdminLogin } from "@/pages/Admin/screens/Login";

// import Login from "@pages/Authentication/login";
// import Register from "@pages/Authentication/register";

//Public routes
export const routes = [
  {
    path: "/",
    page: HomePage,
    layout: DefaultLayout,
  },
  // {
  //   path: "/login",
  //   page: Login,
  //   layout: DefaultLayout,
  // },
  // {
  //   path: "/register",
  //   page: Register,
  //   layout: DefaultLayout,
  // },
  {
    path: "product/:id",
    page: DetailPage,
    layout: DefaultLayout,
  },
  {
    path: "admin/dashboard",
    page: Dashboard,
    layout: AdminLayout,
  },
  {
    path: "admin/product",
    page: AdminProduct,
    layout: AdminLayout,
  },
  {
    path: "admin/user",
    page: AdminUser,
    layout: AdminLayout,
  },
  {
    path: "admin/login",
    page: AdminLogin,
    layout: null,
  },
  // {
  //   path: "/order",
  //   page: Order,
  //   layout: DefaultLayout,
  // },
  {
    path: "*",
    page: NotFound,
  },
];

// const privateRoutes = [];

// export { publicRoutes };
