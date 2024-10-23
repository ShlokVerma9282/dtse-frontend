import Billing from "@/components/Billing";
import Chart from "@/components/Chart";
import FiberCard from "@/components/FiberCard";
import Header from "@/components/Header";
import Procurement from "@/components/Procurement";
import VendorPerformance from "@/components/VendorPerformance";

export default function Dashboard() {
    const cardData = [
        {
            imageSrc: "/images/fiber-cards/1.png",
            count: 75,
            title: "Total Orders",
            arrowType: "up",
            percentage: 4,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/2.png",
            count: 40,
            title: "Total Delivered",
            arrowType: "up",
            percentage: 4,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/3.png",
            count: 10,
            title: "Total Canceled",
            arrowType: "down",
            percentage: 25,
            timeFrame: "30 days"
        },
        {
            imageSrc: "/images/fiber-cards/4.png",
            count: 25,
            title: "Claim Started",
            arrowType: "down",
            percentage: 12,
            timeFrame: "30 days"
        }
    ];

    return (
        <div className="relative h-screen overflow-y-auto font-barlow" >
            <div className="relative z-10 bg-[#EEEEEE] p-6 min-h-screen">
                <Header />
                <div className="flex flex-row justify-between mt-4">
                    <div>
                        <h1 className="text-2xl font-semibold mb-4 font-barlow">Dashboard</h1>
                        <p className="mb-6 font-barlow font-medium text-[#AAAAAA] text-lg">Fiber Optics Orders</p>
                    </div>

                    <div><img src="/images/filter.png" alt="" className="w-[250px] h-[65px]" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {cardData.map((card, index) => (
                        <FiberCard
                            key={index}
                            imageSrc={card.imageSrc}
                            count={card.count}
                            title={card.title}
                            arrowType={card.arrowType}
                            percentage={card.percentage}
                            timeFrame={card.timeFrame}
                        />
                    ))}
                </div>
                <div className="relative grid grid-cols-2 w-full gap-4">
                    <div
                        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10 z-0"
                        style={{ backgroundImage: "url('/images/dashboard-bg.png')" }}
                    ></div>
                    <div className="relative z-10">
                        <Procurement />
                    </div>
                    <div className="relative z-10">
                        <VendorPerformance />
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-2xl font-bold mb-4">Billing and Invoices</h1>
                        <Billing />
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-2xl font-bold mb-4">Technical Team</h1>
                        <Chart />
                    </div>
                </div>

            </div>
        </div>
    );
}
