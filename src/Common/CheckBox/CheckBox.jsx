import { Field } from "formik";
import React from "react";

const CheckBox = ({ name, label }) => {
  return (
    <div className="form-control p-3 mt-2 rounded-lg">
      <label className="label cursor-pointer">
        <span className="label-text text-gray-500">{label}</span>
        <Field
          name={name}
          type="checkbox"
          className="checkbox checkbox-primary border-gray-400"
        />
      </label>
    </div>
  );
};

export default CheckBox;
