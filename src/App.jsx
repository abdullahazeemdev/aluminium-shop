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

import ProtectedRoute from "./components/protectedRoute";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* ================= PUBLIC / USER ROUTES ================= */}

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />





                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DashboardHome />} />

                    <Route path="about" element={<About />} />

                    <Route path="products" element={<Products />} />

                    <Route path="services" element={<Services />} />

                    <Route path="contact" element={<Contact />} />

                    <Route path="profile" element={<Profile />} />

                    <Route path="help" element={<HelpSupport />} />

                    <Route path="orders" element={<MyOrders />} />
                    
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default App;