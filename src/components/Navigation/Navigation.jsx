import React from "react";
import { navItems } from "../../routes";
import { NavLink } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <header className="w-full h-20 relative border-b border-gray-200">
      <nav className="h-full sm:w-4/5 w-11/12 mx-auto relative">
        <ul className="w-full h-full flex items-center justify-start gap-4">
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
          <li className="right-0 absolute w-20 flex justify-center" key="cart/">
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
