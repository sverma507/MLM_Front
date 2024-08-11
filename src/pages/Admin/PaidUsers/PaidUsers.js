import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
const PaidUsers = () => {
    const users = [
        { sn: 1, userDetail: 'User1 (ID123)', password: 'Abc@1234', sponsorId: 'SP123', package: '₹ 18,000.00', activationDate: 'Monday, 01 Aug 2024' },
        { sn: 2, userDetail: 'User2 (ID124)', password: 'Abc@1234', sponsorId: 'SP124', package: '₹ 18,000.00', activationDate: 'Tuesday, 02 Aug 2024' },
        { sn: 3, userDetail: 'User3 (ID125)', password: 'Abc@1234', sponsorId: 'SP125', package: '₹ 18,000.00', activationDate: 'Wednesday, 03 Aug 2024' },
        { sn: 4, userDetail: 'User4 (ID126)', password: 'Abc@1234', sponsorId: 'SP126', package: '₹ 18,000.00', activationDate: 'Thursday, 04 Aug 2024' },
        { sn: 5, userDetail: 'User5 (ID127)', password: 'Abc@1234', sponsorId: 'SP127', package: '₹ 18,000.00', activationDate: 'Friday, 05 Aug 2024' },
    ];

    return (
        <div className='flex'>
            <Sidebar/>
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">😊</span> Paid User List
            </h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-orange-500 text-white">
                        <th className="py-2 px-4 border-b">S.No</th>
                        <th className="py-2 px-4 border-b">User Detail</th>
                        <th className="py-2 px-4 border-b">Password</th>
                        <th className="py-2 px-4 border-b">Sponsor Id</th>
                        <th className="py-2 px-4 border-b">Package</th>
                        <th className="py-2 px-4 border-b">Activation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                            <td className="py-2 px-4 border-b">{user.sn}</td>
                            <td className="py-2 px-4 border-b">{user.userDetail}</td>
                            <td className="py-2 px-4 border-b">{user.password}</td>
                            <td className="py-2 px-4 border-b">{user.sponsorId}</td>
                            <td className="py-2 px-4 border-b">
                                <span className="bg-red-500 text-white px-2 py-1 rounded">{user.package}</span>
                            </td>
                            <td className="py-2 px-4 border-b">{user.activationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                    </div>
    );
};

export default PaidUsers;
