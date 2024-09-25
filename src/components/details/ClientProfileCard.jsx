import React, { useState } from 'react';
import { LuPencil } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

const ClientProfileCard = () => {
    const [isEditPopupVisible, setEditPopupVisible] = useState(false);
    const [isAddNotePopupVisible, setAddNotePopupVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    const [advisorNotes, setAdvisorNotes] = useState([
        {
            note: "Initial consultation regarding bail applications. Follow-up required next week for document submission.",
            date: "2024-09-20"
        },
        {
            note: "Reviewed client's financial records. Need to prepare for the next court appearance.",
            date: "2024-09-18"
        },
        {
            note: "Discussed possible plea deal with prosecution. Awaiting their response.",
            date: "2024-09-15"
        },
        {
            note: "Client needs to provide additional evidence for character reference. Deadline: 2024-09-25.",
            date: "2024-09-12"
        },
        {
            note: "Met with the client’s family to review case strategy and plan the next steps.",
            date: "2024-09-10"
        }
    ]);

    const handleEditClick = () => {
        setEditPopupVisible(true);
    };

    const handleCloseEditPopup = () => {
        setEditPopupVisible(false);
    };

    const handleAddNoteClick = () => {
        setAddNotePopupVisible(true);
    };

    const handleCloseAddNotePopup = () => {
        setAddNotePopupVisible(false);
    };

    const handleAddNote = () => {
        if (newNote.trim()) {
            const newNoteEntry = {
                note: newNote,
                date: new Date().toLocaleString(),
            };
            // Update state to include the new note
            setAdvisorNotes([...advisorNotes, newNoteEntry]);
            setNewNote('');
            handleCloseAddNotePopup();
        }
    };

    return (
        <div className="h-full py-4 relative">
            {/* Main Profile Card */}
            <div className={`flex flex-col justify-center items-start px-6 ${isEditPopupVisible || isAddNotePopupVisible ? 'filter blur-sm' : ''}`}>
                <img
                    src="https://www.keste.com/wp-content/uploads/2021/07/AdobeStock_277727769-1-scaled.jpeg"
                    alt="Client"
                    className="rounded-xl w-20 h-20 object-cover object-center"
                />
                <div className="my-2">
                    <h2 className="text-2xl font-semibold">Rohan Kumar</h2>
                </div>
            </div>

            <div className={`mt-4 ${isEditPopupVisible || isAddNotePopupVisible ? 'filter blur-sm' : ''}`}>
                <h3 className="flex items-center font-semibold text-lg px-4">
                    Client details
                    <div className="relative inline-block group">
                        <LuPencil
                            className="text-blue-400 mx-2 cursor-pointer"
                            onClick={handleEditClick}
                        />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            edit
                        </div>
                    </div>
                </h3>
                <ul className="px-6 mt-2 text-sm space-y-2">
                    <li className='flex'>
                        <span className='flex-[40] text-gray-400'>Email</span>
                        <span className='flex-[60] text-blue-400'>rohan_kumar@gmail.com</span>
                    </li>
                    <li className='flex'>
                        <span className='flex-[40] text-gray-400'>Phone number</span>
                        <span className='flex-[60] text-blue-400'>+91 7204579555</span>
                    </li>
                    <li className='flex'>
                        <span className='flex-[40] text-gray-400'>Date of birth</span>
                        <span className='flex-[60]'>12/03/1996</span>
                    </li>
                    <li className='flex'>
                        <span className='flex-[40] text-gray-400'>Home address</span>
                        <span className='flex-[60]'>6301 Elgin St. Celina, Delaware</span>
                    </li>
                </ul>

                {/* Notes Section */}
                <div className="h-[15rem] mt-4">
                    <h4 className="flex items-center font-semibold text-lg px-4 mb-2">
                        Notes
                        <div className="relative inline-block group">
                            <FaPlus
                                className="mx-1.5 text-blue-400 cursor-pointer"
                                onClick={handleAddNoteClick}
                            />
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                add
                            </div>
                        </div>
                    </h4>
                    <div className="flex flex-col px-4 h-full overflow-y-auto scrollbar-none">
                        {
                            advisorNotes.map((note, index) => (
                                <div key={index} className="bg-blue-400 text-white p-4 rounded-md shadow-sm text-sm mb-4">
                                    <p>{note.note}</p>
                                    <p className="text-white text-right mt-2">— Last updated: {note.date}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Edit Client Details Popup Modal */}
            {isEditPopupVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-3/4 h-3/4 rounded-lg p-8 relative flex">
                        {/* Left Side - Personal Details Form */}
                        <div className="w-1/2 pr-4">
                            <h3 className="text-2xl font-bold mb-4">Edit Client Details</h3>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    defaultValue="d.russell@gmail.com"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    defaultValue="(229) 555-0109"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    defaultValue="1987-12-03"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Home Address</label>
                                <input
                                    type="text"
                                    defaultValue="6301 Elgin St. Celina, Delaware"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                        </div>

                        {/* Right Side - Charges Text Area */}
                        <div className="w-1/2 pl-4">
                            <h3 className="text-2xl font-bold mb-4">Edit Charges</h3>
                            <div className="mb-4">
                                <textarea
                                    rows="10"
                                    defaultValue="Charges for alleged fraud and forgery."
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                ></textarea>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleCloseEditPopup}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Add New Note Popup Modal */}
            {isAddNotePopupVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-1/3 h-1/2 rounded-lg p-8 relative flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">Add New Note</h3>
                        <textarea
                            rows="4"
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                        <button
                            onClick={handleAddNote}
                            className="mt-4 bg-[#3182ce] hover:bg-[#2B6CB0] text-white p-2 rounded"
                        >
                            Save Note
                        </button>
                        <button
                            onClick={handleCloseAddNotePopup}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientProfileCard;