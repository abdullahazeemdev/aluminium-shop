import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Img from "../assets/home.png";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden flex justify-center items-center">

            <main className="min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] flex items-center justify-center px-4 sm:px-6 py-6 lg:py-4 lg:overflow-hidden">

                <div className="w-full max-w-6xl lg:h-[90vh] lg:max-h-[650px] grid grid-cols-1 lg:grid-cols-2 bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

                    <div className="relative hidden lg:flex h-full overflow-hidden">

                        <img
                            src={Img}
                            alt="Aluminium Products"
                            className="absolute inset-0 w-full h-full object-cover"
                        /> 

                        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40"></div>

                        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 blur-[100px] rounded-full"></div>

                        <div className="relative z-10 flex flex-col justify-between w-full p-10">

                            <div>

                                <div className="flex items-center gap-3 mb-7">

                                    <div className="w-11 h-11 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center">
                                        <i className="fa-solid fa-layer-group text-orange-500 text-lg"></i>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-extrabold tracking-wider">
                                            ALU PRO
                                        </h2>

                                        <p className="text-[9px] text-gray-500 tracking-[0.2em]">
                                            ALUMINIUM SOLUTIONS
                                        </p>
                                    </div>

                                </div>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10">

                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-semibold">
                                        Secure Portal
                                    </span>

                                </div>

                            </div>

                            <div>

                                <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-4">
                                    Welcome
                                    <br />
                                    <span className="text-orange-500">
                                        Back!
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-sm leading-6 max-w-md">
                                    Sign in to your ALU PRO account and continue
                                    exploring our premium aluminium solutions.
                                </p>

                                <div className="flex items-center gap-6 mt-7 pt-6 border-t border-white/10">

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-shield-halved text-orange-500"></i>
                                        <span className="text-xs text-gray-400">
                                            Secure
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-box text-orange-500"></i>
                                        <span className="text-xs text-gray-400">
                                            Quality
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-headset text-orange-500"></i>
                                        <span className="text-xs text-gray-400">
                                            Support
                                        </span>
                                    </div>

                                </div>

                            </div>

                            <p className="absolute bottom-5 left-10 text-[10px] text-gray-600">
                                © 2026 ALU PRO. All rights reserved.
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center justify-center bg-[#141414] px-6 sm:px-10 lg:px-12 py-8 lg:py-6 overflow-y-auto">

                        <div className="w-full max-w-md">

                            <div className="lg:hidden flex items-center gap-3 mb-8">

                                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center">
                                    <i className="fa-solid fa-layer-group text-orange-500"></i>
                                </div>

                                <div>
                                    <h2 className="font-extrabold tracking-wider">
                                        ALU PRO
                                    </h2>

                                    <p className="text-[8px] text-gray-500 tracking-widest">
                                        ALUMINIUM SOLUTIONS
                                    </p>
                                </div>

                            </div>

                            <div className="mb-6">

                                <div className="flex items-center gap-2 mb-2">

                                    <span className="w-7 h-[2px] bg-orange-500"></span>

                                    <span className="text-orange-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
                                        Account Access
                                    </span>

                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                    Login to your account
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    Enter your details below to continue.
                                </p>

                            </div>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-4"
                            >

                                <div>

                                    <label className="block text-xs font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none"></i>

                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full h-11 pl-11 pr-4 bg-[#0c0c0c] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <div className="flex items-center justify-between mb-2">

                                        <label className="text-xs font-medium text-gray-300">
                                            Password
                                        </label>

                                        <a
                                            href="#forgot"
                                            className="text-[11px] text-orange-500 hover:text-orange-400 transition-colors"
                                        >
                                            Forgot Password?
                                        </a>

                                    </div>

                                    <div className="relative">

                                        <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none"></i>

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="w-full h-11 pl-11 pr-12 bg-[#0c0c0c] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
                                        >
                                            <i
                                                className={`fa-solid ${
                                                    showPassword
                                                        ? "fa-eye-slash"
                                                        : "fa-eye"
                                                } text-sm`}
                                            ></i>
                                        </button>

                                    </div>

                                </div>

                                <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-orange-600 cursor-pointer"
                                    />

                                    <span>
                                        Remember me
                                    </span>

                                </label>

                                <button
                                    type="submit"
                                    className="group w-full h-11 bg-orange-600 hover:bg-orange-500 rounded-lg text-sm font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/20 cursor-pointer"
                                >

                                    <i className="fa-solid fa-right-to-bracket"></i>

                                    <span>
                                        Login to Account
                                    </span>

                                    <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>

                                </button>

                            </form>

                            <div className="flex items-center gap-4 my-5">

                                <div className="flex-1 h-px bg-white/10"></div>

                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                                    or
                                </span>

                                <div className="flex-1 h-px bg-white/10"></div>

                            </div>

                            <button
                                type="button"
                                className="w-full h-11 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-300 transition-all cursor-pointer"
                            >

                                <i className="fa-brands fa-google text-sm"></i>

                                <span>
                                    Continue with Google
                                </span>

                            </button>

                            <p className="text-center text-xs text-gray-500 mt-5">

                                Don't have an account?

                                <a
                                    href="#signup"
                                    className="ml-1 text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                                >
                                    Create Account
                                </a>

                            </p>

                            <div className="flex items-center justify-center gap-2 mt-5 text-[10px] text-gray-600">

                                <i className="fa-solid fa-shield-halved"></i>

                                <span>
                                    Your information is securely protected
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default Login;

