import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../AdminSidebar/Sidebar';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getData = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/products`);
      setProducts(result.data.products); // Assuming the response data has a 'products' array
    } catch (err) {
      toast.error("Error fetching products"); // Show error toast if fetching fails
      console.error("Error fetching products:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/delete-product/${id}`);
      setProducts(products.filter(product => product._id !== id)); // Remove the deleted product from state
      toast.success("Product deleted successfully"); // Show success toast
    } catch (err) {
      toast.error("Error deleting product"); // Show error toast if deletion fails
      console.error("Error deleting product:", err);
    }
  };

  const handleUpdate = (item) => {
    // Use navigate to redirect to the update page
    navigate(`/dashboard/admin/update-product/${item._id}`,{state:{data:item}});
  };

  useEffect(() => {
    getData();
  }, []);

  return (<div className='flex'>
    <Sidebar/>
    <div className="p-6 w-full bg-gray-700 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>
      <button
                onClick={() =>{navigate('/dashboard/admin/add-product')}}
                className="m-4  w-fit bg-green-400 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                Add New Product
              </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.img1} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">Price: ${product.price}</p>
              <p className="text-gray-600 mb-2">Income: ${product.income}</p>
              <p className="text-gray-600 mb-2">Cycle: {product.cycle} days</p>
              <p className="text-gray-600 mb-2">Supply: {product.supply}</p>
              <p className="text-gray-800 mb-2">{product.description}</p>
              <div className="mt-4">
                <img src={product.img2} alt={`${product.name} additional`} className="w-full h-32 object-cover" />
              </div>
              <button
                onClick={() => handleUpdate(product)}
                className="mt-4 mr-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                Update
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer /> {/* Add ToastContainer to your component */}
    </div>
        </div>
  );
}

export default AllProducts;
