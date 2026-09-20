import React, { useEffect, useState } from "react";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../components/firebase/config.js";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const sampleServices = [
        {
            name: "Aluminium Installation",
            category: "Installation",
            description:
                "Professional aluminium window, door and frame installation for homes and commercial buildings.",
            price: 2500,
            unit: "Per service",
            image: "",
        },
        {
            name: "Glass Installation",
            category: "Glass Work",
            description:
                "Quality glass installation for aluminium windows, doors, partitions and shop fronts.",
            price: 1800,
            unit: "Per service",
            image: "",
        },
        {
            name: "Aluminium Repair & Maintenance",
            category: "Maintenance",
            description:
                "Reliable repair and maintenance services for aluminium windows, doors and other structures.",
            price: 1500,
            unit: "Per service",
            image: "",
        },
        {
            name: "Custom Aluminium Fabrication",
            category: "Fabrication",
            description:
                "Custom aluminium fabrication according to your required size, design and project needs.",
            price: 3000,
            unit: "Starting from",
            image: "",
        },
        {
            name: "Aluminium Partition",
            category: "Partitions",
            description:
                "Professional aluminium partition solutions for offices, shops and commercial spaces.",
            price: 1100,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Window & Door Installation",
            category: "Installation",
            description:
                "Complete installation of aluminium windows and doors with proper fitting and finishing.",
            price: 2200,
            unit: "Per service",
            image: "",
        },
        {
            name: "Aluminium Kitchen Installation",
            category: "Kitchen",
            description:
                "Professional aluminium kitchen cabinet installation with accurate fitting and finishing.",
            price: 3500,
            unit: "Per service",
            image: "",
        },
        {
            name: "Site Measurement",
            category: "Consultation",
            description:
                "Accurate site measurement and project assessment before starting your aluminium work.",
            price: 1000,
            unit: "Per visit",
            image: "",
        },
    ];

    useEffect(() => {
        const servicesRef = collection(db, "services");

        const servicesQuery = query(
            servicesRef,
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(
            servicesQuery,
            async (snapshot) => {
                if (snapshot.empty) {
                    try {
                        const createdServices = [];

                        for (const service of sampleServices) {
                            const docRef = await addDoc(
                                collection(db, "services"),
                                {
                                    ...service,
                                    createdAt: serverTimestamp(),
                                }
                            );

                            createdServices.push({
                                id: docRef.id,
                                ...service,
                            });
                        }

                        setServices(createdServices);
                    } catch (error) {
                        console.error(
                            "Sample Services Error:",
                            error
                        );

                        setServices([]);
                    }

                    setLoading(false);
                    return;
                }

                const servicesData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setServices(servicesData);
                setLoading(false);
            },
            (error) => {
                console.error("Services Error:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-[#121212] text-white">

            {/* Header */}
            <section className="bg-[#0d0d0d] border-b border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

                    <p className="text-[#ff7700] text-sm font-semibold tracking-[0.2em] uppercase">
                        ALU PRO
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                        Our Services
                    </h1>

                    <p className="text-gray-400 max-w-2xl mt-4 leading-7">
                        Professional aluminium services for residential,
                        commercial and custom projects.
                    </p>

                </div>

            </section>

            {/* Services */}
            <section className="py-10 sm:py-14">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    {loading ? (

                        <div className="min-h-[300px] flex flex-col items-center justify-center">

                            <i className="fa-solid fa-spinner fa-spin text-3xl text-[#ff7700]"></i>

                            <p className="text-gray-400 mt-4">
                                Loading services...
                            </p>

                        </div>

                    ) : services.length === 0 ? (

                        <div className="min-h-[300px] flex flex-col items-center justify-center text-center">

                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                                <i className="fa-solid fa-screwdriver-wrench text-2xl text-[#ff7700]"></i>

                            </div>

                            <h2 className="text-xl font-semibold mt-5">
                                No Services Available
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                Services will appear here soon.
                            </p>

                        </div>

                    ) : (

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {services.map((service) => (

                                <div
                                    key={service.id}
                                    className="group bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl overflow-hidden hover:border-[#ff7700]/50 hover:-translate-y-1 transition-all duration-300"
                                >

                                    {/* Service Image */}
                                    <div className="relative h-52 bg-[#181818] overflow-hidden">

                                        {service.image ? (

                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />

                                        ) : (

                                            <div className="w-full h-full flex items-center justify-center">

                                                <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

                                                    <i className="fa-solid fa-screwdriver-wrench text-3xl text-[#ff7700]"></i>

                                                </div>

                                            </div>

                                        )}

                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0d0d0d]/80 border border-white/10 backdrop-blur-sm">

                                            <span className="text-xs text-gray-300">
                                                {service.category || "Service"}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Service Details */}
                                    <div className="p-5">

                                        <h2 className="text-xl font-semibold">
                                            {service.name}
                                        </h2>

                                        <p className="text-gray-400 text-sm leading-6 mt-3 min-h-[72px]">
                                            {service.description ||
                                                "Professional aluminium service by ALU PRO."}
                                        </p>

                                        <div className="border-t border-[#2d2d2d] mt-5 pt-5">

                                            <div className="flex items-end justify-between gap-4">

                                                <div>

                                                    <p className="text-gray-500 text-xs">
                                                        Service Price
                                                    </p>

                                                    <p className="text-[#ff7700] text-lg font-bold mt-1">
                                                        {service.price
                                                            ? `Rs ${Number(
                                                                  service.price
                                                              ).toLocaleString()}`
                                                            : "Contact Us"}
                                                    </p>

                                                    <p className="text-gray-600 text-xs mt-1">
                                                        {service.unit ||
                                                            "Per service"}
                                                    </p>

                                                </div>

                                                <Link
                                                    to={`/order?service=${service.id}`}
                                                    className="inline-flex items-center gap-2 bg-[#ff7700] hover:bg-[#e66b00] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                                                >

                                                    <i className="fa-solid fa-calendar-check"></i>

                                                    Book Service

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
};

export default Services;