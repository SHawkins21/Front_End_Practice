import React from 'react'
import { ModalProps } from '~/types/types'
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import Navbtn from '../button/Nav_btn'
import Icons from '../simple/Icon'
import { AiOutlinePlus} from "react-icons/ai";
import ModalForm from './ModalForm'


const ModalProps = ({children}: ModalProps) => {

const [menu, setMenu] = useState(false)

return (
    <div className=' p-5 rounded-xl  bg-primary-color '>
        <AnimatePresence>
        {menu && 
            <ModalForm></ModalForm>
        }


        {children}
      
        
        </AnimatePresence>
        <div className='text-slate-50 flex  justify-between p-4'>Add Transaction
        <button className='bg-secondary-color rounded-full' onClick={()=> setMenu(!menu)}>
        <Icons Icon={AiOutlinePlus}/>
        </button>
        </div>
    </div>
  )
}

export default ModalProps