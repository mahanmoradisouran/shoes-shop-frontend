import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full absolute bg-white">
      <Navigation />
      <div className="sm:w-10/12 w-11/12 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
