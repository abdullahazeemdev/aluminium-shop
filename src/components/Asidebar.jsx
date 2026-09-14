import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Asidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        {
            path: "/dashboard",
            label: "Dashboard",
            icon: "fa-chart-pie",
        },
        {
            path: "/dashboard/products",
            label: "Products",
            icon: "fa-box-open",
        },
        {
            path: "/dashboard/services",
            label: "Services",
            icon: "fa-screwdriver-wrench",
        },
        {
            path: "/dashboard/about",
            label: "About Us",
            icon: "fa-circle-info",
        },
        {
            path: "/dashboard/profile",
            label: "My Profile",
            icon: "fa-user",
        },
        {
            path: "/dashboard/contact",
            label: "Contact Us",
            icon: "fa-envelope",
        },
    ];

    return (
        <>
            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-[60] lg:hidden w-11 h-11 rounded-xl bg-[#0d0d0d] border border-white/10 text-orange-500 flex items-center justify-center shadow-lg hover:bg-orange-500/10 transition-all"
            >
                <i
                    className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"
                        } text-lg`}
                ></i>
            </button>

            {/* ================= MOBILE OVERLAY ================= */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                ></div>
            )}

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`
                fixed left-0 top-0 z-50
                w-64 h-screen
                bg-[#0d0d0d]
                border-r border-white/10
                flex flex-col
                transition-transform duration-300 ease-in-out

                ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }

                lg:translate-x-0
            `}
            >

                {/* ================= TOP ================= */}
                <div className="flex-1 overflow-y-auto p-5">

                    {/* Logo */}
                    <div className="flex items-center gap-3 px-2 mb-10">

                        <div className="relative">

                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                <i className="fa-solid fa-layer-group text-lg"></i>
                            </div>

                            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0d0d0d]"></span>

                        </div>

                        <div>
                            <h1 className="text-white font-extrabold tracking-[0.18em] text-sm">
                                ALU PRO
                            </h1>

                            <p className="text-[8px] text-gray-500 tracking-[0.16em] uppercase mt-1">
                                Aluminium Solutions
                            </p>
                        </div>

                    </div>


                    {/* ================= MAIN MENU ================= */}
                    <div>

                        <div className="flex items-center gap-2 px-3 mb-3">
                            <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                                Main Menu
                            </span>

                            <div className="h-px flex-1 bg-white/5"></div>
                        </div>


                        <nav className="space-y-1">

                            {navItems.map((item) => (

                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === "/dashboard"}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `relative flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive
                                            ? "bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-sm shadow-orange-500/5"
                                            : "text-gray-400 border border-transparent hover:bg-white/[0.04] hover:text-white"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>

                                            {/* Active Line */}
                                            {isActive && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-orange-500 rounded-r-full"></span>
                                            )}

                                            {/* Icon */}
                                            <span
                                                className={`
                                                w-9 h-9 rounded-lg
                                                flex items-center justify-center
                                                transition-all duration-200
                                                ${isActive
                                                        ? "bg-orange-500/10 text-orange-500"
                                                        : "text-gray-500 group-hover:text-orange-400 group-hover:bg-white/5"
                                                    }
                                            `}
                                            >
                                                <i
                                                    className={`fa-solid ${item.icon} text-sm group-hover:scale-110 transition-transform`}
                                                ></i>
                                            </span>

                                            {/* Label */}
                                            <span className="flex-1">
                                                {item.label}
                                            </span>

                                            {/* Active Dot */}
                                            {isActive && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50"></span>
                                            )}

                                        </>
                                    )}
                                </NavLink>

                            ))}

                        </nav>

                    </div>


                    {/* ================= SUPPORT ================= */}
                    <div className="mt-8">

                        <div className="flex items-center gap-2 px-3 mb-3">

                            <span className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
                                Support
                            </span>

                            <div className="h-px flex-1 bg-white/5"></div>

                        </div>


                        <NavLink
                            to="/dashboard/support"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `relative flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 group border ${isActive
                                    ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                    : "text-gray-400 border-transparent hover:bg-white/[0.04] hover:text-white"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>

                                    {isActive && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-orange-500 rounded-r-full"></span>
                                    )}

                                    <span
                                        className={`
                                        w-9 h-9 rounded-lg
                                        flex items-center justify-center
                                        transition-all
                                        ${isActive
                                                ? "bg-orange-500/10 text-orange-500"
                                                : "text-gray-500 group-hover:text-orange-400 group-hover:bg-white/5"
                                            }
                                    `}
                                    >
                                        <i className="fa-solid fa-headset text-sm group-hover:scale-110 transition-transform"></i>
                                    </span>

                                    <span className="flex-1">
                                        Help & Support
                                    </span>

                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-md shadow-orange-500/50"></span>
                                    )}

                                </>
                            )}
                        </NavLink>

                    </div>

                </div>


                {/* ================= BOTTOM ================= */}
                <div className="shrink-0 p-5 bg-[#0d0d0d] border-t border-white/10">

                    {/* User Card */}
                    <div className="flex items-center gap-3 p-3 mb-3 rounded-xl bg-white/[0.03] border border-white/5">

                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-orange-500/10">
                            AA
                        </div>

                        <div className="flex-1 min-w-0">

                            <h4 className="text-xs font-semibold text-white truncate">
                                Abdullah Azeem
                            </h4>

                            <p className="text-[10px] text-gray-500 mt-0.5">
                                Admin
                            </p>

                        </div>

                        <span className="w-2 h-2 rounded-full bg-green-500"></span>

                    </div>


                    {/* Logout */}
                    <button
                        type="button"
                        className="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 border border-transparent hover:border-red-500/10 transition-all duration-200 group"
                    >

                        <span className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:bg-red-500/10 transition-all">
                            <i className="fa-solid fa-right-from-bracket text-sm group-hover:-translate-x-0.5 transition-transform"></i>
                        </span>

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </aside>
        </>
    );


};

export default Asidebar;
