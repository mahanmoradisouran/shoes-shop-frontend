import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";

const routes = [
  { path: "store/", element: <StorePage />, index: true },
  { path: "cart/", element: <CartPage /> },
  { path: "login/", element: <LoginPage /> },
  { path: "signup/", element: <SignUpPage /> },
];

export const navItems = [
  { to: "store/", title: "Store" },
  { to: "aboutus/", title: "Aboutus" },
];

export default routes;
