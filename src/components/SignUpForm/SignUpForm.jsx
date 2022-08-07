import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import StepTwo from "../SignUpSteps/StepTwo";
import StepOne from "../SignUpSteps/StepOne";
import setCookie from "../../Hooks/setCookie";
import removeCookie from "../../Hooks/removeCookie";
import { useDispatch } from "react-redux";
import { userSignUpRequest } from "../../services/httpServices";
import { RegisterUser } from "../../Redux/Auth/AuthActions";
import { toast } from "react-toastify";

const SignUpForm = ({ currentStep, setCurrentStep }) => {
  const [data, setData] = useState({
    //step 1
    name: "",
    phoneNumber: "",
    email: "",
    //step 2
    password: "",
    passwordConfirmation: "",
    rememberme: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      setLoading(true);

      if (newData.rememberme) {
        const cookieData = {
          email: newData.email,
          password: newData.password,
        };

        setCookie("logindata", JSON.stringify(cookieData), { path: "/" });
      }

      const requestData = {
        name: newData.name,
        email: newData.email,
        password: newData.password,
        phoneNumber: newData.phoneNumber,
      };

      userSignUpRequest(requestData)
        .then((res) => {
          dispatch(RegisterUser(res.data));
          setLoading(false);
          navigate("store/");
        })
        .catch((err) => {
          setLoading(false);
          const errMsg = err.response.data.message;
          toast.error(errMsg);
          removeCookie("logindata", { path: "/" });
        });

      return;
    }

    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      setCurrentStep={setCurrentStep}
    />,
    <StepTwo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      loading={loading}
    />,
  ];

  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg border border-gray-200">
          {steps[currentStep -1 ]}

          <p className="text-sm text-center text-gray-500">
            Have account?
            <Link className="underline" to="/login/">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
