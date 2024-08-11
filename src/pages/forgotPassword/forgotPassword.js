import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout';
import { useAuth } from '../../context/auth';

const ForgotPassword = () => {
  const [mobileNumber, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit =  async(e) => {
    e.preventDefault();
  //   console.log(email,password);
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-pass`,{mobileNumber,newPassword,answer})
      if(res && res.data.success){
        toast.success( res.data && res.data.message);
        navigate("/login")
      }else{

        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
    toast.success('Password reset successfully')
  }

  return (
    <Layout title={"Forgot Password - Rita Drinks"}>
      <div className="loginContainer">
        <select className="languageSelector">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <a href="/home"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

        <form onSubmit={handleSubmit}>
          <div className="loginInputWrapper">
            <img
              src="/images/phoneInput.png"
              alt="Phone Icon"
              className="phoneIcon"
            />
            <span className="countryCode">+91</span>
            <input
              type="tel"
              placeholder="Please enter mobile number"
              value={mobileNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="loginInputWrapper">
            <img
              src="/images/passInput.png"
              alt="Password Icon"
              className="phoneIcon"
            />
            <input
              type="password"
              placeholder="Please enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="loginInputWrapper">
            <img
              src="/images/smsInput.png"
              alt="Code Icon"
              className="phoneIcon"
            />
            <input
              type="text"
              placeholder="Your first school (security answer)"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <button type="submit" className="signUpBtn">Change Password</button>
        </form>

        <ToastContainer />
      </div>
    </Layout>
  );
}

export default ForgotPassword;
