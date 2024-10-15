"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, Bars3CenterLeftIcon, UsersIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
    const router = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: '/', icon: <HomeIcon className="h-6 w-6" /> },
        { name: 'Procurement', href: '/procurement', icon: <Bars3CenterLeftIcon className="h-6 w-6" /> },
        { name: 'Tech Team', href: '/tech-team', icon: <AdjustmentsVerticalIcon className="h-6 w-6" /> },
        { name: 'Vendor', href: '/vendor', icon: <UsersIcon className="h-6 w-6" /> }
    ];

    return (
        <div className="relative w-64 min-h-screen p-6 shadow-lg">
            <div
                className="absolute inset-0 bg-no-repeat bg-bottom -ml-16"
                style={{ backgroundImage: "url('/images/sidebar-bg.png')", backgroundSize: "200px 400px" }}
            ></div>
            <div className="relative z-10">
                <div className="mb-8 flex items-center">
                    <img src='/images/logo.png' alt='Company Logo' className="w-14 h-16 mr-3" />
                    <h1 className="text-pink-600 text-2xl font-bold">DTSE</h1>
                </div>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <Link href={item.href} passHref>
                                <div
                                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 ease-in-out ${router === item.href
                                        ? 'bg-gradient-to-r from-[#E20074] to-[#7C0040] text-white'
                                        : 'hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
