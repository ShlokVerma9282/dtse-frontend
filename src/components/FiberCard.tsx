import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

interface FiberCardProps {
    imageSrc: string;
    count: number;
    title: string;
    arrowType: string;
    percentage: number;
    timeFrame: string;
}

const FiberCard: React.FC<FiberCardProps> = ({ imageSrc, count, title, arrowType, percentage, timeFrame }) => {
    const isPositive = arrowType === 'up';

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className="bg-[#FBD9EA] p-4 rounded-full">
                <img src={imageSrc} alt={`${title} Icon`} className="w-8 h-8" />
            </div>
            <div className="ml-4">
                <h2 className="text-2xl font-bold font-neo_extrabold">{count}</h2>
                <p className="text-gray-500 font-neo_medium text-lg">{title}</p>
                <div className="flex items-center space-x-2 font-neo_medium text-xl">
                    <span
                        className={`${isPositive ? 'bg-[#D9F3EA]' : 'bg-[#FFD9DA]'
                            } rounded-full flex justify-center items-center w-4 h-4`}
                    >
                        {isPositive ? (
                            <ArrowUpIcon className="h-2 w-2 text-green-800" />
                        ) : (
                            <ArrowDownIcon className="h-2 w-2 text-red-800" />
                        )}
                    </span>
                    <span className="text-sm text-[#A3A3A3] font-neo_medium">{percentage}% ({timeFrame})</span>
                </div>
            </div>
        </div>
    );
};

export default FiberCard;
