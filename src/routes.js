import AboutUsPage from "./Pages/AboutUsPage";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import SignUpPage from "./Pages/SignUpPage";
import StorePage from "./Pages/StorePage";

const routes = [
  { path: "store/", element: <StorePage />, index: true },
  { path: "/", element: <HomePage /> },
  { path: "cart/", element: <CartPage /> },
  { path: "login/", element: <LoginPage /> },
  { path: "signup/", element: <SignUpPage /> },
  { path: "aboutus/", element: <AboutUsPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export const navItems = [
  { to: "store/", title: "Store" },
  { to: "aboutus/", title: "Aboutus" },
];

export default routes;
