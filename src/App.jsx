import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import routes from "./routes";
import getCookie from "./Hooks/getCookie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoginUser } from "./Redux/Auth/AuthActions";

function App() {
  const disptach = useDispatch();

  useEffect(() => {
    const loginData = getCookie("logindata")
      ? JSON.parse(getCookie("logindata"))
      : false;

    if (loginData) disptach(LoginUser(loginData));
  }, [disptach]);

  return (
    <Layout>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
