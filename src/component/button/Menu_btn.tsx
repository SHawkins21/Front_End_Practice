import { motion as m} from 'framer-motion'
import React from 'react'
import { type IconBaseProps, type IconType } from "react-icons";
import {BsTrash3} from "react-icons/bs"
import Link from 'next/link';
import Navigation from '../navigation/Navigation';
import {linkIcons, links} from "~/constants/constants_link"
type Props = {
    close:() => void 
}

const Menu_btn = ({close}:Props) => {
  return (
    <div className='absolute top-0 left-0 '>
    <m.div 
    initial={{
        x:'-80vw', 
        opacity:0, 

    }}
    animate={{
        x:0,
        opacity:1
    }}
    exit={{
        x:'-80vw',
        opacity:0, 
    }}
    transition={{
        type:'tween',
        duration:1,  
        ease:'easeInOut'

    }}
    
    
    
    className='side_bar_menu'>
        <h1 className='text-4xl'>Menu</h1>
        
        <ul className=''>
          <div className='text-xl space-y-4 p-4 text-green-400 '>
        {
            links?.map(({text,url},index) => (
                <Navigation key={index} text={text} url={url} />
            ))
        }
         </div>
        </ul>
        <div className='trash_can'>
        <BsTrash3 
        
        onClick={ ()=> close()}></BsTrash3>
        </div>
      

    </m.div>
    </div>
  )
}

export default Menu_btn