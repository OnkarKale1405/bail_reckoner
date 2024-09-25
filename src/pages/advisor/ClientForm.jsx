import React, { useRef } from 'react';

const ClientForm = () => {
    const fileInputRefs = useRef([]);
    const missingDocuments = [
        { id: 1, task: 'Charge Sheet' },
        { id: 2, task: 'Witness Statement' },
        { id: 3, task: 'Evidence Photos' },
        { id: 4, task: 'Police Report' },
        { id: 5, task: 'Medical Reports' },
        { id: 6, task: 'Bail Application Form' },
        { id: 7, task: 'Identity Proof' },
        { id: 8, task: 'Address Proof' },
    ];

    const handleFileChange = (e, id) => {
        console.log(`File for document ID ${id} selected:`, e.target.files[0]);
    };

    const handleSubmitClick = (index) => {
        const fileInput = fileInputRefs.current[`missing-${index}`];
        if (fileInput && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            console.log(`Submitting file for document ID ${missingDocuments[index].id}:`, file);
            // Logic to upload the file can be added here
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div className="w-full h-full overflow-y-scroll scrollbar-none px-40 py-8 bg-white shadow-md rounded-lg">
            <h2 className="text-4xl font-bold text-center mb-6">Add new Client</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Client Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="crimeDetails" className="block text-sm font-medium text-gray-700">Details of Alleged Crime</label>
                    <textarea
                        id="crimeDetails"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">Evidence Gathered</label>
                    <textarea
                        id="evidence"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="charges" className="block text-sm font-medium text-gray-700">Specific Charges Against Accused</label>
                    <textarea
                        id="charges"
                        rows="4"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <h3 className="text-2xl font-bold mb-4">Documents to be Submitted</h3>
                <ul className="mt-2">
                    {missingDocuments.map((doc, index) => (
                        <li key={doc.id} className="flex justify-between items-center p-3 rounded-xl text-sm bg-gray-100 mb-2">
                            <span className='pl-2'>{doc.task}</span>
                            <div className="flex space-x-2">
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[`missing-${index}`] = el)}
                                    onChange={(e) => handleFileChange(e, doc.id)}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRefs.current[`missing-${index}`].click()}
                                    className="bg-blue-400 px-3 py-2 w-[6rem] rounded-full text-white text-sm"
                                >
                                    Upload
                                </button>
                                <button
                                    onClick={() => handleSubmitClick(index)}
                                    className="bg-blue-400 px-3 py-2 w-[6rem] rounded-full text-white text-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200"
                >
                    Add Client
                </button>
            </form>
        </div>
    );
};

export default ClientForm;