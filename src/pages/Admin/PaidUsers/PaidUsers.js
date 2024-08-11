import React, { useEffect, useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import axios from 'axios';

const PaidUsers = () => {
    const [paidUsers, setPaidUsers] = useState([]);

    const getPaidUsers = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-active-users`);
            // const activeUsers = result.data.filter(user => user.active);
            setPaidUsers(result.data);
        } catch (err) {
            console.log("Error while getting paid users", err);
        }
    };

    useEffect(() => {
        getPaidUsers();
    }, []);

    return (
        <div className='flex'>
            <Sidebar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-2">😊</span> Paid User List
                </h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th className="py-2 px-4 border-b">S.No</th>
                            <th className="py-2 px-4 border-b">User Detail</th>
                            <th className="py-2 px-4 border-b">Referral Code</th>
                            <th className="py-2 px-4 border-b">Wallet</th>
                            <th className="py-2 px-4 border-b">Package Name</th>
                            <th className="py-2 px-4 border-b">Package Price</th>
                            <th className="py-2 px-4 border-b">Activation Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paidUsers.length > 0 ? (
                            paidUsers.map((user, index) => (
                                <tr key={user._id} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{user.answer}</td>
                                    <td className="py-2 px-4 border-b">{user.referralCode}</td>
                                    <td className="py-2 px-4 border-b">{user.wallet}</td>
                                    <td className="py-2 px-4 border-b">
                                        {user.packages.length > 0 ? (
                                            user.packages.map((pkg, pkgIndex) => (
                                                <div key={pkgIndex}>
                                                    <p>{pkg.name}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <span>No Package</span>
                                        )}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {user.packages.length > 0 ? (
                                            user.packages.map((pkg, pkgIndex) => (
                                                <div key={pkgIndex}>
                                                    <p>{pkg.price}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <span>N/A</span>
                                        )}
                                    </td>
                                    <td className="py-2 px-4 border-b">{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center py-4">No active users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaidUsers;
