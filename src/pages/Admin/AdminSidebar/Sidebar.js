import React, { useState } from 'react';
import { FaBars, FaTachometerAlt,FaUserCheck,FaKey  , FaUser, FaCog, FaAngleDown } from 'react-icons/fa';
import HorizontalNavbar from '../AdminNavbar/AdminNavbar';
import { FcStatistics } from "react-icons/fc";
import { GiCash,GiAchievement  } from "react-icons/gi";
import { MdOutlineSettingsInputSvideo } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Sidebar = ({toggle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate=useNavigate()

  const toggleNavbar = () => {
    if (isOpen) {
      setOpenDropdown(null);  // Close any open dropdowns when collapsing the navbar
    }
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (index) => {
    setIsOpen(true);  // Expand the navbar when opening a dropdown
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* <HorizontalNavbar toggle={toggle}/> */}
      <div className="flex flex-row flex-grow">
        <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'}  bg-gray-800 text-white transition-width duration-300 relative`}>
          <button 
            onClick={toggleNavbar} 
            className="absolute top-4 left-5 text-3xl focus:outline-none"
          >
            <FaBars />
          </button>
          <div className="mt-20">
            <ul>
            <li className="group " onClick={()=>{navigate('/dashboard/admin/all-products')}}>
                <div onClick={() => handleDropdownClick(0)} className="flex  items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <MdOutlineSettingsInputSvideo   className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Products</span>}
                </div>
              </li>
              <li className="group " onClick={()=>{navigate('/dashboard/admin')}}>
                <div onClick={() => handleDropdownClick(0)} className="flex  items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaTachometerAlt className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Dashboard</span>}
                </div>
              </li>
              <li className="group">
                <div onClick={() => handleDropdownClick(1)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaUser className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow ">User Master</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 1 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 1 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-users')}}>All Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-paid-users')}}>Paid Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/all-unpaid-users-list')}}>Unpaid Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/blocked-users')}} >Blocked Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/downline-users')}}>Downline Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/activation-report')}}>Activation Report</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Access Panel</li>
                  </ul>
                )}
              </li>
              <li className="group" onClick={()=>{navigate('/admin/activate-user')}}>
                <div onClick={() => handleDropdownClick(0)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaTachometerAlt className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Activation</span>}
                </div>
              </li>
             
              <li className="group">
                <div onClick={() => handleDropdownClick(2)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FcStatistics className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Commission Reports</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 2 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 2 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Growth Bonus</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Referral Income</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Team Growth Income</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Royalty Income</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Booster Income</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Award & Reward</li>
                  </ul>
                )}
              </li>
              
              <li className="group">
                <div onClick={() => handleDropdownClick(3)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <GiCash className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Financial</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 3 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 3 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Add/Deduct Wallet</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Deposite History</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Fund Request</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Bank Withdrawl</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Add Salary</li>
                  </ul>
                )}
              </li>
              <li className="group">
                <div onClick={() => handleDropdownClick(4)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <GiAchievement  className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Manage Achiever</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 4 ? 'rotate-180' : ''}`} />}
                </div>
              </li>
              <li className="group">
                <div onClick={() => handleDropdownClick(4)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaPhotoFilm className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Banner</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 4 ? 'rotate-180' : ''}`} />}
                </div>
              </li>
              <li className="group">
                <div onClick={() => handleDropdownClick(4)} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaKey  className="mr-2 text-4xl" />
                  {isOpen && <span className="flex-grow">Package</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 4 ? 'rotate-180' : ''}`} />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

