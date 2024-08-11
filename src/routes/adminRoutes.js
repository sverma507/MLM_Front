import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';

 const AdminRoute = () => {

   const [ok, setOk] = useState(false);
   const [auth, setAuth] = useAuth();
   const navigate=useNavigate()

   useEffect(() => {
    console.log("API URL: ", process.env.REACT_APP_API);
    const authCheck = async() => {
        console.log("calleadmin [private routed]");
        console.log("admin auth=>",auth);
        
        const res = await axios.get(`http://localhost:5000/api/v1/auth/admin-auth`);
        if(res.data.ok){
            setOk(true);
        } else {
            navigate('/admin/login');
            setOk(false);
        }
    }
    if(auth?.token) authCheck();
}, [auth?.token, navigate]);


  return ok ? <Outlet/> : <Spinner path={'admin/login'}/>
}

export default AdminRoute