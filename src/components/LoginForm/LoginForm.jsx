import { Formik, Form } from "formik";
import { useState } from "react";
import Input from "../../Common/Input/Input";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { userLoginRequest } from "../../services/httpServices";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Redux/Auth/AuthActions";
import { toast } from "react-toastify";
import CheckBox from "../../Common/CheckBox/CheckBox";
import setCookie from "../../Hooks/setCookie";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email format not valid").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (values) => {
    if (values.rememberme) {
      delete values["rememberme"];
      setCookie("logindata", JSON.stringify(values), { path: "/" });
    }

    delete values["rememberme"];

    setLoading(true);
    userLoginRequest(values)
      .then((res) => {
        dispatch(LoginUser(res.data));
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        const errMsg = err.response.data.message;
        toast.error(errMsg);
      });
  };

  const passwordTypeChangeHandler = () => setShowPassword(!showPassword);

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg border border-gray-200">
          <Formik
            validateOnMount={true}
            validationSchema={SignupSchema}
            onSubmit={submitHandler}
            enableReinitialize={true}
            initialValues={{ email: "", password: "", rememberme: false }}
          >
            {(formikProps) => (
              <Form>
                <p className="text-lg font-medium text-slate-500">
                  Sign in to your account
                </p>

                <Input
                  label="Email"
                  name="email"
                  placeholder="ex.mahan@test.com"
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="*********"
                  isShow={showPassword}
                  visibilityToggler={passwordTypeChangeHandler}
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
                  Sign in
                </button>

                <p className="text-sm text-center text-gray-500 mt-5">
                  No account?
                  <Link className="underline" to="/signup/">
                    {" "}
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
