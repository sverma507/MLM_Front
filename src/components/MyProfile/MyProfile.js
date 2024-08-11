import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import axios from "axios";

function MyProfile() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState();
  const [todayEarnings, setTodayEarnings] = useState(0);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login");
    toast.success("Logout successfully");
  };

  // console.log(auth.user);
  const getUser = async () => {
    const { id } = auth.user;
    const token = auth.token;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/user/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res && res.data) {
        const previousWallet = user ? user.wallet : 0;
        const newWallet = res.data.wallet;

        if (newWallet > previousWallet) {
          const addedAmount = newWallet - previousWallet;
          const today = new Date().toDateString();
          const storedDate = localStorage.getItem("earningsDate");

          if (storedDate === today) {
            const storedEarnings = parseFloat(localStorage.getItem("todayEarnings")) || 0;
            const updatedEarnings = storedEarnings + addedAmount;
            setTodayEarnings(updatedEarnings);
            localStorage.setItem("todayEarnings", updatedEarnings);
          } else {
            setTodayEarnings(addedAmount);
            localStorage.setItem("todayEarnings", addedAmount);
            localStorage.setItem("earningsDate", today);
          }
        }

        setUser(res.data);
        console.log(user);
        
      } else {
        toast.error("Failed to retrieve user profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("earningsDate");

    if (storedDate !== today) {
      localStorage.setItem("earningsDate", today);
      localStorage.setItem("todayEarnings", 0);
    }

    const storedEarnings = parseFloat(localStorage.getItem("todayEarnings")) || 0;
    setTodayEarnings(storedEarnings);

    getUser();
  }, []);

  return (
    <Layout>
      <div className="bg-red-500 sm:w-2/5 mx-auto min-h-screen pb-16">
        {/* <div className="flex justify-between items-center px-4 py-2"> */}

        <div className="px-4 py-8">
          <div className="text-center text-white">
            <p className=" font-bold text-4xl">{user?.mobileNumber}</p>
            <p className=" text-xl">ID: {user?.referralCode}</p>
          </div>
        </div>
        <div className="px-4">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-md p-4 shadow-md text-center">
              <p className="text-gray-700 font-bold text-lg mb-2">
                Balance Wallet
              </p>
              <p className="text-gray-700 text-2xl font-bold">{user?.wallet}</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-md w-[130px]">
              <p className="text-gray-700 font-bold text-lg mb-2">Package</p>

              {user?.packages.length > 0 ? (
                user.packages.map((pkg) => (
                  <p
                    key={pkg._id}
                    className="text-gray-700 text-2xl font-bold text-center"
                  >
                    {pkg.name}
                  </p>
                ))
              ) : (
                <p>Unrecharged</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-md p-4 shadow-md">
              <p className="text-gray-700 font-bold text-lg mb-2">
                Earnings today
              </p>
              <p className="text-gray-700 text-2xl font-bold">{todayEarnings.toFixed(2)}</p>
            </div>
            <div className="bg-white rounded-md p-4 shadow-md">
              <p className="text-gray-700 font-bold text-lg mb-2">
                Team income
              </p>
              <p className="text-gray-700 text-2xl font-bold">{user?.teamIncome}</p>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center" 
            onClick={() => {navigate('/users/user/contact-manager')}}>
              <div className="rounded-full bg-pink-200  mr-4">
                <img
                  src={"/images/png1/usercenter.png"}
                  alt="customer support"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">Contact Manager</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div
              className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center cursor-pointer hover:bg-red-300 duration-200"
              onClick={() => {
                navigate("/users/user/invitation");
              }}
            >
              <div className="rounded-full bg-blue-200  mr-4 ">
                <img
                  src={"/images/png1/invite.png"}
                  alt="user"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">Invite Friends</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center">
              <div className="rounded-full bg-green-200  mr-4">
                <img
                  src={"/images/png1/discount.png"}
                  alt="percent sign"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">Discount Coupon</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/users/user/my-team");
              }}
              className="bg-white cursor-pointer hover:bg-blue-300 duration-200 rounded-md p-3 shadow-md flex items-center"
            >
              <div className="rounded-full bg-purple-200  mr-4">
                <img
                  src={"/images/png1/myteams.png"}
                  alt="user group"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">My Teams</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center">
              <div className="rounded-full bg-green-200  mr-4">
                <img
                  src={"/images/png1/fundsdeails.png"}
                  alt="document"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">Funding Details</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center">
              <div className="rounded-full bg-yellow-200  mr-4">
                <img
                  src={"/images/png1/accountinfo.png"}
                  alt="credit card"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">
                Bank Account Info
              </p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="bg-white  cursor-pointer hover:bg-blue-300 rounded-md p-3 shadow-md flex items-center">
              <div className="rounded-full bg-purple-200  mr-4">
                <img
                  src={"/images/png1/modify_sign_in_password.png"}
                  alt="padlock"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-gray-700 font-bold text-lg">
                Modify Sign in Password
              </p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div
              className="bg-white rounded-md p-3 shadow-md flex items-center  cursor-pointer hover:bg-blue-300 duration-200"
              onClick={handleLogout}
            >
              <div className="rounded-full bg-purple-200  mr-4">
                <img
                  src={"/images/png1/logout.png"}
                  alt="padlock"
                  className="w-10 h-10"
                />
              </div>
              <p className=" font-bold text-lg text-red-500">LogOut</p>
              <div className="ml-auto">
                <img
                  src={"/images/png1/next.png"}
                  alt="right arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
