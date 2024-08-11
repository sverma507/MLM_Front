import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/spinner';

 const PrivateRoute = () => {
   const [ok, setOk] = useState(false);
   const [auth, setAuth] = useAuth();

   useEffect(() => {
    const authCheck = async() => {
        
        
        const res = await axios.get(`http://localhost:5000/api/v1/auth/user-auth`);
        
        if(res.data.ok){
            setOk(true);
            
        }else{
            setOk(false)
            
        }
    }
    // console.log(auth);
    
    if(auth?.token) authCheck();
   },[auth?.token])

  return ok ? <Outlet/> : <Spinner/>
}

export default PrivateRoute