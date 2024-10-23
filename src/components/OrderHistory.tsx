import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '@/store';

const OrderHistory = () => {
  const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);
  const steps = selectedOrder?.orderHistoryInfo?.steps || [];
  const orderID = selectedOrder?.orderInfo?.invoiceName;
  const orderDate = selectedOrder?.orderInfo?.date;
  return (
    <div className="font-barlow">
      <h2 className="text-xl font-bold mb-4 mt-4">Order History -</h2>
      <div className="flex flex-row ml-[89px]">
        {steps.map((data, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex flex-col justify-center gap-8 relative group">
              <div className="flex flex-row items-center">
                {index != 0 && (
                  <div className={`${data.status ? "bg-[#529544]" : "bg-[#FF0000]"} h-[5px] w-[69px]`}></div>
                )}
                <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 px-4 py-3 w-[440px] text-sm text-black bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white"></div>
                  <p className="text-sm">
                    The Order ID: <span className="font-bold">{orderID}</span> is {data.status ?
                      <span className="text-green-600">On Track</span> :
                      <span className="text-red-600">Delayed</span>},
                    <span className="text-gray-600 text-sm"> {orderDate}</span>
                  </p>
                  <p className="text-sm">{data.description}</p>
                </div>
                <div>
                  <div className={`flex justify-center items-center w-[69px] h-[69px] rounded-full border-[4px] ${data.status ? "border-[#529544] bg-[#DFFBD9]" : "border-[#FF0000] bg-[#FFFAFA]"}`}>
                    <img src={`${data.status ? data.greenIcon : data.redIcon}`} className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row ml-[47px] justify-center mt-4 absolute">
        {steps.map((data, index) => (
          <div className="w-[140px] justify-center items-center flex text-[14px] font-semibold" key={index}>
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
