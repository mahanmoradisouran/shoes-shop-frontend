import React from "react";

const Steps = ({ stepsTitle, currentStep }) => {
  return (
    <ul className="steps w-1/2">
      {stepsTitle.map((step, index) => (
        <li
          key={index}
          className={`step ${currentStep - index > 0 && "step-primary"}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
};

export default Steps;
