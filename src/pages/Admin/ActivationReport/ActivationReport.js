import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

const ActivationReport = () => {
    const users = [
        { sn: 1, userDetail: 'MR. DEEPAK', password: 'Ravj@1996', plan: 'Holding', packageAmount: '₹ 18,000.00', roiStatus: 'Master', activatedBy: 'Admin', activateDate: '07-08-2024', action: 'Action' },
        { sn: 2, userDetail: 'RAVI MEHTA', password: 'Abc@1234sdf', plan: 'Holding', packageAmount: '₹ 18,000.00', roiStatus: 'Master', activatedBy: 'Admin', activateDate: '07-08-2024', action: 'Action' },
        { sn: 3, userDetail: 'JAIS JANGRA', password: 'Abc@1234df', plan: 'Holding', packageAmount: '₹ 18,000.00', roiStatus: 'Master', activatedBy: 'Admin', activateDate: '07-08-2024', action: 'Action' },
        { sn: 4, userDetail: 'RAM8', password: 'Abc@1234', plan: 'Holding', packageAmount: '₹ 18,000.00', roiStatus: 'Master', activatedBy: 'Admin', activateDate: '07-08-2024', action: 'Action' },
        { sn: 5, userDetail: 'RAM7', password: 'Abc@1234', plan: 'Holding', packageAmount: '₹ 18,000.00', roiStatus: 'Master', activatedBy: 'Admin', activateDate: '07-08-2024', action: 'Action' },
    ];

    return (
        <div className='flex'>
            <Sidebar/>
        <div className="bg-white w-full shadow-md rounded-lg p-4">
            <div className="flex justify-between mb-4">
                <input 
                    type="text" 
                    placeholder="Search"
                    className="border-2 border-gray-200 rounded-lg p-2 w-full"
                    />
                <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">🔍</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg">📂</button>
                </div>
            </div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        {['S.No', 'User Detail', 'Password', 'Plan', 'Package Amount', 'ROI Status', 'Activated By', 'Activate Date', 'Action'].map((header) => (
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
                        <tr key={user.userDetail} className={`border-b border-gray-200 hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                            <td className="px-5 py-3">{user.sn}</td>
                            <td className="px-5 py-3">{user.userDetail}</td>
                            <td className="px-5 py-3">{user.password}</td>
                            <td className="px-5 py-3">{user.plan}</td>
                            <td className="px-5 py-3">{user.packageAmount}</td>
                            <td className="px-5 py-3">{user.roiStatus}</td>
                            <td className="px-5 py-3">{user.activatedBy}</td>
                            <td className="px-5 py-3">{new Date(user.activateDate).toLocaleDateString()}</td>
                            <td className="px-5 py-3 text-blue-500 cursor-pointer">{user.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                            </div>
    );
};

export default ActivationReport;
