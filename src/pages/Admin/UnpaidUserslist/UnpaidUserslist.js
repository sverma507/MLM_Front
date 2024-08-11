import React, { useEffect, useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import axios from 'axios';

const UnpaidUsersList = () => {
    const [unpaidUsers, setUnpaidUsers] = useState([]);

    const getUnpaidUsers = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/unpaid-users`);
            setUnpaidUsers(result.data);
        } catch (err) {
            console.log("Error while getting unpaid users", err);
        }
    };

    useEffect(() => {
        getUnpaidUsers();
    }, []);

    return (
        <div className='flex'>
            <Sidebar />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center bg-green-500 text-white text-sm font-bold px-4 py-3">
                    <h3>Unpaid User List</h3>
                   
                </div>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Sn No.</th>
                            <th className="py-3 px-6 text-left">Sponsor Id</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Mobile No.</th>
                            <th className="py-3 px-6 text-left">Joining Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {unpaidUsers.length > 0 ? (
                            unpaidUsers.map((user, index) => (
                                <tr key={user._id} className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="py-3 px-6 text-left">{index + 1}</td>
                                    <td className="py-3 px-6 text-left">{user.referredBy}</td>
                                    <td className="py-3 px-6 text-left">{user.answer}</td>
                                    <td className="py-3 px-6 text-left">{user.mobileNumber}</td>
                                    <td className="py-3 px-6 text-left">{new Date(user.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No unpaid users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UnpaidUsersList;
