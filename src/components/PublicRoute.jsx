import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase/config.js";

const PublicRoute = ({ children }) => {
    const [existUser, setExistUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setExistUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Firebase check hone tak loading
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#121212]">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500"></div>

                    <p className="text-white">
                        Checking authentication...
                    </p>
                </div>
            </div>
        );
    }

    // Agar user already login hai
    if (existUser) {
        return <Navigate to="/dashboard" replace />;
    }

    // Agar login nahi hai
    return children;
};

export default PublicRoute;

