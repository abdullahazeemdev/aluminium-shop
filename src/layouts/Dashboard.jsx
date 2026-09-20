import React from "react";
import { Outlet } from "react-router-dom";
import Asidebar from "../components/Asidebar";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#121212]">

            <Asidebar />

            <main className="lg:ml-64 min-h-screen">
                <Outlet />
            </main>

        </div>
    );
};

export default Dashboard;