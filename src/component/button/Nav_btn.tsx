import React from "react";
import {motion as m } from "framer-motion"; 
import { type NavButton } from "~/types/types";
import { type IconBaseProps, IconType } from "react-icons";
import { boolean } from "zod";



const Navbtn = ({ animation, Icon, children, generic }:NavButton) => {

    return( 
        <m.div
            
            variants={animation}
            transition={{duration:1}}
            initial={{
                    opacity:0,
                    y:100
                    }}
            animate={{
                    opacity:1, 
                    y:0 
                    }}
            exit={{
                    opacity:0,
                    y:100
                  }}
            className='
               bg-black
               border-green-400
                 border-4
               text-white p-8 
               rounded-xl mt-4
               
               '   
>

          <div className='flex text-2xl'>
          
          <div className='flex space-x-3 justify-center items-center'>
          {children}
          <button onClick={() => generic()}>
          <Icon className='BsReverseLayoutTextSidebarReverse'/>
          </button>
          </div>
          </div> 
        </m.div>
    )

}

export default Navbtn


//                     title="Navigation" 
//                     animation={boxVarients1} 
//                     Icon={BsReverseLayoutTextSidebarReverse} 
//                     onClick={() => setMenu(!menu)}