import React from 'react'
import ClientProfileCard from '../../components/details/ClientProfileCard'
import Documents from '../../components/details/Documents'
import ChargesDetails from '../../components/details/ChargesDetails'

const ClientDetails = () => {
    return (
        <div className="h-full w-3/4 grid grid-cols-3 md:grid-cols-3 ">
            <div className="col-span-1 h-full">
                <ClientProfileCard />
            </div>
            <div className="col-span-2 py-4">
                <Documents />
                <ChargesDetails />
            </div>
        </div>
    )
}

export default ClientDetails
