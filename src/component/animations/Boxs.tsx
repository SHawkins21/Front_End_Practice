import React from 'react'
import {motion as m} from "framer-motion"; 
import {type Box} from '~/types/types';


const Boxs = ({text, animation}: Box) => {
  return (
    <m.div
    variants={animation}
    initial="hidden"
    animate="visible"
    className='bg-indigo-500 p-8 rounded-xl mt-4'
    
    
    >
      
      <h1 className='text-4xl '>
          {text}
      </h1>


    </m.div>
  )
}

export default Boxs