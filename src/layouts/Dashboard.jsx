import React from "react";
import { Outlet } from "react-router-dom";
import Asidebar from "../components/Asidebar";

const Dashboard = () => {
    return (
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#121212]">

            <Asidebar />

            <main className="min-h-screen w-full min-w-0 lg:ml-64 lg:w-[calc(100%-16rem)]">
                <Outlet />
            </main>

        </div>
    );
};

export default Dashboard;