import { type IconBaseProps, type IconType } from "react-icons"
import {type NextPage} from 'next'
import React from 'react'
import Boxs from '~/component/animations/Boxs'
import { AnimatePresence } from "framer-motion"
import Menu_btn from "~/component/complex/Menu_btn"

import { boxVarients, 
         boxVarients1, 
         boxVarients2,  } from '~/variants/variants';

import {AiOutlineHome,
        AiOutlineBank,
        AiOutlineArrowRight,
        AiOutlineAudit,
        AiOutlinePhone,
        AiOutlineSolution,} from "react-icons/ai"


const Framer = () => {
  return (
    <div className='min-h-screen flex justify-center items-center space-x-4'>
        
        <Boxs Icon={AiOutlineHome}  title='Home'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineBank}  title='Money'  animation={boxVarients2}/>
        <Boxs Icon={AiOutlineArrowRight}  title='Move'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineAudit}  title='Quote'  animation={boxVarients2}/>
        <Boxs Icon={AiOutlinePhone}  title='Sales'  animation={boxVarients1}/>
        <Boxs Icon={AiOutlineSolution}  title='Bills'  animation={boxVarients2}/>
        
    
    



</div>

  )
}

export default Framer