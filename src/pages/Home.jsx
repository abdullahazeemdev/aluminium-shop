import React from "react";
import Navbar from "../components/Navbar";
import Img from '../assets/home.png'

const Home = () => {
    return (
        <div className="bg-[#0b0b0b] h-screen flex flex-col overflow-hidden">

            {/* Navbar */}
            <Navbar />

            {/* Hero Section - Restricted strictly to remaining viewport height */}
            <section className="relative flex-1 flex items-center overflow-hidden text-white">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={Img}
                        alt="Aluminium Products"
                        className="w-full h-full object-cover opacity-50"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30"></div>
                </div>


                {/* Hero Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-6">

                    <div className="max-w-3xl">

                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 rounded-full mb-4">
                            <i className="fa-solid fa-certificate text-orange-500 text-xs"></i>
                            <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
                                Premium Quality
                            </span>
                        </div>


                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">
                            Strong. Reliable.
                            <br />
                            <span className="text-orange-500">
                                Aluminium
                            </span>{" "}
                            for Every Need.
                        </h1>


                        {/* Description */}
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-2xl mb-6">
                            We provide high-quality aluminium materials for
                            construction, fabrication, industrial and
                            residential projects.
                        </p>


                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6 mb-6">

                            {/* Feature 1 */}
                            <div className="group">
                                <div className="text-orange-500 text-xl mb-2">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                <h4 className="text-white font-semibold text-xs sm:text-sm mb-0.5">
                                    High Quality
                                </h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed">
                                    Premium grade aluminium
                                </p>
                            </div>


                            {/* Feature 2 */}
                            <div className="group">
                                <div className="text-orange-500 text-xl mb-2">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <h4 className="text-white font-semibold text-xs sm:text-sm mb-0.5">
                                    Durable Strength
                                </h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed">
                                    Built for long lasting performance
                                </p>
                            </div>

                            <div className="group">
                                <div className="text-orange-500 text-xl mb-2">
                                    <i className="fa-solid fa-headset"></i>
                                </div>
                                <h4 className="text-white font-semibold text-xs sm:text-sm mb-0.5">
                                    Customer Support
                                </h4>
                                <p className="text-gray-500 text-[11px] leading-relaxed">
                                    We are here to help you
                                </p>
                            </div>

                        </div>


                        {/* Buttons */}
                        <div className="flex flex-wrap items-center  gap-3">

                            <a
                                href="#login"
                                className="group bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                            >
                                <i className="fa-solid fa-user text-xs"></i>
                                <span>Login</span>
                                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                            </a>


                            <a
                                href="#signup"
                                className="group border border-white/20 bg-white/5 hover:bg-white/10 hover:border-orange-500/60 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2.5 text-sm transition-all duration-300"
                            >
                                <i className="fa-solid fa-user-plus text-orange-500 text-xs"></i>
                                <span>Create Account</span>
                                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;