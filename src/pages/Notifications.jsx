import React from 'react';
import { useLocation } from 'react-router-dom';

const notifications = [
    {
        id: 1,
        title: 'Bail Hearing Scheduled',
        message: 'Your bail hearing is scheduled for October 5th, 2024 at 10:00 AM.',
        date: 'September 24, 2024',
        recipient: 'Undertrial Prisoner',
    },
    {
        id: 2,
        title: 'Bail Petition Approved',
        message: 'The bail petition has been approved. You are now required to submit the bail bond.',
        date: 'September 20, 2024',
        recipient: 'Legal Advisor',
    },
    {
        id: 3,
        title: 'New Documents Required',
        message: 'Please submit the missing documentation to proceed with the bail application.',
        date: 'September 12, 2024',
        recipient: 'Legal Advisor',
    },
    {
        id: 4,
        title: 'Bail Rejected',
        message: 'Unfortunately, the bail request has been rejected due to insufficient evidence.',
        date: 'September 15, 2024',
        recipient: 'Undertrial Prisoner',
    },
    {
        id: 5,
        title: 'Bail Rejected',
        message: 'Unfortunately, the bail request has been rejected due to insufficient evidence.',
        date: 'September 15, 2024',
        recipient: 'Undertrial Prisoner',
    },
    {
        id: 6,
        title: 'Bail Rejected',
        message: 'Unfortunately, the bail request has been rejected due to insufficient evidence.',
        date: 'September 15, 2024',
        recipient: 'Undertrial Prisoner',
    },
    {
        id: 7,
        title: 'Bail Rejected',
        message: 'Unfortunately, the bail request has been rejected due to insufficient evidence.',
        date: 'September 15, 2024',
        recipient: 'Undertrial Prisoner',
    },
    // Add more notifications as needed
];

const Notifications = () => {
    const location = useLocation();

    // Check if the current URL is "/dashboards/normal"
    const isNormalDashboard = location.pathname === '/dashboards/normal';

    return (
        <div className="bg-white px-6 pt-6 flex flex-col flex-1">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Notifications</h1>

            <div className='overflow-y-scroll scrollbar-none scrollbar-thumb-blue-500 scrollbar-track-gray-100'>
                <ul className="space-y-2">
                    {notifications.map((notification) => (
                        <li key={notification.id} className="border-b py-4">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-bold text-lg text-blue-500">{notification.title}</div>
                                <div className="text-sm text-gray-500">{notification.date}</div>
                            </div>
                            <p className="text-gray-700">{notification.message}</p>
                            {/* <div className="mt-2 text-sm text-custom-gray">To: {notification.recipient}</div> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
