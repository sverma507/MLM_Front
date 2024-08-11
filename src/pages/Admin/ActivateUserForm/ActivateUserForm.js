import React, { useEffect, useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function ActivateUserForm() {
  const [referralCode, setRefferalCode] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/products`);
      setProducts(result.data.products); // Assuming the response data has a 'products' array
      console.log(result);
      
    } catch (err) {
      toast.error("Error fetching products"); // Show error toast if fetching fails
      console.error("Error fetching products:", err);
    }
  };

  const handleUserIdChange = (event) => {
    setRefferalCode(event.target.value);
  };

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const handleActivate = (e) => {
    console.log("refferalCode=>",referralCode);
    console.log("selectedPackage=>",selectedPackage);
    
    e.preventDefault()
    axios.put(`${process.env.REACT_APP_API_URL}/admin/activate-user`, {
      referralCode: referralCode,
      packageId: selectedPackage
    }).then(response => {
      toast.success(response.data.message);
      console.log(response.data.message);
      
    }).catch(error => {
      toast('Error activating user:', error);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex  h-[745px]'>
        <Sidebar/>
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg h-[400px] mx-auto mt-[150px]">
      <ToastContainer/>
      <h2 className="text-2xl font-bold mb-6 text-center">Activate / Upgrade Package Now</h2>
      <form onSubmit={handleActivate}>
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
            value={referralCode}
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
            {products.map((product) => (
          <option key={product.id} value={product._id}>{product.name}</option>
        ))}
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
