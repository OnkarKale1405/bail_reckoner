import { Outlet, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientList from "../components/chat/ClientList";

const SideBarLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation(); // Get the current location

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Determine if the current path is '/dashboards/details'
    const isDetailsPage = location.pathname === '/dashboards/add-client';
    const isNotificationPage = location.pathname === '/dashboards/notification';

    return (
        <div className={`grid grid-cols-12`}>
            {/* Sidebar */}
            <div className={`duration-300 bg-gray-300 col-span-1`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`col-span-11 h-screen flex flex-col`}>
                <Navbar />
                <div className="flex overflow-y-hidden">
                    {/* Conditionally render ClientList based on the current path */}
                    {!isDetailsPage && !isNotificationPage && <ClientList />}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SideBarLayout;
