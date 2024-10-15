export default function VendorPerformance() {
  return (
    <div className="py-6 w-full">
      <div className="bg-white p-4 rounded-lg shadow-md h-[331px] mt-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
              Vendor Performance
            </h1>
          </div>
          <div>
            <img src="/images/icons/ThreeDots.png" />
          </div>
        </div>
        <div className="">
          <table className="table-fixed">
            <thead>
              <tr className="flex flex-row">
                <th className="w-[217.24px] flex justify-start font-bold text-[11.43px] leading-[19.06px] p-4">
                  Name
                </th>
                <th className="w-[217.24px] flex justify-center  font-bold text-[11.43px] leading-[19.06px] p-4">
                  City
                </th>
                <th className="w-[217.24px] flex justify-end font-bold text-[11.43px] leading-[19.06px] p-4">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              <div className="">
                <div>
                  <tr className="flex flex-row items-center justify-center w-full h-[53.36px]">
                    <td className="w-1/3 flex justify-start p-4 text-[14px] leading-[19.06px]">
                      Bayka
                    </td>
                    <td className="w-1/3 flex justify-center p-4 text-[13.34px] leading-[20.96px]">
                      Munich
                    </td>
                    <td className="w-1/3 flex justify-end">
                        <div className="flex flex-row px-4">
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                        </div>
                    </td>
                  </tr>
                </div>
              </div>
              <div className="">
                <div>
                  <tr className="flex flex-row items-center justify-center w-full h-[53.36px]">
                    <td className="w-1/3 flex justify-start p-4 text-[14px] leading-[19.06px]">
                    Telegärtner
                    </td>
                    <td className="w-1/3 flex justify-center p-4 text-[13.34px] leading-[20.96px]">
                      Munich
                    </td>
                    <td className="w-1/3 flex justify-end">
                        <div className="flex flex-row px-4">
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                        </div>
                    </td>
                  </tr>
                </div>
              </div>
              <div className="">
                <div>
                  <tr className="flex flex-row items-center justify-center w-full h-[53.36px]">
                    <td className="w-1/3 flex justify-start p-4 text-[14px] leading-[19.06px]">
                    Teleglas GmbH
                    </td>
                    <td className="w-1/3 flex justify-center p-4 text-[13.34px] leading-[20.96px]">
                      Munich
                    </td>
                    <td className="w-1/3 flex justify-end">
                        <div className="flex flex-row px-4">
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                        </div>
                    </td>
                  </tr>
                </div>
              </div>
              <div className="">
                <div>
                  <tr className="flex flex-row items-center justify-center w-full h-[53.36px]">
                    <td className="w-1/3 flex justify-start p-4 text-[14px] leading-[19.06px]">
                    Gcabling Electronic
                    </td>
                    <td className="w-1/3 flex justify-center p-4 text-[13.34px] leading-[20.96px]">
                      Munich
                    </td>
                    <td className="w-1/3 flex justify-end">
                        <div className="flex flex-row px-4">
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/YellowStar.png"/>
                            <img src="/images/icons/GrayStar.png"/>
                        </div>
                    </td>
                  </tr>
                </div>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
