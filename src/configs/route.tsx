import Home from "@pages/Home";
// import Order from "@pages/Order";
// import Product from "@pages/Product";
// import NotFound from "@pages/NotFound";
import DefaultLayout from "@components/Layouts/DefaultLayout";

// import Login from "@pages/Authentication/login";
// import Register from "@pages/Authentication/register";

//Public routes
export const publicRoutes = [
  {
    path: "/",
    page: Home,
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
  // {
  //   path: "/product",
  //   page: Product,
  //   layout: DefaultLayout,
  // },
  // {
  //   path: "/order",
  //   page: Order,
  //   layout: DefaultLayout,
  // },
  // {
  //   path: "*",
  //   page: NotFound,
  // },
];

// const privateRoutes = [];

// export { publicRoutes };
