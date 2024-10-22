import React from "react";

const data = [
  {
    step: 1,
    name: "Order Generated",
    status: true,
    description: "Your order has been generated.",
    greenIcon: "/images/orderIcons/greenStepOne.png",
    redIcon: "/images/orderIcons/redStepOne.png",
  },
  {
    step: 2,
    name: "Procurement Team",
    status: true,
    description: "Your order is with the procurement team.",
    greenIcon: "/images/orderIcons/greenStepTwo.png",
    redIcon: "/images/orderIcons/redStepTwo.png",
  },
  {
    step: 3,
    name: "Vendor",
    status: true,
    description: "The vendor is preparing your order.",
    greenIcon: "/images/orderIcons/greenStepThree.png",
    redIcon: "/images/orderIcons/redStepThree.png",
  },
  {
    step: 4,
    name: "Technical Team",
    status: false,
    description: "The technical team is reviewing your order.",
    greenIcon: "/images/orderIcons/greenStepFour.png",
    redIcon: "/images/orderIcons/redStepFour.png",
  },
  {
    step: 5,
    name: "Payment",
    status: false,
    description: "Payment processing is pending.",
    greenIcon: "/images/orderIcons/greenStepFive.png",
    redIcon: "/images/orderIcons/redStepFive.png",
  },
  {
    step: 6,
    name: "Delivered",
    status: false,
    description: "Your order has been delivered.",
    greenIcon: "/images/orderIcons/greenStepSix.png",
    redIcon: "/images/orderIcons/redStepSix.png",
  },
];

const OrderHistory = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 mt-4 w-full text-start">Order History</h2>
      <div className="flex flex-row items-center justify-center">
        {data.map((stepData, index) => (
          <div key={index} className="flex items-center relative group">
            <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 px-3 py-2 w-[300px] text-sm text-black bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white"></div>
              <p className="font-semibold">{stepData.description}</p>
              <span className="text-gray-500 text-xs">2024 Sep 09 at 10.44 AM</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`flex justify-center items-center w-[80px] h-[80px] rounded-full border-4 ${stepData.status
                  ? "border-[#529544] bg-[#DFFBD9]"
                  : "border-[#FF0000] bg-[#FFFAFA]"
                  }`}
              >
                <img
                  src={stepData.status ? stepData.greenIcon : stepData.redIcon}
                  alt={stepData.name}
                  className="w-10 h-10"
                />
              </div>
              <div className="text-center mt-2 text-sm w-[80px] ">
                {stepData.name}
              </div>
            </div>
            {index !== data.length - 1 && (
              <div
                className={`h-[5px] w-[80px] mb-[3rem] ${data[index + 1].status ? "bg-[#529544]" : "bg-[#FF0000]"
                  }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
