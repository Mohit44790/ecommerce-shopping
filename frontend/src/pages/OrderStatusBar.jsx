import React from "react";

const OrderStatusBar = ({ currentStep }) => {
  const steps = ["Dispatched", "Out for Delivery", "Delivered"];

  return (
    <div className="flex justify-between items-center mt-8 mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              index <= currentStep ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm mt-2 ${
              index <= currentStep ? "text-green-700 font-medium" : "text-gray-500"
            }`}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`h-2 rounded-full w-full mt-2 ${
                index < currentStep ? "bg-green-600" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderStatusBar;
