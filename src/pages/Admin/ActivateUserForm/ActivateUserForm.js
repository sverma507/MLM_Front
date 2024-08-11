import React, { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';

function ActivateUserForm() {
  const [userId, setUserId] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform activation logic here, e.g., send an API request
    console.log('User ID:', userId);
    console.log('Selected Package:', selectedPackage);
  };

  return (
    <div className='flex'>
        <Sidebar/>
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg h-fit mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Activate / Upgrade Package Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="userId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User Id
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            id="userId"
            className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Please Enter Valid User ID"
            value={userId}
            onChange={handleUserIdChange}
            />
        </div>
        <div className="mb-6">
          <label
            htmlFor="package"
            className="block text-gray-700 text-sm font-bold mb-2"
            >
            Select Package
          </label>
          <select
            id="package"
            className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={selectedPackage}
            onChange={handlePackageChange}
            >
            <option value="">Select a package</option>
            <option value="1 PLANT MINI [₹ 500]">1 PLANT MINI [₹ 500]</option>
            {/* Add more package options here */}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
          >
            Activate Now
          </button>
        </div>
      </form>
    </div>
            </div>
  );
}

export default ActivateUserForm;
