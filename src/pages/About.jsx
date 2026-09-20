import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const whyChooseData = [
    {
        icon: "fa-solid fa-gem",
        title: "Quality Materials",
        desc: "Premium grade aluminum built for high durability and long-lasting performance.",
    },
    {
        icon: "fa-solid fa-ruler-combined",
        title: "Precision Engineering",
        desc: "Accurate measurements and seamless architectural execution for every project.",
    },
    {
        icon: "fa-solid fa-clock",
        title: "Reliable Timelines",
        desc: "We respect project schedules with transparent communication and dependable delivery.",
    },
    {
        icon: "fa-solid fa-users",
        title: "Client-Centric",
        desc: "Dedicated support and solutions tailored around your specific requirements.",
    },
];

const About = () => {
    return (<main className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center border-b border-white/10 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,119,0,0.14),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(255,119,0,0.08),transparent_35%)]" />

            <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff7700]/10 rounded-full blur-[120px]" />

            <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff7700]/10 rounded-full blur-[120px]" />

            {/* Decorative Lines */}
            <div className="absolute top-0 right-[8%] hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-[#ff7700]/30 to-transparent" />

            <div className="absolute top-0 right-[14%] hidden lg:block w-px h-2/3 bg-gradient-to-b from-transparent via-white/10 to-transparent" />


            {/* Hero Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">

                {/* Logo */}
                <div className="">

                    <img
                        src={Logo}
                        alt="ALU PRO Logo"
                        className="h-9 sm:h-4 md:h-14 w-auto max-w-[180px] object-contain transition duration-300 hover:scale-105"
                    />

                </div>


                {/* Hero Content */}
                <div className="max-w-4xl">

                    {/* Label */}
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-5">

                        <span className="w-7 sm:w-10 h-[2px] bg-[#ff7700] ml-1" />

                        <span className="text-[#ff7700] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px]">
                            About ALU PRO
                        </span>

                    </div>


                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight">

                        Building with{" "}
                        <span className="text-[#ff7700]">
                            Strength.
                        </span>

                        <br />

                        Designed for{" "}
                        <span className="text-[#ff7700]">
                            Life.
                        </span>

                    </h1>


                    {/* Description */}
                    <p className="mt-6 sm:mt-7 lg:mt-8 text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-relaxed max-w-2xl">

                        ALU PRO is committed to delivering reliable, durable,
                        and modern aluminium solutions for residential,
                        commercial, and architectural projects.

                    </p>


                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-10 mt-9 sm:mt-12">

                        {/* Stat 1 */}
                        <div>
                            <p className="text-xl sm:text-3xl font-black text-[#ff7700]">
                                100%
                            </p>

                            <p className="text-[10px] sm:text-sm text-zinc-500 mt-1">
                                Quality Focus
                            </p>
                        </div>


                        {/* Separator */}
                        <div className="hidden sm:block w-px h-10 bg-white/10" />


                        {/* Stat 2 */}
                        <div>
                            <p className="text-xl sm:text-3xl font-black text-white">
                                PRO
                            </p>

                            <p className="text-[10px] sm:text-sm text-zinc-500 mt-1">
                                Workmanship
                            </p>
                        </div>


                        {/* Separator */}
                        <div className="hidden sm:block w-px h-10 bg-white/10" />


                        {/* Stat 3 */}
                        <div>
                            <p className="text-xl sm:text-3xl font-black text-white">
                                24/7
                            </p>

                            <p className="text-[10px] sm:text-sm text-zinc-500 mt-1">
                                Client Focus
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>


        {/* =====================================================
            WHO WE ARE
        ===================================================== */}
        <section className="relative py-16 sm:py-24 lg:py-32">

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">


                    {/* LEFT CONTENT */}
                    <div className="min-w-0">

                        {/* Label */}
                        <div className="flex items-center gap-3 mb-5">

                            <span className="w-7 sm:w-8 h-[2px] bg-[#ff7700]" />

                            <span className="text-[#ff7700] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px]">
                                Who We Are
                            </span>

                        </div>


                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

                            Aluminium solutions
                            <br className="hidden sm:block" />

                            you can{" "}
                            <span className="text-[#ff7700]">
                                trust.
                            </span>

                        </h2>


                        {/* Text */}
                        <div className="mt-6 sm:mt-7 space-y-4 sm:space-y-5 text-zinc-400 text-sm sm:text-base leading-7">

                            <p>
                                At ALU PRO, we believe quality is not just
                                about the material — it is about precision,
                                craftsmanship, and complete customer
                                satisfaction.
                            </p>

                            <p>
                                We provide premium aluminium systems designed
                                to blend modern visual aesthetics with
                                structural durability. From residential
                                window frames to grand commercial facades,
                                our solutions are engineered for long-term
                                endurance.
                            </p>

                        </div>


                        {/* BADGES */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7 sm:mt-8">

                            {[
                                ["fa-shield-halved", "Reliable Quality"],
                                ["fa-compass-drafting", "Precise Work"],
                                ["fa-handshake", "Customer Focused"],
                            ].map(([icon, label]) => (

                                <div
                                    key={label}
                                    className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#ff7700]/40 transition duration-300"
                                >

                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#ff7700]/10 flex items-center justify-center shrink-0">

                                        <i
                                            className={`fa-solid ${icon} text-[#ff7700] text-sm`}
                                        />

                                    </div>

                                    <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                                        {label}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* RIGHT FEATURE CARD */}
                    <div className="relative min-w-0">

                        {/* Glow */}
                        <div className="absolute -inset-4 bg-[#ff7700]/5 blur-3xl rounded-full" />


                        {/* Card */}
                        <div className="relative bg-gradient-to-br from-[#171717] to-[#101010] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl">

                            {/* Orange Line */}
                            <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ff7700] to-transparent" />


                            {/* Icon + Brand */}
                            <div className="flex items-center justify-between">

                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#ff7700]/10 border border-[#ff7700]/20 flex items-center justify-center">

                                    <i className="fa-solid fa-building text-xl sm:text-3xl text-[#ff7700]" />

                                </div>

                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[2px] text-zinc-600">
                                    ALU PRO
                                </span>

                            </div>


                            {/* Heading */}
                            <h3 className="text-2xl sm:text-3xl font-black mt-7 sm:mt-8">

                                Built for{" "}

                                <span className="text-[#ff7700]">
                                    Modern Spaces.
                                </span>

                            </h3>


                            {/* Description */}
                            <p className="text-zinc-400 text-sm sm:text-base leading-7 mt-4">

                                Combining minimal architectural profiles
                                with high structural integrity to elevate
                                living and commercial spaces.

                            </p>


                            {/* Feature Stats */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-7 sm:mt-8">

                                <div className="rounded-xl sm:rounded-2xl bg-[#0b0b0b] border border-white/10 p-4 sm:p-5">

                                    <p className="text-2xl sm:text-4xl font-black text-[#ff7700]">
                                        100%
                                    </p>

                                    <p className="text-[10px] sm:text-sm text-zinc-500 mt-2">
                                        Quality Focus
                                    </p>

                                </div>


                                <div className="rounded-xl sm:rounded-2xl bg-[#0b0b0b] border border-white/10 p-4 sm:p-5">

                                    <p className="text-2xl sm:text-4xl font-black text-[#ff7700]">
                                        PRO
                                    </p>

                                    <p className="text-[10px] sm:text-sm text-zinc-500 mt-2">
                                        Workmanship
                                    </p>

                                </div>

                            </div>


                            {/* Bottom Text */}
                            <div className="mt-5 sm:mt-6 flex items-center gap-2.5 text-[10px] sm:text-sm text-zinc-500">

                                <span className="w-2 h-2 rounded-full bg-[#ff7700] animate-pulse shrink-0" />

                                Professional Aluminium Solutions

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        {/* =====================================================
            MISSION & VISION
        ===================================================== */}
        <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0d0d0d] border-y border-white/10">

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">


                {/* Section Heading */}
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">

                    <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4">

                        <span className="w-6 sm:w-8 h-[2px] bg-[#ff7700]" />

                        <span className="text-[#ff7700] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px]">
                            What Drives Us
                        </span>

                        <span className="w-6 sm:w-8 h-[2px] bg-[#ff7700]" />

                    </div>


                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">

                        Our Mission{" "}

                        <span className="text-zinc-600">
                            &
                        </span>{" "}

                        <span className="text-[#ff7700]">
                            Vision
                        </span>

                    </h2>


                    <p className="text-zinc-500 text-sm sm:text-base mt-4 sm:mt-5 leading-6 sm:leading-7">

                        Our commitment is built around quality, precision,
                        innovation, and lasting customer relationships.

                    </p>

                </div>


                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-7">


                    {/* Mission */}
                    <div className="group relative overflow-hidden bg-[#151515] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-9 lg:p-10 hover:border-[#ff7700]/40 transition-all duration-300">

                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#ff7700]/5 rounded-full blur-2xl group-hover:bg-[#ff7700]/10 transition" />

                        <div className="relative">

                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#ff7700]/10 border border-[#ff7700]/20 flex items-center justify-center">

                                <i className="fa-solid fa-bullseye text-lg sm:text-xl text-[#ff7700]" />

                            </div>


                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-6 sm:mt-7 mb-3 sm:mb-4">
                                Our Mission
                            </h3>


                            <p className="text-zinc-400 text-sm sm:text-base leading-7">

                                To deliver top-tier aluminium design and
                                fabrication standards that satisfy client
                                requirements through technical precision,
                                premium finishing, and dependable service.

                            </p>

                        </div>

                    </div>


                    {/* Vision */}
                    <div className="group relative overflow-hidden bg-[#151515] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-9 lg:p-10 hover:border-[#ff7700]/40 transition-all duration-300">

                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#ff7700]/5 rounded-full blur-2xl group-hover:bg-[#ff7700]/10 transition" />

                        <div className="relative">

                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#ff7700]/10 border border-[#ff7700]/20 flex items-center justify-center">

                                <i className="fa-solid fa-eye text-lg sm:text-xl text-[#ff7700]" />

                            </div>


                            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mt-6 sm:mt-7 mb-3 sm:mb-4">
                                Our Vision
                            </h3>


                            <p className="text-zinc-400 text-sm sm:text-base leading-7">

                                To stand as an industry benchmark for quality
                                aluminium systems, recognised for innovation,
                                functional longevity, and seamless customer
                                experiences.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}
        <section className="relative py-16 sm:py-24 lg:py-32">

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 sm:gap-14 lg:gap-20 items-center">


                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-3 mb-5">

                            <span className="w-7 sm:w-8 h-[2px] bg-[#ff7700]" />

                            <span className="text-[#ff7700] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px]">
                                Why ALU PRO
                            </span>

                        </div>


                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

                            Why choose

                            <br />

                            <span className="text-[#ff7700]">
                                ALU PRO?
                            </span>

                        </h2>


                        <p className="text-zinc-400 text-sm sm:text-base leading-7 mt-5 sm:mt-6 max-w-lg">

                            We focus on delivering dependable architectural
                            aluminium systems while ensuring precision and
                            aesthetic satisfaction across every scale of
                            implementation.

                        </p>


                        <div className="hidden lg:flex items-center gap-3 mt-8 text-zinc-600 text-sm">

                            <span className="w-10 h-px bg-zinc-700" />

                            Professional • Reliable • Precise

                        </div>

                    </div>


                    {/* RIGHT CARDS */}
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">

                        {whyChooseData.map((item, index) => (

                            <div
                                key={index}
                                className="group relative bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:-translate-y-1 hover:border-[#ff7700]/40 hover:shadow-xl hover:shadow-[#ff7700]/5 transition-all duration-300"
                            >

                                {/* Icon + Number */}
                                <div className="flex items-center justify-between">

                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#ff7700]/10 border border-[#ff7700]/10 flex items-center justify-center">

                                        <i
                                            className={`${item.icon} text-[#ff7700] text-base sm:text-lg`}
                                        />

                                    </div>


                                    <span className="text-[10px] sm:text-xs font-black text-zinc-700">
                                        0{index + 1}
                                    </span>

                                </div>


                                {/* Title */}
                                <h3 className="font-bold text-base sm:text-lg mt-5 sm:mt-6 mb-2">

                                    {item.title}

                                </h3>


                                {/* Description */}
                                <p className="text-zinc-500 text-xs sm:text-sm leading-6">

                                    {item.desc}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>


        {/* =====================================================
            CALL TO ACTION
        ===================================================== */}
        <section className="relative py-14 sm:py-20 lg:py-24 bg-[#0d0d0d] border-t border-white/10">

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ff7700]/20 bg-gradient-to-br from-[#181818] via-[#14110e] to-[#101010]">


                    {/* Glow */}
                    <div className="absolute -right-24 -top-24 w-72 sm:w-80 h-72 sm:h-80 bg-[#ff7700]/10 rounded-full blur-[90px]" />

                    <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-[#ff7700]/5 rounded-full blur-[80px]" />


                    {/* Content */}
                    <div className="relative p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-7 sm:gap-9 lg:gap-12">


                        {/* Text */}
                        <div className="max-w-2xl">

                            <div className="flex items-center gap-3 mb-4">

                                <span className="w-7 sm:w-8 h-[2px] bg-[#ff7700]" />

                                <span className="text-[#ff7700] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[2px]">
                                    Let's Work Together
                                </span>

                            </div>


                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">

                                Have an aluminium

                                <br className="hidden sm:block" />

                                project in mind?

                            </h2>


                            <p className="text-zinc-400 text-sm sm:text-base leading-7 mt-4 max-w-xl">

                                Connect with our team to discuss your project
                                requirements and receive expert guidance on
                                architectural aluminium solutions.

                            </p>

                        </div>


                        {/* Button */}
                        <Link
                            to="/contact"
                            className="group w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-3 bg-[#ff7700] hover:bg-[#ff8a26] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#ff7700]/20 hover:shadow-[#ff7700]/30 hover:-translate-y-0.5"
                        >

                            Contact Us

                            <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />

                        </Link>

                    </div>

                </div>

            </div>

        </section>

    </main>
    );


};

export default About;
