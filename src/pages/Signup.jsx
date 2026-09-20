import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Img from "../assets/home.png";
import Input from "../components/Input";
import { toast } from "react-toastify";
import Toast from "../components/toast";
import { Link, useNavigate } from "react-router-dom";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../components/firebase/config";
import SignupGoogle from "../components/signupGoogle";

const Signup = () => {
    const navigate = useNavigate();
    // Password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Terms checkbox
    const [agreeTerms, setAgreeTerms] = useState(false);

    // Form state
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Save user data in Firestore
    const saveDetaDB = async (user) => {
        console.log(user)
        try {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                username: form.username,
                email: user.email,
                phone: form.phone,
                role: "user",
                createdAt: serverTimestamp(),
            });

            return true;
        } catch (error) {
            console.error("Firestore Error:", error);

            toast.error(
                error?.message || "Failed to save user data."
            );

            return false;
        }
    };

    // Signup handler
    const signupHandler = async (e) => {
        e.preventDefault();

        // Prevent multiple clicks
        if (loading) return;

        // Check all fields
        if (
            !form.username.trim() ||
            !form.email.trim() ||
            !form.phone.trim() ||
            !form.password ||
            !form.confirmPassword
        ) {
            toast.error("Please fill in all fields.");
            return;
        }

        // Check password length
        if (form.password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        // Check password match
        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        // Check terms
        if (!agreeTerms) {
            toast.error("Please agree to the Terms & Conditions.");
            return;
        }

        try {
            setLoading(true);

            // Create Firebase Authentication account
            const response = await createUserWithEmailAndPassword(
                auth,
                form.email.trim(),
                form.password
            );

            console.log("Signup successful:", response.user);

            // Save additional user information in Firestore
            if (response.user) {
                const dataSaved = await saveDetaDB(response.user);

                if (!dataSaved) {
                    return;
                }

                toast.success("Account created successfully.");
                setTimeout(() =>{
                   navigate("/login") 
                },1500)
                
            }

            // Reset form
            setForm({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
            });

            setAgreeTerms(false);
            setShowPassword(false);
            setShowConfirmPassword(false);

        } catch (error) {
            console.error("Signup error:", error);

            if (error.code === "auth/email-already-in-use") {
                toast.error("This email is already registered.");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address.");
            } else if (error.code === "auth/weak-password") {
                toast.error("Password is too weak.");
            } else if (error.code === "auth/network-request-failed") {
                toast.error("Network error. Please check your internet.");
            } else {
                toast.error(
                    error?.message || "Something went wrong. Please try again."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    // Google signup is handled by SignupGoogle component

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">

            <main className="min-h-screen lg:h-screen flex items-center justify-center px-4 sm:px-6 py-6 lg:py-4 lg:overflow-hidden">

                <div className="w-full max-w-6xl lg:h-[92vh] lg:max-h-[680px] grid grid-cols-1 lg:grid-cols-2 bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

                    {/* LEFT SIDE */}

                    <div className="relative hidden lg:flex h-full overflow-hidden">

                        <img
                            src={Img}
                            alt="Aluminium Products"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/40"></div>

                        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 blur-[100px] rounded-full"></div>

                        <div className="relative z-10 flex flex-col justify-between w-full p-10">

                            <div>

                                <div className="flex items-center gap-3">

                                    <div className="w-11 h-11 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center">

                                        <img
                                            src={Logo}
                                            alt="ALU PRO Logo"
                                            className="w-full h-full object-contain rounded-lg"
                                        />

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

                            </div>

                            <div>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-5">

                                    <i className="fa-solid fa-user-plus text-orange-500 text-[10px]"></i>

                                    <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-semibold">
                                        Join ALU PRO
                                    </span>

                                </div>

                                <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-4">

                                    Build Your
                                    <br />

                                    <span className="text-orange-500">
                                        Account.
                                    </span>

                                </h1>

                                <p className="text-gray-400 text-sm leading-6 max-w-md">
                                    Create your ALU PRO account and get access
                                    to our aluminium products, services and
                                    future online ordering system.
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

                    {/* RIGHT SIDE */}

                    <div className="flex items-center justify-center bg-[#141414] px-6 sm:px-10 lg:px-12 py-7 lg:py-5 overflow-y-auto">

                        <div className="w-full max-w-md">

                            {/* MOBILE LOGO */}

                            <div className="lg:hidden flex items-center gap-3 mb-7">

                                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/30 flex items-center justify-center">

                                    <img
                                        src={Logo}
                                        alt="ALU PRO Logo"
                                        className="w-full h-full object-contain rounded-lg"
                                    />

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

                            {/* HEADING */}

                            <div className="mb-5">

                                <div className="flex items-center gap-2 mb-2">

                                    <span className="w-7 h-[2px] bg-orange-500"></span>

                                    <span className="text-orange-500 text-[10px] font-semibold uppercase tracking-[0.2em]">
                                        Create Account
                                    </span>

                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                    Create your account
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    Fill in your details to get started.
                                </p>

                            </div>

                            {/* FORM */}

                            <form
                                onSubmit={signupHandler}
                                className="space-y-3.5"
                            >

                                {/* FULL NAME */}

                                <Input
                                    handler={handleInput}
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    type="text"
                                    icon="fa-solid fa-user"
                                    value={form.username}
                                    name="username"
                                />

                                {/* EMAIL */}

                                <Input
                                    handler={handleInput}
                                    type="email"
                                    label="Email Address"
                                    placeholder="you@example.com"
                                    icon="fa-solid fa-envelope"
                                    value={form.email}
                                    name="email"
                                />

                                {/* PHONE */}

                                <Input
                                    handler={handleInput}
                                    label="Phone Number"
                                    type="tel"
                                    placeholder="+92 300 0000000"
                                    icon="fa-solid fa-phone"
                                    value={form.phone}
                                    name="phone"
                                />

                                {/* PASSWORD */}

                                <div>

                                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                                        Password
                                    </label>

                                    <div className="relative">

                                        <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none"></i>

                                        <input
                                            name="password"
                                            value={form.password}
                                            onChange={handleInput}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Create a password"
                                            className="w-full h-11 pl-11 pr-12 bg-[#0c0c0c] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
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

                                {/* CONFIRM PASSWORD */}

                                <div>

                                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                                        Confirm Password
                                    </label>

                                    <div className="relative">

                                        <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none"></i>

                                        <input
                                            name="confirmPassword"
                                            value={form.confirmPassword}
                                            onChange={handleInput}
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Confirm your password"
                                            className="w-full h-11 pl-11 pr-12 bg-[#0c0c0c] border border-white/10 rounded-lg text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 transition-all"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                            className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
                                        >

                                            <i
                                                className={`fa-solid ${
                                                    showConfirmPassword
                                                        ? "fa-eye-slash"
                                                        : "fa-eye"
                                                } text-sm`}
                                            ></i>

                                        </button>

                                    </div>

                                </div>

                                {/* TERMS */}

                                <label className="flex items-start gap-2 pt-1 text-xs text-gray-500 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        checked={agreeTerms}
                                        onChange={(e) =>
                                            setAgreeTerms(e.target.checked)
                                        }
                                        className="w-4 h-4 mt-0.5 accent-orange-600 cursor-pointer"
                                    />

                                    <span className="leading-5">

                                        I agree to

                                        <a
                                            href="#terms"
                                            className="text-orange-500 hover:text-orange-400 ml-1"
                                        >
                                            Terms & Conditions
                                        </a>

                                    </span>

                                </label>

                                {/* CREATE ACCOUNT */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`group w-full h-11 rounded-lg text-sm font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                                        loading
                                            ? "bg-orange-700 cursor-not-allowed opacity-80"
                                            : "bg-orange-600 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/20 cursor-pointer"
                                    }`}
                                >

                                    {loading ? (
                                        <>
                                            <i className="fa-solid fa-spinner fa-spin"></i>

                                            <span>
                                                Creating Account...
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-user-plus"></i>

                                            <span>
                                                Create Account
                                            </span>

                                            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                                        </>
                                    )}

                                </button>

                            </form>

                            {/* OR */}

                            <div className="flex items-center gap-4 my-5">

                                <div className="flex-1 h-px bg-white/10"></div>

                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                                    or
                                </span>

                                <div className="flex-1 h-px bg-white/10"></div>

                            </div>

                            {/* GOOGLE */}

                            <SignupGoogle
                                title="Signup with Google"
                                toastify="Google signup successful!"
                            />

                            {/* LOGIN */}

                            <p className="text-center text-xs text-gray-500 mt-5">

                                Already have an account?

                                <Link to="/login">

                                    <button
                                        type="button"
                                        className="ml-1 text-orange-500 hover:text-orange-400 font-semibold transition-colors cursor-pointer"
                                    >
                                        Login
                                    </button>

                                </Link>

                            </p>

                            {/* SECURITY */}

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

            <Toast />

        </div>
    );
};

export default Signup;
