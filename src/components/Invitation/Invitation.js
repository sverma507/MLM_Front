import React, { useEffect, useState } from 'react'
import qr from './qr.webp'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Layout from '../Layout';
function Invitation() {

    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [user, setUser] = useState();

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
        getUser();
      }, []);

    return (
        <Layout title={'Invite - Rita Drinks'}>
        <div className="sm:w-2/5 mx-auto p-4 h-[745px] bg-orange-300">
            <div className="flex justify-between ">
                <div className="cursor-pointer" onClick={() => {navigate(-1)}}>◀️ Back</div>
                <div>Invitation</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className="flex flex-col justify-center  items-center text-lg ">
                <div> Your Invitation Code</div>
                <div className="font-bold">{user?.referralCode}</div>
            </div>
            <div className="mt-4 ">
                <div>Dear Members, the following is your Invitation Link</div>
                <div className="flex flex-col justify-center items-center mt-2 ">
                    <div className="w-4/5 border p-2 rounded-lg border-red-500">kjaskjdhkjasdhasdka</div>
                    {/* <div><button type="button" class=" mt-2 text-white bg-gradient-to-r w-4/5 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Copy Link</button></div> */}
                    <div className="w-4/5"><button className="rounded-full bg-red-900 text-white p-3 w-full mt-4">Copy Link</button></div>
                </div>

            </div>
            <div className="mt-4 flex justify-center">
                <div className="bg-white h-40 w-40">
                    <img src={qr} />
                </div>
            </div>
            <div className="mt-4">
                if  you are A,then B,C and D belongs to your team members. he teams provide you with three level of comission
            </div>
            <div className="mt-4">
                <p>B=10%</p>
                <p>c=5%</p>
                <p>D=2%</p>
            </div>
        </div>
        </Layout>
    )
}

export default Invitation
