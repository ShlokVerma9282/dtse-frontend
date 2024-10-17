import React from "react";

const vendors = [
  { name: "Bayka", city: "Munich", rating: 5 },
  { name: "Telegärtner", city: "Munich", rating: 5 },
  { name: "Teleglas GmbH", city: "Munich", rating: 5 },
  { name: "Gcabling Electronic", city: "Munich", rating: 4 },
];

export default function VendorPerformance() {
  return (
    <div className="flex flex-col gap-7">
      {/* Claim Settlement */}
      <div className="flex flex-row justify-between bg-white rounded-lg h-[89.82px]">
        <div className="flex flex-col p-4 gap-2">
          <div className="flex justify-center items-center rounded-2xl bg-[#FF4FA7] w-[63.58px] h-[28.74px]">
            <img
              className="w-[12px] h-[12px]"
              src="/images/icons/arrowUp.png"
            />
            <h1 className="font-medium text-[12px] leading-5 text-white">
              10%
            </h1>
          </div>
          <div>
            <h1 className="font-medium text-[14px] leading-5 text-[#475467]">
              Claim Settlement
            </h1>
          </div>
        </div>
        <div className="py-8 px-4 text-[30px] font-normal leading-[38px]">
          859.985,51 €
        </div>
      </div>

      {/* Amount Paid */}
      <div className="flex flex-row justify-between bg-white rounded-lg h-[89.82px]">
        <div className="flex flex-col p-4 gap-2">
          <div className="flex justify-center items-center rounded-2xl bg-[#FF4FA7] w-[63.58px] h-[28.74px]">
            <img
              className="w-[12px] h-[12px]"
              src="/images/icons/arrowDown.png"
            />
            <h1 className="font-medium text-[12px] leading-5 text-white">
              10%
            </h1>
          </div>
          <div>
            <h1 className="font-medium text-[14px] leading-5 text-[#475467]">
              Amount Paid
            </h1>
          </div>
        </div>
        <div className="py-8 px-4 text-[30px] font-normal leading-[38px]">
          237.124,34 €
        </div>
      </div>

      {/*Upcoming Payments  */}
      <div className="flex flex-row justify-between bg-white rounded-lg h-[89.82px]">
        <div className="flex flex-col p-4 gap-2">
          <div className="flex justify-center items-center rounded-2xl bg-[#083830] w-[63.58px] h-[28.74px]">
            <h1 className="font-medium text-[12px] leading-5 text-white">
              10 New
            </h1>
          </div>
          <div>
            <h1 className="font-medium text-[14px] leading-5 text-[#475467]">
              Upcoming Payments
            </h1>
          </div>
        </div>
        <div className="py-8 px-4 text-[30px] font-normal leading-[38px]">
          421.104,29 €
        </div>
      </div>
    </div>
  );
}
