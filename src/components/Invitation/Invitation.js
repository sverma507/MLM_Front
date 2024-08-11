import React from 'react'
import qr from './qr.webp'
function Invitation() {
    return (
        <div className="sm:w-2/5 mx-auto p-4 h-full bg-orange-300">
            <div className="flex justify-between ">
                <div className="cursor-pointer">◀️ Back</div>
                <div>Invitation</div>
                <div className="font-bold w-9"></div>
            </div>
            <div className="flex flex-col justify-center  items-center text-lg ">
                <div> Your Invitation Code</div>
                <div className="font-bold">123456</div>
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
    )
}

export default Invitation
