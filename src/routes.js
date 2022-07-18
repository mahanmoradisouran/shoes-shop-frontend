import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import StorePage from "./Pages/StorePage";


const routes = [
  { path: "/", element: <HomePage />, index: true },
  { path: "store/", element: <StorePage /> },
  { path: "cart/", element: <CartPage /> },
];

export const navItems = [
  { to: "/", title: "Home" },
  { to: "store/", title: "Store" },
  { to: "contactus/", title: "contactus" },
];

export default routes;
