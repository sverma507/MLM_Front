import React, { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

const AdminTransactions = () => {
  const [date, setDate] = useState('');

  return (
    <div className='flex'>
      <Sidebar/>
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-700">Transactions</h1>
      <div className="mt-6">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Transactions on {date || 'all dates'}:</h2>
          <ul className="mt-2">
            <li className="bg-white p-4 rounded-lg shadow mb-2">
              <span>Transaction #1 - $1200</span>
            </li>
            <li className="bg-white p-4 rounded-lg shadow mb-2">
              <span>Transaction #2 - $800</span>
            </li>
            {/* Add more transactions here */}
          </ul>
        </div>
      </div>
    </div>
          </div>
  );
};

export default AdminTransactions;
