import React from 'react'
import { ModalProps } from '~/types/types'
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import Navbtn from '../button/Nav_btn'
import Icons from '../simple/Icon'
import { AiOutlinePlus} from "react-icons/ai";


const ModalProps = ({children}: ModalProps) => {

const [menu, setMenu] = useState(false)

return (
    <div className=' p-5 rounded-xl  bg-primary-color '>
        <AnimatePresence>
        {menu && 

                    <m.div 
                    initial={{
                        opacity:0,
                        width:0
                     }}
                     animate={{
                        opacity:1,
                        width:'50vw'
                     }}
                     exit={{
                        opacity:0,
                        width:0
                     }}
                     className='flex justify-items-center bg-green-400 w-full h-10 p-5 rounded-xl'
                     
                     >
                     Modal Form 
                    </m.div>  

            
        
        }


        {children}
      
        
        </AnimatePresence>
        <div className='text-slate-50 flex  justify-between'>Add Transaction
        <button className='bg-secondary-color rounded-full' onClick={()=> setMenu(!menu)}>
        <Icons Icon={AiOutlinePlus}/>
        </button>
        </div>
    </div>
  )
}

export default ModalProps