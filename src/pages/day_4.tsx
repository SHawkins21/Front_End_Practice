
import {type NextPage} from 'next'
import React, {useState} from 'react'

const Day_4:NextPage = () => {

    const [count, setCount] = useState(false)


  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div>
        
        <div className='text-4xl px-4'>
        {
            count ? "150":"300"
        }
        </div>

        <div className='p-4' style={count ?{
            
            backgroundColor: "#000"
        }: {
            backgroundColor:"#efefef", transition:"all 0.3"
        }
            
    }>

        </div>
{ count ? 
        <div className='bg-slate-500 p-4'>
            Box 1 
        </div> :
        <div className='bg-red-500 p-4'>
            Box 2
        </div>
}
  <div className={ count ? "bg-slate-500 p-4":"bg-red-500 p-4"}>

    {count ? "Box 10" : "Box 11"}

  </div>

  <button className={count ? "btn_submit":"bg-gray-500 p-4"}>
    {count ? "Selected":"Un-Selected"}
    

  </button>

        <button className='bg-orange-300 p-3' onClick={()=> setCount(!count)}>Toggle</button>
    </div>
    </div>
  )
}

export default Day_4