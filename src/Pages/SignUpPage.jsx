import { useState } from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Steps from "../components/Steps/Steps";

const stepsTitle = ["Register", "Email & security"];

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      className="w-full h-full fixed top-0 right-0 left-0 bottom-0 z-50 bg-white flex flex-col
    items-center lg:pt-10 pt-3"
    >
      <Steps stepsTitle={stepsTitle} currentStep={currentStep} />

      <SignUpForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default SignUpPage;
