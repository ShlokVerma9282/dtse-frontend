import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const SearchBar = () => {
    return (
        <div className="relative w-1/2">
            <input
                type="text"
                placeholder="Search here"
                className="p-2 border rounded-md outline-none w-full pr-10 bg-white"
            />
            <MagnifyingGlassIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" />
        </div>
    );
};

export default SearchBar;
