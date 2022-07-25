import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
