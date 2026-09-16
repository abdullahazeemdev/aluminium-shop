import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/config.js";
import { toast } from "react-toastify";

const SignupGoogle = ({title , toastify}) => {

    const signupGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);

            toast.success(toastify);
// Google signup successful! 🎉
        } catch (error) {
            console.log("Google signup error:", error);

            if (error.code === "auth/popup-closed-by-user") {
                toast.error("Google signup cancelled.");
            } else if (error.code === "auth/popup-blocked") {
                toast.error("Popup was blocked by your browser.");
            } else {
                toast.error("Google signup failed.");
            }
        }
    };

    return (
        <button
            onClick={signupGoogle}
            type="button"
            className="w-full h-11 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-300 transition-all cursor-pointer"
        >
            <i className="fa-brands fa-google text-sm"></i>
            <span>{title}</span>
        </button>
    );
};

export default SignupGoogle;