import HomePage from "@pages/Home";
import DefaultLayout from "@components/Layouts/DefaultLayout";
import { DetailPage } from "@/pages/Detail";
import { Dashboard } from "@/pages/Admin/screens/Dashboard";
import { AdminLayout } from "@/pages/Admin/Layout";
import NotFound from "@/pages/NotFound";
import { AdminUser } from "@/pages/Admin/screens/User";
import { AdminProduct } from "@/pages/Admin/screens/Product";

//Public routes
export const routes = [
  {
    path: "/",
    page: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "product/:id",
    page: DetailPage,
    layout: DefaultLayout,
  },
  {
    path: "dashboard",
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
    path: "*",
    page: NotFound,
  },
];

// const privateRoutes = [];
// export { publicRoutes };
