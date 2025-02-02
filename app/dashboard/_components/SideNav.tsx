"use client";
import { FileClock, HistoryIcon, Home, Menu, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard",
        },
        {
            name: "Setting",
            icon: Settings,
            path: "/dashboard/settings/",
        },
    ];

    const path = usePathname(); // Gets the current path
    const router = useRouter(); // Allows navigation to a new route

    useEffect(() => {
        console.log(path); // Logs the current path
    }, [path]); // Run effect when path changes

    return (
        <div className="h-screen p-5 shadow-sm border spacing-5 bg-black">
            <div className="flex justify-center mt-1">
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </div>
            <hr className="my-8 border" />
            <div className="mt-3">
                {MenuList.map((menu) => (
                    <div
                        key={menu.path} // Use path as the key to ensure uniqueness
                        className={`flex gap-2 mb-2 p-3 cursor-pointer items-center ${
                            path === menu.path ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
                        }`}
                        onClick={() => router.push(menu.path)} // Navigate to the path on click
                    >
                        <menu.icon className="h-7 w-6" />
                        <h2 className="text-lg">{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
