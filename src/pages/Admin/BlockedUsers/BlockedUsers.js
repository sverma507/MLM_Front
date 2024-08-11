import React, { useEffect, useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import axios from 'axios';

const BlockedUsers = () => {
    const [blockedUsers, setBlockedUsers] = useState([]);

    const getBlockedUsers = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-blocked-users`);
            setBlockedUsers(result.data);
        } catch (err) {
            console.log("Error while getting blocked users", err);
        }
    };

    useEffect(() => {
        getBlockedUsers();
    }, []);

    const toggleBlockedStatus = async (id, currentStatus) => {
        try {
            const updatedStatus = !currentStatus;
            await axios.put(`${process.env.REACT_APP_API_URL}/admin/user/${id}`, { blocked: updatedStatus });
            getBlockedUsers();
        } catch (err) {
            console.log("Error while toggling blocked status", err);
        }
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Blocked User List</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-red-500 text-white">
                            <th className="py-2 px-4 border-b">Sn</th>
                            <th className="py-2 px-4 border-b">Sponsor Id</th>
                            <th className="py-2 px-4 border-b">Mobile No</th>
                            <th className="py-2 px-4 border-b">Joining Date</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockedUsers.length > 0 ? (
                            blockedUsers.map((user, index) => (
                                <tr key={user._id} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{user.referredBy}</td>
                                    <td className="py-2 px-4 border-b">{user.mobileNumber}</td>
                                    <td className="py-2 px-4 border-b">{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b">
                                        <span className={`px-2 py-1 rounded-full text-white ${user.blocked ? 'bg-red-500' : 'bg-green-500'}`}>
                                            {user.blocked ? 'Blocked' : 'Active'}
                                        </span>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button 
                                            className={`bg-${user.blocked ? 'green' : 'red'}-500 text-white px-4 py-1 rounded`} 
                                            onClick={() => toggleBlockedStatus(user._id, user.blocked)}
                                        >
                                            {user.blocked ? 'Unblock' : 'Block'}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No blocked users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlockedUsers;
