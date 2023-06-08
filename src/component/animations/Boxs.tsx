import React from 'react'

import {motion as m} from "framer-motion"; 
import {type Box} from '~/types/types';
import { type IconBaseProps, type IconType } from "react-icons"

const Boxs = ({ title,  animation, Icon}: Box) => {
  return (
    <m.div
    variants={animation}
    transition={{duration:1}}
    initial="hidden"
    animate="visible"
    className='bg-black 
               border-green-400
                 border-4
               text-white p-8 
               rounded-xl mt-4
               '
    
    
    >
      
      <div className='text-2xl '>
          {title}
          <div className='flex justify-center items-center'>
          <Icon className=''/>
          </div>
      </div> 
      
      

    </m.div>
  )
}

export default Boxs