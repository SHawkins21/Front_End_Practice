import { type IconBaseProps, type IconType } from "react-icons"
import {type NextPage} from 'next'
import { NavButton } from "~/types/types"
import React, { useState } from 'react'
import Boxs from '~/component/animations/Boxs'
import { motion as m, AnimatePresence } from "framer-motion"
import Menu_btn from "~/component/button/Menu_btn"
import Navbtn from "~/component/button/Nav_btn"
import {BsReverseLayoutTextSidebarReverse} from "react-icons/bs"


import { boxVarients, 
         boxVarients1, 
         boxVarients2,  } from '~/variants/variants';

import {AiOutlineHome,
        AiOutlineBank,
        AiOutlineArrowRight,
        AiOutlineAudit,
        AiOutlinePhone,
        AiOutlineSolution,} from "react-icons/ai"
import Navigation from "~/component/navigation/Navigation"


const Framer:NextPage = () => {

  const [menu, setMenu ] = useState(false)
  const close = ():void => {
    void setMenu(!menu)
  }




  return (
       <div className="bg_main min-h-screen">

        <div className="flex space-x-4">

        <div className="flex items-center left-0">
         <AnimatePresence>

                {   <Navbtn 
                    
                    generic={close}
                    children={null} 
                    animation={boxVarients1} 
                    Icon={BsReverseLayoutTextSidebarReverse} 
                    />
                }
                <m.div onClick={() => setMenu(!menu)}></m.div>

            </AnimatePresence>
         </div>

       <div className='flex justify-items-end space-x-4'>
          
        <Boxs Icon={AiOutlineHome}  title='Home'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineBank}  title='Money'  animation={boxVarients2}/>
        <Boxs Icon={AiOutlineArrowRight}  title='Move'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineAudit}  title='Quote'  animation={boxVarients2}/>
        <Boxs Icon={AiOutlinePhone}  title='Sales'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineSolution}  title='Bills'  animation={boxVarients2}/>
       
       </div>
       </div>
        {/* relative  */}
        <div className='flex justify-center space-y-2 p-4   
                         h-[100hv]
                         w-full'> 
        <div className="
                          w-[400px]
                          flex justify-center" >
            
            
            
            <AnimatePresence>
                
                { menu && <Menu_btn close={close}/>}
              
            </AnimatePresence>
           

        </div>
        </div>
    
    </div>
  )
}

export default Framer