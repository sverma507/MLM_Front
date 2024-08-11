import React, { useEffect, useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import axios from 'axios';

const AllUsers = () => {
    const [users, setUsers] = useState(null);

    const getData = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-users`);
            setUsers(result.data);
        } catch (err) {
            console.log("error while getting all users ", err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const toggleBlockedStatus = async (id, currentStatus) => {
        try {
            const updatedStatus = !currentStatus;
            await axios.put(`${process.env.REACT_APP_API_URL}/admin/user/${id}`, { blocked: updatedStatus });
           
            getData();
        } catch (err) {
            console.log("error while toggling blocked status", err);
        }
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">All User List</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-green-500 text-white">
                            <th className="py-2 px-4 border-b">S.No</th>
                            <th className="py-2 px-4 border-b">Referral Code</th>
                            <th className="py-2 px-4 border-b">Referred By</th>
                            <th className="py-2 px-4 border-b">Mobile No</th>
                            <th className="py-2 px-4 border-b">Password</th>
                            <th className="py-2 px-4 border-b">Wallet</th>
                            <th className="py-2 px-4 border-b">Created At</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={user._id} className="text-center">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{user.referralCode}</td>
                                <td className="py-2 px-4 border-b">{user.referredBy}</td>
                                <td className="py-2 px-4 border-b">{user.mobileNumber}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className="truncate max-w-xs inline-block">{user.password}</span>
                                </td>
                                <td className="py-2 px-4 border-b">{user.wallet}</td>
                                <td className="py-2 px-4 border-b">{new Date(user.createdAt).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`px-2 py-1 rounded-full text-white ${user.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {user.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button 
                                        className={`bg-${user.blocked ? 'green' : 'red'}-500 text-white px-4 py-1 rounded`} 
                                        onClick={() => toggleBlockedStatus(user._id, user.blocked)}
                                    >
                                        {user.blocked ? 'UnBlock' : 'Block'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
