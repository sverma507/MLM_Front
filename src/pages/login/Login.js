import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [auth,setAuth] = useAuth();
  const location = useLocation();

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    setVerificationCode(code);
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (inputCaptcha !== verificationCode.toString()) {
  //     toast.error("Invalid CAPTCHA code.");
  //     return;
  //   }
  //   login(mobileNumber, password)
  // };


  const handleLogin =  async(e) => {
    e.preventDefault();
    // console.log(email,password);
    if (inputCaptcha !== verificationCode.toString()) {
          toast.error("Invalid CAPTCHA code.");
          return;
        }
    try {
      const res = await axios.post(`http://localhost:5000/api/v1/auth/login`,{mobileNumber,password})
      if(res && res.data.success){
        toast.success( res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate("/")
      }else{

        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
    
  }

  return (
    <Layout title={"Login - Rita Drinks"}>
      <div className="loginContainer">
        <select className="languageSlector">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <a href="/"><img src="/images/mlm_logo.jpg" alt="Logo" /></a>

        <form onSubmit={handleLogin}>
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
              onChange={(e) => setMobileNumber(e.target.value)}
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
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="Graphic verification code"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
            />
            <div className="verificationCode">{verificationCode}</div>
          </div>

          <div className="forgot">
            <div className="text-white cursor-pointer" onClick={() => navigate('users/user/forgot-password')}>Forgot Password</div>
            <div className="text-white cursor-pointer" onClick={() => navigate('/register')}>Register Now</div>
          </div>

          <button type="submit" className="signUpBtn">Login</button>
        </form>

        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Login;
