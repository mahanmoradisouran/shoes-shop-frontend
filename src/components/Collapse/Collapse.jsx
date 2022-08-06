import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Collapse = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeCollapseHandler = () => setIsOpen(!isOpen);

  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-lg flex flex-col items-between p-5 ${
        isOpen ? "h-auto justify-start" : "h-22 justify-center"
      }`}
    >
      <div
        onClick={changeCollapseHandler}
        className="flex justify-between items-center"
      >
        <p className="font-semibold text-gray-600">{label}</p>
        {isOpen ? (
          <IoIosArrowUp size={20} className="text-gray-500" />
        ) : (
          <IoIosArrowDown size={20} className="text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col pt-5 gap-4 w-full">{children}</div>
      )}
    </div>
  );
};

export default Collapse;
