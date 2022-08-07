import { useState } from "react";
import { navItems } from "../../routes";
import { NavLink } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, auth } = useSelector((state) => state);

  return (
    <>
      <div
        className={`w-full fixed top-0 right-0 bottom-0 left-0 block lg:hidden transition-all duration-700 bg-black  ${
          isOpen ? "opacity-50 z-50" : "opacity-0 -z-50"
        }`}
      ></div>
      <header className="w-full h-20 relative border-b border-gray-200">
        <nav className="h-full lg:w-4/5 w-full mx-auto relative z-50 bg-white">
          <button
            className="text-violet-500 lg:hidden h-full ml-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose size={24} /> : <HiMenuAlt2 size={24} />}
          </button>
          <ul className="flex items-center justify-start h-full w-full">
            <div
              className={`w-full flex lg:flex-row flex-col lg:items-center lg:justify-start lg:gap-4 bg-white pb-3 px-5 lg:p-0 transition-all duration-500 opacity-0 lg:opacity-100 lg:translate-y-0 ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-96"
              }`}
            >
              {navItems.map(({ to, title }) => (
                <li key={to} className="lg:m-0 my-1">
                  <NavLink
                    onClick={() => setIsOpen(false)}
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
            </div>
            <li className="right-0 top-3 absolute w-20 flex justify-center">
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
                        ? "md:p-4 p-3 rounded-full bg-gradient-to-t from-violet-600 to-violet-500 text-slate-50"
                        : "text-violet-600 md:p-4 p-3 hover:bg-violet-50 rounded-full"
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
      </header>
    </>
  );
};

export default Navigation;
