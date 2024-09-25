import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-600 w-full h-16 py-2 px-4 border-b">
      <div className="flex items-center justify-between">
        <div className='flex items-center'>
          <h1 className="font-heading text-xl font-medium text-gray-800 mx-8">
            Bail reckoner
          </h1>
          {/* Search Bar */}
          <div className="max-w-32 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-[24rem] border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className='flex'>
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-300 mx-4"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
