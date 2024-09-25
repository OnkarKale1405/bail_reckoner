import React from 'react';

const ChargesDetails = () => {
    const charges = [
        { id: 1, description: 'Forgery', date: '2023-08-12', status: 'Pending', estimatedDate: '2023-10-15' },
        { id: 2, description: 'Fraud', date: '2023-07-30', status: 'In Progress', estimatedDate: '2023-09-30' },
        { id: 3, description: 'Embezzlement', date: '2023-09-02', status: 'Resolved', estimatedDate: '2023-09-15' },
    ];

    return (
        <div className='h-[45%] p-4'>
            <h3 className="text-lg font-semibold mb-4">Charges</h3>
            <div className="bg-white rounded-lg">
                <div className="bg-blue-400 text-white flex rounded-lg">
                    <div className="py-2 px-4 flex-1 text-start">Description</div>
                    <div className="py-2 px-4 flex-1 text-start">Date</div>
                    <div className="py-2 px-4 flex-1 text-start">Status</div>
                    <div className="py-2 px-4 flex-1 text-start">Bail estimated</div>
                </div>
                <div>
                    {charges.map((charge) => (
                        <div key={charge.id} className="flex border-b border-gray-300">
                            <div className="py-2 px-4 flex-1 text-start">{charge.description}</div>
                            <div className="py-2 px-4 flex-1 text-start">{charge.date}</div>
                            <div className={`py-2 px-4 flex-1 text-start 
                                ${charge.status === 'Resolved' ? 'text-green-500' :
                                    charge.status === 'Pending' ? 'text-red-500' : 'text-yellow-500'}`}>
                                {charge.status}
                            </div>
                            <div className="py-2 px-4 flex-1 text-start">{charge.estimatedDate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChargesDetails;