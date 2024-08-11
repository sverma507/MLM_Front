import React from 'react'

function Tasks() {
    const cards =[
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
        {
            img:'',
            name:'hello'
        },
    ]
  return (
    <div className='bg-red-500'>
    <div className="flex justify-between text-white  p-4 ">
      <div>TASK</div>
      <div className="text-sm p-2 bg-blue-500  rounded-full   text-white">MY TASK</div>
    </div>
    <div className="flex justify-evenly flex-wrap m-4">
    {
        cards.map((item,idx)=>{
            return(
                <div className="text-center m-4 sm:m-0">
                    <div className="bg-white h-20 w-20"></div>
                    <div className='text-white'>{item.name}</div>
                </div>
            )
        })
    }
    </div>
    </div>
  )
}

export default Tasks