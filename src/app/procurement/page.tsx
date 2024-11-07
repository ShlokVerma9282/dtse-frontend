import React from 'react';
import Image from 'next/image';

const Procurement = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 max-w-md">
                <Image
                    src="/images/construction.png"
                    alt="Under Construction"
                    width={528}
                    height={528}
                    className="mx-auto mb-4"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Website is Under Construction</h1>
                <p className="text-gray-600 mb-6">
                    We&apos;re working hard to get things ready! Please check back soon.
                </p>
            </div>
        </div>
    );
};

export default Procurement;
