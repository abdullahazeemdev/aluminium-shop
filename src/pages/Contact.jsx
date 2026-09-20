import React from "react";

const Contact = () => {

    const phoneNumber = "03112889906";
    const whatsappNumber = "923112889906";

    return (
        <div className="min-h-screen bg-[#121212] text-white">

            {/* Header */}
            <section className="bg-[#0d0d0d] border-b border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

                    <p className="text-[#ff7700] text-sm font-semibold tracking-[0.2em] uppercase">
                        ALU PRO
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                        Contact Us
                    </h1>

                    <p className="text-gray-400 max-w-2xl mt-4 leading-7">
                        Get in touch with ALU PRO for aluminium products,
                        services and project inquiries.
                    </p>

                </div>

            </section>

            {/* Contact */}
            <section className="py-10 sm:py-14">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    <div className="grid lg:grid-cols-2 gap-6">

                        {/* Contact Information */}
                        <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl p-6 sm:p-8">

                            <h2 className="text-2xl font-bold">
                                Get In Touch
                            </h2>

                            <p className="text-gray-400 text-sm leading-6 mt-3">
                                Contact us directly for product prices,
                                measurements, installation and aluminium
                                project requirements.
                            </p>

                            {/* Phone */}
                            <div className="mt-8 bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">

                                        <i className="fa-solid fa-phone text-[#ff7700] text-lg"></i>

                                    </div>

                                    <div>

                                        <p className="text-gray-500 text-xs">
                                            Phone
                                        </p>

                                        <p className="text-white font-semibold mt-1">
                                            {phoneNumber}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="grid sm:grid-cols-2 gap-4 mt-5">

                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="flex items-center justify-center gap-2 bg-[#ff7700] hover:bg-[#e66b00] px-5 py-3 rounded-xl font-semibold transition-all"
                                >
                                    <i className="fa-solid fa-phone"></i>
                                    Call Now
                                </a>

                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 border border-[#ff7700] text-[#ff7700] hover:bg-[#ff7700] hover:text-white px-5 py-3 rounded-xl font-semibold transition-all"
                                >
                                    <i className="fa-brands fa-whatsapp text-lg"></i>
                                    WhatsApp
                                </a>

                            </div>

                            {/* Location */}
                            <div className="mt-5 bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center">

                                        <i className="fa-solid fa-location-dot text-[#ff7700] text-lg"></i>

                                    </div>

                                    <div>

                                        <p className="text-gray-500 text-xs">
                                            Location
                                        </p>

                                        <p className="text-white font-medium mt-1">
                                            Karachi, Pakistan
                                        </p>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Contact us for our exact business location.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Map */}
                        <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl overflow-hidden min-h-[450px]">

                            <iframe
                                title="ALU PRO Location"
                                src="https://www.google.com/maps?q=Karachi,Pakistan&output=embed"
                                className="w-full h-full min-h-[450px] border-0"
                                loading="lazy"
                            ></iframe>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Contact;