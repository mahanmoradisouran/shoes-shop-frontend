import { ErrorMessage, Field } from "formik";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  isShow,
  visibilityToggler,
}) => {
  return (
    <div className="form-control w-full mt-2">
      <label className="label">
        <span className="label-text text-gray-400">{label}</span>
      </label>
      <label className="input-group relative">
        <span className="bg-gray-200 text-gray-700 w-36 justify-center select-none">
          {label}
        </span>
        <div
          onClick={visibilityToggler}
          className="absolute right-3 top-3.5 bg-transparent p-0 z-50"
        >
          {type === "password" &&
            (isShow ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            ))}
        </div>
        <Field
          name={name}
          type={type === "password" ? (isShow ? "text" : "password") : type}
          placeholder={placeholder}
          className="input input-bordered w-full focus:outline-2 focus:outline-gray-300 text-gray-500"
        />
      </label>
      <ErrorMessage
        name={name}
        render={(msg) => <span className="text-red-500">{msg}</span>}
      />
    </div>
  );
};

export default Input;
