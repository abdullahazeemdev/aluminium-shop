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

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const sampleProducts = [
        {
            name: "Aluminium Windows",
            category: "Windows",
            description:
                "High-quality aluminium windows with strong frames and modern finishing.",
            price: 850,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Aluminium Doors",
            category: "Doors",
            description:
                "Durable aluminium doors suitable for homes, offices and commercial spaces.",
            price: 1200,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Aluminium Kitchen Cabinets",
            category: "Kitchen",
            description:
                "Modern aluminium kitchen cabinets with durable and easy-to-clean finishing.",
            price: 2500,
            unit: "Per running ft",
            image: "",
        },
        {
            name: "Sliding Aluminium Windows",
            category: "Windows",
            description:
                "Smooth sliding aluminium windows with a modern design for residential spaces.",
            price: 950,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Sliding Aluminium Doors",
            category: "Doors",
            description:
                "Stylish sliding aluminium doors ideal for balconies, rooms and commercial areas.",
            price: 1450,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Aluminium Office Partition",
            category: "Partitions",
            description:
                "Professional aluminium partition system for offices and commercial buildings.",
            price: 1100,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Aluminium Shop Front",
            category: "Commercial",
            description:
                "Modern aluminium shop front with glass panels for an attractive commercial appearance.",
            price: 1800,
            unit: "Per sq.ft",
            image: "",
        },
        {
            name: "Aluminium Ventilator",
            category: "Ventilators",
            description:
                "Compact aluminium ventilators designed for proper airflow and ventilation.",
            price: 650,
            unit: "Per sq.ft",
            image: "",
        },
    ];

    useEffect(() => {
        const productsRef = collection(db, "products");

        const productsQuery = query(
            productsRef,
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(
            productsQuery,
            async (snapshot) => {
                if (snapshot.empty) {
                    try {
                        const createdProducts = [];

                        for (const product of sampleProducts) {
                            const docRef = await addDoc(
                                collection(db, "products"),
                                {
                                    ...product,
                                    createdAt: serverTimestamp(),
                                }
                            );

                            createdProducts.push({
                                id: docRef.id,
                                ...product,
                            });
                        }

                        setProducts(createdProducts);
                    } catch (error) {
                        console.error(
                            "Sample Products Error:",
                            error
                        );

                        setProducts([]);
                    }

                    setLoading(false);
                    return;
                }

                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(productsData);
                setLoading(false);
            },
            (error) => {
                console.error("Products Error:", error);
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
                        Our Products
                    </h1>

                    <p className="text-gray-400 max-w-2xl mt-4 leading-7">
                        Explore our aluminium windows, doors, kitchens and
                        other aluminium solutions.
                    </p>

                </div>

            </section>

            {/* Products */}
            <section className="py-10 sm:py-14">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                    {loading ? (

                        <div className="min-h-[300px] flex flex-col items-center justify-center">

                            <i className="fa-solid fa-spinner fa-spin text-3xl text-[#ff7700]"></i>

                            <p className="text-gray-400 mt-4">
                                Loading products...
                            </p>

                        </div>

                    ) : products.length === 0 ? (

                        <div className="min-h-[300px] flex flex-col items-center justify-center text-center">

                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                                <i className="fa-solid fa-box-open text-2xl text-[#ff7700]"></i>

                            </div>

                            <h2 className="text-xl font-semibold mt-5">
                                No Products Available
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                Products will appear here soon.
                            </p>

                        </div>

                    ) : (

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {products.map((product) => (

                                <div
                                    key={product.id}
                                    className="group bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl overflow-hidden hover:border-[#ff7700]/50 hover:-translate-y-1 transition-all duration-300"
                                >

                                    {/* Product Image */}
                                    <div className="relative h-52 bg-[#181818] overflow-hidden">

                                        {product.image ? (

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />

                                        ) : (

                                            <div className="w-full h-full flex items-center justify-center">

                                                <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

                                                    <i className="fa-solid fa-layer-group text-3xl text-[#ff7700]"></i>

                                                </div>

                                            </div>

                                        )}

                                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0d0d0d]/80 border border-white/10 backdrop-blur-sm">

                                            <span className="text-xs text-gray-300">
                                                {product.category || "Aluminium"}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Product Details */}
                                    <div className="p-5">

                                        <h2 className="text-xl font-semibold">
                                            {product.name}
                                        </h2>

                                        <p className="text-gray-400 text-sm leading-6 mt-3 min-h-[72px]">
                                            {product.description ||
                                                "Premium aluminium solution from ALU PRO."}
                                        </p>

                                        <div className="border-t border-[#2d2d2d] mt-5 pt-5">

                                            <div className="flex items-end justify-between gap-4">

                                                <div>

                                                    <p className="text-gray-500 text-xs">
                                                        Price
                                                    </p>

                                                    <p className="text-[#ff7700] text-lg font-bold mt-1">
                                                        Rs{" "}
                                                        {Number(
                                                            product.price || 0
                                                        ).toLocaleString()}
                                                    </p>

                                                    <p className="text-gray-600 text-xs mt-1">
                                                        {product.unit ||
                                                            "Per unit"}
                                                    </p>

                                                </div>

                                                <Link
                                                    to={`/order?product=${product.id}`}
                                                    className="inline-flex items-center gap-2 bg-[#ff7700] hover:bg-[#e66b00] px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                                                >

                                                    <i className="fa-solid fa-cart-plus"></i>

                                                    Order Now

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

export default Products;