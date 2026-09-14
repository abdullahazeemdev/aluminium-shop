import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#121212] border-b border-[#222] px-4 sm:px-6 md:px-12 py-4 sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Top Navbar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img
                            src={Logo}
                            alt="ALU PRO Logo"
                            className="h-9 sm:h-10 w-auto"
                        />

                        <div className="flex flex-col">
                            <span className="text-white text-base sm:text-lg font-extrabold tracking-wider">
                                ALU PRO
                            </span>

                            <span className="text-[#888] text-[7px] sm:text-[8px] tracking-widest">
                                ALUMINIUM SOLUTIONS
                            </span>
                        </div>
                    </div>


                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">

                        <li>
                            <a
                                href="#"
                                className="text-[#ff7700] text-sm font-medium"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[#b0b0b0] hover:text-[#ff7700] text-sm font-medium transition-colors"
                            >
                                Products
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[#b0b0b0] hover:text-[#ff7700] text-sm font-medium transition-colors"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[#b0b0b0] hover:text-[#ff7700] text-sm font-medium transition-colors"
                            >
                                About Us
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[#b0b0b0] hover:text-[#ff7700] text-sm font-medium transition-colors"
                            >
                                Why Aluminium?
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="text-[#b0b0b0] hover:text-[#ff7700] text-sm font-medium transition-colors"
                            >
                                Contact Us
                            </a>
                        </li>

                    </ul>


                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-3">

                        <a
                            href="#"
                            className="flex items-center gap-2 text-white text-sm font-medium px-4 xl:px-5 py-2.5 border border-[#444] rounded-lg hover:border-[#ff7700] hover:text-[#ff7700] transition-all"
                        >
                            <i className="fa-solid fa-user"></i>
                            <span>Login</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-2 text-white bg-gradient-to-r from-[#ff7700] to-[#ff5500] text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-lg hover:opacity-90 transition-all"
                        >
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Create Account</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>

                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white text-2xl p-2 cursor-pointer"
                    >
                        <i
                            className={`fa-solid ${
                                isOpen ? "fa-xmark" : "fa-bars"
                            }`}
                        ></i>
                    </button>

                </div>


                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 border-t border-[#222] pt-4">

                        {/* Mobile Navigation */}
                        <ul className="flex flex-col gap-1 list-none m-0 p-0">

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#ff7700] text-sm font-medium px-3 py-3 rounded-lg bg-[#1b1b1b]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#b0b0b0] hover:text-[#ff7700] hover:bg-[#1b1b1b] text-sm font-medium px-3 py-3 rounded-lg transition-all"
                                >
                                    Products
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#b0b0b0] hover:text-[#ff7700] hover:bg-[#1b1b1b] text-sm font-medium px-3 py-3 rounded-lg transition-all"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#b0b0b0] hover:text-[#ff7700] hover:bg-[#1b1b1b] text-sm font-medium px-3 py-3 rounded-lg transition-all"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#b0b0b0] hover:text-[#ff7700] hover:bg-[#1b1b1b] text-sm font-medium px-3 py-3 rounded-lg transition-all"
                                >
                                    Why Aluminium?
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-[#b0b0b0] hover:text-[#ff7700] hover:bg-[#1b1b1b] text-sm font-medium px-3 py-3 rounded-lg transition-all"
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>


                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;
