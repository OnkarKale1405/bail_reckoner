import React, { useState, useRef } from 'react';

const Documents = () => {
    const [missingDocuments, setMissingDocuments] = useState([
        { id: 1, task: 'Contact client for outstanding invoices (Monthly)', due: 'Mon, 16 Aug' },
        { id: 2, task: 'Share consultation forms before the next appointment', due: 'Tue, 25 Aug' },
        { id: 3, task: 'Schedule next personal consultation', due: 'Wed, 26 Aug' },
    ]);
    const [submittedDocuments, setSubmittedDocuments] = useState([]);

    const fileInputRefs = useRef({});

    const handleFileChange = (e, docId) => {
        const file = e.target.files[0];
        if (file) {
            const docToSubmit = missingDocuments.find((doc) => doc.id === docId);
            if (docToSubmit) {
                const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
                const formattedDate = new Date().toLocaleDateString('en-GB', dateOptions);

                const submittedDoc = {
                    id: docId,
                    task: `${docToSubmit.task}`,
                    due: formattedDate,
                };

                setSubmittedDocuments((prev) => [
                    ...prev.filter((doc) => doc.id !== docId),
                    submittedDoc
                ]);
                handleDelete(docId);
            }
        }
    };

    const handleDelete = (id) => {
        const updatedMissing = missingDocuments.filter((doc) => doc.id !== id);
        setMissingDocuments(updatedMissing);
    };

    const handleSubmitClick = (index) => {
        if (fileInputRefs.current[`missing-${index}`]) {
            fileInputRefs.current[`missing-${index}`].click();
        }
    };

    const handleReuploadClick = (index) => {
        if (fileInputRefs.current[`submitted-${index}`]) {
            fileInputRefs.current[`submitted-${index}`].click();
        }
    };

    return (
        <div className="h-[55%] p-6">
            {/* Missing Documents Section */}
            <h3 className="font-semibold text-lg">Missing Documents</h3>
            <ul className="mt-2">
                {missingDocuments.length === 0 ? (
                    <li className="text-gray-500 text-sm">No documents to upload.</li>
                ) : (
                    missingDocuments.map((doc, index) => (
                        <li key={doc.id} className="bg-gray-200 flex justify-between items-center p-3 rounded-s-lg rounded-r-full text-sm mb-2">
                            <span>{doc.task}</span>
                            <div className="flex space-x-2">
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[`missing-${index}`] = el)}
                                    onChange={(e) => handleFileChange(e, doc.id)}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => handleSubmitClick(index)}
                                    className="bg-blue-400 px-3 py-2 w-[6rem] rounded-full text-white text-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            {/* Submitted Documents Section */}
            <h3 className="font-semibold text-lg mt-6">Submitted Documents</h3>
            <ul className="mt-2">
                {submittedDocuments.length === 0 ? (
                    <li className="text-gray-500 text-sm">No submitted documents.</li>
                ) : (
                    submittedDocuments.map((doc, index) => (
                        <li key={doc.id} className="flex bg-gray-200 justify-between items-center p-3 rounded-r-full mb-2 text-sm">
                            <div className='flex flex-col'>
                                <span>{doc.task}</span>
                                <span className="text-gray-500 text-xs">{doc.due}</span>
                            </div>
                            <div className="flex space-x-2">
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[`submitted-${index}`] = el)}
                                    onChange={(e) => handleFileChange(e, doc.id)}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => handleReuploadClick(index)}
                                    className="bg-blue-400 px-3 py-2 w-[6rem] rounded-full text-white text-sm"
                                >
                                    Reupload
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Documents;