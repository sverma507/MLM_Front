import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/products`);
      setProducts(result.data.products); // Assuming the response has a 'products' array
    } catch (err) {
      console.error('Error fetching products:', err);
      // Handle error appropriately (e.g., show an error message)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout title={"Packages - Rita Drinks"}>
      <div className='sm:w-2/5 mx-auto p-4 pb-16 bg-red-500'>
        <div className="flex justify-between">
          <div className="cursor-pointer text-white" onClick={() => navigate(-1)}>◀️ Back</div>
          <div className='text-white'>All Products</div>
          <div className="font-bold w-9"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto m-4">
          {products.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate('/users/user/single-product', { state: item })}
              className="text-white hover:border-black cursor-pointer hover:shadow-2xl hover:bg-slate-200 rounded-lg duration-500 hover:text-blue-700 shadow-red-000 flex flex-col border p-4"
            >
              <img
                className='h-[250px] w-[100%] rounded-lg sm:w-[90%] sm:h-[250px]'
                src={item.img1}
                alt={item.name}
              />
              <div className='mt-3 font-bold'>Package Name: {item.name}</div>
              <div className='flex gap-4'>
                <p className='mt-1 font-bold'>Price: <span className='mt-1 font-normal'>Rs. {item.price}</span></p>
                <p className='mt-1 font-bold'>Cycle: <span className='mt-1 font-normal'>{item.cycle} days</span></p>
              </div>
              <p className='mt-1 font-bold'>Total revenue: <span className='mt-1 font-normal'>Rs. {item.income * item.cycle}</span></p>
              <div className='text-sm mt-2'>{item.description.substring(0, 37)}...</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductPage;
