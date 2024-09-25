import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientList from "../components/chat/ClientList"

const ClientListLayout = () => {
    return (
        <div>
            <div
                className={`col-span-11 h-screen flex flex-col`}
            >
                {/* <Navbar toggleSidebar={toggleSidebar} /> */}
                <ClientList />
                <div className="flex overflow-y-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ClientListLayout
