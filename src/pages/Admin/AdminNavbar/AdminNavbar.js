import React from 'react';
import { useNavigate } from 'react-router-dom';
const HorizontalNavbar = ({toggle}) => {
  const navigate=useNavigate();
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-300" onClick={()=>{navigate('/admin/dashboard')}}>DashBoard</a>
        <a href="#" className="hover:text-gray-300" onClick={()=>{navigate('/admin/transactions')}}>Transaction</a>
        <a href="#" className="hover:text-gray-300">Link 3</a>
        <div onClick={()=>{navigate('/');localStorage.clear();toggle()}} className="cursor-pointer bg-white hover:text-gray-300">Logout</div>
      </div>
    </div>
  );
};

export default HorizontalNavbar;
