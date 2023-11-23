import HomePage from "@pages/Home";
import DefaultLayout from "@components/Layouts/DefaultLayout";
import { DetailPage } from "@/pages/Detail";
import { Dashboard } from "@/pages/Admin/screens/Dashboard";
import { AdminLayout } from "@/pages/Admin/Layout";
import NotFound from "@/pages/NotFound";
import { AdminUser } from "@/pages/Admin/screens/User";
import { AdminProduct } from "@/pages/Admin/screens/Product";
import { PATH } from "./constant";

//Public routes
const publicRoutes = [
  {
    path: PATH.HOME,
    page: HomePage,
    layout: DefaultLayout,
  },
  {
    path: PATH.PRODUCT_DETAIL,
    page: DetailPage,
    layout: DefaultLayout,
  },
  {
    path: PATH.ALL,
    page: NotFound,
  },
];

const privateRoutes = [
  {
    path: PATH.DASHBOARD,
    page: Dashboard,
    layout: AdminLayout,
  },
  {
    path: PATH.PRODUCT_MANAGER,
    page: AdminProduct,
    layout: AdminLayout,
  },
  {
    path: PATH.USER_MANAGER,
    page: AdminUser,
    layout: AdminLayout,
  },
];
export { publicRoutes, privateRoutes };
