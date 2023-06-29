import React from 'react'
import Icons from '../simple/Icon'
import {BsPaypal as PayPal} from 'react-icons/bs'
import { LinkedAccount } from '~/types/types'
const LongBar = ({title,accttype,Icon}:LinkedAccount) => {
  return (
    <div>
          <div className = ' gap-5'>
              
              <div className ='flex outline-none bg-secondary-color text-zinc-200 p-3 rounded-2xl grid-rows-3 grid-flow-col gap-0 '>
               <div className = 'flex justify-center py-6 bg-third-color w-20 h-20 rounded-2xl '>
               <Icon className='text-2xl'/>
               </div>
               <div className = 'p-4'>{title}
            <div className = 'text-third-color'> {accttype}</div>
               </div>
               </div>
               
           </div>  



    </div>
  )
}

export default LongBar