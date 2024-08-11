import React from 'react'
import Slider from '../../components/Slider/Slider'
import HomeLinks from '../../components/HomeLinks/HomeLinks'
import Tasks from '../../components/Tasks/Tasks'
import Layout from '../../components/Layout'
import Swipper from '../../components/swipper'
import { useAuth } from '../../context/auth'
function Home() {

  const [auth,setAuth] = useAuth();

  console.log(auth?.token);
  
  return (
    <Layout title={"Home - Rita Drinks"}>
    <div className="sm:w-2/5 mx-auto bg-red-500 pb-16 pt-10">
      <Swipper/>
      <div className='flex gap-1 w-[90%] m-auto text-sm text-wrap text-center mt-3 bg-white p-2 rounded text-gray-400'>
          
      📢 <p>get Rs. 1000 bonus, Congratulation to 745****007 for withdrawl</p>
      </div>
     <HomeLinks/>
     <Tasks/>
    </div>
    </Layout>
  )
}

export default Home
