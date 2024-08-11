import React from 'react'
import gift from './gift.webp'
import sgift from './singleGift.jpg'
function Bonus() {
    return (
        <div className="sm:w-2/5 mx-auto p-4 h-full bg-orange-300">
            <div className="flex justify-between ">
                <div className="cursor-pointer">◀️ Back</div>
                <div>Invitation</div>
            </div>
            <div className="mt-4 flex justify-center">
                <div className="bg-white ">
                    <img src={gift} />
                </div>
            </div>

            <div className="flex flex-col mt-4  items-center">
                <div className="font-bold m-4">New Member Bonus</div>
                <div className="flex flex-col items-center">
                    <img src={sgift} className="h-60" />
                    <div className="my-4 text-center font-bold text-lg">INR: 120</div>
                    <div><button className="bg-red-900 w-full p-4 rounded-lg text-lg text-white">You Have Received </button></div>
                </div>
            </div>
        </div>
    )
}

export default Bonus
