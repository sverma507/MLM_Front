import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./AdminLogin.css";
import { useAuth } from "../../../context/auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/api/v1/admin/login`, { mobileNumber, password });
      
      if (res && res.data.success) {
        toast.success(res.data.message); // Success toast

        // Save user and token in context and local storage
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        
        // Navigate to admin dashboard
        navigate("/dashboard/admin");
      } else {
        toast.error(res.data.message); // Error toast
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong'); // Generic error toast
    }
  };

  return (
    <div className="loginContainer">
      <select className="languageSlector">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
      <a href="/"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

      <form onSubmit={handleLogin}>
        <div className="loginInputWrapper">
          <img src="/images/phoneInput.png" alt="Phone Icon" className="phoneIcon" />
          <span className="countryCode">+91</span>
          <input
            type="tel"
            placeholder="Please enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className="loginInputWrapper">
          <img src="/images/passInput.png" alt="Password Icon" className="phoneIcon" />
          <input
            type="password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot">
          <div className="text-white cursor-pointer" onClick={() => navigate('/admin/forgot-password')}>Forgot Password</div>
          {/* <div className="text-white cursor-pointer" onClick={() => navigate('/admin/register')}>Register Now</div> */}
        </div>

        <button type="submit" className="signUpBtn">Login</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
