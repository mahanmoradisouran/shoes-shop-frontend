import { useState } from "react";
import { navItems } from "../../routes";
import { NavLink } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { HiMenuAlt2 } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, auth } = useSelector((state) => state);

  return (
    <>
      {isOpen && (
        <div className="w-full fixed top-0 right-0 bottom-0 left-0 bg-black opacity-25 z-50 block lg:hiddent"></div>
      )}
      <header className="w-full h-20 relative border-b border-gray-200">
        <nav className="h-full w-4/5 mx-auto relative lg:block hidden">
          <ul
            className={`w-full h-full flex flex-row items-center justify-start gap-4`}
          >
            {navItems.map(({ to, title }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-t from-violet-600 to-violet-500 text-slate-50 px-4 py-2 rounded-md"
                      : "transition-all duration-200 px-4 py-2 text-slate-800 rounded-md hover:bg-violet-50 hover:text-violet-500"
                  }
                  to={to}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="right-0 absolute w-20 flex justify-center">
              {auth && (
                <>
                  {cart.products.length > 0 && (
                    <span className="text-xs w-5 h-5 bg-red-600 text-white absolute rounded-full right-3 top-0 grid place-items-center">
                      {cart.products.length}
                    </span>
                  )}
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "p-4 rounded-full bg-gradient-to-t from-violet-600 to-violet-500 text-slate-50"
                        : "text-violet-600 p-4 hover:bg-violet-50 rounded-full"
                    }
                    to="cart/"
                  >
                    <RiShoppingCartFill size={24} />
                  </NavLink>
                </>
              )}
              {!auth && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "p-4 rounded-full bg-gradient-to-t from-violet-600 to-violet-500 text-slate-50"
                        : "text-violet-600 p-4 hover:bg-violet-50 rounded-full"
                    }
                    to="/login/"
                  >
                    <FaUserAlt size={24} />
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </nav>
        <nav className="h-full w-full mx-auto relative z-50 lg:hidden bg-white">
          <button
            className="text-violet-500 lg:hidden h-full ml-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenuAlt2 size={24} />
          </button>
          <ul
            className={`flex flex-col w-full bg-white py-3 px-5 z-50 ${
              isOpen ? "translate-y-0" : "-translate-y-96"
            }`}
          >
            {navItems.map(({ to, title }) => (
              <li key={to} className="my-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-t from-violet-600 to-violet-500 text-slate-50 px-4 py-2 rounded-md block"
                      : "transition-all duration-200 px-4 py-2 text-slate-800 rounded-md hover:bg-violet-50 hover:text-violet-500 block"
                  }
                  to={to}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li key="-">
              <div className="w-full flex justify-evenly gap-1 items-center p-3 rounded-md">
                <NavLink
                  to="cart/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-violet-500 text-white rounded-md px-1 py-3 w-1/2 grid place-items-center"
                      : "bg-white text-violet-500 w-1/2 grid place-items-center border border-violet-200 px-1 py-3 rounded-md"
                  }
                >
                  <RiShoppingCartFill size={24} />
                </NavLink>
                <NavLink
                  to="login/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-violet-500 text-white rounded-md px-1 py-3 w-1/2 grid place-items-center"
                      : "bg-white text-violet-500 w-1/2 grid place-items-center border border-violet-200 px-1 py-3 rounded-md"
                  }
                >
                  <FaUserAlt size={24} />
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
