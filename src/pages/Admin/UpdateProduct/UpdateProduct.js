import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../AdminSidebar/Sidebar';

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    img1: null,
    img2: null,
    name: '',
    price: '',
    income: '',
    cycle: '',
    description: '',
    supply: '',
    _id: '', // Add _id to handle the product identification
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.data) {
      setFormData(location.state.data);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // Store the file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form data to FormData
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/update-product/${formData._id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response:', response.data);
      toast.success('Product updated successfully');
      navigate('/dashboard/admin/all-products'); // Redirect after success
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      toast.error('Failed to update product');
    }
  };

  const renderImagePreview = (file) => {
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return null;
  };

  useEffect(() => {
    // Cleanup function to revoke object URLs when component unmounts
    return () => {
      if (formData.img1 instanceof File) {
        URL.revokeObjectURL(renderImagePreview(formData.img1));
      }
      if (formData.img2 instanceof File) {
        URL.revokeObjectURL(renderImagePreview(formData.img2));
      }
    };
  }, [formData.img1, formData.img2]);

  return (
    <div className='flex bg-slate-300'>
      <Sidebar />
      <div className="w-full sm:w-2/5 mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="img1" className="block text-sm font-medium text-gray-700">Image 1</label>
            <input
              type="file"
              id="img1"
              name="img1"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formData.img1 && <img src={renderImagePreview(formData.img1)} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
            {formData.img1 && <img src={formData.img1} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
          </div>

          <div>
            <label htmlFor="img2" className="block text-sm font-medium text-gray-700">Image 2</label>
            <input
              type="file"
              id="img2"
              name="img2"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formData.img2 && <img src={renderImagePreview(formData.img2)} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
            {formData.img1 && <img src={formData.img2} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}

          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="income" className="block text-sm font-medium text-gray-700">Income</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="cycle" className="block text-sm font-medium text-gray-700">Cycle</label>
            <input
              type="text"
              id="cycle"
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="supply" className="block text-sm font-medium text-gray-700">Supply</label>
            <input
              type="number"
              id="supply"
              name="supply"
              value={formData.supply}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdateProduct;
