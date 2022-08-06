import { useState } from "react";
import { Form, Formik } from "formik";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
import CheckBox from "../../Common/CheckBox/CheckBox";

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(8).required("Required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const StepTwo = ({ next, prev, data, loading }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const passwordTypeChangeHandler = (state, setState) => setState(!state);
  const submitHandler = (values) => {
    next(values, true);
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      validateOnMount={true}
      enableReinitializ={true}
      initialValues={data}
      onSubmit={submitHandler}
    >
      {(formikProps) => (
        <Form>
          <p className="text-lg text-center font-medium text-slate-500">
            Create your account
          </p>
          <Input
            label="Password"
            placeholder="********"
            name="password"
            type="password"
            isShow={showPassword1}
            visibilityToggler={() =>
              passwordTypeChangeHandler(showPassword1, setShowPassword1)
            }
          />
          <Input
            label="Confirm"
            placeholder="********"
            name="passwordConfirmation"
            type="password"
            isShow={showPassword2}
            visibilityToggler={() =>
              passwordTypeChangeHandler(showPassword2, setShowPassword2)
            }
          />
          <CheckBox
            name="rememberme"
            label="Remember the login information. The next login will be done automatically."
          />
          <button
            disabled={!formikProps.isValid}
            type="submit"
            className={`btn btn-primary btn-block mt-10 ${
              loading && "loading"
            }`}
          >
            Create account
          </button>
          <p
            onClick={prev}
            className="mt-5 text-center text-red-500 hover:underline flex justify-center items-center"
          >
            Go back <RiArrowLeftCircleFill className="ml-2" size={18} />
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
