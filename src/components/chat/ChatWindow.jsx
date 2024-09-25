import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";

const ChatWindow = () => {
    return (
        <div className="flex-1 flex flex-col justify-between bg-white">
            {/* Header with Contact Name */}
            <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-[#F9FAFC]">
                <div className='flex'>
                    <div className="flex items-center space-x-2">
                        {/* Avatar */}
                        <img
                            src="https://images.summitmedia-digital.com/preview/images/2023/06/21/korean-ai-photo-snow---insert-7.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 mx-3 object-cover object-top"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-lg">Ronnie_Abs</div>
                        <p className='font-normal text-xs text-gray-500'>ronnie_abs@gmail.com</p>
                    </div>
                </div>
                <div className='flex space-x-3 items-center'>
                    <Link to="/dashboards/details">
                        <button className='px-4 py-2 rounded-full bg-[#3182ce] hover:bg-[#2B6CB0] text-white'>View Profile</button>
                    </Link>
                    <IoMdMore className='text-2xl text-gray-500' />
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 space-y-4 bg-[#F9FAFC] py-4 px-3 overflow-y-auto">
                {/* Divider for Today's messages */}
                <div className="text-center text-gray-400 text-sm my-2">
                    <span className="px-2">Today</span>
                </div>

                {/* Left Side Messages */}
                <div className="flex items-start">
                    <img
                        src="https://images.summitmedia-digital.com/preview/images/2023/06/21/korean-ai-photo-snow---insert-7.jpg"
                        className="w-8 h-8 rounded-full object-cover object-top"
                        alt="Avatar"
                    />
                    <div className="ml-4 bg-custom-blue text-white p-3 rounded-lg">
                        Hello there!
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="ml-12 bg-custom-blue text-white p-3 rounded-lg">
                        Is there a new product arrived?
                    </div>
                </div>
                <div className="flex items-start">
                    <img
                        src="https://images.summitmedia-digital.com/preview/images/2023/06/21/korean-ai-photo-snow---insert-7.jpg"
                        className="w-8 h-8 rounded-full object-cover object-top invisible"
                        alt="Avatar"
                    />
                    <div className="ml-4 bg-custom-blue text-white p-3 rounded-lg">
                        Yes, we just got a shipment in!
                    </div>
                </div>

                {/* Right Side Messages */}
                <div className="flex justify-end">
                    <div className="mr-12 bg-green-500 text-white p-3 rounded-lg">
                        That's great to hear!
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="mr-12 bg-green-500 text-white p-3 rounded-lg">
                        What products are available?
                    </div>
                </div>
                <div className="flex items-start">
                    <img
                        src="https://images.summitmedia-digital.com/preview/images/2023/06/21/korean-ai-photo-snow---insert-7.jpg"
                        className="w-8 h-8 rounded-full object-cover object-top"
                        alt="Avatar"
                    />
                    <div className="ml-4 bg-custom-blue text-white p-3 rounded-lg">
                        We have a variety of new items.
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="flex p-4 bg-[#F9FAFC]">
                <input
                    type="text"
                    placeholder="Type something here..."
                    className="w-full px-4 py-3 border rounded-md focus:outline-none"
                />
                <button className="bg-custom-blue text-white px-4 py-2 rounded ml-2">
                    Send
                </button>
            </div>
        </div>

    )
}

export default ChatWindow
