import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(50)
    .required("Required"),
  number: Yup.string().matches(phoneRegExp, "Phone number format not valid ").min(10).max(11),
  email: Yup.string().email("Email format not valid").required("Required"),
});

const StepOne = ({ next, data }) => {
  const submitHandler = (values) => {
    next(values);
  };

  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={data}
      onSubmit={submitHandler}
      validateOnMount={true}
      enableReinitializ={true}
    >
      {(formikProps) => {
        return (
          <Form>
            <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
              Get started today
            </h1>
            <p className="text-lg font-medium text-slate-500 text-center mt-2">
              Create your account
            </p>
            <Input label="Full name" name="name" placeholder="ex.mahan" />
            <Input
              label="Number"
              name="phoneNumber"
              placeholder="ex.09** *** ****"
            />
            <Input label="Email" placeholder="ex.mahan@test.com" name="email" />

            <button
              type="submit"
              disabled={!formikProps.isValid}
              className={`btn btn-primary btn-block mt-10`}
            >
              Next step
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepOne;
