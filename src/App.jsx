import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Service";
import Contact from "./pages/Contact";

import Dashboard from "./layouts/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import HelpSupport from "./pages/Help";
import MyOrders from "./pages/MyOrder";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/protectedRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* ================= PUBLIC ROUTES ================= */}

                {/* 
                    Agar user login nahi hai:
                    / → Home

                    Agar user already login hai:
                    / → Dashboard
                */}
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Home />
                        </PublicRoute>
                    }
                />

                {/* Login page */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                {/* Signup page */}
                <Route
                    path="/signup"
                    element={
                        <PublicRoute>
                            <Signup />
                        </PublicRoute>
                    }
                />

                {/* ================= PROTECTED DASHBOARD ================= */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    {/* Dashboard Home */}
                    <Route
                        index
                        element={<DashboardHome />}
                    />

                    {/* About */}
                    <Route
                        path="about"
                        element={<About />}
                    />

                    {/* Products */}
                    <Route
                        path="products"
                        element={<Products />}
                    />

                    {/* Services */}
                    <Route
                        path="services"
                        element={<Services />}
                    />

                    {/* Contact */}
                    <Route
                        path="contact"
                        element={<Contact />}
                    />

                    {/* Profile */}
                    <Route
                        path="profile"
                        element={<Profile />}
                    />

                    {/* Help & Support */}
                    <Route
                        path="help"
                        element={<HelpSupport />}
                    />

                    {/* My Orders */}
                    <Route
                        path="orders"
                        element={<MyOrders />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default App
