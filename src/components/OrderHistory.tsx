import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '@/store';

const OrderHistory = () => {
  const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);
  const steps = selectedOrder?.orderHistoryInfo?.steps || [];
  const orderID = selectedOrder?.orderInfo?.invoiceName;
  const orderDate = selectedOrder?.orderInfo?.date;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 mt-4 w-full text-start">Order History</h2>
      <div className="flex flex-row items-center justify-center">
        {steps.map((stepData, index) => (
          <div key={index} className="flex items-center relative group">
            <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 px-4 py-3 w-[440px] text-sm text-black bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white"></div>
              <p className="text-sm">
                The Order ID: <span className="font-bold">{orderID}</span> is {stepData.status ? 
                  <span className="text-green-600">On Track</span> : 
                  <span className="text-red-600">Delayed</span>}, 
                <span className="text-gray-600 text-sm"> {orderDate}</span>
              </p>
              <p className="text-sm">{stepData.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`flex justify-center items-center w-[80px] h-[80px] rounded-full border-4 ${stepData.status
                  ? "border-[#529544] bg-[#DFFBD9]"
                  : "border-[#FF0000] bg-[#FFFAFA]"}`}
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
            {index !== steps.length - 1 && (
              <div
                className={`h-[5px] w-[80px] mb-[3rem] ${steps[index + 1].status ? "bg-[#529544]" : "bg-[#FF0000]"}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
