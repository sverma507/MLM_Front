import React from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  // State for statistics
  const [registerUser, setRegisterUser] = useState(566);
  const [paidUser, setPaidUser] = useState(14);
  const [unpaidUser, setUnpaidUser] = useState(572);
  const [paidUsersLastMonth, setPaidUsersLastMonth] = useState(0);

  return (
    <div className='flex h-screen bg-slate-500'>
      <Sidebar />
      <div className="p-4 w-[100%]  flex-1">
        <div className="flex gap-8">
          {/* Revenue Chart Section */}
          <div className="bg-slate-200 w-[60%] p-4 rounded-lg ">
            <h2 className="text-xl font-bold mb-4">Revenue Chart</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Revenue Stats */}
              <div className="bg-green-200 p-4 rounded-lg shadow-xl">
                <h3 className="text-lg font-semibold">Current Collection</h3>
                <p className="text-2xl">30</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg shadow-xl">
                <h3 className="text-lg font-semibold">Last Collection</h3>
                <p className="text-2xl">2,200,500</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg shadow-xl">
                <h3 className="text-lg font-semibold">Last Payout</h3>
                <p className="text-2xl">0</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg shadow-xl">
                <h3 className="text-lg font-semibold">Today Transfer E-wallet</h3>
                <p className="text-2xl">0</p>
              </div>
              <div className="bg-green-200 p-4 rounded-lg shadow-xl">
                <h3 className="text-lg font-semibold">Today Transfer AV-wallet</h3>
                <p className="text-2xl">0</p>
              </div>
            </div>
          </div>

          {/* User Statistics Section */}
          <div className="w-[40%] bg-slate-200 p-4 rounded-lg ">
            <h2 className="text-xl font-bold mb-4">User Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center h-40">
                <h3 className="mb-2">Register User</h3>
                <CircularProgressbar
                  value={registerUser}
                  maxValue={1000}
                  text={`${registerUser}`}
                  styles={buildStyles({
                    pathColor: `#3b82f6`,
                    textColor: '#3b82f6',
                  })}
                />
              </div>
              <div className="flex flex-col items-center h-40">
                <h3 className="mb-2">Paid User</h3>
                <CircularProgressbar
                  value={paidUser}
                  maxValue={1000}
                  text={`${paidUser}`}
                  styles={buildStyles({
                    pathColor: `#10b981`,
                    textColor: '#10b981',
                  })}
                />
              </div>
              <div className="flex flex-col items-center h-40">
                <h3 className="mb-2">Unpaid User</h3>
                <CircularProgressbar
                  value={unpaidUser}
                  maxValue={1000}
                  text={`${unpaidUser}`}
                  styles={buildStyles({
                    pathColor: `#ef4444`,
                    textColor: '#ef4444',
                  })}
                />
              </div>
              <div className="flex flex-col  items-center h-40">
                <h3 className="mb-2">Paid Users Last Month</h3>
                <CircularProgressbar
                  value={paidUsersLastMonth}
                  maxValue={1000}
                  text={`${paidUsersLastMonth}`}
                  styles={buildStyles({
                    pathColor: `#8b5cf6`,
                    textColor: '#8b5cf6',
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
