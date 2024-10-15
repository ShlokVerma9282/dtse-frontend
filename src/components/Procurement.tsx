import React from 'react';

export default function Procurement() {

  const procurementData = [
    { invoiceName: 'M23456145', date: '2024-09-04', amount: '130.8,12 €' },
    { invoiceName: 'M23456146', date: '2024-09-05', amount: '150.5,00 €' },
    { invoiceName: 'M23456147', date: '2024-09-06', amount: '200.0,50 €' },
    { invoiceName: 'M23456148', date: '2024-09-07', amount: '99.9,99 €' },
    { invoiceName: 'M23456149', date: '2024-09-08', amount: '185.7,23 €' },
    { invoiceName: 'M23456150', date: '2024-09-09', amount: '75.8,70 €' },
  ];

  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Procurement</h1>
      <div className="bg-white p-4 rounded-lg shadow-md h-[331px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
              Procurement
            </h1>
          </div>
          <div>
            <h1 className="text-[13px] leading-[26.68px] font-bold text-[#B9BBBD] mb-4">
              Show all
            </h1>
          </div>
        </div>
        <div className="overflow-y-auto no-scrollbar h-[213.44px]">
          <table className="table-fixed">
            <thead>
              <tr className="flex flex-row">
                <th className="w-[157px] text-left font-bold text-[11.43px] leading-[19.06px] p-4">
                  Invoice Name
                </th>
                <th className="w-[157px] text-right font-bold text-[11.43px] leading-[19.06px] p-4">
                  Date
                </th>
                <th className="w-[157px] text-right font-bold text-[11.43px] leading-[19.06px] p-4">
                  Amount
                </th>
                <th className="w-[110px] text-right font-bold text-[11.43px] leading-[19.06px] p-4"></th>
              </tr>
            </thead>
            <tbody>
              {procurementData.map((data, idx) => (
                <React.Fragment key={idx}>
                  <tr>
                    <td colSpan={4}>
                      <hr className="h-px border-[#FF4FA7] border-[0.95px]" />
                    </td>
                  </tr>
                  <tr className="flex w-full h-[53.36px] hover:bg-gray-100">
                    <td className="w-[157px] text-left p-4 text-[15.24px] leading-[22.87px]">
                      {data.invoiceName}
                    </td>
                    <td className="w-[157px] text-right p-4 text-[13.34px] leading-[20.96px]">
                      {data.date}
                    </td>
                    <td className="w-[157px] text-right p-4 text-[13.34px] leading-[20.96px] font-bold">
                      {data.amount}
                    </td>
                    <td className="w-[110px] flex justify-center p-4">
                      <img src="/images/icons/CaretRight.png" alt="caret right" className='w-4 h-4' />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
