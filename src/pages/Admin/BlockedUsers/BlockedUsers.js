import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

const BlockedUsers = () => {
    const users = [
        { sn: 1, rankId: 'admin', userId: 'admin', password: '123456', sponsorName: 'Admin', mobileNo: '9876543210', joiningDate: '03 May, 2022', status: 'Pending' },
        { sn: 2, rankId: 'GI27826554', userId: 'admin', password: 'Admin@123', sponsorName: 'admin', mobileNo: '9876543211', joiningDate: '03 Aug, 2024', status: 'Pending' },
        { sn: 3, rankId: 'GI16725141', userId: 'admin', password: 'Abc@1234', sponsorName: 'ram', mobileNo: '9769833416', joiningDate: '04 Aug, 2024', status: 'Pending' },
    ];

    return (
        <div className='flex'>
            
            <Sidebar/>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">All User List</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="py-2 px-4 border-b">Sn</th>
                        <th className="py-2 px-4 border-b">Rank Id</th>
                        <th className="py-2 px-4 border-b">User Id</th>
                        <th className="py-2 px-4 border-b">Password</th>
                        <th className="py-2 px-4 border-b">Sponsor Name</th>
                        <th className="py-2 px-4 border-b">Mobile No</th>
                        <th className="py-2 px-4 border-b">Joining Date</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-2 px-4 border-b">{user.sn}</td>
                            <td className="py-2 px-4 border-b">{user.rankId}</td>
                            <td className="py-2 px-4 border-b">{user.userId}</td>
                            <td className="py-2 px-4 border-b">{user.password}</td>
                            <td className="py-2 px-4 border-b">{user.sponsorName}</td>
                            <td className="py-2 px-4 border-b">{user.mobileNo}</td>
                            <td className="py-2 px-4 border-b">{user.joiningDate}</td>
                            <td className="py-2 px-4 border-b">
                                <span className={`px-2 py-1 rounded-full text-white ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-blue-500 text-white px-4 py-1 rounded">Action</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                    </div>
    );
};

export default BlockedUsers;
