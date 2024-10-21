import React, { useState } from "react";

const data = [
  {
    step: 1,
    name: "Order Generated",
    status: true,
    description: "",
    icon: "/images/orderIcons/stepOne.png",
  },
  {
    step: 2,
    name: "Procurement Team",
    status: true,
    description: "",
    icon: "/images/orderIcons/stepTwo.png",
  },
  {
    step: 3,
    name: "Vendor",
    status: true,
    description: "",
    icon: "/images/orderIcons/stepThree.png",
  },
  {
    step: 4,
    name: "Technical Team",
    status: false,
    description: "",
    icon: "/images/orderIcons/stepFour.png",
  },
  {
    step: 5,
    name: "Payment",
    status: false,
    description: "",
    icon: "/images/orderIcons/stepFive.png",
  },
  {
    step: 6,
    name: "Delivered",
    status: false,
    description: "",
    icon: "/images/orderIcons/stepSix.png",
  },
];

const OrderHistory = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order History -</h2>
      <div className="flex flex-row ml-[109px]">
        {data.map((data, index) => (
          <div className="flex flex-col">
            {/* Display */}
            <div className="flex flex-col justify-center gap-8">
              <div className="flex flex-row items-center">
                {index != 0 && (
                  <div className={`${data.status ? "bg-[#529544]": "bg-[#FF0000]"} h-[9px] w-[109px]`}></div>
                )}
                <div>
                  <div className={`flex justify-center items-center w-[109px] h-[109px] rounded-full border-[4px] ${data.status ? "border-[#529544] bg-[#DFFBD9]": "border-[#FF0000] bg-[#FFFAFA]"}`}>
                    <img src={data.icon} />
                  </div>
                </div>
              </div>
            </div>
            {/* Text */}
          </div>
        ))}
      </div>

      <div className="flex flex-row ml-[46px] justify-center mt-4 absolute">
        {data.map((data, index) => (
          <div className="w-[220px] justify-center items-center flex">
            {data.name}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OrderHistory;
