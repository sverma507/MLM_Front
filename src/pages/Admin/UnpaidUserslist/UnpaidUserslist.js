import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

const UnpaidUsersList = () => {
    const users = [
        { sn: 1, userId: 'User1', sponsorId: 'SP123', name: 'John Doe', mobileNo: '9876543210', joiningDate: '2024-08-01' },
        { sn: 2, userId: 'User2', sponsorId: 'SP124', name: 'Jane Smith', mobileNo: '9876543211', joiningDate: '2024-08-02' },
        { sn: 3, userId: 'User3', sponsorId: 'SP125', name: 'Alice Johnson', mobileNo: '9876543212', joiningDate: '2024-08-03' },
        { sn: 4, userId: 'User4', sponsorId: 'SP126', name: 'Bob Brown', mobileNo: '9876543213', joiningDate: '2024-08-04' },
        { sn: 5, userId: 'User5', sponsorId: 'SP127', name: 'Charlie Davis', mobileNo: '9876543214', joiningDate: '2024-08-05' },
    ];

    return (
        <div className='flex'>
            <Sidebar/>
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center bg-green-500 text-white text-sm font-bold px-4 py-3">
                <h3>Unpaid User List</h3>
                <div>
                    <button className="mr-2">🔍</button>
                    <button>📂</button>
                </div>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Sn No.</th>
                        <th className="py-3 px-6 text-left">User Id</th>
                        <th className="py-3 px-6 text-left">Sponsor Id</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Mobile No.</th>
                        <th className="py-3 px-6 text-left">Joining Date</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {users.map((user, index) => (
                        <tr key={user.userId} className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                            <td className="py-3 px-6 text-left">{user.sn}</td>
                            <td className="py-3 px-6 text-left">{user.userId}</td>
                            <td className="py-3 px-6 text-left">{user.sponsorId}</td>
                            <td className="py-3 px-6 text-left">{user.name}</td>
                            <td className="py-3 px-6 text-left">{user.mobileNo}</td>
                            <td className="py-3 px-6 text-left">{new Date(user.joiningDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                    </div>
    );
};

export default UnpaidUsersList;
