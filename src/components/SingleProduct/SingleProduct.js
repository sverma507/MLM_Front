import React from 'react';
import p from './indri.jpg';
import Layout from '../Layout';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleProduct = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const item = location.state
    // console.log("iten-----",item);
    

    return (
        <Layout title={`Package ${item.productCode} - Rita Drinks`}>
        <div className='sm:w-2/5 mx-auto p-4 pb-16  bg-red-500 text-white'>
            <div className="flex justify-between">
                <div className="cursor-pointer text-white">◀️ Back</div>
                <div className='text-white text-lg'>Package Details</div>
                <div className="font-bold w-9"></div>
            </div>
            <img src={`${item.img1}`} className={'rounded-lg'}/>
            <p className='mt-3 font-bold text-xl'>Product Name:- <span className='mt-1 font-normal text-lg'>Rs. {item.name}</span></p>
            <div className="grid grid-cols-2 mt-5 lg:grid-cols-3 p-2 gap-4 bg-white rounded-lg">
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>Rs. {item.price}</div>
                    <div>Price</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>{item.cycle} days</div>
                    <div>Term</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>Rs. {item.income}</div>
                    <div>Daily Income</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>Rs. {item.income * item.cycle}</div>
                    <div>Total Revenue</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>{Math.floor(((item.income * item.cycle)/item.price)*100)}%</div>
                    <div>Total Return</div>
                </div>
                <div className="bg-red-200 text-blue-500 p-4 rounded-lg shadow-md flex flex-col text-center">
                    <div className='font-bold text-xl text-red-500'>Limited</div>
                    <div>Purchase Level</div>
                </div>
            </div>
            <div className='w-[100%] mt-4 bg-white rounded-lg pt-4'>
               <h2 className='text-black ml-3 mb-4 font-bold text-xl'>Package description</h2>
               <img src={`${item.img2}`} className=""/>
               <p className='text-black p-2'>{item.description}</p>
            </div>
            <div className="bg-white text-blue-500 p-4 mt-4 mb-5 cursor-pointer rounded-lg shadow-md flex flex-col text-center" onClick={()=>{navigate('/users/user/bindBankCard',{state:item})}}>
                <div className='font-bold text-xl text-red-500'>Buy now</div>
            </div>
        </div>
        </Layout>
    )
}

export default SingleProduct;
