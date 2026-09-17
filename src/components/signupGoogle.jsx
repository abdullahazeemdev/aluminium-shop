import React, { useState } from "react";
import {GoogleAuthProvider,signInWithPopup,} from "firebase/auth";

import {doc,serverTimestamp,setDoc,} from "firebase/firestore";

import { auth, db } from "./firebase/config.js";
import { toast } from "react-toastify";

const SignupGoogle = ({ title, toastify }) => {

    const [loading, setLoading] = useState(false);

    const signupGoogle = async () => {

        if (loading) return;

        try {

            setLoading(true);

            const provider = new GoogleAuthProvider();

            const response = await signInWithPopup(
                auth,
                provider
            );

            const user = response.user;

            console.log("Google User:", user);

            // Firestore document
            const userRef = doc(
                db,
                "users",
                user.uid
            );

            await setDoc(userRef,{
                    uid: user.uid,
                    username: user.displayName || "",
                    email: user.email || "",
                    phone: user.phoneNumber || "",
                    role: "user",
                    photoURL: user.photoURL || "",
                    provider: "google",
                    createdAt: serverTimestamp(),
                },
                {
                    merge: true,
                }
            );

            console.log(
                "User data saved successfully in Firestore"
            );

            toast.success(
                toastify || "Google signup successful!"
            );

        } catch (error) {

            console.error(
                "Google signup error:",
                error
            );

            if (
                error.code ===
                "auth/popup-closed-by-user"
            ) {

                toast.error(
                    "Google signup cancelled."
                );

            } else if (
                error.code ===
                "auth/popup-blocked"
            ) {

                toast.error(
                    "Popup was blocked by your browser."
                );

            } else if (
                error.code ===
                "auth/network-request-failed"
            ) {

                toast.error(
                    "Network error. Please check your internet connection."
                );

            } else {

                toast.error(
                    error?.message ||
                    "Google signup failed. Please try again."
                );
            }

        } finally {

            setLoading(false);

        }
    };

    return (
        <button
            onClick={signupGoogle}
            type="button"
            disabled={loading}
            className={`w-full h-11 border border-white/10 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-300 transition-all ${
                loading
                    ? "bg-white/[0.02] opacity-60 cursor-not-allowed"
                    : "bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer"
            }`}
        >

            {loading ? (

                <>
                    <i className="fa-solid fa-spinner fa-spin text-sm"></i>

                    <span>
                        Connecting...
                    </span>
                </>

            ) : (

                <>
                    <i className="fa-brands fa-google text-sm"></i>

                    <span>
                        {title}
                    </span>
                </>

            )}

        </button>
    );
};

export default SignupGoogle;
