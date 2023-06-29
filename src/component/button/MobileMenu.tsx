import React, { useState } from 'react'
import {RiBankLine as Home} from 'react-icons/ri'
import Icons from '../simple/Icon'



const BottomMenu = () => {


const MobileMenu = [
    // Menu as in array
    {name:"Home"},
    {name:"Profile"},
    {name:"Settings"},
    {name:"Payment"},
    {name:"Bills"},
   
]
const [active, SetActive] = useState(0); 

  return (
    <div className=''>
        <div className='h-40'></div>
    <div className='text-zinc-300 bg-third-color 
                      h-18 w-full rounded-xl py-2 
                      fixed bottom-0 left-0 z-50 h-16 
                      opacity-90'>

        <ul className='flex justify-center'>
            {MobileMenu.map((menu,i) => 
            <li className='w-20' key={i}>
                <a className='flex flex-col text-center p-4 cursor-pointer  
                ' onClick={() => SetActive(i)}>
                <span className={`${active === i ? "duration-700 opacity-100 font-bold": "opacity-40"}`}>
                    {menu.name}
                </span>
                </a>


            </li>
            )}
        </ul>

    </div>

                



    </div>
  )
}

export default BottomMenu