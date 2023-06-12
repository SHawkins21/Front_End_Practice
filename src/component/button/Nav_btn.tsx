import React from "react";
import {motion as m } from "framer-motion"; 
import { type NavButton } from "~/types/types";
import { type IconBaseProps, IconType } from "react-icons";



const Navbtn = ({ title, animation, Icon}:NavButton) => {

    return( 
        <m.div
            variants={animation}
            transition={{duration:1}}
            initial="hidden"
            animate="visible"
            className='bg-blue-500
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

export default Navbtn