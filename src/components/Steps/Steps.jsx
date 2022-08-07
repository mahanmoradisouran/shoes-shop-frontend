import React from "react";

const Steps = ({ stepsTitle, currentStep }) => {
  return (
    <ul className="steps w-1/2">
      {stepsTitle.map((step, index) => (
        <li
          key={index}
          className={`step ${currentStep - index > 0 && "step-primary"}`}
        >
          <span className="hidden md:block">{step}</span>
        </li>
      ))}
    </ul>
  );
};

export default Steps;
