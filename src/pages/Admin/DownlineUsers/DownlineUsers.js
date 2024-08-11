import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

const DownlineUsers = () => {
    const users = [
        { sn: 1, level: '1', userId: 'User1', name: 'John Doe', mobileNo: '9876543210', joiningDate: '2024-08-01', activationDate: '2024-08-02', activationValue: '₹ 18,000.00' },
        { sn: 2, level: '2', userId: 'User2', name: 'Jane Smith', mobileNo: '9876543211', joiningDate: '2024-08-03', activationDate: '2024-08-04', activationValue: '₹ 18,000.00' },
        { sn: 3, level: '3', userId: 'User3', name: 'Alice Johnson', mobileNo: '9876543212', joiningDate: '2024-08-05', activationDate: '2024-08-06', activationValue: '₹ 18,000.00' },
        { sn: 4, level: '4', userId: 'User4', name: 'Bob Brown', mobileNo: '9876543213', joiningDate: '2024-08-07', activationDate: '2024-08-08', activationValue: '₹ 18,000.00' },
        { sn: 5, level: '5', userId: 'User5', name: 'Charlie Davis', mobileNo: '9876543214', joiningDate: '2024-08-09', activationDate: '2024-08-10', activationValue: '₹ 18,000.00' },
    ];

    return (
        <div className='flex'>
            <Sidebar/>
        <div className="w-full bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between mb-4">
                <input 
                    type="text" 
                    placeholder="Search"
                    className="border-2 border-gray-200 rounded-lg p-2 w-full"
                    />
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4">
                    Downline
                </button>
            </div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        {['S.No.', 'Level', 'User Id', 'Name', 'Mobile No.', 'Date of Joining', 'Date of Activation', 'Activation Value'].map((header) => (
                            <th 
                            key={header}
                            className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {users.map((user, index) => (
                        <tr key={user.userId} className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                            <td className="px-5 py-3">{user.sn}</td>
                            <td className="px-5 py-3">{user.level}</td>
                            <td className="px-5 py-3">{user.userId}</td>
                            <td className="px-5 py-3">{user.name}</td>
                            <td className="px-5 py-3">{user.mobileNo}</td>
                            <td className="px-5 py-3">{new Date(user.joiningDate).toLocaleDateString()}</td>
                            <td className="px-5 py-3">{new Date(user.activationDate).toLocaleDateString()}</td>
                            <td className="px-5 py-3">{user.activationValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default DownlineUsers;
