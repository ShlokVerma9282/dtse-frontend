"use client";
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { id: 'Delivered', name: '', count: 400, fill: '#4CAF50' },
    { id: 'Work In Progress', name: '', count: 700, fill: '#FFA726' },
    { id: 'Delayed', name: '', count: 200, fill: '#F44336' },
    { id: 'Issue Raised', name: '', count: 300, fill: '#42A5F5' }
];

const CustomLegend = () => {
    return (
        <div className="flex flex-col mb-4 w-[190px] gap-6 justify-center">
            {data.map((entry) => (
                <div key={entry.name} className="flex items-center mb-1">
                    <div style={{ backgroundColor: entry.fill }} className="w-4 h-4 mr-2 rounded"></div>
                    <span className="text-sm">{entry.id}</span>
                </div>
            ))}
        </div>
    );
};

const Chart = () => {

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
                Technical Overlay
            </h1>
            <div className='flex'>
                <CustomLegend />
                <ResponsiveContainer width={600} height={250}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" barSize={80}>
                            {data.map((entry, index) => (
                                <Bar
                                    key={index}
                                    dataKey="count"
                                    fill={entry.fill}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Chart;
