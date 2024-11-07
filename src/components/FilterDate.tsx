import { CalendarIcon } from '@heroicons/react/24/outline'

const FilterPeriod = () => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md space-x-4 font-neo_medium">
            <div className="bg-pink-100 p-2 rounded-lg">
                <CalendarIcon className="text-[#E20074] text-xl h-6 w-6" />
            </div>
            <div className="flex flex-col">
                <span className="text-gray-700 font-medium">Filter Period</span>
                <span className="text-gray-400 text-sm">2024 Sep 01 - 2024 Sep 30</span>
            </div>
            <div className="ml-auto text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 7.5L10 12l4.5-4.5-1.25-1.25L10 9.5 6.75 6.25 5.5 7.5z" />
                </svg>
            </div>
        </div>
    );
};

export default FilterPeriod;
