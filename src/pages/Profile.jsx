import React, { useEffect, useState, useRef } from "react";
import {
    onAuthStateChanged,
    updateProfile,
    updateEmail,
    deleteUser,
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
    deleteDoc,
} from "firebase/firestore";

import { auth, db } from "../components/firebase/config.js";
import { toast } from "react-toastify";

const Profile = () => {

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [editMode, setEditMode] = useState(false);

    const fileInputRef = useRef(null);


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
    });


    /* ================= GET USER ================= */

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            async (currentUser) => {

                if (!currentUser) {
                    setUser(null);
                    setLoading(false);
                    return;
                }

                setUser(currentUser);

                try {

                    const userRef = doc(
                        db,
                        "users",
                        currentUser.uid
                    );

                    const userSnap = await getDoc(userRef);

                    let data = {};

                    if (userSnap.exists()) {
                        data = userSnap.data();
                        setProfile(data);
                    }

                    setFormData({
                        username:
                            data.username ||
                            currentUser.displayName ||
                            "",

                        email:
                            data.email ||
                            currentUser.email ||
                            "",

                        phone:
                            data.phone ||
                            currentUser.phoneNumber ||
                            "",
                    });

                } catch (error) {

                    console.error(
                        "Profile Error:",
                        error
                    );

                    toast.error(
                        "Failed to load profile!"
                    );

                } finally {

                    setLoading(false);
                }
            }
        );

        return () => unsubscribe();

    }, []);


    /* ================= INPUT ================= */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    /* ================= SAVE PROFILE ================= */

    const handleSave = async () => {

        if (!user) return;

        if (!formData.username.trim()) {

            toast.error(
                "Username is required!"
            );

            return;
        }

        if (!formData.email.trim()) {

            toast.error(
                "Email is required!"
            );

            return;
        }

        try {

            setSaving(true);


            /* Update Firebase Auth Name */

            await updateProfile(user, {
                displayName:
                    formData.username.trim(),
            });


            /* Update Firebase Auth Email */

            if (
                formData.email.trim() !==
                user.email
            ) {

                await updateEmail(
                    user,
                    formData.email.trim()
                );
            }


            /* Update Firestore */

            const userRef = doc(
                db,
                "users",
                user.uid
            );

            await setDoc(
                userRef,
                {
                    uid: user.uid,

                    username:
                        formData.username.trim(),

                    email:
                        formData.email.trim(),

                    phone:
                        formData.phone.trim(),

                    role:
                        profile?.role || "user",

                    photoURL:
                        profile?.photoURL ||
                        user.photoURL ||
                        "",

                    updatedAt: new Date(),
                },
                {
                    merge: true,
                }
            );


            setProfile((prev) => ({
                ...prev,

                username:
                    formData.username.trim(),

                email:
                    formData.email.trim(),

                phone:
                    formData.phone.trim(),
            }));


            setEditMode(false);

            toast.success(
                "Profile updated successfully!"
            );

        } catch (error) {

            console.error(
                "Profile Update Error:",
                error
            );

            if (
                error.code ===
                "auth/requires-recent-login"
            ) {

                toast.error(
                    "Please logout and login again before changing email!"
                );

            } else if (
                error.code ===
                "auth/email-already-in-use"
            ) {

                toast.error(
                    "This email is already in use!"
                );

            } else {

                toast.error(
                    "Failed to update profile!"
                );
            }

        } finally {

            setSaving(false);
        }
    };


    /* ================= OPEN FILE ================= */

    const handlePhotoClick = () => {

        fileInputRef.current?.click();
    };


    /* ================= CLOUDINARY UPLOAD ================= */

    const handlePhotoUpload = async (e) => {

        const file = e.target.files?.[0];

        if (!file || !user) return;


        /* IMAGE CHECK */

        if (!file.type.startsWith("image/")) {

            toast.error(
                "Please select an image file!"
            );

            return;
        }


        /* SIZE CHECK */

        if (file.size > 5 * 1024 * 1024) {

            toast.error(
                "Image must be less than 5MB!"
            );

            return;
        }


        try {

            setUploadingPhoto(true);


            const cloudName =
                import.meta.env
                    .VITE_CLOUDINARY_CLOUD_NAME;

            const uploadPreset =
                import.meta.env
                    .VITE_CLOUDINARY_UPLOAD_PRESET;


            if (!cloudName || !uploadPreset) {

                toast.error(
                    "Cloudinary configuration missing!"
                );

                return;
            }


            /* FORM DATA */

            const uploadData =
                new FormData();

            uploadData.append(
                "file",
                file
            );

            uploadData.append(
                "upload_preset",
                uploadPreset
            );


            /* UPLOAD TO CLOUDINARY */

            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                    method: "POST",
                    body: uploadData,
                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                console.error(
                    "Cloudinary Error:",
                    data
                );

                throw new Error(
                    "Cloudinary upload failed"
                );
            }


            const photoURL =
                data.secure_url;


            /* UPDATE FIREBASE AUTH */

            await updateProfile(user, {
                photoURL: photoURL,
            });


            /* UPDATE FIRESTORE */

            const userRef = doc(
                db,
                "users",
                user.uid
            );

            await setDoc(
                userRef,
                {
                    photoURL: photoURL,
                    updatedAt: new Date(),
                },
                {
                    merge: true,
                }
            );


            setProfile((prev) => ({
                ...prev,
                photoURL: photoURL,
            }));


            toast.success(
                "Profile photo updated!"
            );

        } catch (error) {

            console.error(
                "Cloudinary Upload Error:",
                error
            );

            toast.error(
                "Failed to upload profile photo!"
            );

        } finally {

            setUploadingPhoto(false);

            e.target.value = "";
        }
    };


    /* ================= REMOVE PHOTO ================= */

    const handleRemovePhoto = async () => {

        if (!user) return;


        try {

            setUploadingPhoto(true);


            /*
                Cloudinary se image delete karne ke liye
                normally backend/server-side delete API
                use hoti hai.

                Yahan Firebase se photoURL remove
                kar rahe hain.
            */


            await updateProfile(user, {
                photoURL: null,
            });


            const userRef = doc(
                db,
                "users",
                user.uid
            );


            await setDoc(
                userRef,
                {
                    photoURL: "",
                    updatedAt: new Date(),
                },
                {
                    merge: true,
                }
            );


            setProfile((prev) => ({
                ...prev,
                photoURL: "",
            }));


            toast.success(
                "Profile photo removed!"
            );

        } catch (error) {

            console.error(
                "Remove Photo Error:",
                error
            );

            toast.error(
                "Failed to remove photo!"
            );

        } finally {

            setUploadingPhoto(false);
        }
    };


    /* ================= DELETE ACCOUNT ================= */

    const handleDeleteAccount = async () => {

        if (!user) return;


        const confirmed =
            window.confirm(
                "Are you sure you want to permanently delete your account?"
            );


        if (!confirmed) return;


        try {

            setDeleting(true);


            /* DELETE FIRESTORE USER */

            await deleteDoc(
                doc(
                    db,
                    "users",
                    user.uid
                )
            );


            /* DELETE FIREBASE AUTH USER */

            await deleteUser(user);


            toast.success(
                "Account deleted successfully!"
            );


            window.location.href = "/";

        } catch (error) {

            console.error(
                "Delete Account Error:",
                error
            );


            if (
                error.code ===
                "auth/requires-recent-login"
            ) {

                toast.error(
                    "Please logout and login again before deleting your account!"
                );

            } else {

                toast.error(
                    "Failed to delete account!"
                );
            }

        } finally {

            setDeleting(false);
        }
    };


    /* ================= LOADING ================= */

    if (loading) {

        return (
            <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">

                <div className="text-center">

                    <i className="fa-solid fa-spinner fa-spin text-3xl text-[#ff7700]"></i>

                    <p className="text-gray-400 mt-4">
                        Loading profile...
                    </p>

                </div>

            </div>
        );
    }


    /* ================= NO USER ================= */

    if (!user) {

        return (
            <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">

                <p className="text-gray-400">
                    Please login to view your profile.
                </p>

            </div>
        );
    }


    const username =
        profile?.username ||
        user.displayName ||
        "ALU PRO User";

    const email =
        profile?.email ||
        user.email ||
        "Not available";

    const phone =
        profile?.phone ||
        user.phoneNumber ||
        "Not available";

    const photo =
        profile?.photoURL ||
        user.photoURL ||
        "";


    /* ================= UI ================= */

    return (
        <div className="min-h-screen bg-[#121212] text-white">

            {/* HEADER */}

            <section className="bg-[#0d0d0d] border-b border-white/10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">

                    <p className="text-[#ff7700] text-sm font-semibold tracking-[0.2em] uppercase">
                        ALU PRO
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                        My Profile
                    </h1>

                    <p className="text-gray-400 max-w-2xl mt-4">
                        Manage your account information,
                        profile photo and personal details.
                    </p>

                </div>

            </section>


            {/* PROFILE */}

            <section className="py-10 sm:py-14">

                <div className="max-w-4xl mx-auto px-5 sm:px-8">

                    <div className="bg-[#1c1c1c] border border-[#2d2d2d] rounded-2xl overflow-hidden">


                        {/* PROFILE TOP */}

                        <div className="bg-[#181818] px-6 sm:px-10 py-10">

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">


                                {/* PHOTO */}

                                <div className="relative">

                                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#ff7700] bg-orange-500/10 flex items-center justify-center">

                                        {uploadingPhoto ? (

                                            <i className="fa-solid fa-spinner fa-spin text-3xl text-[#ff7700]"></i>

                                        ) : photo ? (

                                            <img
                                                src={photo}
                                                alt={username}
                                                className="w-full h-full object-cover"
                                            />

                                        ) : (

                                            <i className="fa-solid fa-user text-4xl text-[#ff7700]"></i>

                                        )}

                                    </div>


                                    {/* CAMERA */}

                                    <button
                                        type="button"
                                        onClick={handlePhotoClick}
                                        disabled={uploadingPhoto}
                                        className="absolute bottom-0 right-0 w-9 cursor-pointer h-9 rounded-full bg-[#ff7700] hover:bg-[#e66b00] flex items-center justify-center transition-all"
                                    >

                                        <i className="fa-solid fa-camera text-sm"></i>

                                    </button>


                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoUpload}
                                        className="hidden"
                                    />

                                </div>


                                {/* NAME */}

                                <div className="flex-1 text-center sm:text-left">

                                    <h2 className="text-2xl font-bold">
                                        {username}
                                    </h2>

                                    <p className="text-gray-400 mt-2">
                                        ALU PRO Customer
                                    </p>


                                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">

                                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">

                                            <i className="fa-solid fa-circle-check text-xs text-[#ff7700]"></i>

                                            <span className="text-xs text-[#ff7700]">
                                                Active Account
                                            </span>

                                        </span>


                                        {photo && (

                                            <button
                                                onClick={handleRemovePhoto}
                                                disabled={uploadingPhoto}
                                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs"
                                            >

                                                <i className="fa-solid fa-trash"></i>

                                                Remove Photo

                                            </button>

                                        )}

                                    </div>

                                </div>


                                {/* EDIT */}

                                <button
                                    onClick={() =>
                                        setEditMode(!editMode)
                                    }
                                    className="px-5 py-2.5 rounded-xl cursor-pointer bg-[#ff7700] hover:bg-[#e66b00] font-semibold text-sm"
                                >

                                    <i
                                        className={`fa-solid ${
                                            editMode
                                                ? "fa-xmark"
                                                : "fa-pen"
                                        } mr-2`}
                                    ></i>

                                    {editMode
                                        ? "Cancel"
                                        : "Edit Profile"}

                                </button>

                            </div>

                        </div>


                        {/* INFORMATION */}

                        <div className="p-6 sm:p-10">

                            <h3 className="text-lg font-semibold mb-6">
                                Account Information
                            </h3>


                            {editMode ? (

                                <div className="space-y-5">


                                    {/* USERNAME */}

                                    <div>

                                        <label className="text-gray-400 text-sm">
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="w-full mt-2 bg-[#181818] border border-[#333] focus:border-[#ff7700] outline-none rounded-xl py-3 px-4 text-white"
                                        />

                                    </div>


                                    {/* EMAIL */}

                                    <div>

                                        <label className="text-gray-400 text-sm">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full mt-2 bg-[#181818] border border-[#333] focus:border-[#ff7700] outline-none rounded-xl py-3 px-4 text-white"
                                        />

                                    </div>


                                    {/* PHONE */}

                                    <div>

                                        <label className="text-gray-400 text-sm">
                                            Phone
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full mt-2 bg-[#181818] border border-[#333] focus:border-[#ff7700] outline-none rounded-xl py-3 px-4 text-white"
                                        />

                                    </div>


                                    {/* SAVE */}

                                    <div className="flex justify-end pt-3">

                                        <button
                                            onClick={handleSave}
                                            disabled={saving}
                                            className="px-6 py-3 cursor-pointer rounded-xl bg-[#ff7700] hover:bg-[#e66b00] disabled:opacity-50 font-semibold"
                                        >

                                            {saving ? (
                                                <>
                                                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-check mr-2"></i>
                                                    Save Changes
                                                </>
                                            )}

                                        </button>

                                    </div>

                                </div>

                            ) : (

                                <div className="grid sm:grid-cols-2 gap-5">


                                    {/* USERNAME */}

                                    <div className="bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                        <p className="text-gray-500 text-xs">
                                            Username
                                        </p>

                                        <p className="text-white font-medium mt-2">
                                            {username}
                                        </p>

                                    </div>


                                    {/* EMAIL */}

                                    <div className="bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                        <p className="text-gray-500 text-xs">
                                            Email
                                        </p>

                                        <p className="text-white font-medium mt-2 break-all">
                                            {email}
                                        </p>

                                    </div>


                                    {/* PHONE */}

                                    <div className="bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                        <p className="text-gray-500 text-xs">
                                            Phone
                                        </p>

                                        <p className="text-white font-medium mt-2">
                                            {phone}
                                        </p>

                                    </div>


                                    {/* ROLE */}

                                    <div className="bg-[#181818] border border-[#2d2d2d] rounded-xl p-5">

                                        <p className="text-gray-500 text-xs">
                                            Account Type
                                        </p>

                                        <p className="text-white font-medium mt-2 capitalize">
                                            {profile?.role || "user"}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>


                        {/* DELETE */}

                        <div className="border-t border-red-500/20 bg-red-500/5 p-6 sm:p-10">

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                                <div>

                                    <h3 className="text-red-400 font-semibold">
                                        Delete Account
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Permanently delete your account
                                        and profile information.
                                    </p>

                                </div>


                                <button
                                    onClick={handleDeleteAccount}
                                    disabled={deleting}
                                    className="px-5 py-3 rounded-xl border cursor-pointer border-red-500/40 text-red-400 hover:bg-red-500/10 disabled:opacity-50 font-semibold text-sm"
                                >

                                    {deleting ? (

                                        <>
                                            <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                                            Deleting...
                                        </>

                                    ) : (

                                        <>
                                            <i className="fa-solid fa-trash mr-2"></i>
                                            Delete Account
                                        </>

                                    )}

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default Profile;