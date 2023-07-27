import React from 'react'
import { TransactionProps } from '~/types/types'
import {IoIosArrowForward} from "react-icons/io"



const Transaction = ({name, amount, type}: TransactionProps) => {
  
 
  const f = Intl.NumberFormat("en-us",{
    currency:"USD",
    style:"currency"
  })

  
  
  return (


    
    <div className='flex justify-between bg-third-color rounded-2xl p-[5px] mt-1 text-zinc-300 '>

          <div className='flex justify-center items-center bg-slate-600 rounded-2xl w-[90px] h-[90px]'>
            <h1 className={type ? 'text-green-300':'text-red-300' }>{name}</h1>
         </div> 
            <div className='flex pl-6 justify-center items-center'>
             <div className={type ? 'text-green-300':'text-red-300' }>
             {type ? '+':'-'} {f.format(parseFloat(amount))} 
             </div>
            </div>

            <div>
                <IoIosArrowForward className='w-6 h-6 text-zinc-100'/>
            </div>


            {/* <p>{type ? "Credit":"Debit"}</p> */}
           
    </div>
    
  )
}
//brandyhq/top-100-brands
//svgrepo.com/collection/company-logo/2
export default Transaction