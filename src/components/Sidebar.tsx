"use client"
import Link from 'next/link';

const Sidebar = () => (
    <div className="w-64 bg-gray-800 h-screen p-6">
        <div className="mb-8">
            <img src='' alt='' />
            <h1 className="text-white text-2xl font-bold">Company Name</h1>
        </div>
        <ul>
            <li className="mb-4">
                <Link href="/" className="text-white">Dashboard</Link>
            </li>
            <li className="mb-4">
                <Link href="/procurement" className="text-white">Procurement</Link>
            </li>
            <li className="mb-4">
                <Link href="/tech-team" className="text-white">Tech Team</Link>
            </li>
            <li>
                <Link href="/vendor" className="text-white">Vendor</Link>
            </li>
        </ul>
    </div>
);

export default Sidebar;
